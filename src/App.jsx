import { useEffect,useState} from "react"
import MealItemCard from "./components/MealsItem"
import Cart from "./components/Cart"
import Header from "./components/Header"
import SubmitModel from "./components/SubmitModel"
import FormModel from "./components/FormModel"
import { CartContextProvider } from "./store/Contex"
function App() {
  const [foodItems,setFoodItems]=useState([])
  const [cartopen,setCartOpen]=useState(false)
  const [openForm,setOpenForm]=useState(false)
  const [openSubmit,setOpensubmit]=useState(false)
  useEffect(()=>{
    async function fetchingData(){
    let response=await fetch("http://localhost:3000/meals")
    let data= await response.json()
    setFoodItems(data)
    }
    fetchingData()
    },[])
  function handelCart(){
      setCartOpen(true)
    }
  function handleClose() {
      setCartOpen(false);
  }
  function handelOpenForm(){
    setCartOpen(false);
    setOpenForm(true)
  }
  
    function handelOpenSubmit(){
      setOpensubmit(true)
      setOpenForm(false)
    }
    function handelCloseSubmit(){
      setOpensubmit(false)
    }
  return (
    <CartContextProvider>
    <Header handelCart={handelCart}/>
    <div id="meals" >
          {foodItems.map((eachItems)=><MealItemCard key={eachItems.id} Itemdetails={eachItems} />)}
    </div>
    <Cart  cartopen={cartopen} handleClose={handleClose}  handelOpenForm={handelOpenForm}/>
    <FormModel openForm={openForm} handleCloseForm={handelOpenSubmit}/>
    <SubmitModel openSubmit={openSubmit} handelCloseSubmit={handelCloseSubmit}/>
    </CartContextProvider>
  );
    
}

export default App;
