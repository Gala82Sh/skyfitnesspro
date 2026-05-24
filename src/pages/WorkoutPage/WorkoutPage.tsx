import './WorkoutPage.scss'
import UserMenu from '@/components/UserMenu/UserMenu'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getWorkoutById } from '@/api/workouts'
import { getCourseById } from '@/api/courses'
import ModalProgress from '@/components/ModalProgress/ModalProgress'
import ModalSuccess from '@/components/ModalSuccess/ModalSuccess'
import { Link } from 'react-router-dom';

const WorkoutPage = () => {
  const navigate = useNavigate()
  const { courseId, workoutId } = useParams<{ courseId: string; workoutId: string }>()
  const [workout, setWorkout] = useState(null)
  const [course, setCourse] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isProgressModalOpen, setIsProgressModalOpen] = useState(false)
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)
  const [progressMap, setProgressMap] = useState<{ [key: number]: number }>({})
  const [hasProgress, setHasProgress] = useState(false)

  useEffect(() => {
    if (workoutId) {
      getWorkoutById(workoutId)
        .then(setWorkout)
        .catch(console.error)
        .finally(() => setLoading(false))
    }
    if (courseId) {
      getCourseById(courseId).then(setCourse).catch(console.error)
    }
  }, [workoutId, courseId])

  useEffect(() => {
    if (workout && courseId && workoutId) {
      fetchProgress()
    }
  }, [workout, courseId, workoutId])

  const fetchProgress = async () => {
    try {
      const token = localStorage.getItem('token')
      if (!token) return
      const res = await fetch(
        `https://wedev-api.sky.pro/api/fitness/users/me/progress?courseId=${courseId}&workoutId=${workoutId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      if (res.ok) {
        const data = await res.json()
        if (data.progressData && data.progressData.length > 0) {
          setHasProgress(true)
          const map: { [key: number]: number } = {}
          data.progressData.forEach((value: number, idx: number) => {
            map[idx] = value
          })
          setProgressMap(map)
        }
      }
    } catch (err) {
      console.error(err)
    }
  }

  if (loading) {
  return (
    <div className="workout-page">
      <div className="workout-header">
        <Link to="/">
          <img
            src="/image/logo.svg"
            alt="SkyFitnessPro"
            className="workout-logo"
          />
        </Link>
        <UserMenu />
      </div>
        <div className="workout-container">Загрузка...</div>
      </div>
    )
  }

  if (!workout || !course) {
    return (
      <div className="workout-page">
        <div className="workout-header">
          <img
            src="/image/logo.svg"
            alt="SkyFitnessPro"
            className="workout-logo"
            onClick={() => navigate('/')}
            style={{ cursor: 'pointer' }}
          />
          <UserMenu />
        </div>
        <div className="workout-container">Тренировка или курс не найдены</div>
      </div>
    )
  }

  const exercises = workout.exercises || []
  const ex1 = exercises[0]?.name || 'Наклоны вперед'
  const ex2 = exercises[1]?.name || 'Наклоны назад'
  const ex3 = exercises[2]?.name || 'Поднятие ног, согнутых в коленях'
  const ex4 = exercises[3]?.name || 'Наклоны вперед'
  const ex5 = exercises[4]?.name || 'Наклоны назад'
  const ex6 = exercises[5]?.name || 'Поднятие ног, согнутых в коленях'
  const ex7 = exercises[6]?.name || 'Наклоны вперед'
  const ex8 = exercises[7]?.name || 'Наклоны назад'
  const ex9 = exercises[8]?.name || 'Поднятие ног, согнутых в коленях'

  const getPercent = (index: number) => {
    const quantity = exercises[index]?.quantity || 1
    const current = progressMap[index] || 0
    return Math.min(100, Math.round((current / quantity) * 100))
  }

  const handleSaveProgress = async (progressData: number[]) => {
    try {
      const token = localStorage.getItem('token')
      const res = await fetch(
        `https://wedev-api.sky.pro/api/fitness/courses/${courseId}/workouts/${workoutId}`,
        {
          method: 'PATCH',
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ progressData }),
        }
      )
      if (!res.ok) {
        const error = await res.json()
        throw new Error(error.message || 'Ошибка сохранения прогресса')
      }
      const map: { [key: number]: number } = {}
      progressData.forEach((value, idx) => {
        map[idx] = value
      })
      setProgressMap(map)
      setHasProgress(true)
      setIsSuccessModalOpen(true)
    } catch (err: any) {
      alert(err.message)
    }
  }

  return (
    <div className="workout-page">
      <div className="workout-header">
        <img
          src="/image/logo.svg"
          alt="SkyFitnessPro"
          className="workout-logo"
          onClick={() => navigate('/')}
          style={{ cursor: 'pointer' }}
        />
        <UserMenu />
      </div>

      <div className="workout-container">
        <h1 className="workout-title">{course.nameRU}</h1>

        <div className="workout-video">
          <iframe
            width="100%"
            height="100%"
            src={workout.video}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="exercises-block">
          <h2 className="exercises-title">Упражнения тренировки</h2>
          
          {exercises.length === 0 ? (
            <div className="no-exercises-message">
              <p>Упражнения для этой тренировки пока не добавлены.</p>
            </div>
          ) : (
            <div className="exercises-grid">
              <div className="exercises-column">
                <div className="exercise-item">
                  <span className="exercise-name">{ex1}</span>
                  <div className="exercise-progress">
                    <div className="progress-bar-small">
                      <div className="progress-fill-small" style={{ width: `${getPercent(0)}%` }}></div>
                    </div>
                    <span className="exercise-percent">{getPercent(0)}%</span>
                  </div>
                </div>
                <div className="exercise-item">
                  <span className="exercise-name">{ex2}</span>
                  <div className="exercise-progress">
                    <div className="progress-bar-small">
                      <div className="progress-fill-small" style={{ width: `${getPercent(1)}%` }}></div>
                    </div>
                    <span className="exercise-percent">{getPercent(1)}%</span>
                  </div>
                </div>
                <div className="exercise-item">
                  <span className="exercise-name">{ex3}</span>
                  <div className="exercise-progress">
                    <div className="progress-bar-small">
                      <div className="progress-fill-small" style={{ width: `${getPercent(2)}%` }}></div>
                    </div>
                    <span className="exercise-percent">{getPercent(2)}%</span>
                  </div>
                </div>
              </div>

              <div className="exercises-column">
                <div className="exercise-item">
                  <span className="exercise-name">{ex4}</span>
                  <div className="exercise-progress">
                    <div className="progress-bar-small">
                      <div className="progress-fill-small" style={{ width: `${getPercent(3)}%` }}></div>
                    </div>
                    <span className="exercise-percent">{getPercent(3)}%</span>
                  </div>
                </div>
                <div className="exercise-item">
                  <span className="exercise-name">{ex5}</span>
                  <div className="exercise-progress">
                    <div className="progress-bar-small">
                      <div className="progress-fill-small" style={{ width: `${getPercent(4)}%` }}></div>
                    </div>
                    <span className="exercise-percent">{getPercent(4)}%</span>
                  </div>
                </div>
                <div className="exercise-item">
                  <span className="exercise-name">{ex6}</span>
                  <div className="exercise-progress">
                    <div className="progress-bar-small">
                      <div className="progress-fill-small" style={{ width: `${getPercent(5)}%` }}></div>
                    </div>
                    <span className="exercise-percent">{getPercent(5)}%</span>
                  </div>
                </div>
              </div>

              <div className="exercises-column">
                <div className="exercise-item">
                  <span className="exercise-name">{ex7}</span>
                  <div className="exercise-progress">
                    <div className="progress-bar-small">
                      <div className="progress-fill-small" style={{ width: `${getPercent(6)}%` }}></div>
                    </div>
                    <span className="exercise-percent">{getPercent(6)}%</span>
                  </div>
                </div>
                <div className="exercise-item">
                  <span className="exercise-name">{ex8}</span>
                  <div className="exercise-progress">
                    <div className="progress-bar-small">
                      <div className="progress-fill-small" style={{ width: `${getPercent(7)}%` }}></div>
                    </div>
                    <span className="exercise-percent">{getPercent(7)}%</span>
                  </div>
                </div>
                <div className="exercise-item">
                  <span className="exercise-name">{ex9}</span>
                  <div className="exercise-progress">
                    <div className="progress-bar-small">
                      <div className="progress-fill-small" style={{ width: `${getPercent(8)}%` }}></div>
                    </div>
                    <span className="exercise-percent">{getPercent(8)}%</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          <button 
            className="save-progress-btn" 
            onClick={() => setIsProgressModalOpen(true)}
          >
            {hasProgress ? 'Обновить свой прогресс' : 'Заполнить свой прогресс'}
          </button>
        </div>
      </div>

      <ModalProgress
        isOpen={isProgressModalOpen}
        onClose={() => setIsProgressModalOpen(false)}
        exercises={exercises}
        onSave={handleSaveProgress}
      />

      <ModalSuccess
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
      />
    </div>
  )
}

export default WorkoutPage
