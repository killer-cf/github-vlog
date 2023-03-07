import {
  EffectLeft,
  EffectRight,
  HeaderContainer,
  LogoContainer,
} from './styles'
import effectLeft from '../../assets/effect_left.svg'
import effectRight from '../../assets/effect_right.svg'
import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <EffectLeft>
        <img src={effectLeft} alt="" />
      </EffectLeft>
      <LogoContainer>
        <img src={logo} alt="" />
      </LogoContainer>
      <EffectRight>
        <img src={effectRight} alt="" />
      </EffectRight>
    </HeaderContainer>
  )
}
