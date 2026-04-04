import { notFound } from 'next/navigation'
import { getNavTree, getFileContent, findResearchFile } from '@/lib/files'
import MarkdownRenderer from '@/components/MarkdownRenderer'
import FileTypeTag from '@/components/FileTypeTag'
import type { ResearchType } from '@/lib/types'
import { toLabel } from '@/lib/types'

export async function generateStaticParams() {
  const navTree = getNavTree()
  const params: { car: string; type: string }[] = []
  for (const [car, files] of Object.entries(navTree.research)) {
    for (const f of files) {
      params.push({ car, type: f.researchType })
    }
  }
  return params
}

export default async function ResearchPage({
  params,
}: {
  params: Promise<{ car: string; type: string }>
}) {
  const { car, type } = await params
  const filePath = findResearchFile(car, type)
  if (!filePath) notFound()

  const content = getFileContent(filePath)

  return (
    <article>
      <div className="flex items-center gap-3 mb-6 flex-wrap">
        <span className="text-sm text-gray-500">{toLabel(car)}</span>
        <span className="text-gray-300">›</span>
        <FileTypeTag type={type as ResearchType} />
      </div>
      <MarkdownRenderer content={content} />
    </article>
  )
}
