import { createContext, ReactNode, useEffect, useState } from 'react'
import { ColorSchemaProps, ThemeTypes } from '../styles/schema'

import { dark } from '../styles/dark'
import { light } from '../styles/light'

interface ThemeContextProviderProps {
    children: ReactNode
}

interface ThemeContextProps {
    colorSchema: ColorSchemaProps
    handleChangeTheme: (theme: ThemeType) => void
}

export type ThemeType = keyof typeof ThemeTypes

export const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps)

export function ThemeContextProvider({ children }: ThemeContextProviderProps){
    const [selectedTheme, setSelectedTheme] = useState<ColorSchemaProps>()

    useEffect(() => {
        setSelectedTheme(light)
    }, [])

    function handleChangeTheme(theme: ThemeType){
        let them = theme === 'dark' ? dark : light

        setSelectedTheme(them)
    }

    return(
        <ThemeContext.Provider value={{colorSchema: selectedTheme, handleChangeTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}