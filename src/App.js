import React, { useState,useContext ,useEffect} from 'react'
import StorContext,{MyStore} from "./context/index";
 import ProductList from "./components/ProductList"
 import SideMenu from "./components/SideMenu"
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import "./App.css"
import ContactUs from './components/ContactUs';
import SaleProducts from './components/SaleProducts';
import AboutUs from './components/AboutUs';
import NewCollection from './components/NewCollection';
import ItemsSelected from './components/ItemsSelected';

function App() {
 useContext(StorContext)

 const [cardList,setCardList]=useState([])
 const [data, setData]=useState([])
 const [count,setCount]=useState(0)
console.log(cardList);

  return (
    <div  id="app" style={({ height: "100vh" }, { display: "flex" })}>

<StorContext.Provider value={{MyStore,cardList,count,setCardList,setCount,data, setData }}>
  
<SideMenu/>
    <Routes>
      {/* <Route path='/' element={<SideMenu/> }/> */}
      <Route path='/' element={ <Home />}/>
      <Route path='/products' element={ <ProductList/>}/>
      <Route path='/contact-us' element={ <ContactUs/>}/>
      <Route path='/about-us' element={ <AboutUs/>}/>
      <Route path='/new-collection' element={ <NewCollection/>}/>
      <Route path='/shop-list' element={ <ItemsSelected/>}/>
      <Route path='/sale' element={ <SaleProducts/>}/>
     
    </Routes>
    
      </StorContext.Provider>
      
   
    </div>
  )
}

export default App

