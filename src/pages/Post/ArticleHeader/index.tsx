import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import {
  FaCalendarDay,
  FaChevronLeft,
  FaComment,
  FaGithub,
} from 'react-icons/fa'
import { PostInfoBoxes, TitleBox } from './styles'

interface ArticleHeaderProps {
  title: string
  comments: number
  url: string
  date: string
  user: string
}

export function ArticleHeader({
  title,
  comments,
  url,
  date,
  user,
}: ArticleHeaderProps) {
  return (
    <TitleBox>
      <header>
        <a href="#">
          <FaChevronLeft />
          VOLTAR
        </a>
        <a href={url}>
          VER NO GITHUB
          <BsBoxArrowUpRight />
        </a>
      </header>
      <div>
        <h2>{title}</h2>
      </div>
      <PostInfoBoxes>
        <div>
          <FaGithub size={18} />
          <span>{user}</span>
        </div>

        <div>
          <FaCalendarDay size={18} />
          <span>
            {formatDistanceToNow(new Date(date), {
              addSuffix: true,
              locale: ptBR,
            })}
          </span>
        </div>

        <div>
          <FaComment size={18} />
          <span>{comments} Comentários</span>
        </div>
      </PostInfoBoxes>
    </TitleBox>
  )
}
