import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Box, Flex, Spacer, Button, Image } from '@chakra-ui/react'
import Home from './pages/home'
import About from './pages/about'
import Gallery from './pages/gallery'

const App = () => {
  return (
    <Router>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.100" p={4} align="center">
        <Link to="/">
          <Image src="/logo.png" alt="KODA Logo" height="40px" />
        </Link>
        <Spacer />
        <Flex gap={4}>
          <Button as={Link} to="/about" variant="ghost">
            About
          </Button>
          <Button as={Link} to="/gallery" variant="ghost">
            Gallery
          </Button>
        </Flex>
      </Flex>

      {/* Page Content */}
      <Box>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Box>
    </Router>
  )
}

export default App
