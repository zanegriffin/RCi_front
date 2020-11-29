import React from 'react'
import '../style/Contact.scss'
import map from '../images/map.svg'
import Slide from 'react-reveal/Slide';
const Component = () => {
    return(
        <>
       
        <div className='contact'>
        <Slide left>
            <h1>HAVE QUESTIONS OR WANT TO PLACE AN ORDER?</h1>
            <h1>HERE'S HOW TO CONTACT US.</h1>
        </Slide>
        <Slide right>
            <div>
                <img src={map}></img>
                <h3 className='info'><span>EMAIL:</span> sales@rciracing.com</h3>
                <h3 className='info'><span>PHONE:</span> <a href='tel:+19039391908'>(903)-939-1908</a></h3>
                <br/>
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
        </Slide>
            <br/>
        <Slide left>
            <p className='hours-list'>HOURS</p>
            <div className='hours hours-list'>
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
        </Slide>
        </div>
        
        </>
    )
}

export default Component