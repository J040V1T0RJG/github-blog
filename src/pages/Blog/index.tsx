import { Profile } from './components/Profile'
import { SearchContent } from './components/SearchContent'
import { BlogContainer } from './styles'

export function Blog() {
  return (
    <BlogContainer>
      <Profile />
      <SearchContent />
    </BlogContainer>
  )
}
