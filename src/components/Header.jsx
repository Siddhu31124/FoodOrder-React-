import { useContext } from "react"
import CartContext from "../store/Contex"
export default function Header({handelCart}){
    let {orderedItem} =useContext(CartContext)
    let length=orderedItem.length
    return(
    <header id="main-header">
    <div id="title">
    <img src="logo.jpg" alt="Foodlogo"/>
    <h1>REACT FOOD</h1>
    </div>
    <button  onClick={handelCart}>Cart {length===0?"":length}</button>
    </header>
    )
}