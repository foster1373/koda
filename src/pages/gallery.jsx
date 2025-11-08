// src/components/Gallery.jsx
import { Box, Image, SimpleGrid } from '@chakra-ui/react'

// Horizontal (hor-1 to hor-7)
import hor1 from '../images/hor-1.jpeg'
import hor10 from '../images/hor-10.jpeg'
import hor11 from '../images/hor-11.jpeg'
import hor12 from '../images/hor-12.jpeg'
import hor13 from '../images/hor-13.jpeg'
import hor14 from '../images/hor-14.jpeg'
import hor15 from '../images/hor-15.jpeg'
import hor2 from '../images/hor-2.jpeg'
import hor3 from '../images/hor-3.jpeg'
import hor4 from '../images/hor-4.jpeg'
import hor5 from '../images/hor-5.jpeg'
import hor6 from '../images/hor-6.jpeg'
import hor8 from '../images/hor-8.jpeg'
import hor9 from '../images/hor-9.jpeg'

// Vertical (vert-1 to vert-15)
import vert1 from '../images/vert-1.jpeg'
import vert10 from '../images/vert-10.jpeg'
import vert11 from '../images/vert-11.jpeg'
import vert12 from '../images/vert-12.jpeg'
import vert13 from '../images/vert-13.jpeg'
import vert15 from '../images/vert-15.jpeg'
import vert16 from '../images/vert-16.jpeg'
import vert18 from '../images/vert-18.jpeg'
import vert19 from '../images/vert-19.jpeg'
import vert20 from '../images/vert-20.jpeg'
import vert21 from '../images/vert-21.jpeg'
import vert22 from '../images/vert-22.jpeg'
import vert23 from '../images/vert-23.jpeg'
import vert24 from '../images/vert-24.jpeg'
import vert25 from '../images/vert-25.jpeg'
import vert26 from '../images/vert-26.jpeg'
import vert27 from '../images/vert-27.jpeg'
// import vert5 from '../images/vert-5.jpeg' // missing image

import vert2 from '../images/vert-2.jpeg'
import vert3 from '../images/vert-3.jpeg'
import vert4 from '../images/vert-4.jpeg'
import vert6 from '../images/vert-6.jpeg'
import vert8 from '../images/vert-8.jpeg'
import vert9 from '../images/vert-9.jpeg'

// Create an array of all images. Each object can include
// an orientation field to distinguish horizontal vs vertical
const images = [
  // Vertical
  { src: vert1, alt: 'Vertical 1', orientation: 'vertical' },
  { src: vert2, alt: 'Vertical 2', orientation: 'vertical' },
  { src: vert3, alt: 'Vertical 3', orientation: 'vertical' },
  { src: vert11, alt: 'Vertical 11', orientation: 'vertical' },
  // { src: vert5, alt: 'Vertical 5', orientation: 'vertical' },
  { src: vert6, alt: 'Vertical 6', orientation: 'vertical' },
  //{ src: vert7, alt: 'Vertical 7', orientation: 'vertical' },
  { src: vert4, alt: 'Vertical 4', orientation: 'vertical' },
  { src: vert18, alt: 'Vertical 18', orientation: 'vertical' },
  { src: vert19, alt: 'Vertical 19', orientation: 'vertical' },
  { src: vert20, alt: 'Vertical 20', orientation: 'vertical' },
  { src: vert21, alt: 'Vertical 21', orientation: 'vertical' },
  { src: vert22, alt: 'Vertical 22', orientation: 'vertical' },
  { src: vert23, alt: 'Vertical 23', orientation: 'vertical' },
  { src: vert24, alt: 'Vertical 24', orientation: 'vertical' },
  { src: vert10, alt: 'Vertical 10', orientation: 'vertical' },
  { src: vert26, alt: 'Vertical 26', orientation: 'vertical' },

  { src: hor1, alt: 'Horizontal 1', orientation: 'horizontal' },
  { src: hor6, alt: 'Horizontal 6', orientation: 'horizontal' },
  { src: hor4, alt: 'Horizontal 4', orientation: 'horizontal' },

  { src: vert4, alt: 'Vertical 4', orientation: 'vertical' },
  { src: vert25, alt: 'Vertical 25', orientation: 'vertical' },
  { src: vert9, alt: 'Vertical 9', orientation: 'vertical' },
  { src: vert8, alt: 'Vertical 8', orientation: 'vertical' },
  { src: vert12, alt: 'Vertical 12', orientation: 'vertical' },
  { src: vert13, alt: 'Vertical 13', orientation: 'vertical' },
  { src: vert27, alt: 'Vertical 27', orientation: 'vertical' },
  //{ src: vert14, alt: 'Vertical 14', orientation: 'vertical' },
  { src: vert15, alt: 'Vertical 15', orientation: 'vertical' },
  { src: vert16, alt: 'Vertical 16', orientation: 'vertical' },

  // Horizontal
  // { src: hor1, alt: 'Horizontal 1', orientation: 'horizontal' },
  { src: hor2, alt: 'Horizontal 2', orientation: 'horizontal' },
  { src: hor3, alt: 'Horizontal 3', orientation: 'horizontal' },
  // { src: hor4, alt: 'Horizontal 4', orientation: 'horizontal' },
  { src: hor5, alt: 'Horizontal 5', orientation: 'horizontal' },
  // { src: hor6, alt: 'Horizontal 6', orientation: 'horizontal' },
  // { src: hor7, alt: 'Horizontal 7', orientation: 'horizontal' },
  { src: hor8, alt: 'Horizontal 8', orientation: 'horizontal' },
  { src: hor9, alt: 'Horizontal 9', orientation: 'horizontal' },
  { src: hor10, alt: 'Horizontal 10', orientation: 'horizontal' },
  { src: hor11, alt: 'Horizontal 11', orientation: 'horizontal' },
  { src: hor12, alt: 'Horizontal 12', orientation: 'horizontal' },
  { src: hor13, alt: 'Horizontal 13', orientation: 'horizontal' },
  { src: hor14, alt: 'Horizontal 14', orientation: 'horizontal' },
  { src: hor15, alt: 'Horizontal 15', orientation: 'horizontal' },
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
