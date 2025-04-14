// src/components/instagram-feed.jsx
import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'

const InstagramFeed = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.lightwidget.com/widgets/lightwidget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <Box maxW="1000px" mx="auto" mt={16}>
      <Box
        as="iframe"
        src="//lightwidget.com/widgets/b2bd748e006c5babbc8042711c22328d.html"
        className="lightwidget-widget"
        scrolling="no"
        allowTransparency="true"
        style={{
          width: '100%',
          border: '0',
          overflow: 'hidden',
          height: '500px', // adjust height based on grid size
        }}
      />
    </Box>
  )
}

export default InstagramFeed
