export const lightTheme = {
    currentTheme:"light",
    dark: false,
    dividerColor:"rgba(0,0,0,0.5)",
    colors:{
        primary: "#316767",
        background: "white",
        card: "white",
        text: "black",
        border: "#316767",
        notification: "#316767"
    }
}

export const darkTheme = {
    currentTheme:"dark",
    dark: true,
    dividerColor:"rgba(255,255,255,0.5)",
    colors:{
        primary: "#316767",
        background: "black",
        card: "black",
        text: "white",
        border: "#316767",
        notification: "#316767"
    }
}

export const themeReducer = (state, action) => {
    switch (action.type) {
        case "set_light_theme":
            return {...lightTheme}
            
        case "set_dark_theme":
            return {...darkTheme}
    
        default:
            return state;
    }
}