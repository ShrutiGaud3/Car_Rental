import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import rentalService from "./rentalService";

const rentalSlice = createSlice({
    name : 'rentals',
    initialState : {
        rentals : [],
        rental :{},
        isLoading : false ,
        isSuccess : false ,
        isError : false ,
        message : ""

    },
    reducers : {},
    extraReducers : (builder)=>{
        builder
       .addCase(getRentalsForAdmin.pending , (state , action)=>{
               state.isLoading = true
               state.isSuccess = false
               state.isError = false
             })
             .addCase(getRentalsForAdmin.fulfilled , (state , action)=>{
               state.isLoading = false
               state.isSuccess = true
               state.rentals = action.payload
               state.isError = false
             })
             .addCase(getRentalsForAdmin.rejected , (state , action)=>{
               state.isLoading = false
               state.isSuccess = false
               state.isError = true
               state.message = action.payload
             })

             .addCase(getRentalsForUser.pending , (state , action)=>{
              state.isLoading = true
              state.isSuccess = false
              state.isError = false
            })
            .addCase(getRentalsForUser.fulfilled , (state , action)=>{
              state.isLoading = false
              state.isSuccess = true
              state.rentals = action.payload
              state.isError = false
            })
            .addCase(getRentalsForUser.rejected , (state , action)=>{
              state.isLoading = false
              state.isSuccess = false
              state.isError = true
              state.message = action.payload
            })

            
            .addCase(GetNewRentalForUser.pending , (state , action)=>{
              state.isLoading = true
              state.isSuccess = false
              state.isError = false
            })
            .addCase(GetNewRentalForUser.fulfilled , (state , action)=>{
              state.isLoading = false
              state.isSuccess = true
              state.rental = action.payload
              state.isError = false
            })
            .addCase(GetNewRentalForUser.rejected , (state , action)=>{
              state.isLoading = false
              state.isSuccess = false
              state.isError = true
              state.message = action.payload
            })
    }
})

export default rentalSlice.reducer


// get rentals for admin 

 export const getRentalsForAdmin = createAsyncThunk("FETCH/ADMIN_RENTALS" , async(_ , thunkAPI)=>{
   
    let token = thunkAPI.getState().auth.user.token

    try {
        return await rentalService.fetchRentalsForAdmin(token)
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
 })


//  get rental for users 

export const getRentalsForUser = createAsyncThunk("FETCH/USER_RENTALS" , async(_ , thunkAPI)=>{
   
  let token = thunkAPI.getState().auth.user.token

  try {
      return await rentalService.fetchRentalsForUser(token)
  } catch (error) {
      const message = error.response.data.message
      return thunkAPI.rejectWithValue(message)
  }
})


// create new rental for user

export const GetNewRentalForUser = createAsyncThunk("FETCH/USER_NEWRENTALS" , async(formData , thunkAPI)=>{
   
  let token = thunkAPI.getState().auth.user.token

  try {
      return await rentalService.CreateNewRentalUser(formData , token)
      
  } catch (error) {
      const message = error.response.data.message
      return thunkAPI.rejectWithValue(message)
  }
})
