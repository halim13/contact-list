import React, { useState } from 'react'
import { View } from 'react-native'
import { Avatar } from 'react-native-paper'

const ImageItem = ({ item }) => {
    const [defaultImage, setDefaultImage] = useState(item.photo)

    return (
        <View>
        {defaultImage === 'N/A' ? (
            <Avatar.Text size={50} label={item.firstName[0]} />
        ) : (
            <Avatar.Image
                size={50}
                source={{
                    uri: defaultImage,
                }}
                onError={() => setDefaultImage('N/A')}
            />
        )}
        </View>
    )
}

export default ImageItem
