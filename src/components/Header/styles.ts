import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 18.5rem;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme['base-post']};
  overflow: hidden;
`

export const EffectLeft = styled.div`
  padding-top: 4.375rem;
  width: 35%;

  svg {
    width: 100%;
    height: 100%;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 30%;
  img {
    width: 9.25rem;
    align-self: baseline;
    margin-top: 4.25rem;
  }
`

export const EffectRight = styled.div`
  padding: 1.875rem 0;
  width: 35%;
  display: flex;
  justify-content: end;

  svg {
    width: 100%;
    height: 100%;
  }
`
