import React, { useContext } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../screens/HomeScreen';
import DrawerMenu from '../components/DrawerMenu';
import { componentsNames } from '../types/componetsNames';
import {ActivitiesNavigation} from './ActivitiesNavigation';
import { Text, View } from 'react-native';
import HeaderIcon from '../components/HeaderIcon';
import { NavigationContainer } from '@react-navigation/native';
import ConfigurationScreen from '../screens/ConfigurationScreen';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const Drawer = createDrawerNavigator();


const Navigation = () => {
    const { theme:{colors}} = useContext(ThemeContext)

    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContent={
                    (props) =><DrawerMenu {...props} />
                }
                screenOptions={{
                    drawerStyle: {
                    backgroundColor: colors.card,
                    width: 270,
                    borderEndWidth:2,
                    borderEndColor:colors.primary,
                    },
                    headerStyle:{
                        elevation:0,
                        shadowColor:"transparent"
                    },
                    
                }}
            >
                <Drawer.Screen
                    name={componentsNames.Home.name}
                    component={HomeScreen}
                    options={{
                        headerTitle: () => <HeaderIcon />,
                       
                          
                        }}
                />
                <Drawer.Screen
                    name={componentsNames.Activities.name}
                    component={ActivitiesNavigation}
                    options={{headerTitle: () => <HeaderIcon /> }}
                />
                <Drawer.Screen
                    name={componentsNames.Configuration.name}
                    component={ConfigurationScreen}
                    options={{headerTitle: () => <HeaderIcon /> }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
export default Navigation
