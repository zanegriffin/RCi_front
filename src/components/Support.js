import React from 'react'
import {Link} from 'react-router-dom'
import {Accordion, Card} from 'react-bootstrap'
import support_logo from '../images/support.jpg'
import restraints1 from '../images/techstreet1.jpg'
import restraints2 from '../images/techstreet2.jpg'
import driverRestraints from '../images/driverrestraints2.jpg'
import sendingUnit from '../images/sendingunit.jpg'
import blanket from '../images/techblanket.jpg'
import '../style/Support.scss'

const Component = () => {
    return (
        <div className='support'>
            <img src={support_logo} alt='Suppport Center'/>
            <h1>WHAT DO YOU NEED HELP WITH TODAY?</h1>
            <Accordion>
                <Card>
                    <Accordion.Toggle as={Card.Header}  eventKey="0">
                    ENGINE DIAPERS
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <p>
                            Diaper is universal by design and all connecting hardware canlocate in the best accomodating locations. Diaper CANNOT touch headers!
                            </p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header}  eventKey="1">
                    WINDOW NETS
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <h3>Window Net Mounting Kit</h3>
                            <ol>
                                <li>Stretch window net across the outside of car window (RCI label out) to assure proper size.</li>
                                <li>Position upper rod (with latch) along upper roll cage with latch toward inside of car. Slip upper bushing (the one bushing with the larger size hole) on to end of rod, leaving 1/2" of rod showing beyond bushing. Mark location of upper bushing and latch on upper roll cage.</li>
                                <li>Weld upper bushing and flat male latch peice in marked locations.</li>
                                <li>Drill two 1/8" holes in the lower rod 1/4" on center from each end. Drill a 1/8" hole in the upper rod 1" from the end of the rod opposite the latch(make hole run from top down.</li>
                                <li>Run upper rod through the upper stitched channel of the window net (RCI tag facing outside) and through the upper bushing. Insert a lock pin in the hole in the rod and latch the rod down.</li>
                                <li>Run the lower rod through the bottom stitched channel channel of the window net. With the window net hanging, slide the lower bushing 1/3" in from each rod end and mark the top door bar for welding the lower bushings.</li>
                                <li>Remove the window net and weld the lower bushings in place. Run the lower rod through the bushings and window net, inserting the lock pins on the outside of the bushings.</li>
                                <li>To remove the window net, release the latch and the rod and net will come down. If the rod and net do not easily come down, adjust location of the bushing and latch if necessary.</li>
                                <li>Never use quick ties or other devices to keep the window net in place. The net must be easily released for quick exit.</li>
                            </ol>
                            <hr/>
                            <h3>WARNING</h3>
                            <p>Auto racing is hazardous. The user of this product assumes all risk in connection with it use. This product is sold without warrant, express or implied. No warranty or representation is made as to this products ability to prevent injury or death.</p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header}  eventKey="2">
                    STREET RESTRAINTS
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            <img src={restraints1}></img>
                            <img src={restraints2}></img>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header}  eventKey="3">
                    DRIVER RESTRAINTS
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body>
                            <h3>BAR ADJUSTER LACING</h3>
                            <ol>
                                <li>Lace webbing through adjuster.</li>
                                <li>With edges folded in, as shown, push webbing through notche in hardware.</li>
                                <li>Lace webbing back through adjuster, following same path as in instruction one.</li>
                                <li>Bring webbing over and through adjuster as shown, locking webbing in place.</li>
                            </ol>
                            <h3>INSTALLATION</h3>
                            <ol>
                                <li>Measuring for the lap belt: allow a minimum of 3" pull tab on each side. Measure the distance from mounting point to mounting point across the lap and add 6". Compare to belt length range.</li>
                                <li>Shoulder harness lengths are based on the distance from the adjuster to the mounting point, measured halfway between the collarbone and the chest nipple (approx. underarm level). The shorter the better here. Once installed, take up any slack in the chest harness by the mounting point.</li>
                                <li>Anchor the shoulder harness behind the driver and above a line drawn downward from the shoulder point at an angle about 40 degrees to the horizontal level with or no more than 4" below the shoulder line. Never anchor straight down behind the back.</li>
                                <li>Install the crotch strap at an angle parallel to the body line.</li>
                                <li>Do not allow any adjustment buckle to ride on the seat. Maintain a minimum opf 1 1/2" between the seat and the buckles.</li>
                                <li>Mounting brackets should be installed at the same angle as the webbing will be pulling under load.</li>
                            </ol>
                            <img src={driverRestraints}></img>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header}  eventKey="4">
                    FUEL CELL SENDING UNITS
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="4">
                        <Card.Body>
                            <p>0-90 Ohms | 0-Empty | 90-Full</p>
                            <p>RCI sending units will work with most GM factory gauges and all aftermarket gauges with 0-90 Ohm setup. The center post wires directly to the gauge and you must ground the sending unit from one of the outside bolts of the sending unit to your frame.</p>
                            <hr></hr>
                            <p>(Always make sure your fuel cell is properly grounded and vented)</p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header}  eventKey="5">
                    FUEL CELLS
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="5">
                        <Card.Body>
                            <p>Gasoline vapors are highly flammable. It burn violently and can cause serious injuries. Do not smoke near gasoline or when refueling. Keep sparks and flames away from gasoline. Open the fuel cell lid slowly and wait for the pressure to release before refueling. If you need a new fuel cell lid, get the right type so it will fit properly. Fuel cell and all gasoline containers should be kept well ventilated.</p>
                            <ol>
                                <li>Mount the fuel cell according to the requirements of your racing classification or sanctioning body, secure properly to the floor frame or chassis to prevent shifting. Some requirements describe a size of mounting straps.</li>
                                <li>Fuel cells should always have good solid floor support under the cell for the weight of the fuel. You must have support straps all around the cell. The top, bottom, and sides must have the proper support. The tabs on aluminum cells are for locating only.</li>
                                <li>Removal of any sharp metal edges from the area around the fuel cell is recommended to prevent penetration of the fuel cell upon impact. ALL FUEL CELLS MUST BE VENTILATED PROPERLY.</li>
                                <li>Attach a ground wire from cap flange to the vehicles frame.</li>
                                <li>Prior to use, flush the fuel cell with the fuel you will be using.</li>
                                <li>If your fuel cell has a sending unit, connect the center terminal to the terminal on the back of the gauge marked "S". Connect the outside terminal or screw to a ground near the fuel cell.</li>
                                <hr/>
                                <p>If your fuel cell has a sending unit, it is for a 0-90 ohm gauge. (0 ohms = EMPTY | 90 ohms = FULL)</p>
                                <p>Sending units work with most GM factory gauges with 0-90 ohms. The center post wires directly to the gauge and you must ground the sending unit from one of the outside bolts of the sending unit to your frame. Always make sure your fuel cell is properly grounded and vented.</p>
                                <hr/>
                                <li>Routinely check the fittings & cap ring for leaks and tighten as needed. All AN fittings need to be tightened to 15 pounds of torque.</li>
                                <li>Due to the nature of the material and construction of your fuel cell, some sagging may occur. This is a normal occurance and does not impact the performance of your cell.</li>
                                <li>Fuel cell comes supplied with a vent fitting and must be completely open to breathe properly. It is recommended that a vent hose is ran off the vent fitting 6" to 12" above the fuel cell, make one or two loops in the hose and run it down the floor and outside the vehicle. A vented fuel cap is not a sufficient standalone vent for the fuel cell.</li>
                                <li>Always run a high quality fuel filter.</li>
                                <li>Fuel cells are not street legal or D.O.T. approved.</li>
                                <li>When a vehicle abruptly changes directions, safety foams helps to reduce fuel surge or fuel sloshing inside the fuel cell which creates a baffle effect.</li>
                                <li>When a vehicle takes sudden impact, safety foam inside the fuel cell helps to reduce it's impact energy, thus reducing the risk of the fuel cell rupturing.</li>
                                <li>Safety foam will expand when it comes into contact with fuel. To function properly, the fuel cell should have no more than 75% of it's volume filled with safety foam.</li>
                                <li>Alcohol, Methanol, and Ethanol fuels will work with our safety foam, although the water content in these fuels may cause foam to deteriorate at a faster rate than normal.</li>
                                <li>Use of fuel additives may also increase safety foam deterioration rate.</li>
                                <li>It is recommended that you replace your fuel cells safety foam once per year.</li>
                            </ol>
                            <hr/>
                            <h3>WARNING</h3>
                            <p>Auto racing is hazardous. The user of this product assumes all risk in connection with it use. This product is sold without warrant, express or implied. No warranty or representation is made as to this products ability to prevent injury or death.</p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header}  eventKey="6">
                    SEATS & MOUNTS
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="6">
                        <Card.Body>
                            <p>RCI seats come with the necessary slots for a 5-point harness. The seats come with shoulder, lap, and submarine slots.</p>
                            <p>RCI Polyethylene seats sit 2" off of the floor.</p>
                            <p>RCI Drag Race Aluminum seats sit 1/8" off of the floor.</p>
                            <p>RCI polyethylene seat mounts are designed to be mounted on a flat surface. It is recommended that there be a back mount or roll bar for chair support upon acceleration.</p>
                            <p>RCI aluminum seats can be mounted directly to the floor. Also, the seat can be adapted to use universal type mounts by drilling ther appropriate holes into the seat.</p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header}  eventKey="7">
                    TRANSMISSION BLANKETS
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="7">
                        <Card.Body>
                            <img src={blanket}></img>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            <h3>NEED FURTHER ASSISTANCE?</h3>
            <a href='/contact'><button>CONTACT US</button></a>
        </div>
    )
}

export default Component