import { useAppSelector } from '../../helpers/hooks/common'
import { FavoriteCard } from '../../features/Card/FavoriteCard'

import { getIds } from './slice'

export const FavoritesPage: React.FC = () => {
  const ids = useAppSelector(getIds)
  return (
    <>
      {ids.map((id) => (
        <FavoriteCard photoId={id} key={id} />
      ))}
    </>
  )
}
