import React from 'react'

import FetchApi from './Fetchapi/FetchApi'

import { BrowserRouter, Link, Route, Routes} from 'react-router-dom'

import Home from './Home/Home'

import Details from './Details/Details'

import Contect from './Contact/Contect'

import About from './About/About'

import './style/App.css';

function App({menu}) {
  return (
    <div>
    {
      <BrowserRouter>
        {
          menu.map((item) =>(
            <Link to={item}>{item}</Link>
          ))
        }
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/Employee" element={<FetchApi/>}></Route>
          <Route exact path="/Details" element={<Details/>}></Route>
          <Route exact path="/Contact" element={<Contect/>}></Route>
          <Route exact path="/About" element={<About/>}></Route>
        </Routes>
      </BrowserRouter>
    }
    </div>
    
  )
}

export default App