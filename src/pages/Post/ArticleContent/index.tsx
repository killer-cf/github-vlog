import rangeParser from 'parse-numeric-range'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useTheme } from 'styled-components'
import { ArticleContentContainer } from './styles'

interface ArticleContentProps {
  children: string
}

export function ArticleContent({ children }: ArticleContentProps) {
  const theme = useTheme()

  return (
    <ArticleContentContainer>
      <ReactMarkdown
        // eslint-disable-next-line react/no-children-prop
        children={children}
        className="line-break"
        components={{
          code({ node, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')

            if (!match) {
              return <code className={className} {...props} />
            }

            const meta = node?.data?.meta as string | undefined

            const applyHighlights = (highlights: any) => {
              if (!meta) {
                return {}
              }

              const regex = /{([\d,-]+)}/
              const metadata = meta.replace(/\s/g, '')
              const strlineNumbers = regex.test(metadata)
                ? regex.exec(metadata)![1]
                : '0'

              const highlightLines = rangeParser(strlineNumbers)
              const data = highlightLines.includes(highlights)
                ? 'highlight'
                : undefined

              return { data }
            }

            return (
              <SyntaxHighlighter
                language={match[1]}
                PreTag="div"
                className="codeStyle"
                showLineNumbers
                wrapLines={!!meta}
                useInlineStyles
                lineProps={applyHighlights}
                // eslint-disable-next-line react/no-children-prop
                children={String(children).replace(/\s$/g, '')}
                style={
                  {
                    ...oneDark,
                    'code[class*="language-"]': {
                      ...oneDark['code[class*="language-"]'],
                      backgroundColor: theme['base-post'],
                      color: theme.markdownCodeText,
                    },
                    'pre[class*="language-"]': {
                      ...oneDark['pre[class*="language-"]'],
                      backgroundColor: theme['base-post'],
                      color: theme.markdownCodeText,
                    },
                  } as any
                }
                {...props}
              />
            )
          },
        }}
      />
    </ArticleContentContainer>
  )
}
