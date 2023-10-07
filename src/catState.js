import {createSlice} from '@reduxjs/toolkit'

 const catSlice = createSlice({
    //STATES
    name:"cats",
    initialState:{
        cats:[],
        isLoading:false
    },

    // ACTIONS
    reducers:{

        // when getting 
        getCatsFetch: (state)=>{
            state.isLoading = true
        },

        getCatsSuccess: (state,action)=>{
            state.cats = action.payload;
            state.isLoading = false
        },

        getCatsFailure:(state)=>{
            state.isLoading = false
        }



    }
})


export const {getCatsFetch,getCatsSuccess,getCatsFailure} = catSlice.actions;
export default catSlice.reducer;