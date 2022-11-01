import Expense from '../../types/expense'
import ScrollContainer from '../ui/scrollContainer/ScrollContainer'
import ExpenseItem from './ExpenseItem'

interface Props {
  expenses: Expense[]
}

const ExpenseList = (props: Props) => {
  return (
    <ScrollContainer>
      <div className='space-y-5'>
        {props.expenses.map((expense) => (
          <ExpenseItem expense={expense} key={new Date(expense.date)} />
        ))}
      </div>
    </ScrollContainer>
  )
}

export default ExpenseList
