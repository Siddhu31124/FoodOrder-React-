import { useContext } from "react"
import CartContext from "../store/Contex"
export default function MealItemCard({Itemdetails}){
    const {description,image,name,price,id}=Itemdetails
    const {handelClick} =useContext(CartContext)
    
    return(
    <div className="meal-item">
    <article >
        <img src={`http://localhost:3000/${image}`}/>
        <h3>{name}</h3>
        <p className="meal-item-price">Rs : {price} /-</p>
        <p className="meal-item-description">{description}</p>
        <button className="meal-item-actions buttons" onClick={()=>handelClick(id,name,price)}>ADD TO CART</button>
    </article>
    </div>
    )
}