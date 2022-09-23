import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
/// components
import { BottomNavigator } from './bottom';
// import { InfoScreen, ReadScreen } from '../../screens';
    
export type RootStackParamList = {
    BottomNavigator: undefined;
    InfoScreen: undefined;
  };

const RootStack = createNativeStackNavigator<RootStackParamList>()
export const Route = () => (
    <NavigationContainer>
        <RootStack.Navigator>
            <RootStack.Screen name="BottomNavigator" component={BottomNavigator} options={{headerShown: false, title: ''}} />
            <RootStack.Screen name="InfoScreen" component={BottomNavigator} />
            {/* <RootStack.Screen name="ReadScreen" component={ReadScreen} options={{headerShown: false}} /> */}
        </RootStack.Navigator>
    </NavigationContainer>
)