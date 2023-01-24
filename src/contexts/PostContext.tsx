import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../libs/axios'
import { GitHubAPIRequest } from './typingPosts'

interface PostContextType {
  posts: GitHubAPIRequest
  fetchPosts: (query?: string) => Promise<void>
}

interface PostProviderProps {
  children: ReactNode
}

export const PostContext = createContext({} as PostContextType)

export function PostProvider({ children }: PostProviderProps) {
  const [posts, setPosts] = useState<GitHubAPIRequest>({} as GitHubAPIRequest)

  const fetchPosts = useCallback(async (query?: string) => {
    query = query || ''

    const response = await api.get('/search/issues', {
      params: {
        q: `${query}repo:J040V1T0RJG/github-blog`,
        _sort: 'updated_at',
        _order: 'desc',
      },
    })
    setPosts(response.data)
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  return (
    <PostContext.Provider value={{ posts, fetchPosts }}>
      {children}
    </PostContext.Provider>
  )
}
