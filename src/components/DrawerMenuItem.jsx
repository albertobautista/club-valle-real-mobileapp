import React, { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { styles } from '../theme/appTheme';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const DrawerMenuItem = ({ navigation, menuItem: { color, title, icon, component } }) => {
  const {
    theme: { colors },
  } = useContext(ThemeContext);

  return (
    <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate(component)}>
      <View style={{ flexDirection: 'row' }}>
        <Ionicons
          name={icon}
          size={25}
          color={color}
          style={{ marginRight: 22, color: '#316767' }}
        />
        <Text style={{ ...styles.menuText, color: colors.text }}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DrawerMenuItem;
