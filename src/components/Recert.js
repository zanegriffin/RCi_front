import React from 'react'
import {Accordion, Card} from 'react-bootstrap'
import '../style/Recert.scss'

const Component = () => {
    return(
        <div className='recert'>
            <h1>NEED TO BE RECERTIFIED?</h1>
            <h1>NO PROBLEM.</h1>
            <p>WE HAVE <span>CERTIFICATION OPTIONS</span> FOR SEAT BELTS, ENGINE DIAPERS AND TRANSMISSION BLANKETS.</p>
            <Accordion>
                <Card>
                    <Accordion.Toggle as={Card.Header}  eventKey="0">
                    TRANS BLANKET SFI 4.1
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <h3>
                            To have your RCI Trans Blanket re-certified, please send them to:
                            </h3>
                            <div>
                                <p>ATTN: BLANKET RCI</p>
                                <p>13960 State Hwy 64 West</p>
                                <p>Tyler, Texas 75704</p>
                            </div>
                            <p>
                            Please enclose your complete Trans Blanket along with a check, money order, credit card number, or daytime phone number for us to call and get your credit card information. For Texas Customers, the charge is $92.02, which includes sales tax and return shipping costs. For US customers not in the state of Texas, the charge is $85.00 US - this includes the freight back to you. For Canadian customers, the charge is $125.00 US, including freight. This service takes 3 to 4 weeks from the time we receive your Blanket. Please allow 7 to 10 days shipping from us to you. Total process should take around 3 to 5 weeks. Your Blanket will be shipped back to you via FedEx Ground, we will need a physical address for the return shipment.
                            </p>
                            <p>
                            The Trans Blanket shall be inspected for no modifications and no deterioration every 2 years. If it is acceptable it will be recertified and returned to you. If the Trans Blanket is not acceptable, it must be replaced. A RCI sales personnel will contact you to discuss the replacement of the Trans Blanket. When it is determined to be acceptable for continued service, a new conformance label marked with the inspection date shall be used.
                            </p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header}  eventKey="1">
                    ENGINE DIAPER SFI 7.2
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <h3>
                            To have your RCI Engine Diaper re-certified, please send them to:
                            </h3>
                            <div>
                                <p>ATTN: DIAPER RCI</p>
                                <p>13960 State Hwy 64 West</p>
                                <p>Tyler, Texas 75704</p>
                            </div>
                            <p>
                            Please enclose your complete Engine Diaper along with a check, money order, credit card number, or daytime phone number for us to call and get your credit card information. For Texas Customers, the charge is $92.02, which includes sales tax and return shipping costs. For US customers not in the state of Texas, the charge is $85.00 US - this includes the freight back to you. For Canadian customers, the charge is $125.00 US, including freight. This service takes 3 to 4 weeks from the time we receive your Diaper. Please allow 7 to 10 days shipping from us to you. Total process should take around 3 to 5 weeks. Your Diaper will be shipped back to you via FedEx Ground, we will need a physical address for the return shipment.
                            </p>
                            <p>
                            The engine diaper shall be inspected for no modifications and no deterioration every 5 years. If it is acceptable it will be recertified and returned to you. If the engine diaper is not acceptable, it must be replaced. A RCI sales personnel will contact you to discuss the replacement of the engine diaper. When it is determined to be acceptable for continued service, a new conformance label marked with the inspection date shall be used.
                            </p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header}  eventKey="2">
                    SEAT BELT SFI 16.1
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            <h3>
                            To have your RCI belts re-certified, please send them to:
                            </h3>
                            <div>
                                <p>ATTN: REWEB RCI</p>
                                <p>13960 State Hwy 64 West</p>
                                <p>Tyler, Texas 75704</p>
                            </div>
                            <p>
                            Please enclose your complete belt along with a check, money order, credit card number, or daytime phone number for us to call and get your credit card information. For Texas Customers, the charge is $64.95, which includes sales tax and return shipping costs. For US customers not in the state of Texas, the charge is $60.00 US - this includes the freight back to you. For Canadian customers, the charge is $85.00 US, including freight. This service takes 3 to 4 weeks from the time we receive your belts. Please allow 7 to 10 days shipping from us to you. Total process should take around 3 to 5 weeks. Your belts will be shipped back to you via FedEx Ground, we will need a physical address for the return shipment.
                            </p>
                            <h3>OTHER MANUFACTURER'S SEAT BELTS</h3>
                            <p>
                            RCI will take other manufacturer's belts that need recertification in on trade for RCI belts, at a cost of $100.00 US for Cam-Lock style or $60.00 US for Latch style. This includes freight back to you.
                            </p>
                            <h3>FAQ</h3>
                            <p>Can you ship my belts back to me next-day air or second-day air? <span>Yes, the cost will be added to the recertification cost.</span></p>
                            <p>I have brand new belts but the date has expired, can I get new tags? <span>We are sorry, but your belts will have to be treated as a regular recertification.</span></p>
                            <p>What colors do you offer? <span>RCI offers Red, Blue, Black or Platinum.</span></p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    )
}

export default Component