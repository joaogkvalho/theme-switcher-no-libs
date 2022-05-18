import { color, Flex, Select, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import { ThemeTypes } from "../styles/schema";

export function Header(){
    const { handleChangeTheme, colorSchema } = useContext(ThemeContext)

    function handleChangeAppTheme(event: any){
        const theme = event.target.value

        handleChangeTheme(theme)
    }

    return(
        <Flex w="100%" h="85px" bg={colorSchema?.header?.bgHeader}>
            <Flex w="100%" px="10" align="center" justify="space-between">
                <Text fontSize="2xl" fontWeight="bold" color={colorSchema?.header?.logoColor}>      
                    ThemeSwitcher
                </Text>

                <Select 
                    bg="gray.50" 
                    w="150px"
                    onChange={(e) => handleChangeAppTheme(e)}
                >
                   {Object.entries(ThemeTypes).map(([key, value]) => {
                     return(
                        <option key={key} value={value.id}>
                            {value.name}
                        </option>
                     )
                   })}
                </Select>
            </Flex>
        </Flex>
    )
}