import styled from 'styled-components'

export const ArticleContentContainer = styled.div`
  overflow: hidden;
  padding: 2.5rem 2rem;
  p {
    font-weight: 400;
    line-height: 1.6;
    font-size: 1rem;
  }
  strong {
    font-weight: 400;
    line-height: 1.6;
    font-size: 1rem;
    font-weight: 700;
  }
  a {
    font-weight: 400;
    line-height: 1.6;
    font-size: 1rem;
    color: ${(props) => props.theme.blue};
    &:hover {
      text-decoration: underline;
    }
  }
  img {
    max-width: 100%;
    object-fit: cover;
  }
  ul {
    margin-left: 1.25rem;
  }
  .line-break {
    white-space: pre-wrap;
  }
`
