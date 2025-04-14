import { Box } from '@chakra-ui/react'
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom'
import Layout from './components/layout'
import About from './pages/about'
import Contact from './pages/contact'
import Gallery from './pages/gallery'
import Home from './pages/home'
import Music from './pages/music'
import UpcomingShows from './pages/upcoming-shows'

const App = () => {
  return (
    <Router>
      {/* Page Content */}
      <Box>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
          <Route
            path="/gallery"
            element={
              <Layout>
                <Gallery />
              </Layout>
            }
          />
          <Route
            path="/music"
            element={
              <Layout>
                <Music />
              </Layout>
            }
          />
          <Route
            path="/upcoming-shows"
            element={
              <Layout>
                <UpcomingShows />
              </Layout>
            }
          />
          <Route
            path="/contact"
            element={
              <Layout>
                <Contact />
              </Layout>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Box>
    </Router>
  )
}

export default App
