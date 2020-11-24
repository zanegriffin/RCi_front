import React, {useState, useEffect} from 'react'
import {Accordion, Card, Button, Modal} from 'react-bootstrap'
var contentful = require('contentful')

const Component = () => {

    const [seats, setSeats] = useState([])
    const [images, setImages] = useState([])
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
      getSeatsData()
      imageURL()
    }, [])
  
    const getSeatsData = () => {
        client.getEntries({
          'content_type': 'seatProduct'
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
          setSeats(data)
            }
        )
    }

    const imageURL = () => {
        client.getEntry('prSriDzbQ7pS2VCOUpEvB')
        .then((assets) => {
        console.log(assets)
        let images = []
          assets.fields.images.forEach(function (asset) {
            console.log(asset.fields)
            images.push(asset.fields)
          })
          console.log(images)
          setImages(images)
        })
    } 

    const renderSeats = seats.map(seat => {
        return (
            <div className='product-list seats'>
                <p>{seat.name}</p>
                <p>{seat.width}/{seat.height}</p>
                <p>{seat.weight}</p>
                <p>{seat.seat}</p>
                <p>{seat.cover}</p>
            </div>
        )
    })

    const renderImages = images.map(image => {
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
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  SEATS & COVERS
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <div className='product-list seats'>
                            <p>TYPE</p>
                            <p>W/H IN.</p>
                            <p>WEIGHT</p>
                            <p>SEAT</p>
                            <p>COVER</p>
                        </div>
                        {renderSeats}
                        <div className='image-grid'>
                            {renderImages}
                        </div>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
              

            {/* <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                    <Modal.Title>{currentImage.title}</Modal.Title>
              </Modal.Header>
              <img src={currentImage ? currentImage.file.url : ''} />
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal> */}
        </>
    )
}
export default Component