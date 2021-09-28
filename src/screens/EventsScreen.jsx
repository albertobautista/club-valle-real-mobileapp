import React, { useContext, useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { ThemeContext } from '../context/themeContext/ThemeContext';

const EventsScreen = ({ navigation }) => {
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
    <View>
      <Text>Events</Text>
    </View>
  );
};

export default EventsScreen;
