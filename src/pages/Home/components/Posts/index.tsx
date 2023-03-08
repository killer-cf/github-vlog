import { useEffect, useState } from 'react'
import { api } from '../../../../lib/axios'
import { Post } from '../Post'
import { PostsContainer, PostsInfo, SearchPostsInput } from './styles'

export function Posts() {
  const [postsData, setPostsData] = useState([])
  const [inputText, setInputText] = useState('')

  async function getPosts() {
    const response = await api.get('/search/issues', {
      params: {
        q: 'repo:killer-cf/github-vlog ',
      },
    })

    setPostsData(response.data.items)
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <>
      <PostsInfo>
        <h4>Publicações</h4>
        <span>{postsData.length} publicações</span>
      </PostsInfo>
      <SearchPostsInput
        value={inputText}
        type="text"
        placeholder="Buscar conteúdo"
        onChange={(e) => setInputText(e.target.value)}
      />
      <PostsContainer>
        {postsData.length > 0 &&
          postsData.map((post: any) => (
            <Post
              key={post.number}
              title={post.title}
              id={post.number}
              date={post.updated_at}
              description={post.body}
            />
          ))}
      </PostsContainer>
    </>
  )
}
