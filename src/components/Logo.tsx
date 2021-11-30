import styled from '@emotion/styled'

import logo from '../images/Logo.svg'

export const StyledLogo = styled.img`
  width: 100%;
  max-width: 24px;
`

export type LogoProps = {
  classNames?: string
}

export const Logo: React.FC<LogoProps> = (props) => (
  <StyledLogo src={logo} alt="K. Logo" {...props} />
)
