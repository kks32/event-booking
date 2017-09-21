// Import Axios
import axios from 'axios'

// Define a baseURL
export const HTTP = axios.create({
  baseURL: `http://localhost:4000/api/v1/`
})
