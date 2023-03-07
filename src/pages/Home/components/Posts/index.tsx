import { PostsContainer, SearchPostsInput } from './styles'

export function Posts() {
  return (
    <>
      <SearchPostsInput type="text" placeholder="Buscar conteúdo" />
      <PostsContainer>
        <div> post 1</div>
        <div> post 2</div>
        <div> post 3</div>
      </PostsContainer>
    </>
  )
}
