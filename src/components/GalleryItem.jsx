import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react'
import { View, Image, StyleSheet, Text } from 'react-native';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { AnimatedImage } from './AnimatedImage';

const GalleryItem = ({gallery, height = 420, width = 300, type}) => {
    const {theme:{colors}} = useContext(ThemeContext)

    return (
        <View style={{width,height, marginHorizontal: 2, paddingBottom:20, paddingHorizontal: 7, marginRight:5}}>
            <View style={styles.imageContainer}>

                <AnimatedImage uri={gallery.picture} style={{...styles.image, width, height}}/>

                
                
            </View>
            {
                gallery?.description && ( 
                    <View style={styles.descriptionContainer}>
                        <Text style={{...styles.description, color:colors.text}}>{gallery.description}</Text>
                    </View>
                )
            }

        </View>
    )
}
const styles = StyleSheet.create({
    image:{
        flex:1,
        borderRadius:18,


    },
    imageContainer:{
        flex:1,
    },
    descriptionContainer:{
        alignItems:"center",
    },
    description:{
        fontSize:20,
        textAlign:"center"
    }
});
export default GalleryItem
