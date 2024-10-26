
import axios from "axios"

const ApiInstance = axios.create({
    baseURL: 'https://lifshop-api.onrender.com',
    headers:{
        'Content-type': 'application/json'
    }
})

export default ApiInstance