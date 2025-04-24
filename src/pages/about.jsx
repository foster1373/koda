import { SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { default as React } from 'react'
import MemberCard from '../components/MemberCard'
import SectionHero from '../components/section-hero'
import { members } from '../data/members'
import hero_image from '../images/hero.jpg'

const About = () => (
  <SectionHero bgImage={hero_image} title="About KODA">
    <VStack maxW="900px" spacing={6} align="start">
      <Text fontSize="lg" lineHeight="tall">
        KODA is a high-energy rock band shaking up the Columbus music scene with
        blues-driven riffs, powerhouse vocals, and an electrifying stage
        presence. Formed in 2021, the band features lead guitarist Jake
        Klausner, rhythm guitarist/keyboardist Jackson Buss, bassist Jake
        Brewer, drummer Brian Foster, and vocalists Jake Juenger and Nolan
        Barbre. Longtime friends Klausner, Buss, and Brewer met Juenger at a
        Miami University party, sparking an instant musical connection.
      </Text>

      <Text fontSize="lg" lineHeight="tall">
        Cutting their teeth on college campuses and bars, KODA quickly built a
        reputation for their explosive live shows. The band’s chemistry has led
        to many breakthrough performances on the Columbus music scene, cementing
        themselves as one of the city’s more exciting rising acts. Inspired by
        bands like Led Zeppelin, Greta Van Fleet, and The Black Keys, KODA
        blends classic rock intensity with modern sounds.
      </Text>

      <Text fontSize="lg" lineHeight="tall">
        Their growing discography includes singles like{' '}
        <strong>Smokeshow</strong>, <strong>Hot Blooded</strong>, and
        <strong> MAD HATTER</strong>, released on January 18, 2025. Up next,
        KODA takes the stage at
        <strong> ToadFest 2025</strong> on April 25th at The Summit Music Hall,
        performing alongside Cane Toads, Loconti, and Mamadog. Don’t miss their
        electrifying performance!
      </Text>
    </VStack>

    <Text fontSize="2xl" mt={16} mb={6} textAlign="center">
      Learn more about each band member below…
    </Text>

    <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
      {members.map((m) => (
        <MemberCard key={m.slug} member={m} />
      ))}
    </SimpleGrid>
  </SectionHero>
)

export default About
