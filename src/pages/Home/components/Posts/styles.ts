import styled from 'styled-components'

export const SearchPostsInput = styled.input`
  margin-top: 0.75rem;
  width: 100%;
  padding: 0.75rem 1rem;
  height: 3.25rem;
  background: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-border']};
  border-radius: 6px;
  color: ${(props) => props.theme['base-text']};
  font-size: 1rem;
  line-height: 1.6;

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
    font-size: 1rem;
    line-height: 1.6;
  }
`

export const PostsContainer = styled.div`
  margin: 3rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media screen and (max-width: 48rem) {
    max-width: 26rem;
    margin: 3rem auto;
    grid-template-columns: 1fr;
  }
`
