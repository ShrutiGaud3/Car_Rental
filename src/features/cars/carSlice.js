import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import carService from "./carService";

const carSlice = createSlice({
    name : 'car',
    initialState : {
      cars : [],
      car  :{},
      edit :{car : {} , isEdit : false},
      isLoading : false ,
      isSuccess : false ,
      isError : false ,
      message : "",
      currentPage: 1,
      totalPages: 1,
      totalItem : 0
    },


    reducers : {
      editCar : (state , action)=>{
        return {
          ...state ,
          edit : {car :  action.payload , isEdit : true}
        }
      }
    },
    extraReducers : (builder) => {
      builder
      .addCase(getCars.pending , (state , action)=>{
        state.isLoading = true
        state.isSuccess = false
        state.isError = false
      })
      .addCase(getCars.fulfilled , (state , action)=>{
        state.isLoading = false
        state.isSuccess = true
        state.cars = action.payload.cars || []
        state.isError = false
        // state.cars = action.payload.data; // assume `data` holds car list
       state.totalPages = action.payload?.pagination?.pages || 1;
       state.currentPage = action.payload?.pagination?.page || 1;

      })


      .addCase(getCars.rejected , (state , action)=>{
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        state.message = action.payload

      })



      
      .addCase(addCars.pending , (state , action)=>{
        state.isLoading = true
        state.isSuccess = false
        state.isError = false
      })
      .addCase(addCars.fulfilled , (state , action)=>{
        state.isLoading = false
        state.isSuccess = true
        state.cars = [...state.cars, action.payload];
        state.isError = false
      })
      .addCase(addCars.rejected , (state , action)=>{
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        state.message = action.payload
      })

      .addCase(removeCar.pending , (state , action)=>{
        state.isLoading = true
        state.isSuccess = false
        state.isError = false
      })
      .addCase(removeCar.fulfilled , (state , action)=>{
        state.isLoading = false
        state.isSuccess = true
        state.cars = state.cars.filter(
                 (item)=> item._id !== action.payload.id);
        state.isError = false
      })
      .addCase(removeCar.rejected , (state , action)=>{
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        state.message = action.payload
      })



      .addCase(updateCarDetails.pending , (state , action)=>{
        state.isLoading = true
        state.isSuccess = false
        state.isError = false
      })
      .addCase(updateCarDetails.fulfilled , (state , action)=>{
        state.isLoading = false
        state.isSuccess = true
        state.cars = state.cars.map(
                 (item)=> item._id === action.payload._id ? action.payload : item) ;
        
       state.edit = {car :{} , isEdit : false}
        state.isError = false
      })
      .addCase(updateCarDetails.rejected , (state , action)=>{
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        state.message = action.payload
      })


      .addCase(getCar.pending , (state , action)=>{
        state.isLoading = true
        state.isSuccess = false
        state.isError = false
      })
      .addCase(getCar.fulfilled , (state , action)=>{
        state.isLoading = false
        state.isSuccess = true
        state.car = action.payload
        state.isError = false
      })
      .addCase(getCar.rejected , (state , action)=>{
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        state.message = action.payload
      })



      .addCase(findCar.pending , (state , action)=>{
        state.isLoading = true
        state.isSuccess = false
        state.isError = false
      })
      .addCase(findCar.fulfilled , (state , action)=>{
        state.isLoading = false
        state.isSuccess = true
        state.cars = action.payload
        state.isError = false
      })
      .addCase(findCar.rejected , (state , action)=>{
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        state.message = action.payload
      })
    }
})

export const {editCar}= carSlice.actions 
export default carSlice.reducer


// get cars 

export const getCars = createAsyncThunk("FETCH/CARS" , async({page =1 ,limit =10}, thunkAPI)=>{
  try {
    return await carService.fetchCars(page,limit)
  } catch (error) {
    const message = error.response.data.message
    return thunkAPI.rejectWithValue(message)
  }
})





// add cars for admin

export const addCars = createAsyncThunk("ADD/CARS" , async(formData , thunkAPI)=>{

  let token = thunkAPI.getState()?.auth?.user?.token

  try {
   return await carService.createCar(formData , token)

  } catch (error) {
    const message = error.response.data.message
    return thunkAPI.rejectWithValue(message)
  }
})


// get single car

export const getCar = createAsyncThunk("FETCH/CAR" , async(_id , thunkAPI)=>{
  try {
    return await carService.fetchCar(_id)
  } catch (error) {
    const message = error.response.data.message
    return thunkAPI.rejectWithValue(message)
  }
})

// get search 

export const findCar = createAsyncThunk("FETCH/FIND" , async(query , thunkAPI)=>{
  try {
    return await carService.searchCar(query)
  } catch (error) {
    const message = error.response.data.message
    return thunkAPI.rejectWithValue(message)
  }
})


// remove car 

export const removeCar = createAsyncThunk("CAR/REMOVE" , async(id , thunkAPI)=>{

  let token = thunkAPI.getState()?.auth?.user?.token
  try {
    return await carService.deleteCar(id , token)
  } catch (error) {
    const message = error.response.data.message
    return thunkAPI.rejectWithValue(message)
  }


})

// update car

// export const updateCarDetails = createAsyncThunk("CAR/UPDATE" , async(id,rate , mileage, thunkAPI)=>{

//   let token = thunkAPI.getState()?.auth?.user?.token
//   try {
//     return await carService.updateCar(id,rate , mileage , token)

//   } catch (error) {
//     const message = error.response.data.message
//     return thunkAPI.rejectWithValue(message)
//   }


// })

export const updateCarDetails = createAsyncThunk("CAR/UPDATE", async(formData, thunkAPI) => {
 

  let token = thunkAPI.getState()?.auth?.user?.token;

  try {
    return await carService.updateCar(formData, token);
  } catch (error) {
    const message = error.response.data.message;
    return thunkAPI.rejectWithValue(message);
  }
});
