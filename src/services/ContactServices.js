import http, { baseURL } from './common'

const getAll = () => {
    console.log(`[GET] ${baseURL}/contact`)
    return http.get('/contact')
}

const get = id => {
    console.log(`[GET] ${baseURL}/contact/${id}`)
    return http.get(`/contact/${id}`)
}

const create = data => {
    console.log(`[POST] ${baseURL}/contact`, data)
    return http.post('/contact', data)
}

const update = (id, data) => {
    console.log(`[PUT] ${baseURL}/contact/${id}`, data)
    return http.put(`/contact/${id}`, data)
}

const remove = id => {
    console.log(`[DELETE] ${baseURL}/contact/${id}`)
    return http.delete(`/contact/${id}`)
}

const ContactService = {
    getAll,
    get,
    create,
    update,
    remove,
}

export default ContactService