import React, { useContext } from 'react'
import { Button, Text, View, StyleSheet, TouchableOpacity, ImageBackground, Dimensions } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import { ThemeContext } from '../context/themeContext/ThemeContext'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ActivityDetail from '../components/ActivityDetail';

const ActivityDetailScreen = ({navigation, route}) => {
const {activity} = route.params
console.log("ACTIVITY ", activity)
const {name, principalImage} = activity
const windowWidth = Dimensions.get("window").width


const { theme:{colors}} = useContext(ThemeContext)

    return (
      <View style={{flex:1, backgroundColor:colors.card}}>
        
        <View style={{
                ...styles.headerContainer,

        }}>
          <ImageBackground source={{uri:principalImage}}  style={{...styles.image, width: windowWidth}}>
         {/* <TouchableOpacity
          onPress={()=> navigation.pop() }
            activeOpacity={0.5}
            style={{...styles.backButton, top: top + 5}}
        >
                    <Ionicons name="arrow-back-outline" color="black" size={35}/>
                </TouchableOpacity> */}
            <Text style={styles.text}>{name}</Text>
          </ImageBackground>
        </View>
        <ActivityDetail activity={activity}/>
      </View>
      );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",

    
  },
  text: {
    color: "white",
    fontSize: 30,
    lineHeight: 45,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(49,103,103,0.6)"
  },
  headerContainer:{
   height:200,
   zIndex:999,
   alignItems:"center",

  },
  backButton:{
      position:"absolute",
      left:20
  },
  pokemonName:{
      color:"white",
      fontSize:40,
      alignSelf:"flex-start",
      left:20
  },
  pokeball:{
      width:250,
      height:250,
      bottom: -20,
      opacity:0.7
  },
  pokemonImage:{
      width:250,
      height:250,
      position:"absolute",
      bottom: -15
  },
  activityIndicator:{
      flex:1,
      justifyContent:"center",
      alignItems:"center"
  }
});

export default ActivityDetailScreen
