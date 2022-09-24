import React, { useState } from "react";
import { ImageBackground, Text, View, StyleSheet, Dimensions, Modal } from "react-native";
import { IconButton } from "react-native-paper";
import { ComicState } from "../../type";
// import { DownloadModal } from "./modal";
const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

type AppProp = {
    comic: ComicState
}
export const Header = (props: AppProp) => {
    const comic = props.comic
    const [visible, setVisible] = useState(false);
    const containerStyle = { backgroundColor: 'white', padding: 20 };
    // <View style={styles.container}>
    return (
            <ImageBackground
                style={styles.container}
                source={{ uri: comic.thumb }}
                imageStyle={styles.image}
                resizeMode={'cover'}
            >
                <View style={styles.infoContainer}>
                    <Text style={styles.itemName}>
                        {comic.name}
                    </Text>
                    <Text style={styles.itemDescription}>
                        {
                            comic.desc['en'].slice(0, 80)
                        }...
                    </Text>
                
                    <IconButton
                        style={styles.downloadButton}
                        icon="download"
                        // iconColor='black'
                        size={20}
                        onPress={() => setVisible(true)}
                    />
                </View>
                    {/* {visible && <DownloadModal visible={setVisible} />} */}
            </ImageBackground>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    image: {
        flex: 1,
        opacity: 0.5,
        resizeMode: 'stretch'
    },
    infoContainer: {
        flex: 1,
        margin: 20
    },
    itemName: {
        flex: 1,
        fontSize: 20,
        width: WIDTH / 2.2,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 10
    },
    itemDescription: {
        flex: 1,
        fontSize: 12,
        width: WIDTH / 1.5,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 10
    },
    group: {
        alignSelf: 'flex-start'
    },
    downloadButton: {
        alignSelf: 'flex-end'
    }
})