import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Image, StyleSheet } from 'react-native';

const GalleryItem = ({gallery:{picture}, height = 420, width = 300}) => {

    return (
        <View style={{width,height, marginHorizontal: 2, paddingBottom:20, paddingHorizontal: 7}}>
            <View style={styles.imageContainer}>
                <Image source={{uri:picture}} style={styles.image}/>
            </View>
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
    }
});
export default GalleryItem
