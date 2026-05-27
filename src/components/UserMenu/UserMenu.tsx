import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import { useEffect, useState, useRef } from 'react'
import { getUserMe } from '@/api/user'
import styles from './UserMenu.module.scss' 

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
        className={styles.loginButton}
        onClick={onOpenModal}
      >
        Войти
      </button>
    )
  }

  return (
    <div className={styles.userMenu} ref={menuRef}>
      <div
        className={styles.userMenuTrigger}
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src="/image/profile.svg" alt="profile" />
        <span>{userName || 'Загрузка...'}</span>
        <img src="/image/arrow.svg" alt="arrow" />
      </div>

      {isOpen && (
        <div className={styles.dropdown}>
          <div className={styles.userInfo}>
            <div className={styles.userName}>{userName}</div>
            <div className={styles.userEmail}>{userEmail}</div>
          </div>

          <div className={styles.buttons}>
            <button
              onClick={handleProfile}
              className={styles.profileButton}
            >
              Мой профиль
            </button>
            <button
              onClick={handleLogout}
              className={styles.logoutButton}
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