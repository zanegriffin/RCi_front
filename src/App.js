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
import Support from './components/Support'
import Bounce from 'react-reveal/Bounce';

function App() {
  

  return (
    <div className="App">
      <Bounce right>
        <Header ></Header>
      </Bounce>
      <Switch>
        <Route exact path ='/' render={(rp) => <Home {...rp}/>} />
        <Route exact path ='/products' render={(rp) => <Products {...rp}/>} />
        <Route exact path='/support' render={(rp) => <Support/>}/>
        <Route exact path ='/recertification' render={(rp) => <Recert {...rp}/>} />
        <Route exact path ='/about' render={(rp) => <About {...rp}/>} />
        <Route exact path ='/contact' render={(rp) => <Contact {...rp}/>} />
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
