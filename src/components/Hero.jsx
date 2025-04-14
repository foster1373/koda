// src/components/Hero.jsx
import React from 'react'
import { Box } from '@chakra-ui/react'
import hero_image from '../images/hero.jpg'

const Hero = () => (
  <Box
    position="relative"
    height={{ base: '60vh', md: '70vh' }}
    bgImage={hero_image}
    bgPosition="center"
    bgSize="cover"
    bgRepeat="no-repeat"
  >
    {/* Gradient overlay to smooth the transition from the nav bar */}
    <Box
      position="absolute"
      top="0"
      left="0"
      right="0"
      height="100px"
      bgGradient="linear(to bottom, black, transparent)"
      zIndex={1}
    />
  </Box>
)

export default Hero
