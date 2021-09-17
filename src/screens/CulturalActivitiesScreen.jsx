import React, { useContext, useEffect } from 'react'
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../theme/appTheme';
import { culturalActivities } from '../api/culturalActivities';
import ActivityCard from '../components/ActivityCard';
import { ThemeContext } from '../context/themeContext/ThemeContext';



const CulturalActivitiesScreen = ({navigation}) => { 
    const { theme:{colors}} = useContext(ThemeContext)

    return (
        <View style={{alignItems:"center", flex:1, backgroundColor:colors.card}}>
            <FlatList
                data={culturalActivities}
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

export default CulturalActivitiesScreen
