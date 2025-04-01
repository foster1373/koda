import { Box, Heading, SimpleGrid, Image } from '@chakra-ui/react'
import pic1 from '../images/pic1.jpg'
import pic2 from '../images/pic2.jpg'
import pic3 from '../images/pic3.jpg'
import pic4 from '../images/pic4.jpg'
import pic5 from '../images/pic5.jpg'
import pic6 from '../images/pic6.jpg'
import pic7 from '../images/pic7.jpg'
import pic9 from '../images/pic9.jpg'

const images = [pic1, pic2, pic7, pic4, pic5, pic9, pic3, pic6]

const Gallery = () => (
  <Box p={8}>
    <Heading mb={4}>Gallery</Heading>
    <SimpleGrid columns={[1, 2, 3]} spacing={4}>
      {images.map((img, idx) => (
        <Image
          key={idx}
          src={img}
          alt={`Gallery Image ${idx + 1}`}
          width="100%"
          height="auto"
        />
      ))}
    </SimpleGrid>
  </Box>
)

export default Gallery
