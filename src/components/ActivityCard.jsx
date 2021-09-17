import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemeContext } from '../context/themeContext/ThemeContext';

// import { FadeInImage } from './FadeInImage';

const windowWidth = Dimensions.get("window").width

const ActivityCard = ({activity}) => {
    console.log("Activity", activity)
    const {theme:{colors}} = useContext(ThemeContext)

    const navigation =useNavigation()

    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => 
                navigation.navigate("ActivityDetailScreen",{activity:activity}
            )}
            >
            <View style={{...styles.cardContainer, width: windowWidth *0.4, backgroundColor:colors.primary, marginTop:20}}> 
                {/* Nombre y Id */}
                <View>
                    <Text style={styles.name}>
                        {activity.name}
                    </Text>
                </View>
                <View style={styles.iconContainer}>
                <Ionicons name={activity.icon} size={150} color="white"/>
                </View>
            
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
   cardContainer:{
        marginHorizontal:10,
        height:120,
        width:160,
        marginBottom:25,
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
        },
   name:{
       color:"white",
       fontSize:20,
       fontWeight:"bold",
       top:20,
       left:10
   },
   iconContainer:{
       width:100,
       height:100,
       position:"absolute",
       bottom:0,
       right:0,
       opacity:0.5,
       overflow:"hidden"
   }
});

export default ActivityCard
