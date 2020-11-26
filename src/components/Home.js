import React from 'react'
import '../style/Home.scss'
import {Link} from 'react-router-dom'

const Component = () => {




    return(
        <div className='home'>
            <h1>DRIVEN <span>TO</span> EXCELLENCE</h1>
            <Link to='/products'>
            <div>
                <h1>ONLY THE FINEST PRODUCT SELECTION.</h1>
                <p>CHECK OUT OUR ONLINE CATALOG</p>
            </div>
            </Link>
            <Link to='/recertification'>
            <div>
                <h1>NEED CERTIFICATION?</h1>
                <p>CHECK OUT OUR RECERTIFICATION OPTIONS </p>
            </div>
            </Link>
            <Link to='/'>
            <div>
                <h1>PROBLEMS WITH PRODUCTS?</h1>
                <p>HEAD OVER TO OUR SUPPORT PAGE</p>
            </div>
            </Link>
            <Link to='/about'>
            <div>
                <h1>2019 WINNER</h1>
                <p>BEST NEW PERFORMANCE</p>
                <p>EFI IN-TANK PUMP READY ALUMINUM FUEL CELL</p>
            </div>
            </Link>
        </div>
    )
}

export default Component