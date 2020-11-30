import React from 'react'
import header from '../images/header.png'
import '../style/Header.scss'
import {Nav, Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


const Component = () => {
    return(
        <div className='header'>
            <img src={header}/>
            <Navbar collapseOnSelect expand="lg">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto">
                    <Link to="/" style={{color: 'black'}}>HOME</Link>
                    <Link to="/products" style={{color: 'black'}}>PRODUCTS</Link>
                    <Link to="/support" style={{color: 'black'}}>SUPPORT</Link>
                    <Link to="/recertification" style={{color: 'black'}}>RECERTIFICATION</Link>
                    <Link to="/about" style={{color: 'black'}}>ABOUT US</Link>
                    <Link to="/contact" style={{color: 'black'}}>CONTACT</Link>
                  </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Component