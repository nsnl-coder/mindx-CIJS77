import React, { useEffect, useMemo } from 'react'
import { useTable, useGlobalFilter, useSortBy, usePagination, useRowSelect } from 'react-table'

import { COLUMNS } from './columns'
import './table.css'
import Thead from './Thead'
import Tfoot from './Tfoot'
import Tbody from './Tbody'
import { GlobalFilter } from './GlobalFilter'
import MOCK_DATA from './data/MOCK_DATA'
import TablePagination from './TablePagination'
import Container from '../shared/Container'
import defaultColumns from './defaultColumns'
import HidingColumn from './HidingColumn'

const Table = () => {
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => MOCK_DATA, [])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
    setGlobalFilter,
    allColumns,
    // Pagination
    gotoPage,
    nextPage,
    previousPage,
    pageCount,
    setPageSize,
    canPreviousPage,
    canNextPage,
    getToggleHideAllColumnsProps,
    selectedFlatRows,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    defaultColumns
  )

  const { globalFilter, pageIndex, pageSize, selectedRowIds } = state

  const pagination = {
    gotoPage,
    previousPage,
    nextPage,
    pageCount,
    pageIndex,
    pageSize,
    setPageSize,
    canNextPage,
    canPreviousPage,
    pageCount,
  }

  return (
    <>
      <Container className='space-y-8 bg-slate-50 px-8 py-8'>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        <HidingColumn
          allColumns={allColumns}
          getToggleHideAllColumnsProps={getToggleHideAllColumnsProps}
        />
        <div className='w-100 overflow-auto'>
          <table className='data-table bg-white' {...getTableProps()}>
            <Thead headerGroups={headerGroups} />
            <Tbody getTableBodyProps={getTableBodyProps} prepareRow={prepareRow} rows={page} />
          </table>
        </div>
      </Container>
      <TablePagination {...pagination} />
    </>
  )
}

export default Table
