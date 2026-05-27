import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import styles from './Header.module.scss'
import { getUserMe } from '@/api/user'
import { useAuth } from '@/hooks/useAuth'

const Header = () => {
  const navigate = useNavigate()
  const { isAuth } = useAuth()
  const [userName, setUserName] = useState('')

  
  useEffect(() => {
    if (!isAuth) return
    
    getUserMe()
      .then(data => {
        const user = data.user || data
        if (user?.email) {
          const nameFromEmail = user.email.split('@')[0]
          setUserName(nameFromEmail)
        }
      })
      .catch(console.error)
  }, [isAuth])

  
  useEffect(() => {
    if (!isAuth) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setUserName('')
    }
  }, [isAuth])

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link to="/" className={styles.logo}>
          <img src="/image/logo.svg" alt="SkyFitnessPro" />
        </Link>

        {isAuth ? (
          <div className={styles.userInfo} onClick={() => navigate('/profile')}>
            <img src="/image/profile.svg" alt="profile" className={styles.profileIcon} />
            <span className={styles.username}>{userName || 'Пользователь'}</span>
            <img src="/image/arrow.svg" alt="arrow" className={styles.arrowIcon} />
          </div>
        ) : (
          <button className={styles.loginBtn}>Войти</button>
        )}
      </div>
    </header>
  )
}

export default Header