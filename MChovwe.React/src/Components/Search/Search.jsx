import React from 'react'
import './Search.css'
import { FaArrowRight } from 'react-icons/fa6'

const Search = () => {
  return (
    <div className='search'>
      <div className="cd" style={{fontSize:29}}><h1>How can we help?</h1></div>
      <div className="de">
        <div className="ch">
        <input type="search" name="text" id="sea" placeholder='Search'style={{fontSize:20}} />
        <div className="row">
            <FaArrowRight style={{fontSize:23}}/>
        </div>

        </div>
        </div>
    </div>
  )
}

export default Search
