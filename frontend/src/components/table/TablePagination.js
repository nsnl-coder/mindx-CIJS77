import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi'

const TablePagination = (props) => {
  const {
    gotoPage,
    previousPage,
    nextPage,
    pageCount,
    pageIndex,
    pageSize,
    setPageSize,
    canNextPage,
    canPreviousPage,
  } = props

  const pageChangeHandler = (e) => {
    const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
    gotoPage(pageNumber)
  }

  const pageSizeOptions = (
    <select
      value={pageSize}
      onChange={(e) => setPageSize(+e.target.value)}
      className='p-4 outline-0'
    >
      {[10, 25, 50].map((pageSize) => (
        <option key={pageSize} value={pageSize}>
          Show {pageSize}
        </option>
      ))}
    </select>
  )

  const prevPageClasses = canPreviousPage ? 'hover:bg-blue-500 hover:text-white' : 'opacity-50'
  const nextPageClasses = canNextPage ? 'hover:bg-blue-500 hover:text-white' : 'opacity-50'

  return (
    <div className='my-16'>
      <div className='-x-4 mt-6 mb-4 flex justify-center [&>*]:border [&>*]:px-4  [&>*]:py-2'>
        <button
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          className={`flex items-center space-x-1 ${prevPageClasses}`}
        >
          <FiChevronsLeft />
          <span>Prev</span>
        </button>
        <button
          onClick={() => nextPage()}
          disabled={!canNextPage}
          className={`flex items-center space-x-1 !border-l-0 ${nextPageClasses}`}
        >
          <span>Next</span>
          <FiChevronsRight />
        </button>
      </div>
      <div className='space-x-2 text-center'>
        <span className='text-blue-400'>
          Page {pageIndex + 1} of {pageCount}
        </span>
        {pageSizeOptions}
      </div>
    </div>
  )
}

export default TablePagination
