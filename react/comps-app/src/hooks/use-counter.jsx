import { useState,useEffect } from "react";

//1.MAke a function called useSOmethijng
const useCounter =(initialCount)=>{
    const [count, setCount] = useState(initialCount);

    useEffect(()=>{

        console.log(count)
    },[count])

    const increment =()=>{
        setCount(count+1);
    }

    //4. to avoid the not defined errors return a object that will consists of those variables
    return{
        count,
        increment
    }

}

export default useCounter;