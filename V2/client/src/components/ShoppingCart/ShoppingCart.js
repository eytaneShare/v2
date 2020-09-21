import React , {useState, Fragment} from "react"
import styles from "./ShoppingCart.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart, faRemoveFormat } from "@fortawesome/free-solid-svg-icons"
import Paypal from "../Payment/Paypal"
import { useCart } from "../../contexts/cartContext"
var totalPrice= 0
if (localStorage.numberOfProduct != null) {
  var numberOfProduct = localStorage.numberOfProduct
} else {
  numberOfProduct = 0
}

const ShoppingCart = (props) => {
  
  const [cart, dispatch] = useCart()
  const [open, setOpen]= useState(false)
  const remove = (id) => {
    dispatch({
      type: "remove",
      id
    
      
      
      

    })
    console.log("item")
  }
  const total=(cart)=>{
    dispatch({
    type:"Total"
})
  }
if (open==true && cart.length>0){
  return (<>
  <div className={styles.cart}><FontAwesomeIcon icon={faShoppingCart} className={styles.cartIcon} /><div className={styles.numberOfItems}>{cart.length}</div></div>
    <div className={styles.panier}>
      {totalPrice=0}
      <div onClick={()=>setOpen(false)} className={styles.close}>X</div>
      {cart.map((item) => (
      <div className={styles.item}>
        <h3 className={styles.title}>{item.name} {item.description}</h3>
         <img src={item.photo} alt="photo" className={styles.photo}/> 
         <div className={styles.details}>
           <strong>Prix: {item.price} {item.curency} 
           <br/>quantite: {item.count}
      <br/>Total: {item.price * item.count} {item.curency}</strong></div>
      <div>{totalPrice+=(item.price*item.count)}</div>
         <div onClick={() => remove(item.id)} className={styles.removeItem}>X</div>
         </div> ))}
         {/* <Paypal/> */}
         
        {console.log(cart.photo)}
    </div>
    
    <div className={styles.form}>{totalPrice} <br/>
    <input className={styles.input} placeholder="votre mail"/><br/>
    <input className={styles.input} placeholder ="votre adresse"/>
    <Paypal toPay={totalPrice}/>
    {console.log(cart)}
    </div></>
  )}
  else{
    return(
      
<div className={styles.cart} onClick={()=>setOpen(true)}>
        <FontAwesomeIcon icon={faShoppingCart} className={styles.cartIcon} />
        <div className={styles.numberOfItems}>{cart.length}</div>
        
        
      </div>
      
    )
  }
}
export default ShoppingCart

