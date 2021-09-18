import React, { useContext } from 'react'
import { ScrollView, StyleSheet, View,Text, Image } from 'react-native'
import { ThemeContext } from '../context/themeContext/ThemeContext'
import { AnimatedImage } from './AnimatedImage'

const ActivityDetail = ({activity}) => {
    const {description, place, teacher, schedule} = activity
    const {theme:{colors}} = useContext(ThemeContext)

    return (
        <ScrollView
            style={{
                ...StyleSheet.absoluteFillObject,
            }}
            showsVerticalScrollIndicator={false}
        >
            <View style={{...styles.container, marginTop:200}}>
                <Text style={{...styles.title, color:colors.primary }}>Descripción</Text>
                <Text style={styles.regularText}>{description}</Text>

                <Text style={{...styles.title, color:colors.primary }}>Lugar</Text>
                <Text style={styles.regularText}>{place}</Text>

                <Text style={{...styles.title, color:colors.primary }}>Maestro</Text>
                <Text style={styles.regularText}>{teacher}</Text>

                <Text style={{...styles.title, color:colors.primary }}>Horario</Text>
                <Text style={styles.regularText}>{schedule}</Text>

                <View style={{marginTop:70, alignItems:"center"}}>
                    <Image
                        source={require('../../assets/img/iconoClubVerde.png')}
                        style={styles.basicSprite}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
   container:{
       marginHorizontal:20
   },
   title:{
       fontWeight:"bold",
       fontSize:22,
       marginTop:20
   },
   regularText:{
       fontSize: 19,
       textAlign:"justify"
   },
   basicSprite:{
    width:50,
    height:50
}
});

export default ActivityDetail
