import { useEffect, useRef ,useState ,useContext } from "react";
 
import CalculateTotalAmount from "../Calculation.js"

import CartContext from "../store/Contex.jsx";

export default function Cart({cartopen,handleClose,handelOpenForm}) {
    const [totalAmount,setTotalAmount]=useState(0)
    const {orderedItem,handelQuntityIncrement,handelQuntityDecrement} =useContext(CartContext)
    const dialog = useRef();
    useEffect(() => {
        if (cartopen) {
            dialog.current.showModal();
        } else {
            dialog.current.close();
        }
    }, [cartopen]);
    useEffect(()=>{
        setTotalAmount(CalculateTotalAmount(orderedItem))
    })  
    return (
        <dialog className="modal cart" ref={dialog}>
            <h2>Your Cart</h2>
            <ul>
                {orderedItem.map((each) => (
                    <li key={each.id} className="cart-item">
                        <p>{each.name} /- {each.quntity} x {each.price}</p>
                        <p className="cart-item-actions">
                            <button onClick={()=>handelQuntityDecrement(each.id)}>-</button>
                            {each.quntity}
                            <button onClick={()=>handelQuntityIncrement(each.id)}>+</button>
                        </p>
                    </li>
                ))}
            </ul>
            <p className="cart-total">{totalAmount} Rs /-</p>
            <p className="modal-actions">
                <button type="button" onClick={handleClose} className="text-button">
                    Close
                </button>
                <button className=" Checkoutbutton" onClick={handelOpenForm}>Check Out</button>
            </p>
        </dialog>
    );
}