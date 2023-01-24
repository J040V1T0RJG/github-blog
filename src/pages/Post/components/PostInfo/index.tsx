import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Footer, Header, PostInfoContainer } from './styles'

export function PostInfo() {
  return (
    <PostInfoContainer>
      <Header>
        <a href="">
          <FontAwesomeIcon icon={faChevronLeft} /> <p>VOLTAR</p>
        </a>
        <a href="">
          <p>VER NO GITHUB</p>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </Header>
      <h1>JavaScript data types and data structures</h1>
      <Footer>
        <div className="icon">
          <FontAwesomeIcon icon={faGithub} />
          <p>camerolll</p>
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faGithub} />
          <p>Há 1 dia</p>
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faGithub} />
          <p>5 comentarios</p>
        </div>
      </Footer>
    </PostInfoContainer>
  )
}
