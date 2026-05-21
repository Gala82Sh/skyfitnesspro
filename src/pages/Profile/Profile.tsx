import { useNavigate } from 'react-router-dom'
import './Profile.scss'

const Profile = () => {
    const navigate = useNavigate()
    const userName = 'Сергей'
    const userLogin = 'sergey.petrov96'

    const handleDeleteCourse = (courseId: string) => {
        // заглушка
        alert(`Удалить курс ${courseId}`)
    }

    // Заглушка курсов пользователя
    const userCourses = [
        { id: 'ab1c3f', title: 'Йога', days: 25, duration: '20-50 мин/день', level: 'Сложность', progress: 40, img: '/image/yoga.svg' },
        { id: 'kfpq8e', title: 'Стретчинг', days: 25, duration: '20-50 мин/день', level: 'Сложность', progress: 0, img: '/image/stretching.svg' },
        { id: 'ypox9r', title: 'Фитнес', days: 25, duration: '20-50 мин/день', level: 'Сложность', progress: 100, img: '/image/fitness.svg' }
    ]

    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/')
    }

    const handleCourseAction = (courseId: string, progress: number) => {
        if (progress === 0 || (progress > 0 && progress < 100)) {
            navigate(`/course/${courseId}`)
        } else if (progress === 100) {
            alert('Сброс прогресса курса')
        }
    }

    return (
        <div className="profile-page">
            {/* Логотип и блок пользователя */}
            <div className="profile-header">
                <img
                    src="/image/logo.svg"
                    alt="SkyFitnessPro"
                    className="profile-logo"
                    onClick={() => navigate('/')}
                    style={{ cursor: 'pointer' }}
                />
                <div className="user-block">
                    <img src="/image/profile.svg" alt="profile" className="user-icon" />
                    <span className="user-name">{userName}</span>
                    <img src="/image/arrow.svg" alt="arrow" className="arrow-icon" />
                </div>
            </div>

            {/* Контейнер с информацией */}
            <div className="profile-container">
                <h1 className="profile-title">Профиль</h1>
                <div className="profile-card">
                    <div className="profile-inner">
                        <img src="/image/mask.svg" alt="avatar" className="profile-avatar" />
                        <div className="profile-details">
                            <div className="profile-name">{userName}</div>
                            <div className="profile-login">Логин: {userLogin}</div>
                            <button className="profile-logout" onClick={handleLogout}>Выйти</button>
                        </div>
                    </div>
                </div>

                {/* Мои курсы */}
                <div className="profile-courses">
                    <h2 className="courses-title">Мои курсы</h2>
                    <div className="courses-grid">
                        {userCourses.map(course => (
                            <div key={course.id} className="course-card">
                                <img
                                    src="/image/minus.svg"
                                    alt="Удалить курс"
                                    className="course-delete"
                                    onClick={() => handleDeleteCourse(course.id)}
                                />
                                <img src={course.img} alt={course.title} className="course-image" />
                                <div className="course-content">
                                    <h3 className="course-title">{course.title}</h3>
                                    <div className="course-stats">
                                        <div className="stat">
                                            <img src="/image/data.svg" alt="days" />
                                            <span>{course.days} дней</span>
                                        </div>
                                        <div className="stat">
                                            <img src="/image/time.svg" alt="time" />
                                            <span>{course.duration}</span>
                                        </div>
                                        <div className="stat">
                                            <img src="/image/level.svg" alt="level" />
                                            <span>{course.level}</span>
                                        </div>
                                    </div>
                                    <div className="course-progress">
                                        <div className="progress-bar">
                                            <div className="progress-fill" style={{ width: `${course.progress}%` }} />
                                        </div>
                                        <span className="progress-text">Прогресс {course.progress}%</span>
                                    </div>
                                    <button
                                        className="course-btn"
                                        onClick={() => handleCourseAction(course.id, course.progress)}
                                    >
                                        {course.progress === 0 && 'Начать тренировки'}
                                        {course.progress > 0 && course.progress < 100 && 'Продолжить'}
                                        {course.progress === 100 && 'Начать заново'}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile