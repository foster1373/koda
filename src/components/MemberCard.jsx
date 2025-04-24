// src/components/MemberCard.jsx
import { Box, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const MemberCard = ({ member }) => (
  <Link to={`/members/${member.slug}`}>
    <VStack spacing={2} align="center" cursor="pointer">
      <Box boxSize="200px" overflow="hidden" borderRadius="md">
        <Image
          src={member.image}
          alt={member.name}
          objectFit="cover"
          w="100%"
          h="100%"
        />
      </Box>
      <Text fontWeight="semibold">{member.name}</Text>
      <Text fontSize="sm" color="gray.300">
        {member.role}
      </Text>
    </VStack>
  </Link>
)

export default MemberCard
