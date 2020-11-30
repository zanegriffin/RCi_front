import React, {useState, useEffect} from 'react'
import {Accordion, Card, Button, Modal} from 'react-bootstrap'
var contentful = require('contentful')

const Component = () => {

    const [fivePoints, setFivePoints] = useState([])
    const [offRoad, setOffRoad] = useState([])
    const [boltIn, setBoltIn] = useState([])
    const [fivePointImages, setFivePointImages] = useState([])
    const [show, setShow] = useState(false);
    const [currentImage, setCurrentImage] = useState({"title": '', "file": {"url":''}})

    const handleClose = () => setShow(false);
    const handleShow = (image) => {
        setShow(true)
        setCurrentImage(image)
    };

    let SPACE_ID = "t6yee0she1fv"
    let ACCESS_TOKEN = "RDs0hQukEEAtacjZYPm5YNN6jKUOZqujInhJ8vsq958"
  
    let client = contentful.createClient({
      space: SPACE_ID,
      accessToken: ACCESS_TOKEN
    })
  
    useEffect(() => {
      get5Point()
      getOffRoad()
      getBoltIn()
      imageFivePoint()
    }, [])
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //get data
    const get5Point = () => {
        client.getEntries({
          'content_type': 'junior5PointProduct'
        })
        .then(function (entries) {
        // log the title for all the entries that have it
          console.log(entries.items)
          let data = []
          entries.items.forEach(function (entry) {
            console.log(entry.fields)
            data.push(entry.fields)
          })
          console.log(data)
          setFivePoints(data)
            }
        )
    }
    const getOffRoad = () => {
        client.getEntries({
          'content_type': 'offRoadBeltProduct'
        })
        .then(function (entries) {
        // log the title for all the entries that have it
          console.log(entries.items)
          let data = []
          entries.items.forEach(function (entry) {
            console.log(entry.fields)
            data.push(entry.fields)
          })
          console.log(data)
          setOffRoad(data)
            }
        )
    }
    const getBoltIn = () => {
        client.getEntries({
          'content_type': 'restraintProduct'
        })
        .then(function (entries) {
        // log the title for all the entries that have it
          console.log(entries.items)
          let data = []
          entries.items.forEach(function (entry) {
            console.log(entry.fields)
            data.push(entry.fields)
          })
          console.log(data)
          setBoltIn(data)
            }
        )
    }
////////////////////////////////////////////////////////////////////////////////////////////////////////
    //get images
    const imageFivePoint = () => {
        client.getEntry('5pkUov7heWmYUtOHr0pp8F')
        .then((assets) => {
        console.log(assets)
        let images = []
          assets.fields.images.forEach(function (asset) {
            console.log(asset.fields)
            images.push(asset.fields)
          })
          console.log(images)
          setFivePointImages(images)
        })
    } 
///////////////////////////////////////////////////////////////////////////////////////////////////////
    //create product lists from data
    const renderFivePoint = fivePoints.map(fivePoint => {
        return (
            <div className='product-list blanket'>
                <p>{fivePoint.color}</p>
                <p>{fivePoint.type}</p>
                <p>{fivePoint.pullUpLap}</p>
            </div>
        )
    })

    const renderOffRoad = offRoad.map(belt => {
        return (
            <div className='product-list blanket'>
                <p>{belt.color}</p>
                <p>{belt.part}</p>
            </div>
        )
    })

    const renderBoltIn = boltIn.map(belt => {
        return (
            <div className='product-list window'>
                <p>{belt.color}</p>
                <p>{belt.type}</p>
                <p>{belt.pullDownLap}</p>
                <p>{belt.pullUpLap}</p>
            </div>
        )
    })
///////////////////////////////////////////////////////////////////////////////////////////////////////
    //create fivePointImages from contentful here
    const renderImages = fivePointImages.map(image => {
        return (
            <div>
            <div className='image-container' onClick={() => handleShow(image)}>
                <img src={image.file.url} />
            </div>
            <p>{image.title}</p>
            </div>
        )
    })

    return (
        <>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="3">
                  DRIVER RESTRAINTS
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                    <Accordion>
                        <Card className='sub-accordion'>
                            <Accordion.Toggle as={Card.Header} eventKey="4">
                            JUNIOR 5-POINT
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="4">
                                <Card.Body>
                                    <div className='product-list blanket'>
                                        <p>COLOR</p>
                                        <p>TYPE</p>
                                        <p>PULL UP LAP</p>
                                    </div>
                                    {renderFivePoint}
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className='sub-accordion'>
                            <Accordion.Toggle as={Card.Header} eventKey="5">
                            NON SFI Off-Road Comp Belts
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="5">
                                <Card.Body>
                                    <div className='product-list blanket'>
                                        <p>COLOR</p>
                                        <p>PART</p>
                                        
                                    </div>
                                    {renderOffRoad}
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className='sub-accordion'>
                            <Accordion.Toggle as={Card.Header} eventKey="6">
                            3" 5-POINT WRAP-AROUND/BOLT IN
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="6">
                                <Card.Body>
                                    <div className='product-list window'>
                                        <p>COLOR</p>
                                        <p>TYPE</p>
                                        <p>PULL DOWN LAP</p>
                                        <p>PULL UP LAP</p>
                                    </div>
                                    {renderBoltIn}
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        
                    </Accordion>
                </Accordion.Collapse>
            </Card>
              

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                    <Modal.Title>{currentImage.title}</Modal.Title>
              </Modal.Header>
              <img src={currentImage ? currentImage.file.url : ''} />
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
        </>
    )
}
export default Component