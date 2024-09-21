import { createSlice ,configureStore} from "@reduxjs/toolkit";

const storeSlice = createSlice({
  name: "store",
  initialState: { orderedItem: [] },
  reducers: {
    handelQuantityIncrement(state, action) {
      const item = state.orderedItem.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      }
    },
    handelQuantityDecrement(state, action) {
      const item = state.orderedItem.find(item => item.id === action.payload.id);
      if (item && item.quantity > 1) {
       if(item.quantity > 1){
        item.quantity -= 1;
       }
       else{
        state.orderedItem.filter(eachItems=>eachItems.quntity>0)
       }
      }
    },
    handelClick(state, action) {
      const orderExists = state.orderedItem.some(each => each.id === action.payload.id);

      if (orderExists) {
        state.orderedItem = state.orderedItem.map(eachItem => {
          if (eachItem.id === action.payload.id) {
            return { ...eachItem, quantity: eachItem.quantity + 1 };
          }
          return eachItem;
        });
      } else {
        state.orderedItem.push({
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
          quantity: 1
        });
      }
    }
  }
});
const store=configureStore({
    reducer:{storeSlice}
})
export const storeAction = storeSlice.actions;
export default store.reducer;