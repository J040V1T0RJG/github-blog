import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'

import { Avatar, Footer, ProfileContainer, ProfileInfo } from './styles'

export function Profile() {
  return (
    <ProfileContainer>
      <Avatar
        src="https://img.elo7.com.br/product/zoom/3EECB71/desenho-personalizado-para-usar-de-foto-de-perfil-e-etc-personalizado.jpg"
        alt=""
      />
      <ProfileInfo>
        <header>
          <h1>Cameron Williamson</h1>
          <p>
            GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />{' '}
          </p>
        </header>
        <h2>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </h2>
        <Footer>
          <div className="icon">
            <FontAwesomeIcon icon={faGithub} />
            <p>cameronwll</p>
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faBuilding} />
            <p>cameronwll</p>
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faUserGroup} />
            <p>cameronwll</p>
          </div>
        </Footer>
      </ProfileInfo>
    </ProfileContainer>
  )
}
