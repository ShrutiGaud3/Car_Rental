import { configureStore }from "@reduxjs/toolkit";
import auth from "./auth/authSlice"
import car from "./cars/carSlice"
import rentals from "./rentals/rentalSlice"
import reviews from "./reviews/reviewSlice"

const store = configureStore({
    reducer : {auth , car , rentals , reviews}
})

export default store