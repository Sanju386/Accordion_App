import React, { createContext } from 'react'
import { useState } from 'react'

export const AppContext = createContext()

const Context = ({children}) => {

    const[expand,setExpand] = useState(false)  

  return (
    <AppContext.Provider value={{expand,setExpand}}>{children}</AppContext.Provider>
  )
}

export default Context
