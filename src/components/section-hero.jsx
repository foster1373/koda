import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

const SectionHero = ({ bgImage, title, children }) => (
  <Box
    position="relative"
    minH={{ base: '100vh', md: '100vh' }}
    bgImage={`url(${bgImage})`}
    bgPosition="center"
    bgSize="cover"
    bgRepeat="no-repeat"
  >
    {/* Full Screen Overlay */}
    <Box
      position="absolute"
      top="0"
      left="0"
      right="0"
      bottom="0"
      bg="rgba(0, 0, 0, 0.6)"
      zIndex={0}
    />

    {/* Gradient Overlay (similar to Hero.jsx) */}
    <Box
      position="absolute"
      top="0"
      left="0"
      right="0"
      height="100px"
      bgGradient="linear(to bottom, black, transparent)"
      zIndex={1}
    />

    {/* Content */}
    <Box
      position="relative"
      zIndex={2}
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      px={6}
      pt={{ base: 28, md: 32 }} // Controls how high the content appears
      textAlign="left"
    >
      <Box maxW="container.lg" color="white">
        {title && (
          <Heading
            fontSize={{ base: '3xl', md: '4xl' }}
            mb={8}
            textAlign="center"
            fontWeight="bold"
          >
            {title}
          </Heading>
        )}
        {children}
      </Box>
    </Box>
  </Box>
)

export default SectionHero
