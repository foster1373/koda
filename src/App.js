import { Box, Heading, Text } from '@chakra-ui/react'

function App() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading fontSize="4xl" mb={4} color="brand.500">
        Welcome to KODA's EPK
      </Heading>
      <Text fontSize="lg" mb={6}>
        This is the official Electronic Press Kit for the band KODA.
      </Text>
    </Box>
  )
}

export default App
