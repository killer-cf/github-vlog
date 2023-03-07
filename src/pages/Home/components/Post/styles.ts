import styled from 'styled-components'

export const PostContainer = styled.div`
  background-color: ${(props) => props.theme['base-post']};
  padding: 2rem;
  border-radius: 10px;
  overflow: hidden;
  border: 2px solid transparent;

  :hover {
    border-color: ${(props) => props.theme['base-label']};
  }

  header {
    display: flex;
    margin-bottom: 1.25rem;
    gap: 1rem;

    a {
      color: ${(props) => props.theme['base-title']};
      font-size: 1.25rem;
      line-height: 1.6;
      font-weight: bold;
      text-decoration: none;
    }

    span {
      white-space: nowrap;
      color: ${(props) => props.theme['base-span']};
      font-size: 0.75rem;
      line-height: 1.6;
    }
  }

  div {
    display: -webkit-box;
    -webkit-line-clamp: 5;
    overflow: hidden;
    -webkit-box-orient: vertical;

    p {
      height: 7rem;
      color: ${(props) => props.theme['base-text']};
      font-size: 1rem;
      line-height: 1.4;
    }
  }
`
