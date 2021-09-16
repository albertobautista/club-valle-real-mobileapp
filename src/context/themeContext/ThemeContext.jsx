import React, { createContext, useEffect, useReducer } from "react";
import { Appearance, AppState, useColorScheme } from "react-native";
import { darkTheme, lightTheme, themeReducer, ThemeState } from "./ThemeReducer";


export const ThemeContext = createContext()


export const ThemeProvider = ({children}) =>{

    useEffect(() => {
        AppState.addEventListener("change", (status) =>{
            console.log("status", status)
            if(status === "active"){
                (Appearance.getColorScheme() === "light")
                    ? setDarkTheme()
                    : setDarkTheme()
            }
        })
   }, [])

    const [theme, dispatch] = useReducer(themeReducer, (Appearance.getColorScheme() === "dark") ? darkTheme : lightTheme)

    const setDarkTheme =() =>{
        dispatch({type:"set_dark_theme"})
        console.log("SETDARKTHEME")
    }
    const setLightTheme =() =>{
        dispatch({type:"set_light_theme"})
        console.log("SETLightTHEME") 
    }

    return(
        <ThemeContext.Provider value={{setDarkTheme, setLightTheme, theme}}>
            {children}
        </ThemeContext.Provider>
    )

}