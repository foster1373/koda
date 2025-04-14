// src/components/layout.jsx
import React from 'react'
import { Box } from '@chakra-ui/react'
import Navbar from './Navbar'

const Layout = ({ children }) => (
  <Box>
    <Navbar />
    <Box as="main">{children}</Box>
  </Box>
)

export default Layout
