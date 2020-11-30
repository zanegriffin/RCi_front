import React from 'react'
import '../style/Home.scss'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faClipboardList, faFileAlt, faQuestion} from '@fortawesome/free-solid-svg-icons'
import Connect from '../images/connect.png'
import Fade from 'react-reveal/Fade';
const Component = () => {




    return(
        <div className='home'>
            <Fade top>
            <h1>DRIVEN <span>TO</span> EXCELLENCE</h1>
            </Fade>
            <Fade left >
                <a href='https://rciracing.netlify.app/products' id='one' >
                    <div className='links'>
                        <FontAwesomeIcon icon={faClipboardList} size='6x' style={{color: 'grey'}}></FontAwesomeIcon>
                        <div>
                            <h1>ONLY THE FINEST PRODUCT SELECTION.</h1>
                            <p>CHECK OUT OUR ONLINE CATALOG</p>
                        </div>
                    </div>
                </a>
            </Fade>
            <Fade right cascade>
                <a href='https://rciracing.netlify.app/recertification' id='two' >
                <div className='links'>
                    <FontAwesomeIcon icon={faFileAlt} size='6x' style={{color: 'grey'}}></FontAwesomeIcon>
                    <div>
                        <h1>NEED CERTIFICATION?</h1>
                        <p>CHECK OUT OUR RECERTIFICATION OPTIONS </p>
                    </div>
                </div>
                </a>
                <a href='https://rciracing.netlify.app/support' id='three' >
                <div className='links'>
                <FontAwesomeIcon icon={faQuestion} size='6x' style={{color: 'grey'}}></FontAwesomeIcon>
                    <div>
                        <h1>PROBLEMS WITH PRODUCTS?</h1>
                        <p>HEAD OVER TO OUR SUPPORT PAGE</p>
                    </div>
                </div>
                </a>
            </Fade>
            <Fade bottom>
                <a href='https://rciracing.netlify.app/about' id='four' >
                <div className='links'>
                    <img src={Connect}></img>
                    <div>
                        <h1>2019 WINNER</h1>
                        <p>BEST NEW PERFORMANCE</p>
                        <p>EFI IN-TANK PUMP READY ALUMINUM FUEL CELL</p>
                    </div>
                </div>
                </a>
            </Fade>
        </div>
    )
}

export default Component