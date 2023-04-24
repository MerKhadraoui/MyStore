import "./productSale.css"
import React, { useContext } from 'react';
import StorContext from '../context'
function SaleProducts() {
  const {data, setData}= useContext(StorContext)
console.log(data);
  return (
    <div class="wrapper">
{data.map((item,i)=>i%3==0?<div class="card" >
       <div >
             <span class="sale">Sale</span>
             <div class="image">
                  <img src={item.image} alt="product image"/>
             </div>
             <div class="details">
                 <h3>{item.title}</h3>
                 <div class="price-ratings">
                   <div class="price">
                     <span>{item.price>15?item.price-10:item.price-4}</span>
                     <span><small>{item.price}</small></span>
                   </div>
                   <div class="ratings">
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                   </div>
                 </div>
             </div>
       </div>
    </div>:"" )}   </div>
  )
}

export default SaleProducts
