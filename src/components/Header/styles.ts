import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${(props) => props.theme['base-profile']};

  width: 100%;
  height: 18.5rem;

  > :nth-child(2) {
    margin-bottom: 8.375rem;
  }
`
