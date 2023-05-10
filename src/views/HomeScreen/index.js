import React, { useCallback, useEffect } from 'react'
import { View } from 'react-native'
import { Button, Modal, Portal, Text } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { createContact, deleteContact, retrieveContactById, retrieveContacts, updateContact } from '../../slices/contacts'
import ContactsList from '../../components/ContactsList'
import Fab from '../../components/Fab'
import ModalContact from '../../components/ModalContact'

const index = () => {
    const { item, status, errorMessage, type } = useSelector(({ contacts }) => contacts)

    const dispatch = useDispatch()

    const initFetch = useCallback(() => {
        dispatch(retrieveContacts())
        // dispatch(retrieveContactById('93ad6070-c92b-11e8-b02f-cbfa15db428b'))
        // dispatch(deleteContact('93ad6070-c92b-11e8-b02f-cbfa15db428b'))
        // dispatch(createContact({ 
        //         "firstName": "ujang",
        //         "lastName": "udin",
        //         "age": 111,
        //         "photo": "http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550"
        //  }))
        // dispatch(updateContact({
        //     id: '93ad6070-c92b-11e8-b02f-cbfa15db428b',
        //     data: { 
        //         "id": "93ad6070-c92b-11e8-b02f-cbfa15db428b",
        //         "firstName": "Bilbo",
        //         "lastName": "Baggins",
        //         "age": 111,
        //         "photo": "http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550"
        //          }
        // }))
    },
        [])

    useEffect(() => {
        initFetch()

        return () => null
    }, [initFetch])

    return (
        <View>
            <ContactsList />
            <Fab />
            <Portal>
                <ModalContact />
            </Portal>
        </View>
    )
}

export default index