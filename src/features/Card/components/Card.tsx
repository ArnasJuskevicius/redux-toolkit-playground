import styled from '@emotion/styled'

import { useAppDispatch, useAppSelector } from '../../../helpers/hooks/common'
import {
  add,
  remove,
  checkIfElementExist,
} from '../../../pages/Favorites/slice'
import Heart from '../../../images/heart.svg'

import { Image } from './Image'
import { FavoriteButton } from './FavoriteButton'

export const Container = styled.div<{ isFavorited: boolean }>`
  width: 100%;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  max-width: 231px;
  overflow: hidden;
  position: relative;

  div[data-hover='fav'] {
    transition: opacity 0.2s linear;
    opacity: 0;
    opacity: ${({ isFavorited }) => (isFavorited ? 1 : 0)};
  }

  :hover {
    div[data-hover='fav'] {
      opacity: 1;
    }
  }
`

export type CardProps = {
  id: string
  src: string
  alt: string
  isFavorited: boolean
}

export const Card: React.FC<CardProps> = ({ alt, isFavorited, src, id }) => {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state)

  const clickHandler = () => {
    if (checkIfElementExist(state, id)) return dispatch(remove(id))
    return dispatch(add(id))
  }

  return (
    <Container isFavorited={isFavorited}>
      {/* data-hover is hack, this solution is used because time constrains and CRA.*/}
      {/* CRA does not allow easy babel plugin extensions and classes are generated. */}
      {/* In prod I would avoid CRA, eject it or override with craco*/}
      <FavoriteButton onClick={clickHandler} data-hover="fav">
        <img src={Heart} alt="heart" />
      </FavoriteButton>
      <Image src={src} alt={alt} />
    </Container>
  )
}
