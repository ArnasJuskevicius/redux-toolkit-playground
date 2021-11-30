import { Link } from 'react-router-dom'
import styled from '@emotion/styled'

export const NavButton = styled(Link)`
  max-width: 66px;
  max-height: 66px;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  transition: background-color 0.2s linear;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #828282;
  }
`
