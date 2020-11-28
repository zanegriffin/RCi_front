import React from 'react'
import '../style/Contact.scss'
import map from '../images/map.svg'

const Component = () => {
    return(
        <div className='contact'>
            <h1>HAVE QUESTIONS OR WANT TO PLACE AN ORDER?</h1>
            <h1>HERE'S HOW TO CONTACT US.</h1>
            <div>
                <img src={map}></img>
                <h3><span>EMAIL:</span> sales@rciracing.com</h3>
                <h3><span>PHONE:</span> <a href='tel:+19039391908'>(903)-939-1908</a></h3>
                <div className='div'>
                    <div>
                        <h3>PHYSICAL LOCATION</h3>
                        <p>RCI</p>
                        <p>13960 State HWY 64 West</p>
                        <p>Tyler, Texas 75704</p>
                    </div>
                    <div>
                        <h3>BILLING ADDRESS</h3>
                        <p>RCI</p>
                        <p>PO Box 1297</p>
                        <p>Tyler, Texas 75710</p>
                    </div>
                </div>
            </div>
            <p>HOURS:</p>
            <div className='hours'>
                <ul>
                    <li>MONDAY</li>
                    <li>TUESDAY</li>
                    <li>WEDNESDAY</li>
                    <li>THURSDAY</li>
                    <li>FRIDAY</li>
                    <li>SATDAY</li>
                    <li>SUNDAY</li>
                </ul>
                <ul>
                    <li>8AM-5PM</li>
                    <li>8AM-5:30PM</li>
                    <li>8AM-5:30PM</li>
                    <li>8AM-5:30PM</li>
                    <li>CLOSED</li>
                    <li>CLOSED</li>
                    <li>CLOSED</li>
                </ul>
            </div>
        </div>
    )
}

export default Component