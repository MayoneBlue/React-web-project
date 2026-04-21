import React from 'react'
import './Header.css'

const Header = () => { 
  return (
    <div className='header'>
      <div className="head">
        <div className="ab">
          <div className="n" style={{color:'black', fontSize:20}}>o7</div>
          <h2>Abstract</h2></div>
        <hr style={{height:25}} />
        <div className="bc"><h2>Help Center</h2></div>
      </div>
      <div className="sign">
        <ul>
          <li style={{fontSize:20}}>Submit a request</li>
          <li style={{fontSize:20, width:120, backgroundColor:'blue', border:'none'}} >Sign in</li>
        </ul>
      </div>
      
    </div>
  )
}

export default Header
