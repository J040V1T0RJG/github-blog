import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 26rem;
  height: 16.25rem;
  padding: 2rem;

  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;

  header {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1.25rem;

    h2 {
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 160%;

      color: ${(props) => props.theme['base-title']};
    }

    h3 {
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 160%;

      color: ${(props) => props.theme['base-span']};
      min-width: max-content;
    }
  }

  p {
    font-weight: 400;
    font-size: 1rem;
    line-height: 160%;

    color: ${(props) => props.theme['base-text']};
  }
`
