import Card from '../card/Card'

const Playlist = (props) => {
  const { data, ui } = props
  const { title, playlist } = data

  return (
    <div className='container py-8'>
      <h2 className='mb-8 text-3xl uppercase'>{title}</h2>
      <div className='row gap-y-6'>
        {playlist.map((song) => (
          <div className='w-1/2 !max-w-xs md:w-1/3 lg:w-1/4 xl:w-1/5'>
            <Card song={song} cardType={ui} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Playlist
