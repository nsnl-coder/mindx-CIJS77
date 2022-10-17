import React, { useEffect, useMemo } from 'react'
import { useTable, useGlobalFilter, useSortBy, useFlexLayout } from 'react-table'

import { COLUMNS } from './columns'
import './table.css'
import Thead from './Thead'
import Tfoot from './Tfoot'
import Tbody from './Tbody'
import { GlobalFilter } from './GlobalFilter'
import MOCK_DATA from './data/MOCK_DATA'

const Table = () => {
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => MOCK_DATA, [])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    useFlexLayout
  )

  const { globalFilter } = state

  return (
    <>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table class='data-table' {...getTableProps()}>
        <Thead headerGroups={headerGroups} />
        <Tbody getTableBodyProps={getTableBodyProps} prepareRow={prepareRow} rows={rows} />
      </table>
    </>
  )
}

export default Table
