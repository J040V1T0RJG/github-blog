import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${(props) => props.theme.profile};

  width: 100vw;
  height: 18.5rem;

  > :nth-child(2) {
    margin-bottom: 8.375rem;
  }
`
