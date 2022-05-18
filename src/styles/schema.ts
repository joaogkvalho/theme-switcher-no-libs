export interface ColorSchemaProps {
    header: {
        logoColor: string
        bgHeader: string
    },
    body: {
        bgColor: string
        textColor: string
        buttonColor: string
        buttonTextColor: string
    }
}


export const ThemeTypes = {
    light: {
        id: 'light', name: 'Light'
    },
    dark: {
        id: 'dark', name: 'Dark'
    }
}