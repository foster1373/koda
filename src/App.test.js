import { render, screen } from '@testing-library/react'
import App from './App'

test('renders home page gallery button', () => {
  render(<App />)
  const galleryButton = screen.getByText(/VIEW GALLERY/i)
  expect(galleryButton).toBeInTheDocument()
})
