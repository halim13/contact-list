import axios from 'axios'

export const baseURL = 'https://contact.herokuapp.com'

export default axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    }
})
