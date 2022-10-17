import { format } from 'date-fns'

export const COLUMNS = [
  {
    Header: 'Email',
    Footer: 'Email',
    accessor: 'email',
    width: 1.5,
  },
  {
    Header: 'First Name',
    Footer: 'First Name',
    accessor: 'first_name',
    sticky: 'left',
    width: 0.7,
  },
  {
    Header: 'Date of Birth',
    Footer: 'Date of Birth',
    accessor: 'date_of_birth',
    width: 0.9,
    Cell: ({ value }) => {
      return format(new Date(value), 'dd/MM/yyyy')
    },
  },
  {
    Header: 'Country',
    Footer: 'Country',
    accessor: 'country',
    width: 0.9,
  },
  {
    Header: 'Phone',
    Footer: 'Phone',
    accessor: 'phone',
    width: 1,
  },
  {
    Header: 'Age',
    Footer: 'Age',
    accessor: 'age',
    width: 0.5,
  },
]

export const GROUPED_COLUMNS = [
  {
    Header: 'Id',
    Footer: 'Id',
    accessor: 'id',
  },
  {
    Header: 'Name',
    Footer: 'Name',
    columns: [
      {
        Header: 'First Name',
        Footer: 'First Name',
        accessor: 'first_name',
      },
      {
        Header: 'Last Name',
        Footer: 'Last Name',
        accessor: 'last_name',
      },
    ],
  },
  {
    Header: 'Info',
    Footer: 'Info',
    columns: [
      {
        Header: 'Date of Birth',
        Footer: 'Date of Birth',
        accessor: 'date_of_birth',
      },
      {
        Header: 'Country',
        Footer: 'Country',
        accessor: 'country',
      },
      {
        Header: 'Phone',
        Footer: 'Phone',
        accessor: 'phone',
      },
    ],
  },
]
