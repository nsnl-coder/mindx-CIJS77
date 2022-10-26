import ToDoItem from './ToDoItem'

import './ToDoList.css'

const MOCKUP_DATA = [
  'Clean up bed room',
  'Buy Some Milk',
  'Learn TypeScript',
  'Learn Nodejs',
  'Leanr NextJs',
]

const ToDoList = () => {
  return (
    <div className='todolist'>
      {MOCKUP_DATA.map((el) => (
        <ToDoItem text={el} />
      ))}
    </div>
  )
}

export default ToDoList
