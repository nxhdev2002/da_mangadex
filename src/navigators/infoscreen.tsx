import React, { FC } from 'react'
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Eposide } from "../components/info";
const Tab = createMaterialTopTabNavigator()

export const TopNavigator: FC = () => (
    <Tab.Navigator>
        <Tab.Screen name="Eposide" component={Eposide} />
        {/* // <Tab.Screen name="Language" component={Language} />
        // <Tab.Screen name="Related" component={Related} /> */}
    </Tab.Navigator>
)