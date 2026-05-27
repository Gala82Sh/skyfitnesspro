const API_BASE_URL = 'https://wedev-api.sky.pro/api/fitness'

export async function getUserMe() {
  const token = localStorage.getItem('token')
  if (!token) throw new Error('Не авторизован')

  const res = await fetch(`${API_BASE_URL}/users/me`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  if (!res.ok) throw new Error('Ошибка загрузки пользователя')
  const data = await res.json()
  return data.user
}
