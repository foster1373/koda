import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

const Music = () => (
  <Box p={8}>
    <Heading textAlign="center" mb={12}>
      MUSIC
    </Heading>
    {/* Spotify Embed */}
    <Box
      as="iframe"
      src="https://open.spotify.com/embed/artist/5fvZT7JZmT5nofcZgeT5UJ?utm_source=generator&theme=0"
      width="75%"
      margin="auto"
      height="420"
      style={{ borderRadius: '12px' }}
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    />
  </Box>
)

export default Music
