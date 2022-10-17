import { BsSortAlphaUpAlt, BsSortAlphaDown } from 'react-icons/bs'
import { BiSortAlt2 } from 'react-icons/bi'

const Thead = (props) => {
  const { headerGroups } = props

  function getSortedIcon(isSorted) {
    return isSorted
  }

  return (
    <thead>
      {headerGroups.map((headerGroup) => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column) => (
            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
              <div className='flex items-center'>
                <span>{column.render('Header')}</span>
                {column.isSorted && column.isSortedDesc && <BsSortAlphaUpAlt />}
                {column.isSorted && !column.isSortedDesc && <BsSortAlphaDown />}
                {!column.isSorted && <BiSortAlt2 />}
              </div>
            </th>
          ))}
        </tr>
      ))}
    </thead>
  )
}

export default Thead
