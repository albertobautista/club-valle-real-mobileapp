import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ActivityDetailScreen from '../screens/ActivityDetailScreen';
import SportsActivitiesScreen from '../screens/SportsActivitiesScreen';
import CulturalActivitiesScreen from '../screens/CulturalActivitiesScreen';

const Stack = createNativeStackNavigator();

const SportsScreenNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SportsActivitiesScreen" component={SportsActivitiesScreen} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="ActivityDetailScreen" component={ActivityDetailScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

const CulturalScreenNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="CulturalActivitiesScreen" component={CulturalActivitiesScreen} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="ActivityDetailScreen" component={ActivityDetailScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export { SportsScreenNavigator, CulturalScreenNavigator };
