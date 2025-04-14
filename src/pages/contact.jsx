import {
  Box,
  Button,
  Link as ChakraLink,
  Heading,
  Input,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react'
import React, { useState } from 'react'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = () => {
    const subject = encodeURIComponent('Booking Inquiry')
    const body = encodeURIComponent(
      `Hey KODA,\n\nI'm ${name} (${email}) and I'm interested in booking you for:\n\n${message}`
    )
    window.location.href = `mailto:thebandkoda@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <Box p={8} maxW="600px" mx="auto" color="white">
      <Heading mb={6} textAlign="center">
        CONTACT
      </Heading>
      <VStack spacing={4} align="stretch">
        <Input
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Your Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Textarea
          placeholder="Your Message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          colorScheme="whiteAlpha"
          variant="outline"
          alignSelf="start"
          onClick={handleSubmit}
        >
          Send Message
        </Button>
      </VStack>

      <Text mt={6} fontSize="sm" color="gray.400">
        Or email us directly at{' '}
        <ChakraLink
          href="mailto:thebandkoda@gmail.com?subject=Booking%20Inquiry&body=Hey%20KODA%2C%20I%27m%20interested%20in%20booking%20you%20for..."
          color="white"
          textDecoration="underline"
        >
          thebandkoda@gmail.com
        </ChakraLink>
      </Text>
    </Box>
  )
}

export default Contact
