// src/components/Gallery.jsx
import { Box, Image, SimpleGrid } from '@chakra-ui/react'
import React from 'react'

// Horizontal (hor-1 to hor-7)
import hor1 from '../images/hor-1.jpeg'
import hor2 from '../images/hor-2.jpeg'
import hor3 from '../images/hor-3.jpeg'
import hor4 from '../images/hor-4.jpeg'
import hor5 from '../images/hor-5.jpeg'
import hor6 from '../images/hor-6.jpeg'

// Vertical (vert-1 to vert-15)
import vert1 from '../images/vert-1.jpeg'
import vert10 from '../images/vert-10.jpeg'
import vert11 from '../images/vert-11.jpeg'
import vert12 from '../images/vert-12.jpeg'
import vert13 from '../images/vert-13.jpeg'
import vert14 from '../images/vert-14.jpeg'
import vert15 from '../images/vert-15.jpeg'
import vert2 from '../images/vert-2.jpeg'
import vert3 from '../images/vert-3.jpeg'
import vert4 from '../images/vert-4.jpeg'
import vert5 from '../images/vert-5.jpeg'
import vert6 from '../images/vert-6.jpeg'
import vert7 from '../images/vert-7.jpeg'
import vert8 from '../images/vert-8.jpeg'
import vert9 from '../images/vert-9.jpeg'

// Create an array of all images. Each object can include
// an orientation field to distinguish horizontal vs vertical
const images = [
  // Vertical
  { src: vert1, alt: 'Vertical 1', orientation: 'vertical' },
  { src: vert2, alt: 'Vertical 2', orientation: 'vertical' },
  { src: vert3, alt: 'Vertical 3', orientation: 'vertical' },
  { src: vert4, alt: 'Vertical 4', orientation: 'vertical' },
  { src: vert5, alt: 'Vertical 5', orientation: 'vertical' },
  { src: vert6, alt: 'Vertical 6', orientation: 'vertical' },

  { src: hor1, alt: 'Horizontal 1', orientation: 'horizontal' },
  { src: hor6, alt: 'Horizontal 6', orientation: 'horizontal' },
  { src: hor4, alt: 'Horizontal 4', orientation: 'horizontal' },

  { src: vert7, alt: 'Vertical 7', orientation: 'vertical' },
  { src: vert10, alt: 'Vertical 10', orientation: 'vertical' },
  { src: vert9, alt: 'Vertical 9', orientation: 'vertical' },
  { src: vert8, alt: 'Vertical 8', orientation: 'vertical' },
  { src: vert11, alt: 'Vertical 11', orientation: 'vertical' },
  { src: vert12, alt: 'Vertical 12', orientation: 'vertical' },
  { src: vert13, alt: 'Vertical 13', orientation: 'vertical' },
  { src: vert14, alt: 'Vertical 14', orientation: 'vertical' },
  { src: vert15, alt: 'Vertical 15', orientation: 'vertical' },

  // Horizontal
  // { src: hor1, alt: 'Horizontal 1', orientation: 'horizontal' },
  { src: hor2, alt: 'Horizontal 2', orientation: 'horizontal' },
  { src: hor3, alt: 'Horizontal 3', orientation: 'horizontal' },
  // { src: hor4, alt: 'Horizontal 4', orientation: 'horizontal' },
  { src: hor5, alt: 'Horizontal 5', orientation: 'horizontal' },
  // { src: hor6, alt: 'Horizontal 6', orientation: 'horizontal' },
  // { src: hor7, alt: 'Horizontal 7', orientation: 'horizontal' },
]

const Gallery = () => {
  return (
    <SimpleGrid
      columns={{ base: 1, sm: 2, md: 3 }}
      spacing={4}
      px={{ base: 4, md: 8 }}
      py={{ base: 8, md: 12 }}
    >
      {images.map((image, index) => (
        <Box key={index}>
          <Image
            src={image.src}
            alt={image.alt}
            // Optionally, you can change the sizing and objectFit
            width="100%"
            height="auto"
            objectFit="cover"
            // You might also conditionally style horizontal vs vertical
            // For instance:
            // objectFit={image.orientation === 'vertical' ? 'contain' : 'cover'}
          />
        </Box>
      ))}
    </SimpleGrid>
  )
}

export default Gallery
