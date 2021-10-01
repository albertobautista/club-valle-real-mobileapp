import { useEffect, useState } from 'react';
import { cvrApi } from '../api/cvrApi';

export const useRestaurant = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dishesState, setDishesState] = useState({
    soupDishes: [],
    ensaladDishes: [],
    mainDishes: [],
    dessertDishes: [],
  });

  const getDishes = async () => {
    const soupDishesPromise = cvrApi.get('restaurant/getSoupDishes');
    const ensaladDishesPromise = cvrApi.get(
      'restaurant/getEnsaladDishes',
    );
    const mainDishesPromise = cvrApi.get('restaurant/getMainDishes');
    const dessertDishesPromise = cvrApi.get(
      'restaurant/getDessertDishes',
    );

    const response = await Promise.all([
      soupDishesPromise,
      ensaladDishesPromise,
      mainDishesPromise,
      dessertDishesPromise,
    ]);

    setDishesState({
      soupDishes: response[0].data.data.dishes,
      ensaladDishes: response[1].data.data.dishes,
      mainDishes: response[2].data.data.dishes,
      dessertDishes: response[3].data.data.dishes,
    });

    setIsLoading(false);
  };

  useEffect(() => {
    getDishes();
  }, []);

  return {
    dishesState,
    isLoading,
  };
};
