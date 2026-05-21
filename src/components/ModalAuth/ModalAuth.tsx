import { useState } from 'react'

const API_BASE_URL = 'https://wedev-api.sky.pro/api/fitness'

interface ModalAuthProps {
  isOpen: boolean
  onClose: () => void
}

const ModalAuth = ({ isOpen, onClose }: ModalAuthProps) => {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!isLogin) {
      const specialCharCount = (password.match(/[^A-Za-z0-9]/g) || []).length
      if (password.length < 6) {
        setError('Пароль должен содержать не менее 6 символов')
        return
      }
      if (specialCharCount < 2) {
        setError('Пароль должен содержать не менее 2 спецсимволов')
        return
      }
      if (!/[A-Z]/.test(password)) {
        setError('Пароль должен содержать как минимум одну заглавную букву')
        return
      }
      if (password !== confirmPassword) {
        setError('Пароли не совпадают')
        return
      }

      try {
        const res = await fetch(`${API_BASE_URL}/auth/register`, {
          method: 'POST',
          body: JSON.stringify({ email, password }),
        })
        const data = await res.json()
        if (res.ok) {
          alert('Регистрация прошла успешно! Теперь войдите')
          setIsLogin(true)
          setEmail('')
          setPassword('')
          setConfirmPassword('')
        } else {
          setError(data.message || 'Ошибка регистрации')
        }
      } catch {
        setError('Ошибка соединения с сервером')
      }
      return
    }

    try {
      const res = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      })
      const data = await res.json()
      if (res.ok) {
        localStorage.setItem('token', data.token)
        onClose()
        window.location.reload()
      } else {
        setError(data.message || 'Ошибка входа')
      }
    } catch {
      setError('Ошибка соединения с сервером')
    }
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '360px',
          backgroundColor: '#FFFFFF',
          borderRadius: '30px',
          padding: '40px',
          display: 'flex',
          flexDirection: 'column',
          gap: '48px',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src="/image/logo.svg" alt="SkyFitnessPro" style={{ width: '220px', height: '35px' }} />
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
          <input
            type={isLogin ? 'text' : 'email'}
            placeholder={isLogin ? 'Логин' : 'Эл. почта'}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: '100%',
              height: '52px',
              padding: '16px 18px',
              border: '1px solid #D0CECE',
              borderRadius: '8px',
              fontFamily: 'Roboto, sans-serif',
              fontSize: '16px',
              boxSizing: 'border-box',
              marginBottom: '10px',
              color: '#000',
              backgroundColor: '#fff',
            }}
            required
          />

          <div style={{ position: 'relative', width: '100%' }}>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%',
                height: '52px',
                padding: '16px 18px',
                border: '1px solid #D0CECE',
                borderRadius: '8px',
                fontFamily: 'Roboto, sans-serif',
                fontSize: '16px',
                boxSizing: 'border-box',
                marginBottom: isLogin ? '34px' : '10px',
                color: '#000',
                backgroundColor: '#fff',
                paddingRight: '45px',
              }}
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: 'absolute',
                right: '15px',
                top: '16px',
                cursor: 'pointer',
                userSelect: 'none',
                fontSize: '20px',
                color: '#D0CECE',
              }}
            >
              {showPassword ? '👁' : '👁‍🗨'}
            </span>
          </div>

          {!isLogin && (
            <div style={{ position: 'relative', width: '100%' }}>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Повторите пароль"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                style={{
                  width: '100%',
                  height: '52px',
                  padding: '16px 18px',
                  border: '1px solid #D0CECE',
                  borderRadius: '8px',
                  fontFamily: 'Roboto, sans-serif',
                  fontSize: '16px',
                  boxSizing: 'border-box',
                  marginBottom: '34px',
                  color: '#000',
                  backgroundColor: '#fff',
                  paddingRight: '45px',
                }}
                required
              />
              <span
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                style={{
                  position: 'absolute',
                  right: '15px',
                  top: '16px',
                  cursor: 'pointer',
                  userSelect: 'none',
                  fontSize: '20px',
                  color: '#D0CECE',
                }}
              >
                {showConfirmPassword ? '👁' : '👁‍🗨'}
              </span>
            </div>
          )}

          {error && <div style={{ color: 'red', fontSize: '14px', marginBottom: '10px' }}>{error}</div>}

          <button
            type="submit"
            style={{
              width: '100%',
              height: '52px',
              borderRadius: '46px',
              padding: '16px 26px',
              backgroundColor: '#BCEC30',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'Roboto, sans-serif',
              fontSize: '16px',
              fontWeight: '500',
              color: '#000',
              marginBottom: '10px',
            }}
          >
            {isLogin ? 'Войти' : 'Зарегистрироваться'}
          </button>

          <button
            type="button"
            onClick={() => {
              setIsLogin(!isLogin)
              setError('')
              setConfirmPassword('')
              setShowPassword(false)
              setShowConfirmPassword(false)
            }}
            style={{
              width: '100%',
              height: '52px',
              borderRadius: '46px',
              padding: '16px 26px',
              backgroundColor: 'transparent',
              border: '1px solid #000000',
              cursor: 'pointer',
              fontFamily: 'Roboto, sans-serif',
              fontSize: '16px',
              fontWeight: '500',
              color: '#000',
            }}
          >
            {isLogin ? 'Зарегистрироваться' : 'Войти'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default ModalAuth