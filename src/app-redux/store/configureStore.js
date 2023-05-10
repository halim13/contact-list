import { configureStore } from '@reduxjs/toolkit'
import contactReducer from '../../slices/contacts'
import modalReducer from '../../slices/modal'
import contactItemReducer from '../../slices/contactItem'

const reducer = {
    contacts: contactReducer,
    modal: modalReducer,
    contactItem: contactItemReducer,
}

const store = configureStore({
    reducer,
    devTools: __DEV__,
})

export default store