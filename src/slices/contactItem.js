import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    id: null,
    firstName: '',
    lastName: '',
    age: '',
    photo: null,
}

const contactItemSlice = createSlice({
    name: 'contactItem',
    initialState,
    reducers: {
        initForm: (state, action) => {
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
            state.age = action.payload.age?.toString()
            state.photo = action.payload.photo
            state.id = action.payload.id
        },
        updateForm: (state, action) => {
            state[action.payload.key] = action.payload.value
        },
        clearForm: (state, action) => {
            state.id = initialState.id
            state.firstName = initialState.firstName
            state.lastName = initialState.lastName
            state.age = initialState.age
            state.photo = initialState.photo
            console.log('Form contact cleared')
        }
    }
})

export const { updateForm, clearForm, initForm } = contactItemSlice.actions

export default contactItemSlice.reducer