import { FormControl, MenuItem, InputLabel, Select } from '@mui/material'
import { useState } from 'react'
import { useSelector } from 'react-redux'

import Tab from '../../components/Tab'
import MobileContainer from '../../components/ui/mobileContainer/MobileContainer'
import LineChartStatistic from './LineChartStatistic'
import getSortedExpenses from '../../helper/getSortedExpenses'
import ExpenseList from '../../components/expenses/ExpenseList'
import ScrollContainer from '../../components/ui/scrollContainer/ScrollContainer'

const Statistic = () => {
  const expenses = useSelector((store: any) => store.expense)
  const sortedExpenses = getSortedExpenses(expenses)
  const mostRecentExpenses = sortedExpenses.slice(0, 40)

  const [year, setYear] = useState<number>(2022)

  return (
    <MobileContainer isHeaderContainerBg={false} heading='Statistic'>
      <div className='flex flex-col h-full'>
        <div className='flex px-4 space-x-8 mt-3'>
          <div className='flex-grow'>
            <Tab />
          </div>
          <FormControl sx={{ width: '100px' }}>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={year}
              onChange={(e: any) => setYear(+e.target.value)}
              color='success'
            >
              <MenuItem value={2022}>2022</MenuItem>
              <MenuItem value={2021}>2021</MenuItem>
              <MenuItem value={2020}>2020</MenuItem>
              <MenuItem value={2019}>2019</MenuItem>
            </Select>
          </FormControl>
        </div>
        <LineChartStatistic />
        <ScrollContainer>
          <ExpenseList expenses={mostRecentExpenses} />
        </ScrollContainer>
      </div>
    </MobileContainer>
  )
}

export default Statistic
