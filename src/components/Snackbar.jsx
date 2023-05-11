import React from 'react'
import { Snackbar as SnackbarPaper } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { clearErrorMessage } from '../slices/contacts'

const Snackbar = () => {

    const { errorMessage } = useSelector(({ contacts }) => contacts)
    const dispatch = useDispatch()

    const clearMessage = () => dispatch(clearErrorMessage(true))
    return (
        <SnackbarPaper
            visible={!!errorMessage}
            onDismiss={clearMessage}
            action={{
                label: 'Close',
                onPress: () => {
                    clearMessage()
                },
            }}>
            {errorMessage}
        </SnackbarPaper>
    )
}

export default Snackbar
