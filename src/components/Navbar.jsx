import './navbar.css'
import { useContext } from 'react'
import { ThemeAndCounterContext } from './Context'


function Navbar() {

  const {themeAndcounter,dispatch} = useContext(ThemeAndCounterContext)
  return (
    <nav>
        <h2>Counter App</h2>
        <div>
            <p>set the theme</p>
            <input type="checkbox" id='inp' checked={themeAndcounter.theme === 'dark'} onChange={(e)=>(
              dispatch({type: (e.target.checked?'light':'dark')})
            )}/>
            <label htmlFor="inp" className='toggle'></label>
        </div>
    </nav>
  )
}

export default Navbar