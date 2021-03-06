import React, { useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../theme/appTheme';
import HorizontalSlider from '../components/HorizontalSlider';
import { gallery } from '../data/gallery';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const windowWidth = Dimensions.get('screen').width;
const HomeScreen = ({ navigation }) => {
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
    <ScrollView style={{ ...styles.globalBackground, backgroundColor: colors.card }}>
      <View style={{ alignItems: 'center' }}>
        <HorizontalSlider title="Bienvenido" gallery={gallery} width={windowWidth * 0.97} />
      </View>
      <View style={styles.scheduleContainer}>
        <View>
          <Text style={{ ...styles.scheduleTitleText, color: colors.primary }}>
            Club Valle Real de Guadalajara
          </Text>
          {/* <Text style={{fontWeight:"bold", color: "#AD8B38",...styles.scheduleText}}>Membresias y Atención al Usuario</Text> */}
          <Text
            style={{
              ...styles.scheduleText,
              textAlign: 'justify',
              marginHorizontal: 20,
              color: colors.text,
            }}
          >
            En Club Valle Real de Guadalajara trabajamos cerca de 100 empleados para ofrecer el
            mejor servicio y atención a nuestros usuarios, siempre mostrando la mejor actitud.
          </Text>
        </View>
        <View style={{ marginTop: 35, marginHorizontal: 20 }}>
          <Text style={{ ...styles.scheduleTitleText, color: colors.primary }}>Horarios</Text>
          {/* <Text style={{fontWeight:"bold", color: "#AD8B38",...styles.scheduleText}}>Membresias y Atención al Usuario</Text> */}
          <View style={{ flexDirection: 'row' }}>
            <Ionicons name="time-outline" color={colors.primary} size={32} />
            <Text
              style={{ ...styles.scheduleText, color: colors.text, marginTop: 5, marginLeft: 10 }}
            >
              Lunes - Sábado: 06:00 am - 10:00 pm
            </Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <Ionicons name="time-outline" color={colors.primary} size={32} />
            <Text
              style={{ ...styles.scheduleText, color: colors.text, marginTop: 5, marginLeft: 10 }}
            >
              Domingo: 06:00 am - 08:00 pm
            </Text>
          </View>
        </View>
        {/* <View style={{marginTop:35}}>
                    <Text style={{fontWeight:"bold",color: "#AD8B38", ...styles.scheduleText}}>Horario Caja General</Text>
                    <Text style={styles.scheduleText}>Lunes a Viernes 9:00 a 14:00 hrs. y 15:00 a 18:00 hrs.</Text>
                    <Text style={styles.scheduleText}>Sábados 9:00 a 14:00 hrs.</Text>
                    <Text style={styles.scheduleText}>Tels. (33) 3832.0136, 3832.0257, 3832.0385, 3832.0513.</Text>
                </View>
                <View style={{marginTop:35}}>
                    <Text style={{fontWeight:"bold", color: "#AD8B38", ...styles.scheduleText}}>Oficina de Deportes</Text>
                    <Text style={styles.scheduleText}>Lunes a Viernes 9:00 a 14:00 hrs. y 15:00 a 18:00 hrs.</Text>
                    <Text style={styles.scheduleText}>Sábados 9:00 a 14:00 hrs. y Domingos 9:00 a 14:00 hrs.</Text>
                    <Text style={styles.scheduleText}>Tels. (33) 3832.0136, 3832.0257, 3832.0385, 3832.0513.</Text>
                </View>
                <View style={{marginTop:35}}>
                    <Text style={{fontWeight:"bold", color: "#AD8B38", ...styles.scheduleText}}>Información para eventos</Text>
                    <Text style={styles.scheduleText}>Lunes a Viernes 9:00 a 14:00 hrs. y 15:00 a 18:00 hrs.</Text>
                    <Text style={styles.scheduleText}>Sábados 9:00 a 14:00 hrs. y Domingos 9:00 a 14:00 hrs.</Text>
                    <Text style={styles.scheduleText}>Tels. (33) 3832.0136, 3832.0257, 3832.0385, 3832.0513.</Text>
                </View> */}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
