import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
    name:"product",
    initialState: {
        produtcs: []
    },
    reducers:{
        addProducts: (state, action) => {
            state.produtcs.push(action.payload)
        }
    }
})


export const {addProducts} = productSlice.actions;
export default productSlice.reducer