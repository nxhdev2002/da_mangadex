import React from 'react'
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { ChapterState } from '../../type'
import {StackNavigation} from '../../navigators/main'
type ChapterComponentProps = {
    chapter: ChapterState
}

export const ChapterComponent = (props: ChapterComponentProps) => {
    const navigation = useNavigation<StackNavigation>();
    const chapter = props.chapter
    return (
        <TouchableWithoutFeedback 
            onPress={() => navigation.navigate("ReadScreen", {eposide: chapter})}>
            <View style={styles.container}>
                <Text>Eposide {chapter.chapter}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: '5%',
        borderBottomColor: '#81ecec',
        borderBottomWidth: 1
    }
})