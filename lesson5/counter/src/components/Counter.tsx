import { useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState<number>(0)

  function increaseCounter() {
    setCounter((counter) => counter + 1)
  }

  return (
    <>
      <p>{counter}</p>
      <button onClick={increaseCounter}>Click to increase</button>
    </>
  )
}

export default Counter
