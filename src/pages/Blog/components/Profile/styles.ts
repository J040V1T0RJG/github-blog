import styled from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  padding: 2rem;
  gap: 2rem;
  margin-top: -5.5rem;
  border-radius: 10px;

  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
`

export const Avatar = styled.img`
  min-width: 9.25rem;
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;
  image-rendering: high-quality;
`

export const ProfileInfo = styled.div`
  header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    h1 {
      font-weight: 700;
      font-size: 1.5rem;
      line-height: 130%;

      color: ${(props) => props.theme['base-title']};
    }

    p {
      font-weight: 700;
      font-size: 0.75rem;
      line-height: 160%;

      text-transform: uppercase;

      color: ${(props) => props.theme.blue};
      word-spacing: 0.5rem;
      cursor: pointer;
      border-bottom: 1px solid transparent;

      &:hover {
        border-bottom: 1px solid ${(props) => props.theme.blue};
        transition: border-color 0.2s;
      }
    }
  }

  h2 {
    font-weight: 400;
    font-size: 1rem;
    line-height: 160%;

    color: ${(props) => props.theme['base-text']};
    margin-top: 0.5rem;
  }
`

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 2.5rem;
  margin-top: 2.5rem;

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
