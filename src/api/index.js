
import axios from "axios"

const ApiInstance = axios.create({
    baseURL: 'http://localhost:10000/api',
    headers:{
        'Content-type': 'application/json'
    }
})

export default ApiInstance