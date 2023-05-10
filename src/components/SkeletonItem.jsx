import React from 'react'
import { View } from 'react-native'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'

const SkeletonItem = (props) => {
    return (
        <View {...props}>
            <SkeletonPlaceholder borderRadius={4}>
                <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
                    <SkeletonPlaceholder.Item width={50} height={50} borderRadius={50} />
                    <SkeletonPlaceholder.Item marginLeft={16}>
                        <SkeletonPlaceholder.Item width={150} height={20} />
                        <SkeletonPlaceholder.Item marginTop={6} width={110} height={20} />
                    </SkeletonPlaceholder.Item>
                </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder>
        </View>
    )
}

export default SkeletonItem