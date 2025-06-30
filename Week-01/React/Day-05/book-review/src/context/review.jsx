import { createContext, useState } from "react";

const ReviewsContext = createContext();

const Provider =({children})=>{
   const [count, setCount] = useState(5);
   const valueToShare = {
    count,
    incrementCount:()=>{
        setCount(count +1);
    }
   }

   return <ReviewsContext.Provider value={valueToShare}>
    {children}
   </ReviewsContext.Provider>
}

export { Provider };
export default ReviewsContext;