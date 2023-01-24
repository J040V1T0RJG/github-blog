import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useNavigate } from 'react-router-dom'
import {
  faArrowUpRightFromSquare,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Footer, Header, PostInfoContainer } from './styles'

interface PostInfoProps {
  postLifetime: string
  amountOfComments: number
  postOwnerName: string
  originalPostURL: string
  postTitle: string
}

export function PostInfo(props: PostInfoProps) {
  const navigate = useNavigate()
  const {
    postLifetime,
    amountOfComments,
    postOwnerName,
    originalPostURL,
    postTitle,
  } = props

  let numberOfComments: string
  if (amountOfComments > 1) {
    numberOfComments = amountOfComments + ' comentários'
  } else {
    numberOfComments = amountOfComments + ' comentário'
  }

  function handleGoBack() {
    navigate('/')
  }

  return (
    <PostInfoContainer>
      <Header>
        <a onClick={handleGoBack}>
          <FontAwesomeIcon icon={faChevronLeft} /> <p>VOLTAR</p>
        </a>
        <a href={originalPostURL} target="_blank" rel="noreferrer">
          <p>VER NO GITHUB</p>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </Header>
      <h1>{postTitle}</h1>
      <Footer>
        <div className="icon">
          <FontAwesomeIcon icon={faGithub} />
          <p>{postOwnerName}</p>
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faGithub} />
          <p>
            {formatDistanceToNow(new Date(postLifetime), {
              addSuffix: true,
              locale: ptBR,
            })}
          </p>
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faGithub} />
          <p>{numberOfComments}</p>
        </div>
      </Footer>
    </PostInfoContainer>
  )
}
