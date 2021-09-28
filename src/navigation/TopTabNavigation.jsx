import React, { useContext, useEffect } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemeContext } from '../context/themeContext/ThemeContext';

import { SportsScreenNavigator, CulturalScreenNavigator } from './StackNavigation';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigation = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const {
    theme: { colors },
  } = useContext(ThemeContext);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Ionicons
            name="md-menu"
            size={40}
            color="black"
            style={{ marginLeft: 10, color: colors.primary }}
          />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: colors.card,
      }}
      screenOptions={({ route }) => ({
        tabBarShowIcon: false,
        tabBarIconStyle: {
          width: 50,
          height: 30,
          alignItems: 'center',
        },
        tabBarIndicatorStyle: {
          backgroundColor: colors.primary,
          height: 2,
        },
        // tabBarLabelStyle: { color:colors.text },
        tabBarStyle: {
          // shadowColor: "transparent",
          elevation: 0,
          backgroundColor: colors.card,
          size: 1,
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.text,
      })}
    >
      <Tab.Screen
        options={{ title: 'Deportivas' }}
        name="SportsScreenNavigator"
        component={SportsScreenNavigator}
      />
      <Tab.Screen
        options={{ title: 'Culturales' }}
        name="CulturalScreenNavigator"
        component={CulturalScreenNavigator}
      />
    </Tab.Navigator>
  );
};
