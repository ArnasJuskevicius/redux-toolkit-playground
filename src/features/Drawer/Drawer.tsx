import styled from '@emotion/styled'

import { Logo } from '../../components/Logo'
import Heart from '../../images/heart.svg'
import Map from '../../images/Map.svg'

import { Drawer as DrawerComp } from './components/Drawer'
import { NavButton } from './components/NavButton'
import { Icon } from './components/Icon'

export const LogoContainer = styled(NavButton)`
  margin-top: 50px;
  &:hover {
    background-color: transparent;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`

export const Drawer = () => (
  <DrawerComp>
    <LogoContainer to="/">
      <Logo />
    </LogoContainer>
    <ButtonContainer>
      <NavButton to="/">
        <Icon src={Map} />
      </NavButton>
      <NavButton to="favorites">
        <Icon src={Heart} />
      </NavButton>
    </ButtonContainer>
  </DrawerComp>
)
