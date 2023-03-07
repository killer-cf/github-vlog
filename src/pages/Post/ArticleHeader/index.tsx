import { BsBoxArrowUpRight } from 'react-icons/bs'
import {
  FaCalendarDay,
  FaChevronLeft,
  FaComment,
  FaGithub,
} from 'react-icons/fa'
import { PostInfoBoxes, TitleBox } from './styles'

export function ArticleHeader() {
  return (
    <TitleBox>
      <header>
        <a href="#">
          <FaChevronLeft />
          VOLTAR
        </a>
        <a href="#">
          VER NO GITHUB
          <BsBoxArrowUpRight />
        </a>
      </header>
      <div>
        <h2>JavaScript data types and data structures</h2>
      </div>
      <PostInfoBoxes>
        <div>
          <FaGithub size={18} />
          <span>killer-cf</span>
        </div>

        <div>
          <FaCalendarDay size={18} />
          <span>Há 1 dia</span>
        </div>

        <div>
          <FaComment size={18} />
          <span>5 Comentários</span>
        </div>
      </PostInfoBoxes>
    </TitleBox>
  )
}
