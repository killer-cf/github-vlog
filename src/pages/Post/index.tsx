import { ArticleHeader } from './ArticleHeader'
import { Content, PostScreenContainer } from './styles'

export function PostScreen() {
  return (
    <PostScreenContainer>
      <ArticleHeader />
      <Content></Content>
    </PostScreenContainer>
  )
}
