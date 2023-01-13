import { Card } from './components/Card'
import { Profile } from './components/Profile'
import { SearchContent } from './components/SearchContent'
import { BlogContainer, Posts } from './styles'

export function Blog() {
  return (
    <BlogContainer>
      <Profile />
      <SearchContent />
      <Posts>
        {[1, 2, 3, 4, 5].map((card) => {
          return <Card key={card} />
        })}
      </Posts>
    </BlogContainer>
  )
}
