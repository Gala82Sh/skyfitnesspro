import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Home from './Home'
import { ToastProvider } from '@/contexts/ToastContext'

describe('Home Page', () => {
  it('renders the main title', () => {
    render(
      <ToastProvider>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </ToastProvider>
    )
    expect(screen.getByText(/Начните заниматься спортом/i)).toBeInTheDocument()
  })
})
