import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function MarkdownRenderer({ content }: { content: string }) {
  return (
    <div className="prose prose-neutral max-w-none
      prose-headings:scroll-mt-20
      prose-h1:text-2xl prose-h1:font-bold
      prose-h2:text-xl prose-h2:font-semibold prose-h2:mt-8
      prose-h3:text-lg prose-h3:font-semibold
      prose-table:block prose-table:overflow-x-auto
      prose-th:bg-gray-50 prose-th:px-3 prose-th:py-2 prose-th:text-sm prose-th:font-semibold prose-th:whitespace-nowrap
      prose-td:px-3 prose-td:py-2 prose-td:text-sm prose-td:align-top
      prose-blockquote:border-l-4 prose-blockquote:border-blue-400 prose-blockquote:bg-blue-50 prose-blockquote:rounded-r prose-blockquote:not-italic
      prose-code:bg-gray-100 prose-code:rounded prose-code:px-1 prose-code:text-sm
      prose-pre:bg-gray-900 prose-pre:text-gray-100">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  )
}
