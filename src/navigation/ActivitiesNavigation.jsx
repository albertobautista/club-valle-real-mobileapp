import React, { useEffect } from "react" 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Platform, Text, TouchableOpacity } from "react-native";
import { TopTabNavigator } from "./TopTabNavigator";
import { Ionicons } from '@expo/vector-icons';


export const ActivitiesNavigation = ({navigation}) =>{
    useEffect(() => {
        navigation.setOptions({
            headerLeft : () => 
                <TouchableOpacity onPress={()=> navigation.toggleDrawer()}>
                    <Ionicons name="md-menu" size={40} color="black"  style={{marginLeft:10, color:"#316767"}}/>
                </TouchableOpacity>

        })
    }, [])
  return Platform.OS === "ios" ? <TabsIOS/> : <TabsAndroid/>
  
}

const BottomTabAndroid = createMaterialBottomTabNavigator();

function TabsAndroid() {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{backgroundColor:"red"}}
      screenOptions={({route})=>({
        tabBarIcon: ({color, focused}) =>{
          let iconName;

          switch (route.name) {
            case "Tab1Screen":
              iconName = "camera"
            break;
            case "TopTabNavigator":
              iconName = "tablet-landscape"
            break;
            case "StackNavigator":
              iconName = "folder-open-sharp"
              break;
          }
          return <Ionicons name={iconName} size={20} color={color}/>

        },
        tabBarActiveTintColor:"red",
        tabBarStyle:{
          borderTopColor:"red",
          borderTopWidth:0,
          elevation:0,
          
        },
        tabBarLabelStyle:{
          fontSize:15
        }
      })
      
    }

    >

      <BottomTabAndroid.Screen options={{title:"TopTabNavigator"}} name="TopTabNavigator" component={TopTabNavigator} />

    </BottomTabAndroid.Navigator>
  );
}


const BottomtabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottomtabIOS.Navigator
    sceneContainerStyle={{
      backgroundColor: 'white',
    }}
      screenOptions={({route})=>({
        tabBarIcon: ({color, focused, size}) =>{
          let iconName;

          switch (route.name) {
            case "Tab1Screen":
              iconName = "camera"
            break;
            case "TopTabNavigator":
              iconName = "tablet-landscape"
            break;
            case "StackNavigator":
              iconName = "folder-open-sharp"
              break;
          }
          return <Ionicons name={iconName} size={30} color={color}/>

        },
        tabBarActiveTintColor:"red",
        tabBarStyle:{
          borderTopColor:"red",
          borderTopWidth:0,
          elevation:0
        },
        tabBarLabelStyle:{
          fontSize:15
        }
      })
      
    }
    >
      <BottomtabIOS.Screen options={{headerShown: false, title:"Actividades"}} name="TopTabNavigator" component={TopTabNavigator} />

    </BottomtabIOS.Navigator>
  );
}

