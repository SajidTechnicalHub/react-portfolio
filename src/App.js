import React from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Components/Home/Home';
import './Components/Home/Home.css'
import Cart from './Components/Cart/Cart';
import ApiCall from './ApiCall';
const App = () => {
  return (
    <div>
      <Home />
     <ApiCall />
    </div >
  )
}

export default App

