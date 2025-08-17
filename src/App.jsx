import Body from "./Components/Body";
import Header from "./Components/Header";
import {Provider} from 'react-redux'
import store from "./Utilities/Store";
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom"
import  Watch from './Components/Watch' 
const App = () => {

  
    /* 
    *Header
      
    *Body
      -SideBar
      -MainContainer
        -Buttons
        -VideoContainer
    *Footer

    */
  

  return (

    <div>
      <Provider store={store}>

      

  <Router >

    <Header />

    <Routes>

      <Route path="/" element={<Body />} />
      <Route path={"/watch"} element={<Watch />} />

    </Routes>

  </Router>
   

      </Provider>

    </div>

  )
}

export default App;