import React from 'react';
import { View, Text, Button } from 'react-native';

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
            title="Incidents"
            onPress={() => navigation.navigate('Incidents')}
        />
    </View>
  );
}

export default Details