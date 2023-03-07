import styled from 'styled-components'

export const HomeContainer = styled.main`
  max-width: 54rem;
  margin: 0 auto;
`

export const PostsInfo = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h4 {
    font-size: 1.125;
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: bold;
    line-height: 1.6;
  }

  span {
    color: ${(props) => props.theme['base-span']};
    font-size: 0.875rem;
    line-height: 1.6;
  }
`
