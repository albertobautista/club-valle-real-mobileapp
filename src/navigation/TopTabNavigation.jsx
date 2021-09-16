import React, { useContext, useEffect } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SportsActivitiesScreen from '../screens/SportsActivitiesScreen';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { color } from 'react-native-reanimated';
import CulturalActivitiesScreen from '../screens/CulturalActivitiesScreen';


const Tab = createMaterialTopTabNavigator();


export const TopTabNavigation = ({navigation}) => {
    const insets = useSafeAreaInsets()
    const {theme:{colors}} = useContext(ThemeContext)

    useEffect(() => {
      navigation.setOptions({
          headerLeft : () => 
            ( <TouchableOpacity onPress={()=> navigation.toggleDrawer()}>
                  <Ionicons name="md-menu" size={40} color="black"  style={{marginLeft:10, color: colors.primary}}/>
              </TouchableOpacity>),
      })
    }, [])

  return (
    <Tab.Navigator 
    sceneContainerStyle={{
        backgroundColor:colors.card
    }}
    screenOptions={({route})=>({
        tabBarIcon: ({color, focused}) =>{
            let iconName;
  
            switch (route.name) {
              case "ChatScreeen":
                iconName = "chatbox-ellipses-sharp"
              break;
              case "ContactsScreen":
                iconName = "book"
              break;
              case "AlbumsScreen":
                iconName = "image"
                break;
            }
            return <Ionicons name={iconName} size={30} color={focused ? colors.primary: color}/>

          },
         
        tabBarShowIcon:false,
        tabBarIconStyle:{
          width:50,
          height:30,
          alignItems:"center",
          color:"red"

        },
        tabBarIndicatorStyle:{
            backgroundColor: colors.primary,
            color:"red"
        },
        tabBarLabelStyle: { color:colors.text },
        tabBarStyle:{
            // shadowColor: "transparent",
            elevation:0,
            backgroundColor:colors.card,
            size:10
            
        },
        }) 
    }
    >
      <Tab.Screen options={{title:"Deportivas"}} name="SportsActivitiesScreen" component={SportsActivitiesScreen} />
      <Tab.Screen options={{title:"Culturales"}} name="CulturalActivitiesScreen" component={CulturalActivitiesScreen} />
    </Tab.Navigator>
  );
}