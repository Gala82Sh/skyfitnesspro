import { useState, useEffect } from 'react'
import ModalAuth from '@/components/ModalAuth/ModalAuth'
import { useAuth } from '@/hooks/useAuth'
import { addCourseToUser } from '@/api/userCourses'
import { getAllCourses } from '@/api/courses'
import UserMenu from '@/components/UserMenu/UserMenu'

const Home = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [courses, setCourses] = useState([])
  const { isAuth } = useAuth()

  useEffect(() => {
    getAllCourses()
      .then(data => {
        const sorted = [...data].sort((a, b) => a.order - b.order)
        setCourses(sorted)
      })
      .catch(console.error)
  }, [])

  const handleAddCourse = async (courseId: string) => {
    if (!isAuth) {
      setIsAuthModalOpen(true)
      return
    }
    try {
      await addCourseToUser(courseId)
      alert('Курс добавлен!')
    } catch (err: any) {
      alert(err.message)
    }
  }

  const getCardPosition = (index: number) => {
    const topFirstRow = 350
    const topSecondRow = 891
    const leftPositions = [140, 540, 940]
    if (index < 3) {
      return { top: topFirstRow, left: leftPositions[index] }
    } else {
      return { top: topSecondRow, left: leftPositions[index - 3] }
    }
  }

  return (
    <div style={{ backgroundColor: '#FAFAFA', minHeight: '1559px' }}>
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '1440px',
        margin: '0 auto',
        height: '100%'
      }}>
        {/* Логотип */}
        <img
          src="/image/logo.svg"
          alt="SkyFitnessPro"
          style={{
            position: 'absolute',
            top: '50px',
            left: '140px',
            width: '220px',
            height: '35px'
          }}
        />

        {/* Текст под логотипом */}
        <div
          style={{
            position: 'absolute',
            top: '100px',
            left: '140px',
            width: '327px',
            opacity: '0.5',
            fontFamily: 'Roboto, sans-serif',
            fontWeight: '400',
            fontSize: '18px',
            lineHeight: '110%',
            margin: 0
          }}
        >
          Онлайн-тренировки для занятий дома
        </div>

        {/* Заголовок */}
        <div
          style={{
            position: 'absolute',
            top: '180px',
            left: '140px',
            width: '947px',
            fontFamily: 'Roboto, sans-serif',
            fontWeight: '500',
            fontSize: '60px',
            lineHeight: '100%',
            letterSpacing: '0px',
            margin: 0
          }}
        >
          Начните заниматься спортом<br />и улучшите качество жизни
        </div>

        {/* Блок "Измени своё тело за полгода!" */}
        <div
          style={{
            position: 'absolute',
            top: '180px',
            left: '1011px',
            padding: '16px 20px',
            borderRadius: '5px',
            backgroundColor: '#BCEC30',
            gap: '10px'
          }}
        >
          <div
            style={{
              width: '248px',
              height: '70px',
              fontFamily: 'Roboto, sans-serif',
              fontWeight: '400',
              fontSize: '32px',
              lineHeight: '110%',
              letterSpacing: '0px',
              margin: 0
            }}
          >
            Измени своё тело за полгода!
          </div>
        </div>

        {/* Хвостик */}
        <img
          src="/image/111.svg"
          alt=""
          style={{
            position: 'absolute',
            top: '265px',
            left: '1128px',
            width: 'auto',
            height: 'auto'
          }}
        />

        {/* Кнопка Вход */}
<div style={{ position: 'absolute', top: '50px', right: '140px' }}>
  <UserMenu />
</div>

        {/* КАРТОЧКИ КУРСОВ */}
        {courses.map((course, index) => {
          const { top, left } = getCardPosition(index)
          return (
            <div key={course._id} style={{
              position: 'absolute',
              top: `${top}px`,
              left: `${left}px`,
              width: '360px',
              height: '501px',
              backgroundColor: '#FFFFFF',
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
              borderRadius: '30px',
              overflow: 'hidden',
              paddingBottom: '15px'
            }}>
              {/* Иконка + */}
              <img
                src="/image/plus.svg"
                alt="Добавить курс"
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  width: '32px',
                  height: '32px',
                  cursor: 'pointer',
                  zIndex: 2
                }}
                onClick={() => handleAddCourse(course._id)}
              />
              <img 
                src={`/image/${course._id === 'ab1c3f' ? 'yoga' : course._id === 'kfpq8e' ? 'stretching' : course._id === 'ypox9r' ? 'fitness' : course._id === '6i67sm' ? 'step_aerobics' : 'bodyflex'}.svg`} 
                alt={course.nameRU} 
                style={{ width: '360px', height: '325px', objectFit: 'cover', display: 'block' }} 
              />
              <div style={{ padding: '20px', boxSizing: 'border-box' }}>
                <div style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 700, fontSize: '32px', lineHeight: '110%', marginBottom: '20px' }}>
                  {course.nameRU}
                </div>
                <div style={{ display: 'flex', gap: '6px', marginBottom: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '10px', backgroundColor: '#F7F7F7', borderRadius: '50px' }}>
                    <img src="/image/data.svg" alt="data" />
                    <span style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '110%' }}>{course.durationInDays} дней</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '10px', backgroundColor: '#F7F7F7', borderRadius: '50px' }}>
                    <img src="/image/time.svg" alt="time" />
                    <span style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '110%' }}>{course.dailyDurationInMinutes.from}–{course.dailyDurationInMinutes.to} мин/день</span>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '10px', backgroundColor: '#F7F7F7', borderRadius: '50px', width: 'fit-content' }}>
                  <img src="/image/level.svg" alt="level" />
                  <span style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '110%' }}>{course.difficulty.charAt(0).toUpperCase() + course.difficulty.slice(1)}</span>
                </div>
              </div>
            </div>
          )
        })}

        {/* Кнопка Наверх */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            position: 'absolute',
            top: '1426px',
            left: '656px',
            padding: '16px 26px',
            borderRadius: '46px',
            backgroundColor: '#BCEC30',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <img
            src="/image/text.svg"
            alt="Наверх"
            style={{
              width: 'auto',
              height: 'auto',
              display: 'block'
            }}
          />
        </button>

      </div>

      <ModalAuth isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </div>
  )
}

export default Home