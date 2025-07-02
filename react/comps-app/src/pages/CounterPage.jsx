import React from 'react'
// import { useEffect } from 'react';
// import { useState } from 'react';
import Button from '../components/Button';
import useCounter from '../hooks/use-counter';



const CounterPage = ({initialCount}) => {
    //2. figure out the non-jsx code realted to that state
    //3. cut them and paste them in the funtion defined above
    

    //5. call the above "custom hook" and destructure all the variables you need
    //6. aslso pass the variables that your custom hook needs in the argument
    const {count, increment} = useCounter(initialCount);
  return (
    <div>
        {count}
        <Button onClick={increment} >Increment</Button>
    </div>
  )
}

export default CounterPage