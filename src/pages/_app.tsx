import { ChakraProvider } from '@chakra-ui/react'
import { ThemeContextProvider } from '../context/themeContext'

function MyApp({ Component, pageProps }) {
  return(
    <ChakraProvider>
      <ThemeContextProvider>
        <Component {...pageProps} />
      </ThemeContextProvider>
    </ChakraProvider>
  )
}

export default MyApp
