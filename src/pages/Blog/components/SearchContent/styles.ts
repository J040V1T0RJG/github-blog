import styled from 'styled-components'

export const SearchContentContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  margin-top: 4.5rem;

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-weight: 700;
      font-size: 1.125rem;
      line-height: 160%;

      color: ${(props) => props.theme['base-subtitle']};
    }

    h3 {
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 160%;

      text-align: right;

      color: ${(props) => props.theme['base-span']};
    }
  }

  input {
    flex: 1;
    padding: 0.75rem 1rem;
    gap: 8px;

    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};

    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 6px;

    &::placeholder {
      font-weight: 400;
      font-size: 1rem;
      line-height: 160%;

      color: ${(props) => props.theme['base-label']};
    }

    &:active {
      color: red;
    }
  }
`
