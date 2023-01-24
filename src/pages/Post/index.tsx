import { useCallback, useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'

import { ItemsGitHubAPIRequest } from '../../contexts/typingPosts'
import { api } from '../../libs/axios'
import { PostInfo } from './components/PostInfo'
import { PostContainer, PostContent } from './styles'

export function Post() {
  const { id: params } = useParams()
  const [postsgit, setPostsgit] = useState<ItemsGitHubAPIRequest>(
    {} as ItemsGitHubAPIRequest,
  )

  const featcPost = useCallback(async () => {
    const response = await api.get(
      `/repos/J040V1T0RJG/github-blog/issues/${params}`,
    )
    setPostsgit(response.data)
  }, [params])

  useEffect(() => {
    featcPost()
  }, [featcPost])

  return (
    <PostContainer>
      {postsgit.user && (
        <PostInfo
          postLifetime={postsgit.updated_at}
          amountOfComments={postsgit.comments}
          postOwnerName={postsgit.user?.login}
          originalPostURL={postsgit.html_url}
          postTitle={postsgit.title}
        />
      )}

      <PostContent>
        <ReactMarkdown>{postsgit.body}</ReactMarkdown>
      </PostContent>
    </PostContainer>
  )
}
