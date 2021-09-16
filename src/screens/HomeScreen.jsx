import React, { useContext, useEffect } from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../theme/appTheme';
import HorizontalSlider from '../components/HorizontalSlider';
import { gallery } from '../data/gallery';
import { ThemeContext } from '../context/themeContext/ThemeContext';



const HomeScreen = ({navigation}) => {
    const {theme:{colors}} = useContext(ThemeContext)

    useEffect(() => {
        navigation.setOptions({
            headerLeft : () => 
               ( <TouchableOpacity onPress={()=> navigation.toggleDrawer()}>
                    <Ionicons name="md-menu" size={40} color="black"  style={{marginLeft:10, color:"#316767"}}/>
                </TouchableOpacity>),
        })
    }, [])

    return (
        <ScrollView style={{...styles.globalBackground, backgroundColor:colors.card}}>
            <View style={{ alignItems:"center"}}>
                <HorizontalSlider title="Bienvenido" gallery={gallery}/>
            </View>
            <View style={styles.scheduleContainer}>
                <View>
                    <Text style={{...styles.scheduleTitleText, color:colors.primary}}>Club Valle Real de Guadalajara</Text>
                    {/* <Text style={{fontWeight:"bold", color: "#AD8B38",...styles.scheduleText}}>Membresias y Atención al Usuario</Text> */}
                    <Text style={{...styles.scheduleText, textAlign:"justify", marginHorizontal:20, color:colors.text}}>En Club Valle Real de Guadalajara trabajamos cerca de 100 empleados para ofrecer el mejor servicio y atención a nuestros usuarios, siempre mostrando la mejor actitud.</Text>
                
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
    )
}

export default HomeScreen
