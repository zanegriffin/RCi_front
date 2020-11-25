import React, {useState, useEffect} from 'react'
import {Accordion, Card, Button, Modal} from 'react-bootstrap'
var contentful = require('contentful')

const Component = () => {

    const [nets, setNets] = useState([])
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
      getNetData()
      imageURL()
    }, [])
  
    //get data
    const getNetData = () => {
        client.getEntries({
          'content_type': 'netProduct'
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
          setNets(data)
            }
        )
    }

    //get images
    const imageURL = () => {
        client.getEntry('5pkUov7heWmYUtOHr0pp8F')
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

    //create product lists from data
    const renderNets = nets.map(net => {
        return (
            <div className='product-list window'>
                <p>{net.net}</p>
                <p>{net.width}</p>
                <p>{net.height}</p>
                <p>{net.color}</p>
            </div>
        )
    })

    //create images from contentful here
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
                <Accordion.Toggle as={Card.Header} eventKey="2">
                  WINDOW NETS
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                    <Card.Body>
                        <p>WINDOW NET INSTALLATION KIT 7651A</p>
                        <div className='product-list window'>
                            <p>NET</p>
                            <p>WIDTH</p>
                            <p>HEIGHT</p>
                            <p>COLOR</p>
                        </div>
                        {renderNets}
                        <div className='image-grid'>
                            {renderImages}
                        </div>
                    </Card.Body>
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