import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../lib/axios'
import { ArticleContent } from './ArticleContent'
import { ArticleHeader } from './ArticleHeader'
import { PageNotFound, PostScreenContainer } from './styles'

export function PostScreen() {
  const [articleData, setArticleData] = useState<any>({})
  const { id } = useParams()

  async function getPost() {
    const response = await api.get(`/repos/killer-cf/github-vlog/issues/${id}`)

    console.log(response.data)
    setArticleData(response.data)
  }

  useEffect(() => {
    getPost()
  }, [])

  if (articleData.title) {
    return (
      <PostScreenContainer>
        <ArticleHeader
          title={articleData.title}
          comments={articleData.comments}
          user={articleData.user.login}
          date={articleData.updated_at}
          url={articleData.html_url}
        />
        <ArticleContent>{articleData.body}</ArticleContent>
      </PostScreenContainer>
    )
  } else {
    return (
      <PageNotFound>
        <p>Página não encontrada</p>
      </PageNotFound>
    )
  }
}
