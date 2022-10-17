import React, { useState } from 'react'
import { useAsyncDebounce } from 'react-table'

export const GlobalFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter)
  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined)
  }, 300)

  return (
    <div>
      Search:{' '}
      <input
        value={value || ''}
        onChange={(e) => {
          setValue(e.target.value)
          onChange(e.target.value)
        }}
        className='mb-2 w-full rounded border px-4 py-2 outline-0'
      />
    </div>
  )
}
