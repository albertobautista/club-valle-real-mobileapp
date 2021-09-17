import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native'
import { ThemeContext } from '../context/themeContext/ThemeContext'

const ActivityDetailScreen = ({navigation, route}) => {
const {activity} = route.params
const { theme:{colors}} = useContext(ThemeContext)

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:colors.card }}>
          <Text style={{ fontSize: 30 }}>{JSON.stringify(activity,null,3)}</Text>
          <Button onPress={() => navigation.goBack()} title="Dismiss" />
        </View>
      );
}

export default ActivityDetailScreen
