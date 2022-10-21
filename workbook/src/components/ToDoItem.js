import './ToDoItem.css'
const ToDoItem = ({ text }) => {
  return (
    <div className='todo-wrapper'>
      <div className='checkbox-wrapper'>
        <input className='checkbox' type='checkbox' />
        <label className='checkbox-label'></label>
      </div>
      <p>{text}</p>
    </div>
  )
}

export default ToDoItem
