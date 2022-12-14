import React, {useState, memo} from "react"
import { Image, ActivityIndicator, View} from "react-native"

type RemoteImageProps = {
    uri: string,
    desiredWidth: number
}

export const RemoteImage = memo(({uri, desiredWidth}: RemoteImageProps) => {
    const [desiredHeight, setDesiredHeight] = useState(200)
    const [loading, isLoading] = useState(true)
    Image.getSize(uri, (width, height) => {
        setDesiredHeight(desiredWidth / width * height)
    })
    return (
        <View>
            <Image
                source={{uri}}
                style={{
                    width: desiredWidth,
                    height: desiredHeight
                }}
                onLoad={() => isLoading(false)}
            />
            <ActivityIndicator
                // style={styles.activityIndicator}
                animating={loading}
            />
        </View>
    )
})
