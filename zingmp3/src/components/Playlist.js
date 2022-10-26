import Item from './Item'
import ListItem from './ListItem'

const Playlist = (props) => {
  return (
    <div className='bg-gray-800 p-4'>
      <h2 className='mb-6 font-bold text-white'>Bảng xếp hạng podcast</h2>
      <div className=' flex gap-x-4 '>
        <div className='flex-1'>
          <ListItem />
        </div>
        <div className='flex-1'>
          <ListItem />
        </div>
      </div>
    </div>
  )
}

export default Playlist
