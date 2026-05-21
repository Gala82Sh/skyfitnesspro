import { useState, useEffect } from 'react'

export const useAuth = () => {
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    setIsAuth(!!token)
  }, [])

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