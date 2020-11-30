import React from 'react'
import {Accordion, Card} from 'react-bootstrap'

const Component = () => {
    return (
        <>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="7">
                  CUSTOM FUEL CELLS
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="7">
                    <Card.Body>
                        <p>RCI will make custom aluminum fuel cells on request. We ask that you prepare in
advance with the following information before calling us to request a custom fuel cell.
Please consult our diagram (below) for determining which values would be considered length, width,
or height -- as it relates to the front of the vehicle.</p>
                        <p>Have the following information ready:</p>
                        <ul>
                            <li>Length</li>
                            <li>Width</li>
                            <li>Height</li>
                            <li>Fitting Size & Placement</li>
                            <li>Lid Type & Placement</li>
                        </ul>
                        <p>Have your information ready and call us to place your order.
Custom cells are usually made the same week of the order.</p>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </>
    )
}

export default Component