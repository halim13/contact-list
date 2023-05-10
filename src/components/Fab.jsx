import { StyleSheet, View } from 'react-native'
import React from 'react'
import { FAB } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { updateVisible } from '../slices/modal'

const Fab = () => {
    const { status } = useSelector(({ contacts }) => contacts)
    const { visible } = useSelector(({ modal }) => modal)
    const dispatch = useDispatch()

    const addContact = () => dispatch(updateVisible(true))
    
    if(status === 'ready') {
        return (
            <FAB
                icon='plus'
                style={styles.fab}
                onPress={addContact}
            />
        )
    }

    return <View />
}

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        margin: 16,
    }
})

export default Fab