import React, { useContext, useEffect } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import { ThemeContext } from '../context/themeContext/ThemeContext'
import HorizontalSlider from '../components/HorizontalSlider';
import { dessertsMenu } from '../data/dessertsMenu';
import { styles } from '../theme/appTheme';



const RestaurantScreen = ({navigation}) => {

    const {theme:{colors}} = useContext(ThemeContext)

    useEffect(() => {
        navigation.setOptions({
            headerLeft : () => 
               ( <TouchableOpacity onPress={()=> navigation.toggleDrawer()}>
                    <Ionicons name="md-menu" size={40} color="black"  style={{marginLeft:10, color:colors.primary}}/>
                </TouchableOpacity>),
        })
    }, [])
    return (
        <ScrollView style={{...styles.globalBackground, backgroundColor:colors.card}} showsVerticalScrollIndicator={false}>
             <HorizontalSlider title="Entradas" gallery={dessertsMenu} width={200} height={200}/>
             <HorizontalSlider title="Sopas" gallery={dessertsMenu} width={200} height={200}/>

             <HorizontalSlider title="Platos fuertes" gallery={dessertsMenu} width={200} height={200}/>
             <HorizontalSlider title="Postres" gallery={dessertsMenu} width={200} height={200}/>

        </ScrollView>
    )
}

export default RestaurantScreen
