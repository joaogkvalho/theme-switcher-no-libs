import { Button, Flex, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

export function PageContent(){
    const { colorSchema } = useContext(ThemeContext)

    return(
        <Flex w="100vw" h="calc(100vh - 85px)" justify="center" bg={colorSchema?.body?.bgColor}>
            <Flex w="700px" p="8" textAlign="center" direction="column" align="center" justify="center">
                <Text fontSize="3xl" fontWeight="bold" color={colorSchema?.body?.textColor}>
                    As mais novas informações sobre o mundo da ciência só aqui!
                </Text>
                <Text color={colorSchema?.body?.textColor} fontSize="lg" my="6">
                    Nossa página possui as melhores notícias soobre ciência e tecnologia,
                    tudo isso por um ótimo preço anual.
                </Text>

                <Button 
                    w="200px" 
                    py="6" 
                    colorScheme={colorSchema?.body?.buttonColor} 
                    color={colorSchema?.body?.buttonTextColor}
                >
                    Saiba Mais
                </Button>
            </Flex>
        </Flex>
    )
}