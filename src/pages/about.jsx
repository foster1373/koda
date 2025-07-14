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
        We're <strong>KODA</strong>, a rock band based in Columbus with blues-driven riffs, crushing vocals, and shows that'll blow your mind. We're Jake Klausner on lead guitar, Jackson Buss on rhythm guitar and keys, Jake Brewer on bass, Brian Foster behind the kit, and Jake Juenger and Nolan Barbre on vocals.
      </Text>

      <Text fontSize="lg" lineHeight="tall">
        The whole thing started when longtime friends Jake K, Jackson, and Jake B met Jake J at some random Miami University party. We started jamming and realized we had something special—we just clicked.
      </Text>

      <Text fontSize="lg" lineHeight="tall">
        We've been grinding it out at colleges and bars across Columbus, and honestly, our live shows are where we really come alive. There's this energy that happens when we're all on stage together – it's electric and we can feel the crowd feeding off it. We've even played at the Newport Music Hall, which was absolutely incredible. We've been getting some great coverage too, including being featured in The Lantern, which called us one of the most exciting new acts in the city.
      </Text>

      <Text fontSize="lg" lineHeight="tall">
        Our sound pulls from legends like Led Zeppelin, Greta Van Fleet, and The Black Keys, but we're not trying to copy anyone. We're just making the music we want to hear – heavy, soulful, and real.
      </Text>

      <Text fontSize="lg" lineHeight="tall">
        We've got tracks like <strong>Smokeshow</strong>, <strong>Hot Blooded</strong>, and <strong>Mama Told Me</strong> out there, and we're always working on new stuff. You can catch us playing around Columbus regularly, so keep an eye out for our shows. Trust us, you don't want to miss it.
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
