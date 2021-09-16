import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../theme/appTheme';
import { sportActivities } from '../api/sportsActivities';
import ActivityCard from '../components/ActivityCard';



const SportsActivitiesScreen = ({navigation}) => { 
    useEffect(() => {
        navigation.setOptions({
            headerLeft : () => 
                <TouchableOpacity onPress={()=> navigation.toggleDrawer()}>
                    <Ionicons name="md-menu" size={40} color="black"  style={{marginLeft:10, color:"#316767"}}/>
                </TouchableOpacity>

        })
    }, [])

    return (
        <View style={{alignItems:"center", flex:1}}>
            <FlatList
                data={sportActivities}
                showsVerticalScrollIndicator={false}
                keyExtractor={(activity)=>activity.id}
                numColumns={2}
                renderItem={({item}) => (
                    <ActivityCard activity={item}  />
                )}
            />


        </View>
    )
}

export default SportsActivitiesScreen
