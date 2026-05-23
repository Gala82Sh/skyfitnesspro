const API_BASE_URL = 'https://wedev-api.sky.pro/api/fitness'

export async function getCourseProgress(courseId: string) {
  const token = localStorage.getItem('token')
  if (!token) throw new Error('Не авторизован')

  const res = await fetch(`${API_BASE_URL}/users/me/progress?courseId=${courseId}`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  if (!res.ok) throw new Error('Ошибка загрузки прогресса')
  return res.json()
}

export async function getWorkoutProgress(courseId: string, workoutId: string) {
  const token = localStorage.getItem('token')
  if (!token) throw new Error('Не авторизован')

  const res = await fetch(`${API_BASE_URL}/users/me/progress?courseId=${courseId}&workoutId=${workoutId}`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  if (!res.ok) throw new Error('Ошибка загрузки прогресса тренировки')
  return res.json()
}

export async function updateWorkoutProgress(
  courseId: string,
  workoutId: string,
  progressData: number[]
) {
  const token = localStorage.getItem('token')
  if (!token) throw new Error('Не авторизован')

  const res = await fetch(`${API_BASE_URL}/courses/${courseId}/workouts/${workoutId}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ progressData }),
  })
  if (!res.ok) throw new Error('Ошибка обновления прогресса')
  return res.json()
}