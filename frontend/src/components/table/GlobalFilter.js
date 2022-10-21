import React, { useState } from 'react'
import { useAsyncDebounce } from 'react-table'
import { CiSearch } from 'react-icons/ci'

export const GlobalFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter)
  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined)
  }, 300)

  return (
    <div className='flex items-center space-x-2'>
      <input
        value={value || ''}
        onChange={(e) => {
          setValue(e.target.value)
          onChange(e.target.value)
        }}
        placeholder='Type something to search your table'
        className='w-full rounded border px-4 py-2 outline-0'
      />
      <CiSearch size={30} fontWeight={300} />
    </div>
  )
}
