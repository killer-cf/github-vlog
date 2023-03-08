import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { PostContainer } from './styles'

interface PostsProps {
  title: string
  description: string
  date: string
  id: string
}

export function Post({ title, description, date, id }: PostsProps) {
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
        <p>{description}</p>
      </div>
    </PostContainer>
  )
}
