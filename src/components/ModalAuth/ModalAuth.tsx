import { useState } from 'react'

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

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!isLogin) {
      if (password !== confirmPassword) {
        setError('Пароли не совпадают')
        return
      }
      if (password.length < 6) {
        setError('Пароль должен быть не менее 6 символов')
        return
      }
    }

    console.log({ isLogin, email, password })
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
        zIndex: 1000
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
          gap: '48px'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src="/image/logo.svg" alt="SkyFitnessPro" style={{ width: '220px', height: '35px' }} />
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
          {/* Поле Логин / Эл. почта */}
          <input
            type={isLogin ? "text" : "email"}
            placeholder={isLogin ? "Логин" : "Эл. почта"}
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
              backgroundColor: '#fff'
            }}
            required
          />
          
          {/* Поле Пароль */}
          <input
            type="password"
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
              backgroundColor: '#fff'
            }}
            required
          />

          {/* Поле подтверждения пароля (для регистрации) */}
          {!isLogin && (
            <input
              type="password"
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
                backgroundColor: '#fff'
              }}
              required
            />
          )}

          {error && <div style={{ color: 'red', fontSize: '14px', marginBottom: '10px' }}>{error}</div>}

          {/* Кнопка "Войти" / "Зарегистрироваться" */}
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
              marginBottom: '10px'
            }}
          >
            {isLogin ? 'Войти' : 'Зарегистрироваться'}
          </button>

          {/* Кнопка переключения формы */}
          <button
            type="button"
            onClick={() => {
              setIsLogin(!isLogin)
              setError('')
              setConfirmPassword('')
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
              color: '#000'
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