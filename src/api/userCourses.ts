const API_BASE_URL = 'https://wedev-api.sky.pro/api/fitness'

export async function addCourseToUser(courseId: string) {
  const token = localStorage.getItem('token')
  if (!token) throw new Error('Не авторизован')

  const res = await fetch(`${API_BASE_URL}/users/me/courses`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ courseId }),
  })

  if (!res.ok) {
    const error = await res.json()
    throw new Error(error.message || 'Ошибка добавления курса')
  }
  return res.json()
}
