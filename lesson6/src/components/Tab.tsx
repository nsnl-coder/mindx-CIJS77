const Tab = (props: any) => {
  const { filter, setFilter } = props

  const changeFilterHandler = () => {
    setFilter((filter: any) => {
      return {
        ...filter,
        type: filter.type === 'withdraw' ? 'deposite' : 'withdraw',
      }
    })
  }

  return (
    <div className='flex bg-gray-100 rounded-full py-1 px-5 mb-4'>
      <div
        onClick={changeFilterHandler}
        className={
          (filter.type === 'deposite' ? 'bg-mygreen/10 text-mygreen ' : '') +
          'flex-grow text-center py-2.5 font-medium rounded-full hover:bg-mygreen/10 cursor-pointer hover:text-mygreen'
        }
      >
        Income
      </div>
      <div
        onClick={changeFilterHandler}
        className={
          (filter.type === 'withdraw' ? 'bg-myred/10 text-myred ' : '') +
          'flex-grow text-center py-2.5 font-medium rounded-full hover:bg-mygreen/10 cursor-pointer hover:text-myred'
        }
      >
        Expenses
      </div>
    </div>
  )
}

export default Tab
