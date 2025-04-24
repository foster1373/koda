// src/components/Footer.jsx
import { Box, Button, Link as ChakraLink, Text } from '@chakra-ui/react'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

const Footer = () => (
  <Box
    as="footer"
    bg="black"
    color="gray.400"
    textAlign="center"
    py={6}
    mt={16}
    fontSize="sm"
  >
    <Button
      as={RouterLink}
      to="/contact"
      my={4}
      size="sm"
      //variant="outline"
      //color="grey.500"
      borderColor="grey.300"
      _hover={{ bg: 'gray.700' }}
    >
      CONTACT US
    </Button>

    <Text>
      &copy; {new Date().getFullYear()} KODA •{' '}
      <ChakraLink href="mailto:thebandkoda@gmail.com">
        thebandkoda@gmail.com
      </ChakraLink>
    </Text>
  </Box>
)

export default Footer
