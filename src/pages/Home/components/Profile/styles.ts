import styled from 'styled-components'

export const ProfileContainer = styled.div`
  z-index: 100;
  margin-top: -5.5rem;
  background-color: ${(props) => props.theme['base-profile']};
  padding: 2rem 2.5rem;
  display: flex;
  gap: 2rem;
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
`

export const ProfileInfo = styled.div`
  header {
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
  }

  p {
    margin-top: 0.5rem;
    color: ${(props) => props.theme['base-text']};
    font-size: 1rem;
    line-height: 1.6;
  }
`
export const ProfileInfoBoxes = styled.div`
  margin-top: 1.5rem;
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
