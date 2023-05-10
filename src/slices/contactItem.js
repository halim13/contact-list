import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    firstName: '',
    lastName: '',
    age: '',
    photo: '',
}

const contactItemSlice = createSlice({
    name: 'contactItem',
    initialState,
    reducers: {
        updateContactItem: (state, action) => {
            console.log({
                state,
                action
            })
            // state[action.payload.key] = action.payload.value
        }
    }
})

export const { updateContactItem } = contactItemSlice.actions

export default contactItemSlice.reducer