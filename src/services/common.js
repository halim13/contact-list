import axios from 'axios'

const baseURL = 'https://contact.herokuapp.com'

export default axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
})
