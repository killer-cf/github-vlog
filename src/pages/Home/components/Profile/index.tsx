import { FaBuilding, FaGithub, FaUserFriends } from 'react-icons/fa'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { ProfileContainer, ProfileInfo, ProfileInfoBoxes } from './styles'
import { useEffect, useState } from 'react'
import { api } from '../../../../lib/axios'

export function Profile() {
  const [profileData, setProfileData] = useState<any>({})

  async function loadProfileData() {
    const response = await api.get('/users/killer-cf')

    setProfileData(response.data)
  }

  useEffect(() => {
    loadProfileData()
  }, [])

  return (
    <ProfileContainer>
      <img src={profileData.avatar_url} alt="" />
      <ProfileInfo>
        <header>
          <h2>{profileData.name}</h2>
          <a href={profileData.html_url}>
            GITHUB
            <BsBoxArrowUpRight />
          </a>
        </header>
        <p>{profileData.bio}</p>
        <ProfileInfoBoxes>
          <div>
            <FaGithub size={18} />
            <span>{profileData.login}</span>
          </div>

          <div>
            <FaBuilding size={18} />
            <span>Rocketseat</span>
          </div>

          <div>
            <FaUserFriends size={18} />
            <span>{profileData.followers} seguidores</span>
          </div>
        </ProfileInfoBoxes>
      </ProfileInfo>
    </ProfileContainer>
  )
}
