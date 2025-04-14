// src/theme/index.js
import { extendTheme } from '@chakra-ui/react'
import colors from './colors'
import fonts from './fonts'

const theme = extendTheme({
  colors,
  fonts,
  styles: {
    global: {
      // Apply dark background and white text to the entire site
      body: {
        bg: 'black',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
      },
      a: {
        color: 'white',
        textDecoration: 'none',
        _hover: { color: 'brand.500' },
      },
    },
  },
})

export default theme
