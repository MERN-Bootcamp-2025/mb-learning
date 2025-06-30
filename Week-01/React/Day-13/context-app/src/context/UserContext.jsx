import { createContext } from "react";
import { useState } from "react"

const UserContext = createContext();
export const UserProvider = ({children})=>{
    const [name, setName] = useState('');//to store user's name

    return(
        <UserContext.Provider value={{name, setName}}>
            {children}
        </UserContext.Provider>
    );

};

export default UserContext;