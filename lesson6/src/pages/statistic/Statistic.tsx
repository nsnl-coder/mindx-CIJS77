import { FormControl, MenuItem, InputLabel, Select } from '@mui/material'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import SwapVertIcon from '@mui/icons-material/SwapVert'

import Tab from '../../components/Tab'
import MobileContainer from '../../components/ui/mobileContainer/MobileContainer'
import LineChartStatistic from './LineChartStatistic'
import getSortedExpenses from '../../helper/getSortedExpenses'
import ExpenseList from '../../components/expenses/ExpenseList'
import ScrollContainer from '../../components/ui/scrollContainer/ScrollContainer'
import getSortedExpenseByType from '../../helper/getSortedExpenseByType'
import getTotalExpenseInMonth from '../../helper/getTotalExpenseInMonth'

interface Filter {
  type: 'deposite' | 'withdraw'
  year: number
  isAsc: boolean
}

const Statistic = () => {
  const expenses = useSelector((store: any) => store.expense.data)
  const sortedExpenses = getSortedExpenses(expenses)

  const [filter, setFilter] = useState<Filter>({
    type: 'deposite',
    year: new Date().getFullYear(),
    isAsc: true,
  })

  const topExpenses = getSortedExpenseByType({
    expenses,
    year: filter.year,
    type: filter.type,
    isAsc: filter.isAsc,
  })

  const chartData = getTotalExpenseInMonth({
    expenses: sortedExpenses,
    year: filter.year,
    type: filter.type,
  })

  const onFilterChange = (e: any) => {
    const { name, value } = e.target
    setFilter((filter: Filter) => {
      return {
        ...filter,
        [name]: value,
      }
    })
  }

  const changeSortOrderHandler = () => {
    setFilter((filter: Filter) => {
      return {
        ...filter,
        isAsc: !filter.isAsc,
      }
    })
  }

  return (
    <MobileContainer isHeaderContainerBg={false} heading='Statistic'>
      <div className='flex flex-col h-full'>
        <div className='flex px-4 space-x-8 mt-3'>
          <div className='flex-grow'>
            <Tab setFilter={setFilter} filter={filter} />
          </div>
          <FormControl sx={{ width: '100px' }}>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={filter.year}
              onChange={onFilterChange}
              color='success'
              name='year'
            >
              <MenuItem value={2022}>2022</MenuItem>
              <MenuItem value={2021}>2021</MenuItem>
              <MenuItem value={2020}>2020</MenuItem>
              <MenuItem value={2019}>2019</MenuItem>
            </Select>
          </FormControl>
        </div>
        <LineChartStatistic chartData={chartData} type={filter.type} />
        <div className='flex justify-between items-center text-base pt-4 px-9 font-semibold'>
          <h2>
            Top {filter.type === 'deposite' ? 'Income' : 'Spending'}{' '}
            {filter.year}
          </h2>
          <span
            onClick={changeSortOrderHandler}
            className='inline-block px-2 py-2 cursor-pointer'
          >
            <SwapVertIcon />
          </span>
        </div>
        <ScrollContainer className='px-8'>
          <ExpenseList expenses={topExpenses} expenseBackground={true} />
          {topExpenses.length === 0 && (
            <h2>No transactions found in {filter.year}</h2>
          )}
        </ScrollContainer>
      </div>
    </MobileContainer>
  )
}

export default Statistic
