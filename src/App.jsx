import Body from "./Components/Body";
import Header from "./Components/Header";
import {Provider} from 'react-redux'
import store from "./Utilities/Store";
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom"
import  Watch from './Components/Watch' 
import Search from "./Components/Search";
import Shimmer from "./Utilities/Shimmer";
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

    <div className="">
      <Provider store={store}>

      

  <Router >

    <Header />

    <Routes>

      <Route path="/" element={<Body />} />
      <Route path={"/watch"} element={<Watch />} />
      <Route path={"/search"} element={<Search />} />
      <Route path={"/shimmer"} element={<Shimmer />} />

    </Routes>

  </Router>
   

      </Provider>

    </div>

  )
}

export default App;