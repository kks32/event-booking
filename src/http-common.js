// Import Axios
import axios from 'axios'

// Define a baseURL
export const HTTP = axios.create({
  baseURL: `https://api.kingscollegecam.com:4000/`
})
