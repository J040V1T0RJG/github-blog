import styled from 'styled-components'

export const PostInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 2rem;
  margin-top: -5.5rem;
  border-radius: 10px;

  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  h1 {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 130%;
    margin-bottom: 0.5rem;

    color: ${(props) => props.theme['base-title']};
  }
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.25rem;

  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 160%;

    text-transform: uppercase;
    text-decoration: none;

    color: ${(props) => props.theme.blue};
    gap: 0.5rem;
    cursor: pointer;
    border-bottom: 1px solid transparent;

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.blue};
      transition: border-color 0.2s;
    }
  }
`

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 2.5rem;

  p {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 160%;

    color: ${(props) => props.theme['base-subtitle']};
  }

  .icon {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
  }
`
