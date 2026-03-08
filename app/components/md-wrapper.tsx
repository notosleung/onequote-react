import type { ReactNode } from 'react'
import { formatDate } from '~/logics'

interface MarkdownWrapperProps {
  children: ReactNode
  frontmatter: {
    title: string
    date?: string
    description?: string
    [key: string]: any
  }
}

// 设置meta函数，确保进入每个MDX页面时都能正确设置标题等元信息
export function meta({ frontmatter }: { frontmatter: MarkdownWrapperProps['frontmatter'] }) {
  return [
    { title: frontmatter.title },
  ]
}

export default function MarkdownWrapper({ children, frontmatter }: MarkdownWrapperProps) {
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
        {children}
      </article>
    </div>
  )
}
