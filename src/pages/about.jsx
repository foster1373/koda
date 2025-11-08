import { SimpleGrid, Text, VStack } from '@chakra-ui/react'
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
        presence. The band features lead guitarist Jake Klausner, rhythm
        guitarist/keyboardist Jackson Buss, bassist Andy Hanna, drummer Brian
        Foster, and vocalists Jake Juenger and Nolan Barbre. Longtime friends
        Klausner, Buss, and former bassist Jake Brewer formed the original trio
        that met Juenger at a Miami University party, sparking an instant
        musical connection.
      </Text>

      <Text fontSize="lg" lineHeight="tall">
        Cutting their teeth on college campuses and bars, KODA quickly built a
        reputation for their explosive live shows, including performances at the
        prestigious Newport Music Hall. The band's chemistry has led to many
        breakthrough performances on the Columbus music scene, cementing
        themselves as one of the city's more exciting rising acts. Inspired by
        bands like Led Zeppelin, Greta Van Fleet, Cage the Elephant, and The
        Black Keys, KODA blends classic rock intensity with modern sounds.
      </Text>

      <Text fontSize="lg" lineHeight="tall">
        KODA has been featured in The Lantern and continues to gain recognition
        throughout the Columbus music scene. Their growing discography includes
        singles like <strong>Smokeshow</strong>, <strong>Hot Blooded</strong>,
        and
        <strong> Mama Told Me</strong>. The band regularly performs throughout
        Columbus and across Ohio, delivering electrifying performances that
        showcase their undeniable talent and stage presence.
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
