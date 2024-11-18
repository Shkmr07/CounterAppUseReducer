import { ThemeAndCounterContext } from "./Context"
import { useContext } from "react"
import './counter.css'

function CounterLogic() {

  const {themeAndcounter,dispatch} = useContext(ThemeAndCounterContext)

  return (
    <div className="counterLogic">
      <div><p>{themeAndcounter.counter}</p></div>
      <div>
        <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
        <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>
      </div>
    </div>
  )
}

export default CounterLogic