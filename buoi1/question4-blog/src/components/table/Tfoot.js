const Tfoot = (props) => {
  const { footerGroups } = props

  return (
    <tfoot>
      {footerGroups.map((footerGroup) => (
        <tr {...footerGroup.getFooterGroupProps()}>
          {footerGroup.headers.map((column) => (
            <td {...column.getFooterProps()}>{column.render('Footer')}</td>
          ))}
        </tr>
      ))}
    </tfoot>
  )
}

export default Tfoot
