import { useState } from 'react'

interface student {
  name: string
  age: number
}

const Student = () => {
  const [state, setState] = useState<student>({ name: 'John', age: 20 })

  const increaseAge = () => {
    setState((prev) => {
      return { name: prev.name, age: ++prev.age }
    })
  }

  return (
    <>
      <p>
        Hello my name is:{state.name}. I'm {state.age} years old
      </p>
      <button onClick={increaseAge}>increase age</button>
    </>
  )
}

export default Student
