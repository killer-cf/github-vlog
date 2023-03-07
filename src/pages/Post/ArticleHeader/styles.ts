import styled from 'styled-components'

export const TitleBox = styled.div`
  position: relative;
  margin-top: -5.5rem;
  background-color: ${(props) => props.theme['base-profile']};
  padding: 2rem 2.5rem;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  header {
    margin-bottom: 1.25rem;
    display: flex;
    justify-content: space-between;

    svg {
      margin-top: 0.125rem;
    }
  }

  h2 {
    color: ${(props) => props.theme['base-title']};
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 1.3;
  }

  a {
    color: ${(props) => props.theme.blue};
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 1.6;
    text-decoration: none;
    display: flex;
    gap: 0.5rem;

    :hover {
      border-bottom: 1px solid ${(props) => props.theme.blue};
      transition: border 0.2;
      align-self: baseline;
    }
  }
`

export const PostInfoBoxes = styled.div`
  margin-top: 0.5rem;
  display: flex;
  gap: 1.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span {
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 1rem;
      line-height: 1.6;
    }

    svg {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
