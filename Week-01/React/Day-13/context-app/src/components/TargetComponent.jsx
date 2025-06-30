import React from 'react'
import { useContext } from 'react'
import CounterContext from '../context/CounterContext'

//here we are using the value of the Provider i.e. count and setCount
const TargetComponent = () => {
    //useContext ma vo jayega jisse hume value mil rhi hai
    const {count, setCount} = useContext(CounterContext);
  return (
    <div>
        <h3>{count}</h3>
        <button onClick={()=>setCount(count+1)}>Increment +</button>
    </div>
  )
}

export default TargetComponent