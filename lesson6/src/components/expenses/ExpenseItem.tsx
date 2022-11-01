import Expense from '../../types/Expense'
import intervalToDuration from 'date-fns/intervalToDuration'
import getDurationFromNow from '../../helper/getDurationFromNow'

interface Props {
  expense: Expense
  className?: string
}

const ExpenseItem = (props: Props) => {
  const { expense, className } = props

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

  const duration = intervalToDuration({
    start: new Date(expense.date),
    end: new Date(),
  })

  const isRecentSixMonths = duration.years === 0 && duration.months! < 6

  let renderDate
  if (isRecentSixMonths) renderDate = getDurationFromNow(duration)

  return (
    <div
      className={`flex items-center justify-between ${className} hover:bg-gray-50 cursor-pointer py-4 px-2 rounded-xl`}
    >
      <div>
        <p className='text-sm font-medium '>{expense.name}</p>
        <p className='text-xs font-normal text-gray-500'>
          {!renderDate &&
            new Date(expense.date).toLocaleDateString('en-us', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          {isRecentSixMonths && renderDate}
        </p>
      </div>
      <div>{amount}</div>
    </div>
  )
}

export default ExpenseItem
