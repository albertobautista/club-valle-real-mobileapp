import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../screens/HomeScreen';
import DrawerMenu from '../components/DrawerMenu';
import { componentsNames } from '../types/componetsNames';
import ActivitiesScreen from '../screens/ActivitiesScreen';

const Drawer = createDrawerNavigator();


const Navigation = () => {
    return (
        <Drawer.Navigator
            drawerContent={
                (props) =><DrawerMenu {...props} />
            }
            screenOptions={{
                drawerStyle: {
                // backgroundColor: '#316767',
                  width: 270,
                  borderEndWidth:2,
                  borderEndColor:"#316767",
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
                options={{headerTitle:""}}
            />
            <Drawer.Screen
                name={componentsNames.Activities.name}
                component={ActivitiesScreen}
            />
        </Drawer.Navigator>
    )
}
export default Navigation
