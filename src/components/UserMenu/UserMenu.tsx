import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import { useEffect, useState } from 'react'
import { getUserMe } from '@/api/user'

const UserMenu = () => {
  const { isAuth } = useAuth()
  const navigate = useNavigate()
  const [userName, setUserName] = useState('')

 useEffect(() => {
  if (isAuth) {
    getUserMe()
      .then(data => {
        const user = data.user || data
        if (user?.email) {
          setUserName(user.email.split('@')[0])
        } else {
          setUserName('Пользователь')
        }
      })
      .catch(console.error)
  }
}, [isAuth])

  if (!isAuth) {
    return (
      <button
        onClick={() => navigate('/')}
        style={{
          padding: '16px 26px',
          borderRadius: '46px',
          backgroundColor: '#BCEC30',
          border: 'none',
          cursor: 'pointer',
          fontFamily: 'Roboto, sans-serif',
          fontSize: '16px',
          fontWeight: '500',
          color: '#000',
          whiteSpace: 'nowrap'
        }}
      >
        Войти
      </button>
    )
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        cursor: 'pointer'
      }}
      onClick={() => navigate('/profile')}
    >
      <img src="/image/profile.svg" alt="profile" style={{ width: '40px', height: '40px' }} />
      <span style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500, fontSize: '16px', color: '#000' }}>
        {userName || 'Загрузка...'}
      </span>
      <img src="/image/arrow.svg" alt="arrow" style={{ width: '8.03px', height: '8.03px' }} />
    </div>
  )
}

export default UserMenu