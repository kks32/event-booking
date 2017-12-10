// Import Axios
import axios from 'axios'

// Define a baseURL
export const HTTP = axios.create({
  baseURL: `http://api.kingscollegecam.com:4000/`
})
