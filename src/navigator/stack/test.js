import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TestScreen from '../../screens/test';

const Stack = createStackNavigator();

const TestStack = () => {
  return (
    <Stack.Navigator screenOptions={config.screenOptions}>
      <Stack.Screen name="Test" component={TestScreen} options={{
        headerShown: false
      }} />
    </Stack.Navigator>
  )
}

export default TestStack;
