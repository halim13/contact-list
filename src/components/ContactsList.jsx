import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, FlatList, RefreshControl, StyleSheet } from 'react-native'
import { Avatar, Divider, Text } from 'react-native-paper'
import { retrieveContacts } from '../slices/contacts'
import SkeletonItem from './SkeletonItem'

const ContactsList = () => {
    const dispatch = useDispatch()
    const { data, status } = useSelector(({ contacts }) => contacts)

    console.log({
        status
    })
    const refreshData = () => dispatch(retrieveContacts())

    const renderSeparator = () => <Divider style={{ marginVertical: 8 }} />

    const renderItem = ({ item }) => <View style={styles.item}>
        {
            item?.photo === 'N/A' ? <Avatar.Text
                size={50}
                label={item.firstName[0]}
            /> :
                <Avatar.Image
                    size={50} source={{
                        uri: item?.photo,
                    }}
                />
        }
        <View style={styles.itemRight}>
            <Text style={styles.name}>{item.firstName} {item.lastName || ''}</Text>
            <Text>{item.age || 0} Years</Text>
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
    itemRight: {
        marginLeft: 16,
    },
    name: { fontWeight: 'bold' },
    skeleton: {
        marginHorizontal: 16,
        marginVertical: 8,
    }
})

export default ContactsList