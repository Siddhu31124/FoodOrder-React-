import { createContext,useState } from "react";
const CartContext=createContext({})
export function CartContextProvider({children}){
  const [orderedItem,setOrdereditem]=useState([])
  function handelClick(id,name,price){
    console.log("Clicked")
    setOrdereditem((preValues)=>{
      let orderConsist=preValues.some((each)=>{return each.id===id})
      if (orderConsist){
        let updatedOrder=preValues.map((eachItems)=>{
          if(eachItems.id===id){
          return {...eachItems,quntity:eachItems.quntity+1}
          }
          else {return {...eachItems}} 
        })
        return updatedOrder
      }else{
        return [...preValues,{id,name,price,quntity:1}]
      }
      
  })
  }
    function handelQuntityDecrement(id){
        setOrdereditem((preValues)=>{
          let updatedOrder=preValues.map((eachItems)=>{
            if(eachItems.id===id ){
            return {...eachItems,quntity:eachItems.quntity-1}
            }
            else {
              return eachItems
            } 
          })
          return updatedOrder.filter(eachItems=>eachItems.quntity>0)
        })
      }
        
    function handelQuntityIncrement(id){
      setOrdereditem((preValues)=>{
        let updatedOrder=preValues.map((eachItems)=>{
          if(eachItems.id===id){
          return {...eachItems,quntity:eachItems.quntity+1}
          }
          else {return {...eachItems}} 
        })
        return updatedOrder
      })
      
    }

    let cartContext={orderedItem,handelQuntityIncrement,handelQuntityDecrement,handelClick}
    return(
        <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
    )


}
export default CartContext



