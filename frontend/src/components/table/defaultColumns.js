import ReactTableCheckbox from './CheckBox'

const defaultColumns = (hooks) => {
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
    {
      id: 'action',
      Header: <p className='text-center'>Actions</p>,
      Cell: () => <p className='text-start text-purple-400'>Edit</p>,
      width: 0.5,
    },
  ])
}

export default defaultColumns
