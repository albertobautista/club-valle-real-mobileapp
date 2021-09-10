import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../theme/appTheme';
import HorizontalSlider from '../components/HorizontalSlider';
import { gallery } from '../data/gallery';



const HomeScreen = ({navigation}) => { 
    useEffect(() => {
        navigation.setOptions({
            headerLeft : () => 
                <TouchableOpacity onPress={()=> navigation.toggleDrawer()}>
                    <Ionicons name="md-menu" size={40} color="black"  style={{marginLeft:10, color:"#316767"}}/>
                </TouchableOpacity>

        })
    }, [])

    return (
        <ScrollView style={styles.globalBackground}>
            <View style={{width:500}}>
            <Image source={require('../../assets/img/logoValle.png')}
                style={{ width: 400, height: 103 }}
                />
            </View>
            <View style={{marginTop:50, alignItems:"center"}}>
                <HorizontalSlider title="Bienvenido" gallery={gallery}/>
            </View>
            <View style={styles.scheduleContainer}>
                <View>
                    <Text style={styles.scheduleTitleText}>Horarios de servicio</Text>
                    <Text style={{fontWeight:"bold", color: "#AD8B38",...styles.scheduleText}}>Membresias y Atención al Usuario</Text>
                    <Text style={styles.scheduleText}>Lunes a Viernes 9:00 a 14:00 hrs. y 15:00 a 18:00 hrs.</Text>
                    <Text style={styles.scheduleText}>Sábados 9:00 a 14:00 hrs.</Text>
                    <Text style={styles.scheduleText}>Tels. (33) 3832.0136, 3832.0257, 3832.0385, 3832.0513.</Text>
                </View>
                <View style={{marginTop:35}}>
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
                </View>

            </View>
           
        </ScrollView>
    )
}

export default HomeScreen
