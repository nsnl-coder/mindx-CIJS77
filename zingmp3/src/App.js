import Card from './components/card/Card'
import Playlist from './components/playlist/Playlist'

import DUMMY_SONGS from './dev-data/playlist.json'

const App = () => {
  return (
    <>
      <Playlist data={DUMMY_SONGS} ui='square' />
      <Playlist data={DUMMY_SONGS} ui='rectangle' />
    </>
  )
}

export default App
