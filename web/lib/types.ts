// Shared types and pure utilities — safe to import from client components

export type ResearchType =
  | 'master-research'
  | 'web-research'
  | 'youtube-research'
  | 'twitter-research'
  | 'variant-comparison'

export type ResearchFile = {
  slug: string[]
  filePath: string
  carName: string
  researchType: ResearchType
  label: string
}

export type ReviewFile = {
  slug: string[]
  filePath: string
  label: string
}

export type NavTree = {
  reviews: ReviewFile[]
  research: Record<string, ResearchFile[]>
}

export const RESEARCH_TYPES: ResearchType[] = [
  'master-research',
  'web-research',
  'youtube-research',
  'twitter-research',
  'variant-comparison',
]

export const RESEARCH_TYPE_LABELS: Record<ResearchType, string> = {
  'master-research': 'Master Research',
  'web-research': 'Web Research',
  'youtube-research': 'YouTube Research',
  'twitter-research': 'Twitter / X',
  'variant-comparison': 'Variant Comparison',
}

export function toLabel(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
