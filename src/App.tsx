import { Routes, Route } from 'react-router-dom'
import { Global, css } from '@emotion/react'
import emotionNormalize from 'emotion-normalize'
import styled from '@emotion/styled'

import { Drawer } from './features/Drawer/Drawer'
import { HomePage } from './pages/Home'
import { FavoritesPage } from './pages/Favorites/Favorites'
import { onComponentMount, useAppDispatch } from './helpers/hooks/common'
import { FAVORITED } from './helpers/localStorageKeys'
import { init } from './pages/Favorites/slice'

const Grid = styled.div`
  margin-left: 90px;
  width: calc(100% - 90px);
  display: grid;
  grid-template-columns: repeat(auto-fill, 231px);
  grid-template-rows: repeat(auto-fit, auto);
  grid-auto-flow: dense;
  grid-gap: 24px;
  padding: 48px;
  position: relative;
  height: 100%;
`

const App = () => {
  const dispath = useAppDispatch()
  onComponentMount(() => {
    try {
      const localStorageData = localStorage.getItem(FAVORITED)

      if (!localStorageData) {
        return
      }

      dispath(init(JSON.parse(localStorageData)))
    } catch (error) {}
  })

  return (
    <>
      <Global
        styles={css`
          ${emotionNormalize}
          * {
            box-sizing: border-box;
            font-family: Roboto;
          }

          body {
            background-color: #2b2b2b;
          }
        `}
      />
      <Drawer />
      <Grid>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </Grid>
    </>
  )
}

export default App
