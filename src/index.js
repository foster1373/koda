// src/index.js
import React from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App'
import theme from './theme'
import { Analytics } from "@vercel/analytics/react"


const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Analytics />
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
