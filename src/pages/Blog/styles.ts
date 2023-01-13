import styled from 'styled-components'

export const BlogContainer = styled.main`
  display: flex;
  flex-direction: column;
`

export const Posts = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: calc(100% - 52rem);
  grid-row-gap: 2rem;
  margin-top: 3rem;
`
