import React from 'react'
import { StyleSheet } from 'react-native'
import { Button, Modal, Text, TextInput } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { updateVisible } from '../slices/modal'
import { updateForm, clearForm } from '../slices/contactItem'
import { createContact, updateContact } from '../slices/contacts'

const ModalContact = () => {
    const dispatch = useDispatch()

    const { visible } = useSelector(({ modal }) => modal)
    const { firstName, lastName, age, photo, id } = useSelector(({ contactItem }) => contactItem)

    const hideModal = () => dispatch(updateVisible(false))
    const clearItem = () => dispatch(clearForm())
    const setContactItem = (key, value) => dispatch(updateForm({ key, value }))

    const save = () => dispatch(createContact({
        firstName,
        lastName,
        age: age ? parseInt(age) : '',
        ...(photo ? { photo } : {}),
    }))

    const edit = () => dispatch(updateContact(id, {
        firstName,
        lastName,
        age: age ? parseInt(age) : '',
        ...(photo ? { photo } : {}),
    }))

    const saveModal = () => {
        if(firstName && lastName && age) {
            if(id) {
                edit()
            } else {
                save()
            }
        }
        clearItem()
        hideModal()
    }

    const validation = () => !firstName || !lastName || !age

    const containerStyle = { backgroundColor: 'white', padding: 20, margin: 16, borderRadius: 20 }

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
            }}>{id ? 'Edit' : 'Add'} Contact</Text>
            <TextInput
                label='First Name'
                value={firstName}
                mode='outlined'
                onChangeText={val => setContactItem('firstName', val)}
                style={{ marginBottom: 16 }}
            />
            <TextInput
                label='Last Name'
                value={lastName}
                mode='outlined'
                onChangeText={val => setContactItem('lastName', val)}
                style={{ marginBottom: 16 }}
            />
            <TextInput
                label='Age'
                value={age}
                mode='outlined'
                keyboardType='number-pad'
                onChangeText={val => setContactItem('age', val)}
                style={{ marginBottom: 16 }}
            />
            <Button mode='contained' onPress={saveModal} disabled={validation()}>Save</Button>
        </Modal>
    )
}

export default ModalContact

const styles = StyleSheet.create({})