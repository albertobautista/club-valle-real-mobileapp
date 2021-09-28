import React, { useContext, useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../theme/appTheme';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import NewSwitch from '../components/NewSwitch'

const ConfigurationScreen = ({ navigation }) => {
  const {
    setDarkTheme,
    setLightTheme,
    theme: { colors },
  } = useContext(ThemeContext);

  const [isActive, setIsActive] = useState(false)
  const [themeText, setThemeText] = useState("oscuro")

  const darkTheme = () =>{
    setDarkTheme()
    setThemeText('claro')
  }

  const lightTheme = () => {
    setLightTheme()
    setThemeText('oscuro')

  }

  const onChange = (value, field) =>{
    value === true ? darkTheme() : lightTheme()
    setIsActive(!isActive)
}

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Ionicons
            name="md-menu"
            size={40}
            color="black"
            style={{ marginLeft: 10, color: '#316767' }}
          />
        </TouchableOpacity>
      ),
    });
  }, []);
  return (
    <View style={{ ...styles.globalBackground, backgroundColor: colors.card, paddingTop: 20 }}>
      {/* <HeaderTitle title="Change Theme Screen" /> */}
      <Text style={{ ...styles.scheduleTitleText, color: colors.primary }}>
        Tema de la aplicación
      </Text>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
      <Text style={{ ...styles.normalText, ...styles.globalMargin, color: colors.text }}>Habilitar modo <Text style={{fontWeight:"bold"}}>{themeText}</Text></Text>
      
        <NewSwitch isOn={isActive} onChange={(value) => onChange(value)} />

      </View>
    </View>
  );
};

export default ConfigurationScreen;
