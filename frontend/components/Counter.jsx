import { useCanister } from "@connect2ic/react"
import React, { useEffect, useState } from "react"

const Counter = () => {
  /*
  * This how you use canisters throughout your app.
  */
  const [counter] = useCanister("counter")
  const [count, setCount] = useState()

  const function_for_setCount = async () => {
    const freshCount = await counter.getValue()
    setCount(freshCount)
  }

  const increment = async () => {
    await counter.increment()
    await function_for_setCount()
  }

  useEffect(() => {
    if (!counter) {
      return
    }
    function_for_setCount()
  }, [counter])

  return (
    
    <div className="example">\
    <h2></h2>
      <p style={{ fontSize: "2.5em" }}>{count?.toString()}</p>
      <button className="connect-button" onClick={increment}>+</button>
    </div>
  )
}

export { Counter }