import { useGetPhotoQuery } from '../../services/unsplased/service'
import { Loader } from '../../components/Loader'

import { Card } from './components/Card'

export type FavoriteCardProps = {
  photoId: string
}

export const FavoriteCard: React.FC<FavoriteCardProps> = ({ photoId }) => {
  const { data, isError, isLoading } = useGetPhotoQuery(photoId)

  if (isLoading) {
    return <Loader />
  }

  if (isError || !data) {
    return <div>something went wrong</div>
  }

  return (
    <Card
      id={data.id}
      src={data.urls.small}
      isFavorited={true}
      alt={data.alt_description}
    />
  )
}
