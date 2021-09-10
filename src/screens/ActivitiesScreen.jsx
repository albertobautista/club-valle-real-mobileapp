import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../theme/appTheme';



const ActivitiesScreen = ({navigation}) => { 
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
            <View style={{width:500}}>
            <Image source={require('../../assets/img/logoValle.png')}
                style={{ width: 400, height: 103 }}
                />
            </View>
           
        </View>
    )
}

export default ActivitiesScreen
