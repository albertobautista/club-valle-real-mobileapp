import { DrawerContentScrollView } from '@react-navigation/drawer'
import React, { useContext } from 'react'
import { Image, Text,View } from 'react-native'
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { menuItems } from '../data/menu';
import { styles } from '../theme/appTheme'
import DrawerMenuItem from './DrawerMenuItem';

const DrawerMenu = ({navigation}) => {

    const {theme:{colors}} = useContext(ThemeContext)

    return (
    <DrawerContentScrollView>
        <View style={styles.avatarContainer}>
            <Image
                source={{uri: "https://scontent.fgdl3-1.fna.fbcdn.net/v/t1.6435-9/67369699_10157117066450272_2215780306680545280_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=174925&_nc_ohc=LBhT9NPgSWwAX-Q7jbM&_nc_oc=AQlhO1VTK2RszyuNhPjVWaHhpl_204e1DPOnwjLmVOkoPbQYT4XLXJr-5iuV1ZxW3XFyWeuL4y50lqU2y4bUITaR&_nc_ht=scontent.fgdl3-1.fna&oh=6e9cbc37f80a1736b2440cc92a556e8e&oe=616C8104"}}
                style={styles.avatar}
            />
            <Text style={{...styles.informationText, color:colors.text}}>Alberto Bautista</Text>
        </View>
        <View style={{...styles.menuContainer, backgroundColor:colors.card}}>
            {
                menuItems.map(menuItem => <DrawerMenuItem key={menuItem.id} navigation={navigation} menuItem={menuItem} /> )
            }

        </View>
    </DrawerContentScrollView>)
}

export default DrawerMenu
