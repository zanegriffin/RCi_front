import React, {useState, useEffect} from 'react'
import Seats from './Products/Seats'
import Blankets from './Products/Blankets'
import WindowNet from './Products/WindowNet'
import DriverRestraints from './Products/DriverRestraints'
import '../style/Products.scss'
import {Accordion, Card, Button} from 'react-bootstrap'
import file from '../images/RCI_CATALOG.pdf'

const Component = () => {

    

    return(
        <div className='products'>
            <h1>DONWLOAD OUR COMPLETE CATAGLOG <a href={file} download target="_blank">HERE</a></h1>
            <Accordion>
                <Seats />
                <Blankets />
                <WindowNet />
                <DriverRestraints />
            </Accordion>
            <h1>READY TO PLACE AN ORDER? <a href='/contact'>CONTACT US</a></h1>

        </div>
    )
}

export default Component