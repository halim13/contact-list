import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    visible: false,
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        updateVisible: (state, action) => {
            state.visible = action.payload
        }
    }
})

export const { updateVisible } = modalSlice.actions

export default modalSlice.reducer