import Expense from '../../types/expense'

interface Props {
  expense: Expense
}

const ExpenseItem = (props: Props) => {
  const { expense } = props

  const amount =
    expense.type === 'deposite' ? (
      <div className='font-medium text-mygreen space-x-0.5'>
        <span>+</span>
        <span>$</span>
        <span>{expense.amount}</span>
      </div>
    ) : (
      <div className='font-medium text-myred space-x-0.5'>
        <span>-</span>
        <span>$</span>
        <span>{expense.amount}</span>
      </div>
    )

  return (
    <div className='flex items-center justify-between'>
      <div>
        <p className='text-sm font-semibold '>{expense.name}</p>
        <p className='text-xs font-normal text-gray-500'>
          {new Date(expense.date).toLocaleDateString('en-us', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </p>
      </div>
      <div>{amount}</div>
    </div>
  )
}

export default ExpenseItem
