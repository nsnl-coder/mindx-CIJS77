const Tbody = (props) => {
  const { getTableBodyProps, prepareRow, rows } = props

  return (
    <tbody {...getTableBodyProps()}>
      {rows.map((row) => {
        prepareRow(row)
        return (
          <tr {...row.getRowProps()}>
            {row.cells.map((cell) => {
              return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
            })}
          </tr>
        )
      })}
    </tbody>
  )
}

export default Tbody
