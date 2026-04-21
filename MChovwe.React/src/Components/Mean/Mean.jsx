import React from 'react'
import './Mean.css'
import { FaArrowDown, FaArrowRight, FaKey } from 'react-icons/fa6'
import { SlPuzzle } from 'react-icons/sl'

const Mean = () => {
    return (
        <div className='mean'>
            <div className="ty">
                <div className="bb">
                    <div className="b3"><h2>Branches</h2></div>
                       <div className="b4">
                        <h4>Abstract Branches lets you manage, version, and document your designs in one place.</h4>
                      </div>
                      <div className="b5">
                        <ul className='yo'>
                            <li className='yoo'>Learn More
                                <FaArrowRight />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bb2">
                <div className="b9"><h2>Manage organizations, teams, and projects </h2></div>
                       <div className="b4">
                        <h4>Use Abstract Manage organizations, teams, and projects to organize your people and your work. </h4>
                      </div>
                      <div className="b5">
                        <ul className='yo'>
                            <li className='yoo'>Learn More
                                <FaArrowRight />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bb3">
                <div className="b8"><h2>Authenticate to Abstract</h2></div>
                       <div className="b4">
                       <FaKey/> <h4>Set up and configure SSO, SCIM, and Just-in-Time provisioning.</h4>
                      </div>
                      <div className="b5">
                        <ul className='yo'>
                            <li className='yoo'>Learn More
                                <FaArrowRight />
                                <SlPuzzle/>
                                {/* <HiUsers/> */}

                            </li>
                        </ul>
                    </div>  
                </div>
            </div>
            <div className="typ">
            <div className="bb">
                    <div className="b3"><h2>Manage your account</h2></div>
                       <div className="b4">
                        <h4>Configure your account settings, such as your email, profile details, and password.</h4>
                      </div>
                      <div className="b5">
                        <ul className='yo'>
                            <li className='yoo'>Learn More
                                <FaArrowRight />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bb2">
                <div className="b9"><h2>Manage billling </h2></div>
                       <div className="b4">
                        <h4>Change subscriptions and payment details. </h4>
                      </div>
                      <div className="b5">
                        <ul className='yo'>
                            <li className='yoo'>Learn More
                                <FaArrowRight />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bb3">
                <div className="b8"><h2>Abstract support</h2></div>
                       <div className="b4">
                        <h4>Get in touch with a human.</h4>
                      </div>
                      <div className="b5">
                        <ul className='yo'>
                            <li className='yoo'>Learn More
                                <FaArrowRight />
                            </li>
                        </ul>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default Mean
