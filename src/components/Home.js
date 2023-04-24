import NavBar from './NavBar';
import React, { useContext } from 'react';
import StorContext from '../context'
import "./home.css"
import CatImage from "./wemen.jpg"
import MenCatgory from "./menCat.jpg"
import Jewelery from "./jwel.jpg"
import Electro from "./electro.jpg"
const Home = () => {
  const {data, setData}= useContext(StorContext)
console.log(data);
const currentAdress=window.location.href
console.log(currentAdress);
  return (
    <div className='home-page'>
<NavBar/>
{/* style={{backgroundImage:"url(image/home.jpg)"}} */}
<div className='out-box'><div className='in-box'>
<h1> 20% OFF ALL </h1>
<p>My Store</p>
<h2> Use Coupon code : BJHD6453HGXC%20</h2>
  </div> </div>
  <div className='home-box' >
{/* <img className='homePage' src='image/home.jpg' alt='imag'/> */}
<div class="col">
        <div class="card" style={{width: "20rem"}}>

  <img class="card-img-top" src={MenCatgory} alt="Card"/>
  <div class="card-block">
    <h4 class="card-title">MEN'S CLOTHING</h4>
    <p class="card-text">new collections</p>
    <a href="/products"  class="add-to-cart btn btn-primary"> show more </a>
  </div>
</div>
<div class="col">
        <div class="card" style={{width: "20rem"}}>
  <img class="card-img-top" src={Electro} alt="Card  cap"/>
  <div  class="card-block">
    <h4 class="card-title">  ELECTRONICS
</h4>
    <p class="card-text">new Technology</p>
    <a href="/products"  class="add-to-cart btn btn-primary"> show more </a>
  </div>
</div></div>
 <div class="col">
        <div class="card" style={{width: "20rem"}}>
  <img class="card-img-top" src={Jewelery}alt="Card cap"/>
  <div class="card-block">
    <h4 class="card-title">  JEWELERY
</h4>
    <p class="card-text">new accessoires</p>
    <a href="/products"  class="add-to-cart btn btn-primary"> show more </a>
  </div>
</div></div>
<div class="col">
        <div class="card" style={{width: "20rem"}}>
  <img class="card-img-top" src={CatImage} alt="Card"/>
  <div class="card-block">
    <h4 class="card-title"> WOMEN'S CLOTHING
</h4>
    <p class="card-text">new collections</p>
    <a href="/products"  class="add-to-cart btn btn-primary"> show more </a>
  </div>
</div>
  <span className='box4'></span>

  </div></div>
</div></div>

)

}

export default Home
