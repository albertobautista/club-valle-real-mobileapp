import React, { useContext, useEffect } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../theme/appTheme';
import { ThemeContext } from '../context/themeContext/ThemeContext'



const ConfigurationScreen = ({navigation}) => {
    const {setDarkTheme, setLightTheme, theme:{colors}} = useContext(ThemeContext)

    useEffect(() => {
        navigation.setOptions({
            headerLeft : () => 
               ( <TouchableOpacity onPress={()=> navigation.toggleDrawer()}>
                    <Ionicons name="md-menu" size={40} color="black"  style={{marginLeft:10, color:"#316767"}}/>
                </TouchableOpacity>),
        })
    }, [])
    return (
        <View style={{...styles.globalBackground, backgroundColor:colors.card, paddingTop:20}}>
            {/* <HeaderTitle title="Change Theme Screen" /> */}
            <Text style={{...styles.scheduleTitleText, color:colors.primary}}>Tema de la aplicación</Text>
            <View style={{flexDirection:"row", justifyContent:"space-around"}}>
                
                <TouchableOpacity 
                    style={{
                        backgroundColor:colors.primary, justifyContent:"center", 
                        width:150, height:50, borderRadius:20 
                    }}
                    activeOpacity={0.8}
                    onPress={setLightTheme}
                >
                    <Text style={{color:colors.text, textAlign:"center", fontSize:22}}>Claro</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={{
                        backgroundColor:colors.primary, justifyContent:"center", 
                        width:150, height:50, borderRadius:20 
                    }}
                    activeOpacity={0.8}
                    onPress={setDarkTheme}
                >
                    <Text style={{color:colors.text, textAlign:"center", fontSize:22}}>Oscuro</Text>
                </TouchableOpacity>
            </View>
    </View>
    )
}

export default ConfigurationScreen
