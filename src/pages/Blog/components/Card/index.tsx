import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { ItemsGitHubAPIRequest } from '../../../../contexts/typingPosts'
import { textShortener } from '../../../../utils/formatter'
import { CardContainer } from './styles'

export function Card(props: ItemsGitHubAPIRequest) {
  const { title, updated_at } = props

  return (
    <CardContainer>
      <header>
        <h2>{title}</h2>
        <h3>
          {formatDistanceToNow(new Date(updated_at), {
            addSuffix: true,
            locale: ptBR,
          })}
        </h3>
      </header>
      <p>
        {textShortener(`        
        Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

        Dynamic typing
        JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
        
        let foo = 42; // foo is now a number
        foo = 'bar'; // foo is now a string
        foo = true; // foo is now a boolean `)}
      </p>
    </CardContainer>
  )
}
