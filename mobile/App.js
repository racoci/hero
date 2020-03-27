import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function Incidents() {
    return (
        <View style={
            { 
                flex: 1, 
                alignItems: 'center', 
                justifyContent: 'center' 
            }
        }>
            <Text>Incidents</Text>
        </View>
    );
}

const Stack = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Incidents" component={Incidents} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

function App() {
    return <Routes />
}

export default App;