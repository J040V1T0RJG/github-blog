import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import ReactMarkdown from 'react-markdown'
import { useNavigate } from 'react-router-dom'

import { ItemsGitHubAPIRequest } from '../../../../contexts/typingPosts'
import { textShortener } from '../../../../utils/formatter'
import { CardContainer } from './styles'

export function Card(props: ItemsGitHubAPIRequest) {
  const { title, updated_at, number, body } = props
  const navigate = useNavigate()

  function handleGoPost() {
    navigate(`/post/${number}`)
  }

  return (
    <CardContainer>
      <header>
        <h2 onClick={handleGoPost}>{title}</h2>
        <h3>
          {formatDistanceToNow(new Date(updated_at), {
            addSuffix: true,
            locale: ptBR,
          })}
        </h3>
      </header>
      <ReactMarkdown>{textShortener(`${body}`)}</ReactMarkdown>
    </CardContainer>
  )
}
