import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, FlatList, RefreshControl, StyleSheet, Alert } from 'react-native'
import { Avatar, Divider, IconButton, Text } from 'react-native-paper'
import { deleteContact, retrieveContacts } from '../slices/contacts'
import SkeletonItem from './SkeletonItem'
import ImageItem from './ImageItem'
import { updateVisible } from '../slices/modal'
import { initForm } from '../slices/contactItem'

const ContactsList = () => {
    const dispatch = useDispatch()
    const { data, status } = useSelector(({ contacts }) => contacts)

    const refreshData = () => dispatch(retrieveContacts())
    const editData = (item) => {
        dispatch(updateVisible(true))
        dispatch(initForm(item))
    }

    const deleteData = (id) => Alert.alert(
        'Delete data',
        'Are you sure?',
        [
            {
                text: 'No',
                onPress: () => {}
            },
            {
                text: 'Yes',
                onPress: () => dispatch(deleteContact(id))
            },
        ]
    )

    const renderSeparator = () => <Divider style={{ marginVertical: 8 }} />

    const renderItem = ({ item }) => <View style={styles.item}>
        <ImageItem item={item} />
        <View style={styles.itemCenter}>
            <Text style={styles.name}>{item.firstName} {item.lastName || ''}</Text>
            <Text>{item.age || 0} Years</Text>
        </View>
        <View style={styles.itemRight}>
            <IconButton
                icon='pencil'
                size={20}
                onPress={() => editData(item)}
            />
            <IconButton
                icon='trash-can'
                size={20}
                onPress={() => deleteData(item.id)}
            />
        </View>
    </View>

    if (status === 'idle' || status === 'progress') {
        return (
            <View>
                <SkeletonItem style={styles.skeleton} />
                <SkeletonItem style={styles.skeleton} />
                <SkeletonItem style={styles.skeleton} />
                <SkeletonItem style={styles.skeleton} />
                <SkeletonItem style={styles.skeleton} />
            </View>
        )
    }
    return (
        <View>
            <FlatList
                data={data}
                refreshControl={<RefreshControl refreshing={status === 'progress'} onRefresh={refreshData} />}
                keyExtractor={(_, i) => i.toString()}
                renderItem={renderItem}
                ItemSeparatorComponent={renderSeparator}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemCenter: {
        marginLeft: 16,
        flex: 1,
    },
    itemRight: {
        marginLeft: 16,
        flex: 1,
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },
    name: { fontWeight: 'bold' },
    skeleton: {
        marginHorizontal: 16,
        marginVertical: 8,
    }
})

export default ContactsList