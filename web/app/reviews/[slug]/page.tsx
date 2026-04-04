import { notFound } from 'next/navigation'
import { getNavTree, getFileContent, findReviewFile } from '@/lib/files'
import MarkdownRenderer from '@/components/MarkdownRenderer'

export async function generateStaticParams() {
  const navTree = getNavTree()
  return navTree.reviews.map((r) => ({ slug: r.slug[1] }))
}

export default async function ReviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const filePath = findReviewFile(slug)
  if (!filePath) notFound()

  const content = getFileContent(filePath)

  return (
    <article>
      <MarkdownRenderer content={content} />
    </article>
  )
}
