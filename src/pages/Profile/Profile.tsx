import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './Profile.scss'
import UserMenu from '@/components/UserMenu/UserMenu'
import { getUserMe } from '@/api/user'
import { getCourseProgress } from '@/api/progress'
import ModalWorkoutSelection from '@/components/ModalWorkoutSelection/ModalWorkoutSelection'
import { Link } from 'react-router-dom';

const API_BASE_URL = 'https://wedev-api.sky.pro/api/fitness'

const Profile = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({ name: '', email: '' })
  const [userCourses, setUserCourses] = useState([])
  const [progressMap, setProgressMap] = useState({})
  const [isWorkoutModalOpen, setIsWorkoutModalOpen] = useState(false)
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null)
  const [courseWorkouts, setCourseWorkouts] = useState<any[]>([])
  const [selectedWorkoutId, setSelectedWorkoutId] = useState<string | null>(null)

  useEffect(() => {
    getUserMe()
      .then(data => {
        const userData = data.user || data
        if (userData?.email) {
          const nameFromEmail = userData.email.split('@')[0]
          setUser({ name: nameFromEmail, email: userData.email })
        }
        if (userData.selectedCourses?.length) {
          Promise.all(
            userData.selectedCourses.map((courseId: string) =>
              fetch(`${API_BASE_URL}/courses/${courseId}`).then(res => res.json())
            )
          ).then(async (courses) => {
            setUserCourses(courses)
            //прогресс для каждого курса
            const progressData = await Promise.all(
              courses.map(course =>
                getCourseProgress(course._id).catch(() => null)
              )
            )
            const map = {}
            courses.forEach((course, idx) => {
              if (progressData[idx]) {
                map[course._id] = progressData[idx]
              }
            })
            setProgressMap(map)
          }).catch(console.error)
        }
      })
      .catch(console.error)
  }, [])

  const fetchCourseWorkouts = async (courseId: string) => {
    const token = localStorage.getItem('token')
    if (!token) return
    try {
      const res = await fetch(`${API_BASE_URL}/courses/${courseId}/workouts`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      const data = await res.json()
      setCourseWorkouts(data)
    } catch (err) {
      console.error(err)
    }
  }

  const handleDeleteCourse = async (courseId: string) => {
    const token = localStorage.getItem('token')
    if (!token) {
      alert('Вы не авторизованы')
      return
    }

    try {
      const res = await fetch(`${API_BASE_URL}/users/me/courses/${courseId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (!res.ok) {
        const error = await res.json()
        throw new Error(error.message || 'Ошибка удаления курса')
      }

      setUserCourses(prev => prev.filter(c => c._id !== courseId))
      alert('Курс удалён')
    } catch (err: any) {
      alert(err.message)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/')
  }

  const handleCourseAction = (courseId: string, isCompleted: boolean) => {
    if (isCompleted) {
      alert('Сброс прогресса курса')
    } else {
      setSelectedCourseId(courseId)
      fetchCourseWorkouts(courseId)
      setIsWorkoutModalOpen(true)
    }
  }

  const handleSelectWorkout = (workoutId: string) => {
    setSelectedWorkoutId(workoutId)
  }

  const handleStartWorkout = () => {
    if (selectedWorkoutId && selectedCourseId) {
      navigate(`/workout/${selectedCourseId}/${selectedWorkoutId}`)
      setIsWorkoutModalOpen(false)
      setSelectedWorkoutId(null)
      setSelectedCourseId(null)
    }
  }

  return (
    <div className="profile-page">
      <div className="profile-header">
        <Link to="/">
          <img
            src="/image/logo.svg"
            alt="SkyFitnessPro"
            className="profile-logo"
          />
        </Link>
        <UserMenu />
      </div>

      <div className="profile-container">
        <h1 className="profile-title">Профиль</h1>
        <div className="profile-card">
          <div className="profile-inner">
            <img src="/image/mask.svg" alt="avatar" className="profile-avatar" />
            <div className="profile-details">
              <div className="profile-name">{user.name}</div>
              <div className="profile-login">Логин: {user.email}</div>
              <button className="profile-logout" onClick={handleLogout}>Выйти</button>
            </div>
          </div>
        </div>

        <div className="profile-courses">
          <h2 className="courses-title">Мои курсы</h2>
          <div className="courses-grid">
            {userCourses.map(course => {
              const progress = progressMap[course._id]
              const isCompleted = progress?.courseCompleted || false
              const completedCount = progress?.workoutsProgress?.filter(w => w.workoutCompleted).length || 0
              const totalCount = course.workouts?.length || 1
              const percent = Math.round((completedCount / totalCount) * 100)

              return (
                <div key={course._id} className="course-card">
                  <img
                    src="/image/minus.svg"
                    alt="Удалить курс"
                    className="course-delete"
                    onClick={() => handleDeleteCourse(course._id)}
                  />
                  <img 
                    src={`/image/${course._id === 'ab1c3f' ? 'yoga' : course._id === 'kfpq8e' ? 'stretching' : course._id === 'ypox9r' ? 'fitness' : course._id === '6i67sm' ? 'step_aerobics' : 'bodyflex'}.svg`} 
                    alt={course.nameRU} 
                    className="course-image" 
                  />
                  <div className="course-content">
                    <h3 className="course-title">{course.nameRU}</h3>
                    <div className="course-stats">
                      <div className="stat">
                        <img src="/image/data.svg" alt="days" />
                        <span>{course.durationInDays} дней</span>
                      </div>
                      <div className="stat">
                        <img src="/image/time.svg" alt="time" />
                        <span>{course.dailyDurationInMinutes.from}–{course.dailyDurationInMinutes.to} мин/день</span>
                      </div>
                      <div className="stat">
                        <img src="/image/level.svg" alt="level" />
                        <span>Сложность</span>
                      </div>
                    </div>
                    <div className="course-progress">
                      <div className="progress-bar">
                        <div 
                          className="progress-fill" 
                          style={{ width: `${percent}%` }} 
                        />
                      </div>
                      <span className="progress-text">Прогресс {percent}%</span>
                    </div>
                    <button
                      className="course-btn"
                      onClick={() => handleCourseAction(course._id, isCompleted)}
                    >
                      {isCompleted ? 'Начать заново' : 'Начать тренировки'}
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Модальное окно выбора тренировки */}
      <ModalWorkoutSelection
        isOpen={isWorkoutModalOpen}
        onClose={() => {
          setIsWorkoutModalOpen(false)
          setSelectedWorkoutId(null)
          setSelectedCourseId(null)
        }}
        workouts={courseWorkouts}
        onSelectWorkout={handleSelectWorkout}
        onStart={handleStartWorkout}
        selectedWorkoutId={selectedWorkoutId}
      />
    </div>
  )
}

export default Profile
