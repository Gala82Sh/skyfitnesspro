const API_BASE_URL = 'https://wedev-api.sky.pro/api/fitness'

export async function getWorkoutById(workoutId: string) {
  const token = localStorage.getItem('token')
  if (!token) throw new Error('Не авторизован')

  const res = await fetch(`${API_BASE_URL}/workouts/${workoutId}`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  if (!res.ok) throw new Error('Ошибка загрузки тренировки')
  return res.json()
}