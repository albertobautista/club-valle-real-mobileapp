import React, { useContext, useEffect } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import { ThemeContext } from '../context/themeContext/ThemeContext'
import HorizontalSlider from '../components/HorizontalSlider';
import { dessertsMenu } from '../data/dessertsMenu';
import { styles } from '../theme/appTheme';
import { useRestaurant } from '../hooks/useRestaurant';




const RestaurantScreen = ({navigation}) => {

    const {theme:{colors}} = useContext(ThemeContext)
   const {dishesState:{soupDishes, ensaladDishes, mainDishes,dessertDishes}} = useRestaurant()
   console.log("DISHES,", soupDishes)

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
             <HorizontalSlider title="Sopas" gallery={soupDishes} width={195}/>
             <HorizontalSlider title="Ensaladas" gallery={ensaladDishes} width={195} />
             <HorizontalSlider title="Platos fuertes" gallery={mainDishes} width={195} />
             <HorizontalSlider title="Postres" gallery={dessertDishes} width={195}n />

        </ScrollView>
    )
}

export default RestaurantScreen
