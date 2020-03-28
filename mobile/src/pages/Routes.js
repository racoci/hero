import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Incidents from "./incidents"
import Details from "./details"

const Stack = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Incidents"
                screenOptions = {
                    {
                        headerShown: false
                    }
                }
            >
                <Stack.Screen 
                    name="Details" 
                    component={Details}
                /> 
                <Stack.Screen 
                    name="Incidents" 
                    component={Incidents} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;