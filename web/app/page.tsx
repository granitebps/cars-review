import Link from 'next/link'
import { getNavTree } from '@/lib/files'
import { toLabel } from '@/lib/types'
import type { ResearchType } from '@/lib/types'

const TYPE_COLORS: Record<ResearchType, string> = {
  'master-research': 'text-blue-700 bg-blue-50 border-blue-200',
  'web-research': 'text-green-700 bg-green-50 border-green-200',
  'youtube-research': 'text-red-700 bg-red-50 border-red-200',
  'twitter-research': 'text-sky-700 bg-sky-50 border-sky-200',
  'variant-comparison': 'text-purple-700 bg-purple-50 border-purple-200',
}

const TYPE_LABELS: Record<ResearchType, string> = {
  'master-research': 'Master',
  'web-research': 'Web',
  'youtube-research': 'YouTube',
  'twitter-research': 'Twitter',
  'variant-comparison': 'Compare',
}

export default function Home() {
  const navTree = getNavTree()
  const hasContent =
    navTree.reviews.length > 0 || Object.keys(navTree.research).length > 0

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">🚗 Cars Research</h1>
        <p className="text-gray-500 mt-1 text-sm">Indonesian automotive research &amp; reviews</p>
      </div>

      {!hasContent && (
        <div className="mt-8 rounded-lg border border-dashed border-gray-300 p-10 text-center">
          <div className="text-4xl mb-3">🔬</div>
          <h2 className="text-base font-semibold text-gray-700 mb-1">No research files yet</h2>
          <p className="text-sm text-gray-400 max-w-sm mx-auto">
            Add research files to{' '}
            <code className="bg-gray-100 px-1 rounded text-xs">research/&#123;car-name&#125;/</code>{' '}
            following the naming convention and they'll appear here automatically.
          </p>
          <p className="text-xs text-gray-400 mt-3">
            e.g. <code className="bg-gray-100 px-1 rounded">toyota-veloz-master-research.md</code>
          </p>
        </div>
      )}

      {navTree.reviews.length > 0 && (
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">📚 Reviews</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {navTree.reviews.map((r) => (
              <Link
                key={r.slug.join('/')}
                href={'/' + r.slug.join('/')}
                className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-400 hover:shadow-sm transition-all"
              >
                <span className="text-base font-medium text-gray-900">{r.label}</span>
                <span className="block text-xs text-gray-400 mt-1">Review</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {Object.keys(navTree.research).length > 0 && (
        <section>
          <h2 className="text-lg font-semibold text-gray-700 mb-3">🔬 Research</h2>
          <div className="space-y-4">
            {Object.entries(navTree.research).map(([carName, files]) => (
              <div key={carName} className="bg-white rounded-lg border border-gray-200 p-4">
                <h3 className="font-semibold text-gray-900 mb-3">{toLabel(carName)}</h3>
                <div className="flex flex-wrap gap-2">
                  {files.map((f) => (
                    <Link
                      key={f.slug.join('/')}
                      href={'/' + f.slug.join('/')}
                      className={`px-3 py-1.5 rounded border text-xs font-medium transition-all hover:shadow-sm ${TYPE_COLORS[f.researchType]}`}
                    >
                      {TYPE_LABELS[f.researchType]}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
