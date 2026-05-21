const API_BASE = 'https://webdev-hw-api.vercel.app/api/fitness' // позже заменить на реальный URL

export async function addCourseToUser(courseId: string) {
  const token = localStorage.getItem('token')
  if (!token) throw new Error('Не авторизован')

  const res = await fetch(`${API_BASE}/users/me/courses`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ courseId }),
  })

  if (!res.ok) throw new Error('Ошибка добавления курса')
  return res.json()
}
