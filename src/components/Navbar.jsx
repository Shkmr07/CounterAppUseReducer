import './navbar.css'

function Navbar() {
  return (
    <nav>
        <h2>Counter App</h2>
        <div>
            <input type="checkbox" id='inp'/>
            <label htmlFor="inp" className='toggle'></label>
        </div>
    </nav>
  )
}

export default Navbar