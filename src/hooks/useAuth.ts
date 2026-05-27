import { useState } from 'react'

export const useAuth = () => {
  const [isAuth, setIsAuth] = useState(() => {
    const token = localStorage.getItem('token')
    return !!token
  })

  const login = (token: string) => {
    localStorage.setItem('token', token)
    setIsAuth(true)
  }

  const logout = () => {
    localStorage.removeItem('token')
    setIsAuth(false)
  }

  return { isAuth, login, logout }
}