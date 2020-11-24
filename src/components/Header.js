import React from 'react'
import header from '../images/header.png'
import '../style/Header.scss'
import {Nav, Navbar} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Component = () => {
    return(
        <div className='header'>
            <img src={header}/>
            <Navbar collapseOnSelect expand="lg">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="/" style={{color: 'black'}}>HOME</Nav.Link>
                    <Nav.Link href="/products" style={{color: 'black'}}>PRODUCTS</Nav.Link>
                    <Nav.Link href="/recertification" style={{color: 'black'}}>RECERTIFICATION</Nav.Link>
                    <Nav.Link href="/about" style={{color: 'black'}}>ABOUT US</Nav.Link>
                    <Nav.Link href="/contact" style={{color: 'black'}}>CONTACT</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Component