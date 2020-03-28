import React from 'react';
import { View, Text, Button } from 'react-native';

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
            title="Details"
            onPress={() => navigation.navigate('Details')}
        />
    </View>
  );
}

export default Incidents;