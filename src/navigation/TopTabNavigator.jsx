import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ActivitiesScreen from '../screens/ActivitiesScreen';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator =() => {
    const insets = useSafeAreaInsets()

  return (
    <Tab.Navigator 
    sceneContainerStyle={{
        backgroundColor:"white"
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
            return <Ionicons name={iconName} size={30} color={focused ? "green": color}/>

          },
        style:{
          backgroundColor:"red"
        },
        tabBarPressColor:"blue",
        tabBarShowIcon:true,
        tabBarIconStyle:{
          width:50,
          height:30,
          alignItems:"center"
        },
        tabBarIndicatorStyle:{
            backgroundColor: "green"
        },
        tabBarStyle:{
            shadowColor: "transparent",
            elevation:0
        }
      }) 
    }
    >
      <Tab.Screen options={{title:"Deportivas"}} name="ChatScreeen" component={ActivitiesScreen} />
      <Tab.Screen options={{title:"Culturales"}} name="ContactsScreen" component={ActivitiesScreen} />
    </Tab.Navigator>
  );
}