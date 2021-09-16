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
        <View style={{...styles.globalBackground, backgroundColor:colors.card, paddingTop:50}}>
            {/* <HeaderTitle title="Change Theme Screen" /> */}
            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                <TouchableOpacity 
                    style={{
                        backgroundColor:colors.primary, justifyContent:"center", 
                        width:150, height:50, borderRadius:20 
                    }}
                    activeOpacity={0.8}
                    onPress={setLightTheme}
                >
                    <Text style={{color:colors.text, textAlign:"center", fontSize:22}}>Light</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={{
                        backgroundColor:colors.primary, justifyContent:"center", 
                        width:150, height:50, borderRadius:20 
                    }}
                    activeOpacity={0.8}
                    onPress={setDarkTheme}
                >
                    <Text style={{color:colors.text, textAlign:"center", fontSize:22}}>Dark</Text>
                </TouchableOpacity>
            </View>
    </View>
    )
}

export default ConfigurationScreen
