import { Posts } from './components/Posts'
import { Profile } from './components/Profile'
import { HomeContainer, PostsInfo } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Profile />
      <PostsInfo>
        <h4>Publicações</h4>
        <span>6 publicações</span>
      </PostsInfo>
      <Posts />
    </HomeContainer>
  )
}
