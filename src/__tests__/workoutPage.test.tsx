import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import WorkoutPage from '@/pages/WorkoutPage/WorkoutPage'
import { ToastProvider } from '@/contexts/ToastContext'

vi.mock('@/api/workouts', () => ({
  getWorkoutById: vi.fn().mockResolvedValue({
    _id: '1',
    name: 'Test Workout',
    video: 'https://youtube.com/embed/test',
    exercises: [],
  }),
}))

vi.mock('@/api/courses', () => ({
  getCourseById: vi.fn().mockResolvedValue({
    _id: '1',
    nameRU: 'Test Course',
  }),
}))

describe('Workout Page', () => {
  it('renders without crashing', () => {
    render(
      <ToastProvider>
        <MemoryRouter initialEntries={['/workout/1/1']}>
          <Routes>
            <Route path="/workout/:courseId/:workoutId" element={<WorkoutPage />} />
          </Routes>
        </MemoryRouter>
      </ToastProvider>
    )
    expect(screen.getByText(/загрузка/i)).toBeInTheDocument()
  })
})