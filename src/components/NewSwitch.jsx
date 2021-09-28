import React, { useContext, useState } from 'react'
import { Switch, Platform } from 'react-native'
import { ThemeContext } from '../context/themeContext/ThemeContext'


const NewSwitch = ({isOn, onChange}) => {
    const [isEnabled, setIsEnabled] = useState(isOn)
  const {theme:{colors}} = useContext(ThemeContext)


    const toggleSwitch = () => {
        setIsEnabled(!isEnabled)
        onChange(!isEnabled)
    }


    return (
        <Switch
            trackColor={{ false: "#D9D9DB", true: colors.primary }}
            thumbColor={(Platform.OS === "android" ? colors.primary : "" )}
            // ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
    />
    )
}

export default NewSwitch
