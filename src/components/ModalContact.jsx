import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Button, Modal, Text, TextInput } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { updateVisible } from '../slices/modal'
import { updateContactItem } from '../slices/contactItem'

const ModalContact = () => {
    const dispatch = useDispatch()
    const [text, setText] = useState('')

    const { visible } = useSelector(({ modal }) => modal)
    // const { firstName, lastName, age, photo } = useSelector(({ contactItem }) => contactItem)
    const contact = useSelector(({ contactItem }) => contactItem)

    const hideModal = () => dispatch(updateVisible(false))
    const setContactItem = (key, value) => dispatch(updateContactItem(key)(value))

    const saveModal = () => {
        hideModal()
    }

    const containerStyle = { backgroundColor: 'white', padding: 20, margin: 16, borderRadius: 20 }

    console.log({
        contact
    })
    return (
        <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}
            dismissable={false}
        >
            <Text style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 20,
                marginBottom: 16,
            }}>Add Contact</Text>
            <TextInput
                label='First Name'
                // value={firstName}
                mode='outlined'
                onChangeText={val => setContactItem('firstName', val)}
                style={{ marginBottom: 16 }}
            />
            <TextInput
                label='Last Name'
                value={text}
                mode='outlined'
                onChangeText={text => setText(text)}
                style={{ marginBottom: 16 }}
            />
            <TextInput
                label='Age'
                value={text}
                mode='outlined'
                keyboardType='number-pad'
                onChangeText={text => setText(text)}
                style={{ marginBottom: 16 }}
            />
            <Button mode='contained' onPress={saveModal}>Save</Button>
        </Modal>
    )
}

export default ModalContact

const styles = StyleSheet.create({})