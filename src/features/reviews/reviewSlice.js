import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import reviewService from "./reviewService";


const reviewSlice = createSlice({
    name : "reviews",
    initialState :{
        reviews : [],
        
        isLoading : false ,
        isSuccess : false,
        isError : false ,
        message : ""
    },
    reducers :{},
    extraReducers : (builder) =>{
      builder
            .addCase(getReviewsForAdmin.pending , (state , action)=>{
                    state.isLoading = true
                    state.isSuccess = false
                    state.isError = false
                  })
                  .addCase(getReviewsForAdmin.fulfilled , (state , action)=>{
                    state.isLoading = false
                    state.isSuccess = true
                    state.reviews = action.payload
                    state.isError = false
                  })
                  .addCase(getReviewsForAdmin.rejected , (state , action)=>{
                    state.isLoading = false
                    state.isSuccess = false
                    state.isError = true
                    state.message = action.payload
                  })
                  .addCase(getReviewForUser.pending , (state , action)=>{
                    state.isLoading = true
                    state.isSuccess = false
                    state.isError = false
                  })
                  .addCase(getReviewForUser.fulfilled , (state , action)=>{
                    state.isLoading = false
                    state.isSuccess = true
                    state.reviews = action.payload
                    state.isError = false
                  })
                  .addCase(getReviewForUser.rejected , (state , action)=>{
                    state.isLoading = false
                    state.isSuccess = false
                    state.isError = true
                    state.message = action.payload
                  })

                  .addCase(addReview.pending , (state , action)=>{
                    state.isLoading = true
                    state.isSuccess = false
                    state.isError = false
                  })
                  .addCase(addReview.fulfilled , (state , action)=>{
                    state.isLoading = false
                    state.isSuccess = true
                    state.reviews = action.payload
                    state.isError = false
                  })
                  .addCase(addReview.rejected , (state , action)=>{
                    state.isLoading = false
                    state.isSuccess = false
                    state.isError = true
                    state.message = action.payload
                  })

                  
    }
})

export default reviewSlice.reducer




// all review admin 

export const getReviewsForAdmin = createAsyncThunk("FETCH/ADMIN_REVIEWS" , async(_ , thunkAPI)=>{

    let token = thunkAPI.getState().auth.user.token
    try {
        return await reviewService.fetchReviewForAdmin(token)
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})

// user review
export const getReviewForUser = createAsyncThunk("FETCH/USER_REVIEW" , async( id, thunkAPI)=>{
 
  
  let token = thunkAPI.getState().auth.user.token
  try {
      return await reviewService.fetchReviewForUser( id ,token)
  } catch (error) {
      const message = error.response.data.message
      return thunkAPI.rejectWithValue(message)
  }
})

// add review

export const addReview = createAsyncThunk("ADD/USER_REVIEW" , async(formData , thunkAPI)=>{
  let token = thunkAPI.getState().auth.user.token
  console.log(formData);
  
  try {
    return await reviewService.addReviewForUser(formData , token)
  } catch (error) {
    const message = error.response.data.message
    return thunkAPI.rejectWithValue(message)
  }
})