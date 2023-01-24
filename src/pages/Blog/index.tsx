import { useContext } from 'react'

import { PostContext } from '../../contexts/PostContext'
import { Card } from './components/Card'
import { Profile } from './components/Profile'
import { SearchContent } from './components/SearchContent'
import { BlogContainer, Posts } from './styles'

export function Blog() {
  const { posts } = useContext(PostContext)
  return (
    <BlogContainer>
      <Profile />
      <SearchContent />
      <Posts>
        {posts.items &&
          posts.items.map((card) => {
            return <Card key={card.id} {...card} />
          })}
      </Posts>
    </BlogContainer>
  )
}
