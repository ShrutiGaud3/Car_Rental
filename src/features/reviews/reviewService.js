import axios from "axios"

const fetchReviewForAdmin = async(token)=>{

  const options = {
    headers : {
        authorization : `Bearer ${token}`
    }
  }

    const response = await axios.get("https://car-rental-app-5d25.onrender.com/api/admin/reviews" , options)
  
  

    return response.data
    
}


const fetchReviewForUser = async( id ,token )=>{

  const options = {
    headers : {
        authorization : `Bearer ${token}`
    }
  }
  const response = await axios.get(`https://car-rental-app-5d25.onrender.com/api/car/${id}/reviews` , options)
  
  
  return response.data
}

const addReviewForUser = async(formData , token)=>{
  
  
  const options = {
    headers : {
        authorization : `Bearer ${token}`
    }
  }
  

  
 
  
  
  const response = await axios.post(`https://car-rental-app-5d25.onrender.com/api/car/${formData.id}/reviews/add`,formData , options)
 
  console.log(response.data);
  
  return response.data
}

const reviewService = {fetchReviewForAdmin , fetchReviewForUser , addReviewForUser}

export default reviewService