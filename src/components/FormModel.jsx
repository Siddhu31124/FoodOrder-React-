import Input from "./Input"
import { useRef,useEffect,useContext} from "react";
import CartContext from "../store/Contex";
import CalculateTotalAmount from "../Calculation";
export default function FormModel({openForm,handleCloseForm}){
    const {orderedItem}=useContext(CartContext)
    const dialogForm = useRef();
    useEffect(() => {
        if (openForm) {
            dialogForm.current.showModal();
        } else {
            dialogForm.current.close();
        }
    }, [openForm]);
    async function handleSubmit(event) {
    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries());
        event.preventDefault();
        let response=await fetch('http://localhost:3000/orders', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            order: {
              items: orderedItem,
              customer: customerData
            }
          })
        });
      }
      let totalPrice=CalculateTotalAmount(orderedItem)
    
    return(
        <dialog className="modal" ref={dialogForm} >
            <form onSubmit={handleSubmit}>
                <h3>Chechout</h3>
                <p>Total Amount :{totalPrice} Rs/-</p>
                <Input label="full Name" type="text" id="name"/>
                <Input label="E-Mail Address" type="email" id="email"/>
                <Input label="Street" type="text" id="street"/>
                <div className="control-row">
                    <Input label="Postal Code" type="number" id="code"/>
                    <Input label="City" type="text" id="city"/>
                </div>
                <p className="modal-actions">
                <button type="button"  onClick={handleCloseForm} className="text-button">
                    Close
                </button>
                <button className="button" type="submit" onClick={handleCloseForm}>Place Order</button>
                </p>
            </form>
        </dialog>
    )
}