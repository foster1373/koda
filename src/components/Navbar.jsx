import { Box, Link as ChakraLink, Flex, HStack, Image } from '@chakra-ui/react'
import React from 'react'
import {
  FaApple,
  FaFacebookF,
  FaInstagram,
  FaSpotify,
  FaYoutube,
} from 'react-icons/fa'
import { Link as RouterLink } from 'react-router-dom'
import logo from '../images/KODA_logo_white.png'

const Navbar = () => (
  <Box as="header" bg="black" color="white" p={4}>
    {/* Top Row: Centered Logo */}
    <Flex justify="center" my={4}>
      <ChakraLink as={RouterLink} to="/" _hover={{ opacity: 0.8 }}>
        <Image src={logo} alt="KODA Logo" height="80px" />
      </ChakraLink>
    </Flex>

    {/* Bottom Row: Social Icons (Left) & Nav Links (Right) */}
    <Flex align="center" justify="space-between" w="100%" px={4}>
      {/* Social Icons on the left */}
      <HStack spacing={4}>
        <ChakraLink
          href="https://www.instagram.com/thebandkoda/"
          isExternal
          aria-label="Instagram"
        >
          <FaInstagram size={20} />
        </ChakraLink>
        <ChakraLink
          href="https://www.facebook.com/Koda.band.offical"
          isExternal
          aria-label="Facebook"
        >
          <FaFacebookF size={20} />
        </ChakraLink>
        <ChakraLink
          href="https://www.youtube.com/channel/UC3sFa4-tZ8G1olqnEbtS39g"
          isExternal
          aria-label="YouTube"
        >
          <FaYoutube size={20} />
        </ChakraLink>
        <ChakraLink
          href="https://open.spotify.com/artist/5fvZT7JZmT5nofcZgeT5UJ"
          isExternal
          aria-label="Spotify"
        >
          <FaSpotify size={20} />
        </ChakraLink>
        <ChakraLink
          href="https://music.apple.com/us/artist/koda/1774585579"
          isExternal
          aria-label="Apple Music"
        >
          <FaApple size={20} />
        </ChakraLink>
      </HStack>

      {/* Nav Links on the right */}
      <HStack spacing={6}>
        <ChakraLink as={RouterLink} to="/about" textTransform="uppercase">
          About
        </ChakraLink>
        <ChakraLink as={RouterLink} to="/music" textTransform="uppercase">
          Music
        </ChakraLink>
        <ChakraLink
          as={RouterLink}
          to="/upcoming-shows"
          textTransform="uppercase"
        >
          Upcoming Shows
        </ChakraLink>
        <ChakraLink as={RouterLink} to="/gallery" textTransform="uppercase">
          Gallery
        </ChakraLink>
        <ChakraLink as={RouterLink} to="/contact" textTransform="uppercase">
          Contact
        </ChakraLink>
      </HStack>
    </Flex>
  </Box>
)

export default Navbar
