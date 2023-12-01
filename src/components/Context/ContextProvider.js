import React, { createContext, useState } from 'react'



 export const  LoginContaxt = createContext(null)
const ContextProvider = ({children}) => {
    

    const [account, setaccount] = useState()
  return (
    <div>
        <LoginContaxt.Provider value={{account, setaccount}}>
            {children}
        </LoginContaxt.Provider>
    </div>
  )
}

export default ContextProvider