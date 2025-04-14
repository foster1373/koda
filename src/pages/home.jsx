// src/pages/Home.jsx
import { Box, Button } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

import React from 'react'
import Hero from '../components/Hero'
import InstagramFeed from '../components/instagram-feed'

const Home = () => (
  <>
    <Hero />

    <Box textAlign="center" mt={8}>
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

    <InstagramFeed />
    {/* <GalleryPrompt /> */}
    {/* Additional sections (like news, shows, etc.) can go here */}
  </>
)

export default Home
