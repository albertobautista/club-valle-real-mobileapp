import React, { useEffect, useState } from 'react';
import { cvrApi } from '../api/cvrApi';

export const useActivities = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [sportsActivities, setSportsActivities] = useState();
  const [culturalActivities, setCulturalActivities] = useState();

  const getActivities = async () => {
    const sportsPromise = cvrApi.get('activities/getSportsActivities');
    const culturalPromise = cvrApi.get(
      'activities/getCulturalActivities',
    );

    const response = await Promise.all([sportsPromise, culturalPromise]);

    setSportsActivities(response[0].data.data.activities);
    setCulturalActivities(response[1].data.data.activities);
    setIsLoading(false);
  };

  useEffect(() => {
    getActivities();
  }, []);

  return {
    isLoading,
    sportsActivities,
    culturalActivities,
  };
};
