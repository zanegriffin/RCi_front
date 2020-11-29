import React from 'react'
import '../style/Home.scss'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faClipboardList, faFileAlt, faQuestion} from '@fortawesome/free-solid-svg-icons'
import Connect from '../images/connect.png'

const Component = () => {




    return(
        <div className='home'>
            <h1>DRIVEN <span>TO</span> EXCELLENCE</h1>
            <Link to='/products'>
            <div>
                <FontAwesomeIcon icon={faClipboardList} size='6x' style={{color: 'grey'}}></FontAwesomeIcon>
                <div>
                    <h1>ONLY THE FINEST PRODUCT SELECTION.</h1>
                    <p>CHECK OUT OUR ONLINE CATALOG</p>
                </div>
            </div>
            </Link>
            <Link to='/recertification'>
            <div>
                <FontAwesomeIcon icon={faFileAlt} size='6x' style={{color: 'grey'}}></FontAwesomeIcon>
                <div>
                    <h1>NEED CERTIFICATION?</h1>
                    <p>CHECK OUT OUR RECERTIFICATION OPTIONS </p>
                </div>
            </div>
            </Link>
            <Link to='/support'>
            <div>
            <FontAwesomeIcon icon={faQuestion} size='6x' style={{color: 'grey'}}></FontAwesomeIcon>
                <div>
                    <h1>PROBLEMS WITH PRODUCTS?</h1>
                    <p>HEAD OVER TO OUR SUPPORT PAGE</p>
                </div>
            </div>
            </Link>
            <Link to='/about'>
            <div>
                <img src={Connect}></img>
                <div>
                    <h1>2019 WINNER</h1>
                    <p>BEST NEW PERFORMANCE</p>
                    <p>EFI IN-TANK PUMP READY ALUMINUM FUEL CELL</p>
                </div>
            </div>
            </Link>
        </div>
    )
}

export default Component