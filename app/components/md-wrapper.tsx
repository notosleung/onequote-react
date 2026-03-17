import type { ReactNode } from 'react'
import { formatDate } from '~/logics'

interface MdxFrontmatter {
  title: string
  date?: string
  description?: string
  [key: string]: any
}

interface MdxWrapperProps {
  children: ReactNode
  frontmatter: MdxFrontmatter
}

// set meta for the wrapper itself, it will be merged with the meta from mdx file
export function meta({ frontmatter }: { frontmatter: MdxFrontmatter }) {
  return [
    { title: frontmatter.title },
  ]
}

export default function MarkdownWrapper({ children, frontmatter }: MdxWrapperProps) {
  return (
    <div className="page-post prose dark:prose-invert">
      {frontmatter.title && (
        <h1 id={frontmatter.title} className="title">
          {frontmatter.title}
        </h1>
      )}
      {frontmatter.date || frontmatter.description
        ? (
            <div className="subtitle">
              {frontmatter.description && <span>{frontmatter.description}</span>}
              {frontmatter.date && <span>{`-${formatDate(frontmatter.date, false)}`}</span>}
            </div>
          )
        : null}
      <article className="post">
        {/* MDX content will be rendered here */}
        {children}
      </article>
    </div>
  )
}
