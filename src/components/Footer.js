import React from 'react'
import logo from '../images/logo.svg'
import '../style/Footer.scss'

const Component = () => {
    return(
        <div className='footer'>
            <nav>
                <div>
                    <a>HOME</a>
                    <a>PRODUCTS</a>
                    <a>SUPPORT</a>
                </div>
                <div>
                    <a>RECERTIFICATION</a>
                    <a>ABOUT US</a>
                    <a>CONTACT</a>
                </div>
            </nav>
            <p>© 2020 RACER’S CHOICE, INC. All rights reserved</p>
        </div>
    )
}

export default Component