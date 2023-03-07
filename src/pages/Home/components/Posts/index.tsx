import { Post } from '../Post'
import { PostsContainer, SearchPostsInput } from './styles'

export function Posts() {
  return (
    <>
      <SearchPostsInput type="text" placeholder="Buscar conteúdo" />
      <PostsContainer>
        <Post />
        <Post />
        <Post />
      </PostsContainer>
    </>
  )
}
