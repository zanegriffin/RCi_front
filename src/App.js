import './App.scss';
import React from 'react'
import {Switch, Route} from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import Home from './components/Home'
import Products from './components/Products'
import Recert from './components/Recert'
import Footer from './components/Footer'


function App() {
  

  return (
    <div className="App">
      <Header ></Header>
      <Switch>
        <Route exact path ='/' render={(rp) => <Home {...rp}/>} />
        <Route exact path ='/products' render={(rp) => <Products {...rp}/>} />
        <Route exact path ='/recertification' render={(rp) => <Home {...rp}/>} />
        <Route exact path ='/about' render={(rp) => <Home {...rp}/>} />
        <Route exact path ='/contact' render={(rp) => <Home {...rp}/>} />
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
