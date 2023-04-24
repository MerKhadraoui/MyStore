import {useContext} from "react"
import StorContext from "../context"
import "./ProductCard.css"
function ProductCard({item}) {
 const {cardList,count,setCardList,setCount}= useContext(StorContext)

  const   handelClick =(e)=>{
    setCardList([...cardList,item])
  setCount(count+1)
  console.log(count);
  
  }



console.log(cardList);
  return (


 
      <div class="container" >
<div class="container page-wrapper">
  <div class="page-inner">
    <div class="row">
      <div class="el-wrapper">
        <div class="box-up">
          <img class="img" src={item.image} alt=""/>
          <div class="img-info">
            <div class="info-inner">
             
              <span class="p-company">{item.category}</span>
            </div>
            {item.category==="women's clothing"||item.category==="men's clothing"? <div class="a-size">Available sizes : <span class="size">S , M , L , XL</span></div>:""}
           
          </div>
        </div>

        <div class="box-down">
          <div class="h-bg">
            <div class="h-bg-inner"></div>
          </div>

          <a   class="cart" href="#">
            <span class="price">{item.price}€</span>
            <span class="add-to-cart">
           <span class="txt"><button className="butn" onClick={handelClick} value={item.id}> ADD IN CART</button></span>
            </span>
          </a>
         
        </div>
        <span class="p-name">{item.title
}</span>
      </div>
    </div>
  </div>
  {/* <ItemsSelected data={cardList}/> */}
</div>
</div>

  

     
      
  )
}

export default ProductCard
