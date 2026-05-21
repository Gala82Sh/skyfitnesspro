import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import styles from './Header.module.scss'

const Header = () => {

  const [isAuth, setIsAuth] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    console.log('Токен из localStorage:', token)
    setIsAuth(!!token)
  }, [])

  console.log('Header рендерится, isAuth =', isAuth)

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link to="/" className={styles.logo}>
          <img src="/image/logo.svg" alt="SkyFitnessPro" />
        </Link>

        {isAuth ? (
          <div className={styles.userInfo} onClick={() => navigate('/profile')}>
            <img src="/image/profile.svg" alt="profile" className={styles.profileIcon} />
            <span className={styles.username}>Сергей</span>
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