import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../theme/appTheme';



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
        <View style={styles.globalBackground}>
            <Text>HOME SCREEN</Text>
        </View>
    )
}

export default HomeScreen
