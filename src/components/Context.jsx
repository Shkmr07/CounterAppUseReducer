import { createContext, useReducer, useEffect } from "react";

const ThemeAndCounterContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "light":
        return {...state,theme:'dark'}
    case "dark":
        return {...state,theme:'light'}
    case "increment":
      return {...state,counter:state.counter+1}
    case "decrement":
      return {...state,counter:state.counter-1}
    default:
      return state;
  }
}

function Context({ children }) {
  let initialState = localStorage.getItem("theme") || "light";

  const [themeAndcounter, dispatch] = useReducer(reducer, {
    theme: initialState,
    counter: 0,
  });

  useEffect(() => {
    localStorage.setItem("theme", themeAndcounter.theme);

    document.body.className = themeAndcounter.theme;
  }, [themeAndcounter.theme]);

  return (
    <ThemeAndCounterContext.Provider value={{ themeAndcounter, dispatch }}>
      {children}
    </ThemeAndCounterContext.Provider>
  );
}

export { ThemeAndCounterContext, Context };
