import fs from 'fs'
import path from 'path'
import {
  RESEARCH_TYPES,
  RESEARCH_TYPE_LABELS,
  toLabel,
} from '@/lib/types'
import type { NavTree, ResearchType } from '@/lib/types'

export type { ResearchType, ResearchFile, ReviewFile, NavTree } from '@/lib/types'
export { RESEARCH_TYPES, RESEARCH_TYPE_LABELS, toLabel } from '@/lib/types'

const EXCLUDED_ROOT_FILES = new Set([
  'memory.md',
  'sources.md',
  'README.md',
  'AGENTS.md',
  'CLAUDE.md',
  'car-agent-plan.md',
])

const RESEARCH_FILE_REGEX = new RegExp(
  '^(.+)-(' + RESEARCH_TYPES.join('|') + ')\\.md$'
)

const repoRoot = path.join(process.cwd(), '..')

export function getNavTree(): NavTree {
  const reviews: NavTree['reviews'] = []
  const research: NavTree['research'] = {}

  try {
    const rootFiles = fs.readdirSync(repoRoot)
    for (const file of rootFiles) {
      if (!file.endsWith('.md')) continue
      if (EXCLUDED_ROOT_FILES.has(file)) continue
      const slug = file.replace(/\.md$/, '')
      reviews.push({
        slug: ['reviews', slug],
        filePath: path.join(repoRoot, file),
        label: toLabel(slug),
      })
    }
  } catch {
    // ignore
  }

  const researchRoot = path.join(repoRoot, 'research')
  try {
    const folders = fs.readdirSync(researchRoot)
    for (const folder of folders) {
      const folderPath = path.join(researchRoot, folder)
      if (!fs.statSync(folderPath).isDirectory()) continue

      const files = fs.readdirSync(folderPath)
      for (const file of files) {
        if (!file.endsWith('.md')) continue
        const match = file.match(RESEARCH_FILE_REGEX)
        if (!match) continue

        const researchType = match[2] as ResearchType
        if (!research[folder]) research[folder] = []
        research[folder].push({
          slug: ['research', folder, researchType],
          filePath: path.join(folderPath, file),
          carName: folder,
          researchType,
          label: RESEARCH_TYPE_LABELS[researchType],
        })
      }

      if (research[folder]) {
        research[folder].sort(
          (a, b) =>
            RESEARCH_TYPES.indexOf(a.researchType) -
            RESEARCH_TYPES.indexOf(b.researchType)
        )
      }
    }
  } catch {
    // ignore
  }

  return { reviews, research }
}

export function getFileContent(filePath: string): string {
  return fs.readFileSync(filePath, 'utf-8')
}

export function findResearchFile(car: string, type: string): string | null {
  const researchRoot = path.join(repoRoot, 'research', car)
  try {
    const files = fs.readdirSync(researchRoot)
    const target = files.find((f) => f.match(new RegExp('-' + type + '\\.md$')))
    return target ? path.join(researchRoot, target) : null
  } catch {
    return null
  }
}

export function findReviewFile(slug: string): string | null {
  const filePath = path.join(repoRoot, slug + '.md')
  return fs.existsSync(filePath) ? filePath : null
}
