import React, { createContext, useState } from "react"

export const CrtContext = createContext()

const Context = ({children}) => {
  const [crtdata,setCrtdata] = useState([])

    return(
        <CrtContext.Provider value={{crtdata,setCrtdata}}>
            {children}
        </CrtContext.Provider>
    )
}

export default Context