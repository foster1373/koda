// src/components/footer.jsx
import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => (
  <Box
    as="footer"
    bg="black"
    color="gray.500"
    textAlign="center"
    py={6}
    mt={16}
    fontSize="sm"
  >
    <Text>
      &copy; {new Date().getFullYear()} KODA •{' '}
      <Link href="mailto:thebandkoda@gmail.com">thebandkoda@gmail.com</Link>
    </Text>
  </Box>
)

export default Footer
