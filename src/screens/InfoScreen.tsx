import { StackScreenProps } from "@react-navigation/stack";
import React, { FC, useLayoutEffect } from "react";
import { View } from "react-native";
import { RootStackParamList } from '../navigators/main'
import { ComicState } from "../type";
import { Header } from '../components/info'
import { TopNavigator } from '../navigators'
type Props = StackScreenProps<RootStackParamList, 'InfoScreen'>;

export const InfoScreen = ({ navigation, route }: Props) => {
    const comic: ComicState = route.params.comic
    useLayoutEffect(() => {
        navigation.setOptions({ title: comic.name.slice(0, 10) + "..." })
    }, [])
    return (
        <View style={{ flex: 1 }}>
            <Header comic={comic} />
            <View style={{ flex: 2 }}>
                <TopNavigator />
            </View>
        </View>
    )
}