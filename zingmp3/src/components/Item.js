const Item = () => {
  return (
    <div className='flex gap-x-3'>
      <div>
        <img
          src='https://i.pinimg.com/736x/46/83/fa/4683fa36ddd1ccdccb3b285b58b2f3b4.jpg'
          alt=''
          className='aspect-square w-14 object-cover object-center'
        />
      </div>
      <div>
        <h3 className='text-sm font-medium text-white'>
          Lorem ipsum dolor sit amet consectetur.
        </h3>
        <p className='text-sm text-white/60'>Lorem ipsum dolor sit.</p>
        <p className='text-sm text-white/60'>25/08/2022</p>
      </div>
    </div>
  )
}

export default Item
