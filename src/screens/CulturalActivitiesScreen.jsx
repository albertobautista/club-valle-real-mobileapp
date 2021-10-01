import React, { useContext, useEffect } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import ActivityCard from '../components/ActivityCard';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { useActivities } from '../hooks/useActivities';

const CulturalActivitiesScreen = ({ navigation }) => {
  const {
    theme: { colors },
  } = useContext(ThemeContext);
  const { isLoading, culturalActivities } = useActivities();

  return (
    <View style={{ alignItems: 'center', flex: 1, backgroundColor: colors.card }}>
      {isLoading ? (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            flex: 1,
          }}
        >
          <ActivityIndicator size={25} color={colors.text} />
        </View>
      ) : (
        <FlatList
          data={culturalActivities}
          showsVerticalScrollIndicator={false}
          keyExtractor={(activity) => activity.idActivity}
          numColumns={2}
          renderItem={({ item }) => <ActivityCard activity={item} />}
        />
      )}
    </View>
  );
};

export default CulturalActivitiesScreen;
