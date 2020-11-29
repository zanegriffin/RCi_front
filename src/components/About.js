import React from 'react'
import '../style/About.scss'
import Connect from '../images/connect.png'
import Slide from 'react-reveal/Slide';

const Component = () => {
    return(
        <div className='about'>
            <Slide right>
                    <h1><span>DRIVEN</span> TO <span>EXCELLENCE</span></h1>
            </Slide>
            <Slide right cascade>
            <div>
                <p>RCI takes great pride in building the finest <span>high-quality</span> products at an <span>affordable</span> price while maintaining a high safety standard for all types of racing for <span>over 30 years.</span></p>
                <p>RCI's products are designed for racers in an <span>assortment</span> of different styles, sizes, colors, and performance levels: offering an ultimate level of <span>safety protection</span> in all types of racing.</p>
            </div>
            <div>
                <img src={Connect}></img>
                <div>
                    <h1>2019 WINNER</h1>
                    <p>BEST NEW PERFORMANCE</p>
                    <p>EFI IN-TANK PUMP READY ALUMINUM FUEL CELL</p>
                    <p>TIG-WELDED, LIGHTWEIGHT, AIRCRAFT ALUMINUM ALLOY, 12 BOLT FLUSH MOUNT LID ASSEMBLY WITH UNIVERSAL FIT.</p>
                </div>
            </div>
            </Slide>
        </div>
    )
}

export default Component