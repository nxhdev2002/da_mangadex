import React, { useEffect, FC } from 'react'
import { SafeAreaView } from 'react-native'
import { Slider, Popular } from '../components/home'
export const HomeScreen: FC = () => (
    <SafeAreaView style={{ flex: 1 }}>
        {/* <AppBarHeader /> */}
        <Slider />
        <Popular />
    </SafeAreaView>
)
