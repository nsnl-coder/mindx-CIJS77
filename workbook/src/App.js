import Input from './components/Input'
import ToDoItem from './components/ToDoItem'
import ToDoList from './components/ToDoList'

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '100vh',
      }}
    >
      <div>
        <Input />
        <ToDoList />
      </div>
    </div>
  )
}

export default App
