import { FaBuilding, FaGithub, FaUserFriends } from 'react-icons/fa'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { ProfileContainer, ProfileInfo, ProfileInfoBoxes } from './styles'

export function Profile() {
  return (
    <ProfileContainer>
      <img src="https://github.com/killer-cf.png" alt="" />
      <ProfileInfo>
        <header>
          <h2>Kilder Costa</h2>
          <a href="#">
            GITHUB
            <BsBoxArrowUpRight />
          </a>
        </header>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <ProfileInfoBoxes>
          <div>
            <FaGithub size={18} />
            <span>killer-cf</span>
          </div>

          <div>
            <FaBuilding size={18} />
            <span>Rocketseat</span>
          </div>

          <div>
            <FaUserFriends size={18} />
            <span>32 seguidores</span>
          </div>
        </ProfileInfoBoxes>
      </ProfileInfo>
    </ProfileContainer>
  )
}
