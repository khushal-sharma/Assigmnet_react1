import { useState } from "react"
import './Counter.css'
const Counter = () => {
    const [count, setCount] = useState(0)

  return (
    <div className="container">
        <div className="Main">
        <h1>{count}</h1>
        <div>
        <button onClick={()=>setCount(count+1)} >Increment</button>
      <button onClick={()=>setCount(count-1)} >Decrement</button>

        </div>
     
    </div>

    </div>
    
  )
}
export default Counter
