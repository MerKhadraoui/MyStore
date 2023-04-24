import NavBar from './NavBar';
import React, { useContext } from 'react';
import StorContext from '../context'
import "./home.css"
const Home = () => {
  const {data, setData}= useContext(StorContext)
// console.log(data);
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
  <img class="card-img-top" src="image/menCat.jpg" alt="Card image cap"/>
  <div class="card-block">
    <h4 class="card-title">MEN'S CLOTHING</h4>
    <p class="card-text">new collections</p>
    <a href="/products"  class="add-to-cart btn btn-primary"> show more </a>
  </div>
</div>
<div class="col">
        <div class="card" style={{width: "20rem"}}>
  <img class="card-img-top" src="image/electro.jpg" alt="Card image cap"/>
  <div class="card-block">
    <h4 class="card-title">  ELECTRONICS
</h4>
    <p class="card-text">new Technology</p>
    <a href="/products"  class="add-to-cart btn btn-primary"> show more </a>
  </div>
</div></div>
 <div class="col">
        <div class="card" style={{width: "20rem"}}>
  <img class="card-img-top" src="image/jwel.jpg" alt="Card image cap"/>
  <div class="card-block">
    <h4 class="card-title">  JEWELERY
</h4>
    <p class="card-text">new accessoires</p>
    <a href="/products"  class="add-to-cart btn btn-primary"> show more </a>
  </div>
</div></div>
<div class="col">
        <div class="card" style={{width: "20rem"}}>
  <img class="card-img-top" src="image/wemen.jpg" alt="Card image cap"/>
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
