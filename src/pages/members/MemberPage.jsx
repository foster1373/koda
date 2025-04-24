// src/pages/members/MemberPage.jsx
import {
  Box,
  Link as ChakraLink,
  Heading,
  Image,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import React from 'react'
import { Navigate, Link as RouterLink, useParams } from 'react-router-dom'
import SectionHero from '../../components/section-hero'
import { members } from '../../data/members'

const MemberPage = () => {
  const { slug } = useParams()
  const member = members.find((m) => m.slug === slug)
  if (!member) return <Navigate to="/about" replace />

  // This box will now be positioned relative to the *hero* itself,
  // so `bottom={0}` truly means bottom of the hero.
  const heroPic = (
    <Box
      position="absolute"
      bottom={0}
      left="50%"
      transform="translate(-50%, 50%)"
      boxSize={{ base: '180px', md: '250px' }}
      overflow="hidden"
      borderRadius="md"
      shadow="lg"
      zIndex={2}
    >
      <Image
        src={member.image}
        alt={member.name}
        objectFit="cover"
        w="100%"
        h="100%"
      />
    </Box>
  )

  return (
    <>
      {/* Hero: background + overlay + our heroPic */}
      <SectionHero bgImage={member.bgImage} overlayChildren={heroPic} />

      {/* Name, role, bio immediately below */}
      <VStack
        spacing={4}
        align="center"
        maxW="container.md"
        mx="auto"
        mt={40} // pull up to overlap the photo slightly, if you like
        px={4}
      >
        <Heading size="xl">{member.name}</Heading>
        <Text fontSize="lg" color="gray.600">
          {member.role}
        </Text>
        <Text
          fontSize="lg"
          lineHeight="tall"
          textAlign="center"
          whiteSpace="pre-line"
        >
          {member.bio}
        </Text>
      </VStack>
      <Box as="section" mt={16} pb={4}>
        <Text textAlign="center" mb={4} fontSize="xl" fontWeight="semibold">
          Meet the rest of KODA
        </Text>
        <Wrap justify="center" spacing={6}>
          {members
            .filter((m) => m.slug !== slug) // don’t include current member
            .map((m) => (
              <WrapItem key={m.slug}>
                <ChakraLink
                  as={RouterLink}
                  to={`/members/${m.slug}`}
                  _hover={{ textDecor: 'none', transform: 'scale(1.05)' }}
                  transition="all 0.2s"
                >
                  <VStack spacing={2}>
                    <Box
                      boxSize={{ base: '100px', md: '120px' }}
                      overflow="hidden"
                      borderRadius="md"
                      shadow="md"
                    >
                      <Image
                        src={m.image}
                        alt={m.name}
                        objectFit="cover"
                        w="100%"
                        h="100%"
                      />
                    </Box>
                    <Text fontSize="sm" fontWeight="medium" textAlign="center">
                      {m.name}
                    </Text>
                  </VStack>
                </ChakraLink>
              </WrapItem>
            ))}
        </Wrap>
      </Box>
    </>
  )
}

export default MemberPage
