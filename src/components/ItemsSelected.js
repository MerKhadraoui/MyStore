import React, { useContext, useState } from 'react'
import StorContext from '../context'
import "./itemSelected.css"
function ItemsSelected() {
 const {cardList,count,setCardList,setCount}= useContext(StorContext)
 let newCart=[] 
 const [check,setCheck]=useState(0)

 const total =cardList.reduce((cur,acc)=>cur+acc.price,check)
const [bool,setBool]=useState(true)
 const deleteHandel=(e)=>{
 newCart=cardList.splice(e.target.value)
 setCheck(total-e.target.name);
 setCardList(newCart)
setBool(false)
   }
 
console.log(total, check);
  return (
    <div className='list-item'>
      {cardList.map((item)=> <li class="list-group-item">
            <div class="row align-items-center">
              <div class="col-4">

              
                <a href="./product.html">
                  <img class="img-fluid"   src={item.image} alt="..."/>
                </a>

              </div>
              <div class="col-8">

             
                <p class="font-size-sm font-weight-bold mb-6">
                  <a class="text-body" href="./product.html" >{item.title}</a>
                  <span class="text-muted">{item.price}€</span>
                </p>

               
                <div class="d-flex align-items-center">

               
                  {/* <select class="custom-select custom-select-xxs w-auto">
                    <option value="1">1</option>
                    <option value="1">2</option>
                    <option value="1">3</option>
                  </select> */}

                  
                  <button onClick={deleteHandel} name={item.price} class="font-size-xs text-gray-400 ml-auto" value={item.id}>
                    <i class="fe fe-x"></i> Remove
                  </button>

                </div>

              </div>
            </div>
          </li>  )}
          <div class="total-cart">Total price   :   <span className='some' > €{total-check}</span></div>
  </div>
  )
}

export default ItemsSelected
