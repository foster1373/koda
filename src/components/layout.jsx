// src/components/layout.jsx
import React from 'react'
import { Box } from '@chakra-ui/react'
import Navbar from './Navbar'
import Footer from './footer'

const Layout = ({ children }) => (
  <Box>
    <Navbar />
    <Box as="main">{children}</Box>
    <Footer />
  </Box>
)

export default Layout
