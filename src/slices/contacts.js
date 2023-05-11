import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import ContactDataService from '../services/ContactServices'
import status from '../constants/status'
import type from '../constants/type'
import { sortArray } from '../utils/common'

const initialState = {
    status: status.idle,
    type: '',
    data: [],
    item: {},
    errorMessage: '',
}

export const createContact = createAsyncThunk(
    'contact/create',
    async (data) => {
        const res = await ContactDataService.create(data)
        return res.data
    }
)

export const retrieveContacts = createAsyncThunk(
    'contact/retrieve',
    async () => {
        const res = await ContactDataService.getAll()
        return res.data
    }
)

export const retrieveContactById = createAsyncThunk(
    'contact/id',
    async (id) => {
        const res = await ContactDataService.get(id)
        return res.data
    }
)

export const updateContact = createAsyncThunk(
    'contact/update',
    async (id, data) => {
        const res = await ContactDataService.update(id, data)
        return res.data
    }
)

export const deleteContact = createAsyncThunk(
    'contact/delete',
    async (id) => {
        const res = await ContactDataService.remove(id)
        return res.payload.data
    }
)

const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        clearErrorMessage: (state, action) => {
            state.errorMessage = ''
        }
    },
    extraReducers: builder => {
        builder
            // create
            .addCase(createContact.pending, (state, action) => {
                state.status = status.progress
                state.errorMessage = initialState.errorMessage
                state.item = initialState.item
                state.type = type.create
            })
            .addCase(createContact.fulfilled, (state, action) => {
                state.status = status.ready
                state.data.push(action.meta.arg)
            })
            .addCase(createContact.rejected, (state, action) => {
                state.status = status.error
                state.errorMessage = `Error create contact(${action.error.message})`
            })
            // get list
            .addCase(retrieveContacts.pending, (state, action) => {
                state.status = status.progress
                state.errorMessage = initialState.errorMessage
                state.item = initialState.item
                state.type = type.getAll
            })
            .addCase(retrieveContacts.fulfilled, (state, action) => {
                state.status = status.ready
                state.data = sortArray([...action.payload.data])
            })
            .addCase(retrieveContacts.rejected, (state, action) => {
                state.status = status.error
                state.errorMessage = `Error get all contact(${action.error.message})`
            })
            // get by id
            .addCase(retrieveContactById.pending, (state, action) => {
                state.status = status.progress
                state.errorMessage = initialState.errorMessage
                state.item = initialState.item
                state.type = type.get
            })
            .addCase(retrieveContactById.fulfilled, (state, action) => {
                state.status = status.ready
                state.item = action.payload.data
            })
            .addCase(retrieveContactById.rejected, (state, action) => {
                state.status = status.error
                state.errorMessage = `Error get by id contact(${action.error.message})`
            })
            // update
            .addCase(updateContact.pending, (state, action) => {
                state.status = status.progress
                state.errorMessage = initialState.errorMessage
                state.item = initialState.item
                state.type = type.update
            })
            .addCase(updateContact.fulfilled, (state, action) => {
                state.status = status.ready
                const index = state.findIndex(contact => contact.id === action.meta.arg.id)
                state.data[index] = {
                    ...state.data[index],
                    ...action.meta.arg,
                }
            })
            .addCase(updateContact.rejected, (state, action) => {
                state.status = status.error
                state.errorMessage = `Error update contact(${action.error.message})`
            })
            // delete
            .addCase(deleteContact.pending, (state, action) => {
                console.log('deleteting contact')
                state.status = status.progress
                state.errorMessage = initialState.errorMessage
                state.item = initialState.item
                state.type = type.delete
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.status = status.ready
                console.log({ action })
                let index = state.findIndex(({ id }) => id === action.payload.data.id)
                state.splice(index, 1)
                console.log('contact deleted')
            })
            .addCase(deleteContact.rejected, (state, action) => {
                state.status = status.error
                state.errorMessage = `Error delete contact(${action.error.message})`
                console.log('error deleted contact')
            })
    }
})

export const { clearErrorMessage } = contactSlice.actions

const { reducer } = contactSlice

export default reducer