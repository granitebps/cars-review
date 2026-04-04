import type { Metadata } from 'next'
import './globals.css'
import Sidebar from '@/components/Sidebar'
import { getNavTree } from '@/lib/files'

export const metadata: Metadata = {
  title: 'Cars Research',
  description: 'Indonesian automotive research and reviews',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const navTree = getNavTree()

  return (
    <html lang="id">
      <body>
        <Sidebar navTree={navTree} />
        {/* Desktop: offset for sidebar; Mobile: offset for header */}
        <main className="lg:ml-60 pt-14 lg:pt-0 min-h-screen bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 py-8">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
