'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { NavTree, ResearchType } from '@/lib/types'
import { toLabel } from '@/lib/types'

const TYPE_DOT: Record<ResearchType, string> = {
  'sources': 'bg-yellow-500',
  'master-research': 'bg-blue-500',
  'web-research': 'bg-green-500',
  'youtube-research': 'bg-red-500',
  'twitter-research': 'bg-sky-500',
  'variant-comparison': 'bg-purple-500',
}

function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      className={`block px-3 py-1.5 rounded text-sm transition-colors ${
        active
          ? 'bg-blue-600 text-white font-medium'
          : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
      }`}
    >
      {label}
    </Link>
  )
}

function ResearchGroup({ carName, files, pathname }: {
  carName: string
  files: NavTree['research'][string]
  pathname: string
}) {
  const [open, setOpen] = useState(
    files.some((f) => pathname === '/research/' + f.slug[1] + '/' + f.slug[2])
  )

  return (
    <div>
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-3 py-1.5 text-sm font-medium text-gray-800 hover:bg-gray-100 rounded transition-colors"
      >
        <span className="truncate">{toLabel(carName)}</span>
        <span className="text-gray-400 ml-1 shrink-0">{open ? '▼' : '▶'}</span>
      </button>
      {open && (
        <div className="ml-3 mt-0.5 space-y-0.5 border-l border-gray-200 pl-2">
          {files.map((f) => {
            const href = '/research/' + f.slug[1] + '/' + f.slug[2]
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-2 px-2 py-1.5 rounded text-sm transition-colors ${
                  pathname === href
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <span className={`w-2 h-2 rounded-full shrink-0 ${TYPE_DOT[f.researchType]}`} />
                <span className="truncate">{f.label}</span>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default function Sidebar({ navTree }: { navTree: NavTree }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  const navContent = (
    <nav className="p-4 space-y-5 overflow-y-auto h-full">
      {/* Research */}
      {Object.keys(navTree.research).length > 0 && (
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 px-3 mb-2">
            🔬 Research
          </p>
          <div className="space-y-1">
            {Object.entries(navTree.research).map(([carName, files]) => (
              <ResearchGroup
                key={carName}
                carName={carName}
                files={files}
                pathname={pathname}
              />
            ))}
          </div>
        </div>
      )}
    </nav>
  )

  return (
    <>
      {/* Mobile header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-30 bg-white border-b border-gray-200 flex items-center px-4 h-14 gap-3">
        <button
          onClick={() => setMobileOpen(true)}
          className="p-2 rounded hover:bg-gray-100 text-gray-600"
          aria-label="Open menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <Link href="/" className="font-semibold text-gray-900 text-base">
          🚗 Cars Research
        </Link>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile sidebar drawer */}
      <div
        className={`lg:hidden fixed top-0 left-0 bottom-0 z-50 w-72 bg-white border-r border-gray-200 transform transition-transform duration-200 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-4 h-14 border-b border-gray-200">
          <Link href="/" className="font-semibold text-gray-900" onClick={() => setMobileOpen(false)}>
            🚗 Cars Research
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 rounded hover:bg-gray-100 text-gray-500"
          >
            ✕
          </button>
        </div>
        <div className="h-[calc(100%-3.5rem)]" onClick={() => setMobileOpen(false)}>
          {navContent}
        </div>
      </div>

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col fixed top-0 left-0 bottom-0 w-60 bg-white border-r border-gray-200 z-20">
        <div className="flex items-center px-4 h-14 border-b border-gray-200 shrink-0">
          <Link href="/" className="font-semibold text-gray-900">
            🚗 Cars Research
          </Link>
        </div>
        <div className="flex-1 overflow-y-auto">
          {navContent}
        </div>
      </aside>
    </>
  )
}
