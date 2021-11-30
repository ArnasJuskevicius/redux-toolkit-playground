import { UnsplashImageDTO } from '../../services/unsplased/types'

import { Card } from './components/Card'

export type CardListProps = {
  photos: UnsplashImageDTO[]
}

export const CardList: React.FC<CardListProps> = ({ photos }) => (
  <>
    {photos.map(({ urls: { small }, alt_description, id }) => (
      <Card id={id} src={small} alt={alt_description} isFavorited={true} />
    ))}
  </>
)
