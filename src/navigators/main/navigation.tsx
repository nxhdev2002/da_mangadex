import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StackNavigationProp } from "@react-navigation/stack";
/// components
import { BottomNavigator } from './bottom';
import { ChapterState, ComicState } from '../../type';
import { InfoScreen, ReadScreen } from '../../screens';


export type StackNavigation = StackNavigationProp<RootStackParamList>;
export type RootStackParamList = {
    BottomNavigator: undefined;
    InfoScreen: {
        comic: ComicState
    };
    ReadScreen: {
        eposide: ChapterState
    }
  };

const RootStack = createNativeStackNavigator<RootStackParamList>()
export const Route = () => (
    <NavigationContainer>
        <RootStack.Navigator>
            <RootStack.Screen name="BottomNavigator" component={BottomNavigator} options={{headerShown: false, title: ''}} />
            <RootStack.Screen name="InfoScreen" component={InfoScreen} />
            <RootStack.Screen name="ReadScreen" component={ReadScreen} />
        </RootStack.Navigator>
    </NavigationContainer>
)