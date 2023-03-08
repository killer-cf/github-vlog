import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import removeMarkdown from 'remove-markdown'

import { PostContainer } from './styles'

interface PostsProps {
  title: string
  description: string
  date: string
  id: string
}

export function Post({ title, description, date, id }: PostsProps) {
  const body = removeMarkdown(description)

  return (
    <PostContainer>
      <header>
        <a href={`/post/${id}`}>{title}</a>
        <span>
          {formatDistanceToNow(new Date(date), {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
      </header>
      <div>
        <p>{body}</p>
      </div>
    </PostContainer>
  )
}
