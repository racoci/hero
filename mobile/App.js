import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function Incidents({ navigation }) {
  return (
    <View style={
        { 
            flex: 1, 
            alignItems: 'center', 
            justifyContent: 'center' 
        }
    }>
        <Text>Incidents</Text>
        <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Details')}
        />
    </View>
  );
}

function Details({ navigation }) {
  return (
    <View style={
        { 
            flex: 1, 
            alignItems: 'center', 
            justifyContent: 'center' 
        }
    }>
        <Text>Details</Text>
        <Button
            title="Go to Incidents"
            onPress={() => navigation.navigate('Incidents')}
        />
    </View>
  );
}

const Stack = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                 initialRouteName="Incidents"
            >
                <Stack.Screen 
                    name="Details" 
                    component={Details}
                    options={{ title: 'Details' }}
                /> 
                <Stack.Screen 
                    name="Incidents" 
                    component={Incidents} 
                    options={{ title: 'Incidents' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

function App() {
    return <Routes />
}

export default App;