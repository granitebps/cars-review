import type { ResearchType } from '@/lib/types'
import { RESEARCH_TYPE_LABELS } from '@/lib/types'

const COLOR_MAP: Record<ResearchType, string> = {
  'sources': 'bg-yellow-100 text-yellow-800 border-yellow-200',
  'master-research': 'bg-blue-100 text-blue-800 border-blue-200',
  'web-research': 'bg-green-100 text-green-800 border-green-200',
  'youtube-research': 'bg-red-100 text-red-800 border-red-200',
  'twitter-research': 'bg-sky-100 text-sky-800 border-sky-200',
  'variant-comparison': 'bg-purple-100 text-purple-800 border-purple-200',
}

export default function FileTypeTag({ type }: { type: ResearchType }) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${COLOR_MAP[type]}`}
    >
      {RESEARCH_TYPE_LABELS[type]}
    </span>
  )
}
