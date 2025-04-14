import React from 'react'
import { Box, Link } from '@chakra-ui/react'

const GalleryPrompt = () => (
  <Box
    position="absolute"
    top="80%" // lowered position
    left="50%"
    transform="translate(-50%, -50%)"
    border="4px solid white" // thicker border
    bg="transparent"
    p={6}
    borderRadius="0" // no rounded edges
    zIndex={10}
    _hover={{
      bg: "rgba(255, 255, 255, 0.1)", // subtle highlight on hover
      borderColor: "white" // can change if desired, or remove if not needed
    }}
  >
    <Link
      href="#gallery"
      fontSize="2xl"
      color="white"
      fontWeight="bold"
      _hover={{ textDecoration: 'none', color: 'white' }}
    >
      GALLERY
    </Link>
  </Box>
)

export default GalleryPrompt
