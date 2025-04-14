// src/pages/Home.jsx
import { Box, Button } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

import React from 'react'
import Hero from '../components/Hero'

const Home = () => (
  <>
    <Hero />

    <Box textAlign="center" my={12}>
      <Button
        as={RouterLink}
        to="/gallery"
        variant="outline"
        color="white"
        borderColor="white"
        _hover={{ bg: 'white', color: 'black' }}
        size="lg"
      >
        VIEW GALLERY
      </Button>
    </Box>

    {/* <InstagramFeed /> */}
    {/* <GalleryPrompt /> */}
    {/* Additional sections (like news, shows, etc.) can go here */}
  </>
)

export default Home
