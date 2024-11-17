import { createContext,useReducer,useEffect } from "react"

const ThemeContext = createContext()

function reducer(state,action){
    switch(action){
        case 'light':
            return 'dark'
        case 'dark':
            return 'light'
        default:
            return state
    }
}


function Context({children}) {

    let initialState = localStorage.getItem('theme') || 'light'
  
    const [theme,dispatch] = useReducer(reducer,initialState)

    useEffect(()=>{
        localStorage.setItem('theme',theme)

        document.body.className = theme

    },[theme])
  
    return (
        <ThemeContext.Provider value={{theme,dispatch}} >
            {children}
        </ThemeContext.Provider >
  )
}

export {ThemeContext,Context}