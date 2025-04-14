import React, { useEffect } from 'react'
import { Box, Heading } from '@chakra-ui/react'

const InstagramEmbed = () => {
  useEffect(() => {
    // Load or re-run Instagram embed script
    const script = document.createElement('script')
    script.setAttribute('src', '//www.instagram.com/embed.js')
    script.setAttribute('async', '')
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <Box maxW="540px" mx="auto" mt={16}>
      <Heading fontSize="2xl" mb={4} textAlign="center">
        Follow Us on Instagram
      </Heading>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/thebandkoda/?utm_source=ig_embed&amp;utm_campaign=loading"
        data-instgrm-version="14"
        style={{
          background: '#FFF',
          border: 0,
          borderRadius: '3px',
          boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
          margin: '1px',
          maxWidth: '540px',
          minWidth: '326px',
          padding: 0,
          width: 'calc(100% - 2px)',
        }}
      ></blockquote>
    </Box>
  )
}

export default InstagramEmbed
