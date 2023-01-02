import { HeaderContainer } from './styles'
import logoImg from '../../assets/logo.svg'
import backgroundLeftImg from '../../assets/background-left.svg'
import backgroundRightImg from '../../assets/background-right.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={backgroundLeftImg} alt="" />
      <NavLink to="/">
        <img src={logoImg} alt="" />
      </NavLink>

      <img src={backgroundRightImg} alt="" />
    </HeaderContainer>
  )
}
