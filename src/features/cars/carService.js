import axios from "axios"

const fetchCars = async(page,limit)=>{
    const response = await axios.get(`https://car-rental-app-5d25.onrender.com/api/car?page=${page}&limit=${limit}`)
//    console.log(response.data);
   
    return response.data
}




const createCar = async (formData , token)=>{
  
    let options = {
        headers :{
            authorization : `Bearer ${token}`,"Content-Type":'multipart/form-data'
        }
    }
 

  const response = await axios.post("https://car-rental-app-5d25.onrender.com/api/admin/car" , formData , options)

  
    return response.data
    
}

// delete car

const deleteCar = async(id , token)=>{
    let options = {
        headers :{
            authorization : `Bearer ${token}`
        }
    }
 
    const response = await axios.delete(`https://car-rental-app-5d25.onrender.com/api/admin/car/${id}` , options)
    
    return response.data
    
}
// update car

const updateCar = async( formData, token)=>{

    console.log(formData);
    
    
    let options = {
        headers :{
            authorization : `Bearer ${token}`
        }
    }
      const response = await axios.put('https://car-rental-app-5d25.onrender.com/api/admin/car/' + formData._id ,formData, options)
   
    
    // console.log(response.data)
    return response.data
    
}



// fetch single car 
const fetchCar = async(_id)=>{
    const response = await axios.get(`https://car-rental-app-5d25.onrender.com/api/car/${_id}`)
    
    return response.data
    
}


// search car

const searchCar = async(query)=>{
    const response = await axios.get(`https://car-rental-app-5d25.onrender.com/api/car/search?query=${query}`)
    // console.log(response.data);
    
    
    return response.data
    
}





const carService = {fetchCars ,createCar  , fetchCar , searchCar , deleteCar , updateCar}

export default carService