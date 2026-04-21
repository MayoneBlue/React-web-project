import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="he">
            <h2 className='kk'>Abstract</h2>
            <h4 className='kke'>Branches</h4>
        </div>
        <div className="he1">
        <h2 className='kk'>Resources</h2>
            <h4 className='kke1'><p className='ds'>Blog</p>
            <p>Help Center</p>
            <p className='dss'>Release Notes</p>
            <p className='dsa'>Status</p></h4>
        </div>
        <div className="he2">
        <h2 className='kk'>Community</h2>
            <h4 className='kke2'><p>Twitter</p>
            <p>Linkedln</p>
            <p>Facebook</p>
            <p>Dribble</p>
            <p>Podcast</p></h4>
        </div>
        <div className="he3">
        <h2 className='kk'>Company</h2>
            <h4 className='kke3'><p>About Us</p>
            <p>Careers</p>
            <p>Legal</p></h4>
            <div className="bbbb"></div>
            <div className="con">
                <h3>Contact Us</h3>
                <h4>info@abstract.com</h4>
            </div>
        </div>
        <div className="he4 ">
        <h2 className='kk'></h2>
            <h4 className='kke4'>
                <div className="m" style={{fontSize:20}}>o7</div>
                <div className="copy">
                <p className='ma'>  <div className="kil">c</div> Copyright 2022</p>
                    <p>Abstract Studio Design, inc.</p>
                    <p>All rights reserved</p>

                </div>
            </h4>
        </div>
      
    </div>
  )
}

export default Footer
