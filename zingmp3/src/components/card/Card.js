const Card = (props) => {
  const { className, song, cardType = 'square' } = props
  let extraClass = ''

  extraClass = cardType === 'square' ? 'aspect-square' : 'aspect-video'

  return (
    <div className='max-w-sm overflow-hidden rounded'>
      <img
        className={`${extraClass} w-full object-cover object-center`}
        src={song.image}
        alt='Sunset in the mountains'
      />
      <div className='py-4'>
        <h3 className='text-md mb-2'>{song.songName}</h3>
        <p className='text-sm text-gray-400'>{song.author}</p>
      </div>
    </div>
  )
}

export default Card
