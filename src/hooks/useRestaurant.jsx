import { useEffect, useState } from 'react'
import {cvrApi} from '../api/cvrApi'

export const useRestaurant = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [dishesState,setDishesState] = useState({
        soupDishes:[],
        ensaladDishes:[],
        mainDishes:[],
        dessertDishes:[]
    });

    const getDishes = async () =>{
        const soupDishesPromise = cvrApi.get("http://192.168.100.37:3000/restaurant/getSoupDishes")
        const ensaladDishesPromise = cvrApi.get("http://192.168.100.37:3000/restaurant/getEnsaladDishes")
        const mainDishesPromise = cvrApi.get("http://192.168.100.37:3000/restaurant/getMainDishes")
        const dessertDishesPromise = cvrApi.get("http://192.168.100.37:3000/restaurant/getDessertDishes")



        // const popularPromise = cvrApi.get("popular")
        // const topRatedPromise = cvrApi.get("top_rated")
        // const upcomingPromise =cvrApi.get("upcoming")

        const response = await Promise.all([soupDishesPromise,ensaladDishesPromise, mainDishesPromise, dessertDishesPromise])
        console.log("REESTSTSATS ",response[0].data.data.dishes)
        setDishesState({
            soupDishes: response[0].data.data.dishes,
            ensaladDishes: response[1].data.data.dishes,
            mainDishes: response[2].data.data.dishes,
            dessertDishes: response[3].data.data.dishes,
        })

        setIsLoading(false)
    }

    useEffect(() => {
        getDishes()        
      }, [])
    
    return{
        dishesState,
        isLoading
    }
}

