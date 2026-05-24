import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import { useEffect, useState, useRef } from 'react'
import { getUserMe } from '@/api/user'

interface UserMenuProps {
  onOpenModal?: () => void;
}

const UserMenu = ({ onOpenModal }: UserMenuProps) => {
  const { isAuth } = useAuth()
  const navigate = useNavigate()
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isAuth) {
      getUserMe()
        .then(data => {
          const user = data.user || data
          if (user?.email) {
            const nameFromEmail = user.email.split('@')[0]
            setUserName(nameFromEmail)
            setUserEmail(user.email)
          }
        })
        .catch(console.error)
    }
  }, [isAuth])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/')
    setIsOpen(false)
  }

  const handleProfile = () => {
    navigate('/profile')
    setIsOpen(false)
  }

  if (!isAuth) {
    return (
      <button
        onClick={onOpenModal}
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
    <div style={{ position: 'relative' }} ref={menuRef}>
      {}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          cursor: 'pointer'
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src="/image/profile.svg" alt="profile" style={{ width: '40px', height: '40px' }} />
        <span style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500, fontSize: '16px', color: '#000' }}>
          {userName || 'Загрузка...'}
        </span>
        <img src="/image/arrow.svg" alt="arrow" style={{ width: '8.03px', height: '8.03px' }} />
      </div>

      {}
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: '60px',
            right: '0',
            width: '266px',
            backgroundColor: '#FFFFFF',
            borderRadius: '30px',
            padding: '30px',
            display: 'flex',
            flexDirection: 'column',
            gap: '34px',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
            zIndex: 1000
          }}
        >
          {}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              textAlign: 'center'
            }}
          >
            <div
              style={{
                fontFamily: 'StratosSkyeng, sans-serif',
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '110%',
                color: '#000000'
              }}
            >
              {userName}
            </div>
            <div
              style={{
                fontFamily: 'StratosSkyeng, sans-serif',
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '110%',
                color: '#999999'
              }}
            >
              {userEmail}
            </div>
          </div>

          {}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px'
            }}
          >
            <button
              onClick={handleProfile}
              style={{
                width: '100%',
                padding: '16px 26px',
                borderRadius: '46px',
                backgroundColor: '#BCEC30',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'Roboto, sans-serif',
                fontSize: '18px',
                fontWeight: 400,
                color: '#000000',
                textAlign: 'center'
              }}
            >
              Мой профиль
            </button>
            <button
              onClick={handleLogout}
              style={{
                width: '100%',
                padding: '16px 26px',
                borderRadius: '46px',
                backgroundColor: 'transparent',
                border: '1px solid #000000',
                cursor: 'pointer',
                fontFamily: 'Roboto, sans-serif',
                fontSize: '18px',
                fontWeight: 400,
                color: '#000000',
                textAlign: 'center'
              }}
            >
              Выйти
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default UserMenu
