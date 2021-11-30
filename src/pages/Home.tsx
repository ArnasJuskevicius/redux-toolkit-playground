import { CardList } from '../features/Card/CardList'
import { useGetPhotosQuery } from '../services/unsplased/service'

export const HomePage = () => {
  const { data: photos, isLoading, isError } = useGetPhotosQuery('initial')

  if (isError || !photos) {
    return <div>something went wrong</div>
  }

  if (isLoading) {
    return <div>loading</div>
  }

  return <CardList photos={photos} />
}
