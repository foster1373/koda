import {
  Box,
  Flex,
  Heading,
  Icon,
  Link,
  Tag,
  Text,
  VStack,
} from '@chakra-ui/react'
import React from 'react'
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

const shows = [
  {
    date: 'April 25, 2025',
    venue: 'Summit Music Hall',
    city: 'Columbus, OH',
    title: 'Toadfest',
    ticketLink:
      'https://www.eventbrite.com/e/toadfest-2025-ft-cane-toads-koda-loconti-mamadog-many-more-tickets-1291966589849',
  },
  {
    date: 'April 26, 2025',
    venue: 'New Bar',
    city: 'Oxford, OH',
  },
  {
    date: 'May 3, 2025',
    venue: 'Library Bar',
    city: 'Columbus, OH',
  },
]

const UpcomingShows = () => {
  return (
    <Box bg="black" color="white" minH="100vh" py={16} px={6}>
      <Heading textAlign="center" mb={10} fontSize="4xl" letterSpacing="wide">
        Upcoming Shows
      </Heading>

      <VStack spacing={6} maxW="800px" mx="auto">
        {shows.map((show, idx) => (
          <Box
            key={idx}
            bg="gray.800"
            w="100%"
            p={6}
            rounded="xl"
            shadow="xl"
            _hover={{ transform: 'scale(1.01)', transition: '0.2s' }}
          >
            <Flex justify="space-between" align="center" wrap="wrap">
              <Box>
                <Flex align="center" mb={2}>
                  <Icon as={FaCalendarAlt} mr={2} />
                  <Text fontSize="lg" fontWeight="bold">
                    {show.date}
                  </Text>
                </Flex>
                <Flex align="center">
                  <Icon as={FaMapMarkerAlt} mr={2} />
                  <Text>
                    {show.city} – <strong>{show.venue}</strong>
                    {show.title && (
                      <Text as="span" fontStyle="italic" ml={2}>
                        ({show.title})
                      </Text>
                    )}
                  </Text>
                </Flex>
              </Box>

              {/* Show status tags */}
              <Flex gap={2} mt={{ base: 4, md: 0 }}>
                {show.status && (
                  <Tag size="lg" colorScheme="red">
                    {show.status}
                  </Tag>
                )}
                {show.ticketLink && (
                  <Tag
                    size="lg"
                    as={Link}
                    href={show.ticketLink}
                    isExternal
                    colorScheme="green"
                    _hover={{ textDecoration: 'none', opacity: 0.8 }}
                  >
                    Buy Tickets
                  </Tag>
                )}
              </Flex>
            </Flex>
          </Box>
        ))}
      </VStack>
    </Box>
  )
}

export default UpcomingShows
