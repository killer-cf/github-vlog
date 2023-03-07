import { ArticleContent } from './ArticleContent'
import { ArticleHeader } from './ArticleHeader'
import { PostScreenContainer } from './styles'

export function PostScreen() {
  return (
    <PostScreenContainer>
      <ArticleHeader />
      <ArticleContent># Hello, *world* !</ArticleContent>
    </PostScreenContainer>
  )
}
