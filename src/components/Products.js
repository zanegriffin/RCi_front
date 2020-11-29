import React, {useState, useEffect} from 'react'
import Seats from './Products/Seats'
import Blankets from './Products/Blankets'
import WindowNet from './Products/WindowNet'
import DriverRestraints from './Products/DriverRestraints'
import '../style/Products.scss'
import {Accordion, Card, Button} from 'react-bootstrap'
import file from '../images/RCI_CATALOG.pdf'
import {Zoom} from 'react-reveal';
import Jump from 'react-reveal/Jump';
const Component = () => {

    

    return(
        <div className='products'>
            <Zoom bottom>
            <Jump delay={4000} ><h1>DONWLOAD OUR COMPLETE CATAGLOG <a href={file} download target="_blank">HERE</a></h1></Jump>
            <Accordion>
                <Seats />
                <Blankets />
                <WindowNet />
                <DriverRestraints />
            </Accordion>
            <h1>READY TO PLACE AN ORDER? <a href='/contact'>CONTACT US</a></h1>
            </Zoom>
        </div>
    )
}

export default Component