import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Box,
  Link as ChakraLink,
  Flex,
  HStack,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react'
import {
  FaApple,
  FaFacebookF,
  FaInstagram,
  FaSpotify,
  FaYoutube,
} from 'react-icons/fa'
import { Link as RouterLink } from 'react-router-dom'
import { shows as allShows } from '../data/upcomingShows'
import logo from '../images/KODA_logo_white.png'

const navLinks = [
  { label: 'ABOUT', to: '/about' },
  { label: 'MUSIC', to: '/music' },
  { label: 'Upcoming Shows', to: '/upcoming-shows', showWhenEmpty: false },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

const Navbar = () => {
  const isMobile = useBreakpointValue({ base: true, md: false })

  // Check if there are any upcoming shows
  const upcomingShows = allShows
    .map((show) => ({ ...show, dateObj: new Date(show.date) }))
    .filter((show) => show.dateObj >= new Date())

  const hasUpcomingShows = upcomingShows.length > 0

  // Filter nav links based on whether we have upcoming shows
  const visibleNavLinks = navLinks.filter(
    (link) => link.showWhenEmpty !== false || hasUpcomingShows
  )

  return (
    <Box as="header" bg="black" color="white" p={4}>
      {isMobile ? (
        <VStack spacing={4} align="center">
          {/* Logo */}
          <ChakraLink pl={4} as={RouterLink} to="/" _hover={{ opacity: 0.8 }}>
            <Image src={logo} alt="KODA Logo" height="80px" />
          </ChakraLink>

          {/* Social Icons */}
          <HStack spacing={4} justify="center">
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

          {/* Mobile Menu */}
          <Menu isLazy placement="bottom" autoSelect={false} portal={false}>
            <MenuButton as={IconButton} icon={<HamburgerIcon />} />

            <MenuList
              bg="black"
              color="white"
              borderColor="gray.600"
              mt={2}
              minW="160px"
              position="static"
              transform="translateX(-50%)"
            >
              {visibleNavLinks.map(({ label, to }) => (
                <MenuItem
                  as={RouterLink}
                  to={to}
                  key={to}
                  _hover={{ bg: 'gray.700' }}
                  textTransform="uppercase"
                  color="white"
                  bg="black"
                >
                  {label}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </VStack>
      ) : (
        <Box>
          {/* Desktop layout */}
          <Flex justify="center" my={4}>
            <ChakraLink as={RouterLink} to="/" _hover={{ opacity: 0.8 }}>
              <Image src={logo} alt="KODA Logo" height="80px" />
            </ChakraLink>
          </Flex>

          <Flex align="center" justify="space-between" w="100%" px={4}>
            {/* Social Icons */}
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

            {/* Nav Links */}
            <HStack spacing={6}>
              {visibleNavLinks.map(({ label, to }) => (
                <ChakraLink
                  key={to}
                  as={RouterLink}
                  to={to}
                  textTransform="uppercase"
                >
                  {label}
                </ChakraLink>
              ))}
            </HStack>
          </Flex>
        </Box>
      )}
    </Box>
  )
}

export default Navbar
