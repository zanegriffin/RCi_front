import './App.scss';
import {Switch, Route} from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import Home from './components/Home'
import Products from './components/Products'
import Recert from './components/Recert'
import Footer from './components/Footer'
var contentful = require('contentful')

function App() {
  
  let SPACE_ID = "cktwxgs5d88s"
  let ACCESS_TOKEN = "ydLPop29g0I18N8L2MVcklStutGv2R-VD3vQPz9M6Hc"

  let client = contentful.createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
  })

  client.getEntries()
  .then(function (entries) {
  // log the title for all the entries that have it
    entries.items.forEach(function (entry) {
      console.log(entry)
    })
  })

  return (
    <div className="App">
      <Header ></Header>
      <Switch>
        <Route exact path ='/' render={(rp) => <Home {...rp}/>} />
        <Route exact path ='/products' render={(rp) => <Home {...rp}/>} />
        <Route exact path ='/recertification' render={(rp) => <Home {...rp}/>} />
        <Route exact path ='/about' render={(rp) => <Home {...rp}/>} />
        <Route exact path ='/contact' render={(rp) => <Home {...rp}/>} />
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
