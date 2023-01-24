import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { SearchContentContainer } from './styles'
import { PostContext } from '../../../../contexts/PostContext'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchContent() {
  const { posts, fetchPosts } = useContext(PostContext)

  const { register, handleSubmit, reset } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchPosts(data: SearchFormInputs) {
    await fetchPosts(data.query)
    reset()
  }

  let numberOfPublications = '0 publicação'
  if (posts.items) {
    if (posts.items.length > 1) {
      numberOfPublications = posts.items.length + ' publicações'
    } else {
      numberOfPublications = posts.items.length + ' publicação'
    }
  }

  return (
    <SearchContentContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <header>
        <h2>Publicações</h2>
        <h3>{numberOfPublications}</h3>
      </header>
      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
    </SearchContentContainer>
  )
}
