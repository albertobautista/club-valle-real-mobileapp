import { DrawerContentScrollView } from '@react-navigation/drawer'
import React from 'react'
import { Image, Text,View } from 'react-native'
import { menuItems } from '../data/menu';
import { styles } from '../theme/appTheme'
import DrawerMenuItem from './DrawerMenuItem';

const DrawerMenu = ({navigation}) => {
    return (
    <DrawerContentScrollView>
        <View style={styles.avatarContainer}>
            <Image
                source={{uri: "https://scontent.fgdl3-1.fna.fbcdn.net/v/t1.6435-9/184633889_10158926579550272_4192742971769082865_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=3YGOEHWQXv0AX9cHWxg&_nc_ht=scontent.fgdl3-1.fna&oh=a90900f8fee10bd75bfc90ed46fa2b94&oe=6161908F"}}
                style={styles.avatar}
            />
            <Text style={styles.informationText}>Alberto Chavez</Text>
        </View>
        <View style={styles.menuContainer}>
            {
                menuItems.map(menuItem => <DrawerMenuItem key={menuItem.id} navigation={navigation} menuItem={menuItem} /> )
            }

        </View>
    </DrawerContentScrollView>)
}

export default DrawerMenu
