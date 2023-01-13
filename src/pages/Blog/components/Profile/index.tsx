import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

import { Avatar, Footer, ProfileContainer, ProfileInfo } from './styles'
import { api } from '../../../../libs/axios'

export function Profile() {
  const [gitHubProfileData, setGitHubProfileData] = useState<any>({})

  useEffect(() => {
    async function featchData() {
      const response = await api.get('/users/J040V1T0RJG')
      setGitHubProfileData(response.data)
    }

    featchData()
  }, [])

  console.log(gitHubProfileData)
  return (
    <ProfileContainer>
      <Avatar src={gitHubProfileData.avatar_url} alt="avatar image" />
      <ProfileInfo>
        <header>
          <h1>{gitHubProfileData.name}</h1>
          <a href={gitHubProfileData.html_url} target="_blank" rel="noreferrer">
            GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />{' '}
          </a>
        </header>
        <h2>{gitHubProfileData.bio}</h2>
        <Footer>
          <div className="icon">
            <FontAwesomeIcon icon={faGithub} />
            <p>{gitHubProfileData.login}</p>
          </div>
          {gitHubProfileData.company && (
            <div className="icon">
              <FontAwesomeIcon icon={faBuilding} />
              <p>{gitHubProfileData.company}</p>
            </div>
          )}
          <div className="icon">
            <FontAwesomeIcon icon={faUserGroup} />
            <p>
              {gitHubProfileData.followers}{' '}
              {gitHubProfileData.followers > 1 ? 'seguidores' : 'seguidor'}
            </p>
          </div>
        </Footer>
      </ProfileInfo>
    </ProfileContainer>
  )
}
