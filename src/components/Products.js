import React, {useState, useEffect} from 'react'
import Seats from './Products/Seats'
import Blankets from './Products/Blankets'
import WindowNet from './Products/WindowNet'
import DriverRestraints from './Products/DriverRestraints'
import '../style/Products.scss'
import {Accordion, Card, Button} from 'react-bootstrap'

const Component = () => {

    

    return(
        <>
            <Accordion>
                <Seats />
                <Blankets />
                <WindowNet />
                <DriverRestraints />
            </Accordion>
        </>
    )
}

export default Component