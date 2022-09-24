import { StackScreenProps } from "@react-navigation/stack";
import React, { FC, useLayoutEffect } from "react";
import { View } from "react-native";
import { RootStackParamList } from '../navigators/main'
import { ComicState } from "../type";
import { Header } from '../components/info'
import { TopNavigator } from '../navigators'
import { Text } from "react-native-paper";
type Props = StackScreenProps<RootStackParamList, 'ReadScreen'>;

export const ReadScreen = ({ navigation, route }: Props) => {
    return (
        <View style={{ flex: 1 }}>
            <Text>Test</Text>
        </View>
    )
}