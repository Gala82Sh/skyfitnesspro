import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ModalAuth from '@/components/ModalAuth/ModalAuth'
import { ToastProvider } from '@/contexts/ToastContext'


const localStorageMock = (() => {
  let store: Record<string, string> = {}
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => { store[key] = value },
    clear: () => { store = {} }
  }
})()

Object.defineProperty(window, 'localStorage', { value: localStorageMock })

global.fetch = vi.fn()

describe('Auth', () => {
  beforeEach(() => {
    localStorage.clear()
    vi.clearAllMocks()
  })

  it('successful login closes modal and saves token', async () => {
    const mockToken = 'fake-token'
    ;(fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ token: mockToken }),
    })

    const onClose = vi.fn()

    render(
      <ToastProvider>
        <ModalAuth isOpen={true} onClose={onClose} />
      </ToastProvider>
    )

    await userEvent.type(screen.getByPlaceholderText('Логин'), 'test@example.com')
    await userEvent.type(screen.getByPlaceholderText('Пароль'), 'password123')
    await userEvent.click(screen.getByRole('button', { name: /войти/i }))

    await waitFor(() => {
      expect(localStorage.getItem('token')).toBe(mockToken)
      expect(onClose).toHaveBeenCalled()
    })
  })
})
