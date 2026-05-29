import { describe, it, expect, vi } from 'vitest'
import { addCourseToUser } from '@/api/userCourses'

global.fetch = vi.fn()


const localStorageMock = (() => {
  let store: Record<string, string> = {}
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => { store[key] = value },
    clear: () => { store = {} }
  }
})()

Object.defineProperty(window, 'localStorage', { value: localStorageMock })

describe('Add Course', () => {
  it('calls API with correct courseId', async () => {
    
    localStorage.setItem('token', 'fake-token')
    
    
    ;(fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ message: 'Курс добавлен!' }),
    })

    await addCourseToUser('course-123')

    expect(fetch).toHaveBeenCalledWith(
      'https://wedev-api.sky.pro/api/fitness/users/me/courses',
      expect.objectContaining({
        method: 'POST',
        body: JSON.stringify({ courseId: 'course-123' }),
      })
    )
  })
})