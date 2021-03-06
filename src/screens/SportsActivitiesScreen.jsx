import React, { useContext } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';

import ActivityCard from '../components/ActivityCard';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { useActivities } from '../hooks/useActivities';

const SportsActivitiesScreen = () => {
  const {
    theme: { colors },
  } = useContext(ThemeContext);
  const { isLoading, sportsActivities } = useActivities();

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
          data={sportsActivities}
          showsVerticalScrollIndicator={false}
          keyExtractor={(activity) => activity.idActivity}
          numColumns={2}
          renderItem={({ item }) => <ActivityCard activity={item} />}
        />
      )}
    </View>
  );
};

export default SportsActivitiesScreen;
