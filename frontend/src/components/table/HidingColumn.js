import ReactTableCheckbox from './CheckBox'

const HidingColumn = (props) => {
  const { allColumns, getToggleHideAllColumnsProps } = props
  return (
    <div className='flex flex-col space-y-4 bg-white py-8 px-4'>
      <h3 className='text-sm font-semibold'>Toggle check box to show/hide columns</h3>
      <div className='flex flex-wrap items-center justify-start gap-x-10 gap-y-3 py-4'>
        <div className='flex items-center gap-x-2'>
          <ReactTableCheckbox {...getToggleHideAllColumnsProps()} />
          Toggle all
        </div>
        {allColumns.map(
          (column, index) =>
            index !== 0 && (
              <div key={column.id} className='flex items-center gap-x-3'>
                <input type='checkbox' {...column.getToggleHiddenProps()} /> {column.Header}
              </div>
            )
        )}
      </div>
    </div>
  )
}

export default HidingColumn
