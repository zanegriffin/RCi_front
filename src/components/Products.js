import React, {useState, useEffect} from 'react'
import Seats from './Products/Seats'
import Blankets from './Products/Blankets'
import '../style/Products.scss'
import {Accordion, Card, Button} from 'react-bootstrap'

const Component = () => {

    

    return(
        <>
            <Accordion>
                <Seats />
                <Blankets />
            </Accordion>
        </>
    )
}

export default Component