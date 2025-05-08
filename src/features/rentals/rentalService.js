import axios from "axios"

const fetchRentalsForAdmin = async(token)=>{
  
    const options ={
        headers :{
            authorization : `Bearer ${token}`
        }
    }


    const response = await axios.get("https://car-rental-app-5d25.onrender.com/api/admin/rentals" , options)
    return response.data
}

// user rental

const fetchRentalsForUser = async(token)=>{
    const options ={
        headers :{
            authorization : `Bearer ${token}`
        }
    }
  console.log(options);
  
    
    const response = await axios.get("https://car-rental-app-5d25.onrender.com/api/rentals" , options)
    
    
    return response.data

}


  const CreateNewRentalUser = async( formData , token)=>{
    
    const options ={
        headers :{
            authorization : `Bearer ${token}`
        }
    }
    const response = await axios.post(`https://car-rental-app-5d25.onrender.com/api/rentals/${formData.id}` ,formData , options)

    console.log(response.data);
    
    return response.data
  } 



const rentalService = {fetchRentalsForAdmin , fetchRentalsForUser , CreateNewRentalUser}

export default rentalService