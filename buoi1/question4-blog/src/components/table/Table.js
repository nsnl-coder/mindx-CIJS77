import React, { useEffect, useMemo } from 'react'
import {
  useTable,
  useGlobalFilter,
  useSortBy,
  useFlexLayout,
  usePagination,
  useRowSelect,
} from 'react-table'

import { COLUMNS } from './columns'
import './table.css'
import Thead from './Thead'
import Tfoot from './Tfoot'
import Tbody from './Tbody'
import { GlobalFilter } from './GlobalFilter'
import MOCK_DATA from './data/MOCK_DATA'
import TablePagination from './TablePagination'
import ReactTableCheckbox from './CheckBox'

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
    // Pagination
    gotoPage,
    nextPage,
    previousPage,
    pageCount,
    setPageSize,
    canPreviousPage,
    canNextPage,
    selectedFlatRows,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    useFlexLayout,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: 'selection',
          Header: ({ getToggleAllPageRowsSelectedProps }) => (
            <ReactTableCheckbox {...getToggleAllPageRowsSelectedProps()} />
          ),
          Cell: ({ row }) => <ReactTableCheckbox {...row.getToggleRowSelectedProps()} />,
          width: 0,
        },
        ...columns,
      ])
    }
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
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table className='data-table' {...getTableProps()}>
        <Thead headerGroups={headerGroups} />
        <Tbody getTableBodyProps={getTableBodyProps} prepareRow={prepareRow} rows={page} />
      </table>
      <TablePagination {...pagination} />
      <pre>
        <code>
          {JSON.stringify(
            {
              selectedRowIds: selectedRowIds,
              'selectedFlatRows[].original': selectedFlatRows.map((d) => d.original),
            },
            null,
            2
          )}
        </code>
      </pre>
    </>
  )
}

export default Table
