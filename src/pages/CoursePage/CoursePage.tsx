import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getCourseById, type Course } from '@/api/courses'
import UserMenu from '@/components/UserMenu/UserMenu'
import { useAuth } from '@/hooks/useAuth'
import { addCourseToUser } from '@/api/userCourses'
import ModalAuth from '@/components/ModalAuth/ModalAuth'
import './CoursePage.css'
import { Link } from 'react-router-dom'
import './CoursePage.module.scss'

const CoursePage = () => {
  const { id } = useParams<{ id: string }>()
  const [course, setCourse] = useState<Course | null>(null)
  const [loading, setLoading] = useState(true)
  const { isAuth } = useAuth()
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)

  useEffect(() => {
    if (!id) return
    getCourseById(id)
      .then(setCourse)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [id])

  const handleAddCourse = async () => {
    if (!isAuth) {
      setIsAuthModalOpen(true)
      return
    }
    try {
      await addCourseToUser(course!._id)
      alert('Курс добавлен!')
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Ошибка'
      alert(message)
    }
  }

  if (loading) return <div style={{ paddingTop: '180px' }}>Загрузка...</div>
  if (!course) return <div style={{ paddingTop: '180px' }}>Курс не найден</div>

  return (
    <div style={{ backgroundColor: '#FAFAFA', minHeight: '1703px' }}>
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1440px',
          margin: '0 auto',
          height: '100%',
        }}
      >
        {}
        <Link to="/" className="logo-link">
          <img
            className="course-logo"
            src="/image/logo.svg"
            alt="SkyFitnessPro"
            style={{
              position: 'absolute',
              top: '50px',
              left: '140px',
              width: '220px',
              height: '35px',
            }}
          />
        </Link>

        {}
        <div
          className="course-subtitle"
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
            margin: 0,
          }}
        >
          Онлайн-тренировки для занятий дома
        </div>

        {}
        <div
          className="course-usermenu"
          style={{ position: 'absolute', top: '50px', right: '140px' }}
        >
          <UserMenu onOpenModal={() => setIsAuthModalOpen(true)} />
        </div>

        {}
        <picture>
          <source
            media="(min-width: 769px)"
            srcSet={
              course._id === 'ab1c3f'
                ? '/image/yoga2.svg'
                : course._id === 'kfpq8e'
                  ? '/image/stretching2.svg'
                  : course._id === 'ypox9r'
                    ? '/image/fitness2.svg'
                    : course._id === '6i67sm'
                      ? '/image/step_aerobics2.svg'
                      : '/image/bodyflex2.svg'
            }
          />
          <img
            className="course-image"
            src={
              course._id === 'ab1c3f'
                ? '/image/yoga.svg'
                : course._id === 'kfpq8e'
                  ? '/image/stretching.svg'
                  : course._id === 'ypox9r'
                    ? '/image/fitness.svg'
                    : course._id === '6i67sm'
                      ? '/image/step_aerobics.svg'
                      : '/image/bodyflex.svg'
            }
            alt={course.nameRU}
            style={{
              position: 'absolute',
              top: '180px',
              left: '140px',
              width: '1160px',
              height: '310px',
              borderRadius: '30px',
              objectFit: 'cover',
            }}
          />
        </picture>

        {}
        <div
          className="course-fitting-title"
          style={{
            position: 'absolute',
            top: '550px',
            left: '140px',
            width: '810px',
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 600,
            fontSize: '40px',
            lineHeight: '110%',
            letterSpacing: '0px',
            margin: 0,
          }}
        >
          Подойдет для вас, если:
        </div>

        {}
        <div
          className="course-fitting-item"
          style={{
            position: 'absolute',
            top: '620px',
            left: '140px',
            width: '368px',
            backgroundColor: '#151720',
            borderRadius: '28px',
            display: 'flex',
            gap: '10px',
            alignItems: 'flex-start',
            padding: '20px',
          }}
        >
          <div
            className="course-fitting-number"
            style={{
              width: '35px',
              height: '101px',
              flex: 'none',
              order: 0,
              flexGrow: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              className="course-fitting-number-text"
              style={{
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 500,
                fontSize: '75px',
                lineHeight: '135%',
                letterSpacing: '0px',
                color: '#BCEC30',
                marginBottom: '20px',
              }}
            >
              1
            </div>
          </div>
          <div
            className="course-fitting-text"
            style={{
              width: '268px',
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 400,
              fontSize: '24px',
              lineHeight: '110%',
              letterSpacing: '0px',
              color: '#FFFFFF',
            }}
          >
            {course.fitting[0]}
          </div>
        </div>

        {}
        <div
          className="course-fitting-item"
          style={{
            position: 'absolute',
            top: '620px',
            left: '525px',
            width: '431px',
            backgroundColor: '#151720',
            borderRadius: '28px',
            display: 'flex',
            gap: '10px',
            alignItems: 'flex-start',
            padding: '20px',
          }}
        >
          <div
            className="course-fitting-number"
            style={{
              width: '43px',
              height: '101px',
              flex: 'none',
              order: 0,
              flexGrow: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              className="course-fitting-number-text"
              style={{
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 500,
                fontSize: '75px',
                lineHeight: '135%',
                letterSpacing: '0px',
                color: '#BCEC30',
                marginBottom: '20px',
              }}
            >
              2
            </div>
          </div>
          <div
            className="course-fitting-text"
            style={{
              width: '323px',
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 400,
              fontSize: '24px',
              lineHeight: '110%',
              letterSpacing: '0px',
              color: '#FFFFFF',
            }}
          >
            {course.fitting[1]}
          </div>
        </div>

        {}
        <div
          className="course-fitting-item"
          style={{
            position: 'absolute',
            top: '620px',
            left: '973px',
            width: '327px',
            backgroundColor: '#151720',
            borderRadius: '28px',
            display: 'flex',
            gap: '10px',
            alignItems: 'flex-start',
            padding: '20px',
          }}
        >
          <div
            className="course-fitting-number"
            style={{
              width: '43px',
              height: '101px',
              flex: 'none',
              order: 0,
              flexGrow: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              className="course-fitting-number-text"
              style={{
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 500,
                fontSize: '75px',
                lineHeight: '135%',
                letterSpacing: '0px',
                color: '#BCEC30',
                marginBottom: '20px',
              }}
            >
              3
            </div>
          </div>
          <div
            className="course-fitting-text"
            style={{
              width: '219px',
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 400,
              fontSize: '24px',
              lineHeight: '110%',
              letterSpacing: '0px',
              color: '#FFFFFF',
            }}
          >
            {course.fitting[2]}
          </div>
        </div>

        {}
        <div
          className="course-directions-wrapper"
          style={{
            position: 'absolute',
            top: '821px',
            left: '140px',
            width: '1160px',
            display: 'flex',
            flexDirection: 'column',
            gap: '40px',
          }}
        >
          <div
            className="course-directions-title"
            style={{
              width: '810px',
              height: '44px',
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 600,
              fontSize: '40px',
              lineHeight: '110%',
              letterSpacing: '0px',
              color: '#000',
            }}
          >
            Направления
          </div>
          <div
            className="course-directions-grid"
            style={{
              width: '1160px',
              backgroundColor: '#BCEC30',
              borderRadius: '28px',
              padding: '30px',
              display: 'flex',
              gap: '10px',
              justifyContent: 'space-between',
            }}
          >
            {}
            <div
              className="course-directions-column"
              style={{
                width: '284px',
                height: '86px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              {course.directions[0] && (
                <div
                  className="course-direction-item"
                  style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
                >
                  <img src="/image/icon.svg" alt="icon" style={{ width: 'auto', height: 'auto' }} />
                  <span
                    style={{
                      fontFamily: 'Roboto, sans-serif',
                      fontWeight: 400,
                      fontSize: '24px',
                      lineHeight: '110%',
                      color: '#000',
                    }}
                  >
                    {course.directions[0].charAt(0).toUpperCase() + course.directions[0].slice(1)}
                  </span>
                </div>
              )}
              {course.directions[1] && (
                <div
                  className="course-direction-item"
                  style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
                >
                  <img src="/image/icon.svg" alt="icon" style={{ width: 'auto', height: 'auto' }} />
                  <span
                    style={{
                      fontFamily: 'Roboto, sans-serif',
                      fontWeight: 400,
                      fontSize: '24px',
                      lineHeight: '110%',
                      color: '#000',
                    }}
                  >
                    {course.directions[1].charAt(0).toUpperCase() + course.directions[1].slice(1)}
                  </span>
                </div>
              )}
            </div>

            {}
            <div
              className="course-directions-column"
              style={{
                width: '284px',
                height: '86px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              {course.directions[2] && (
                <div
                  className="course-direction-item"
                  style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
                >
                  <img src="/image/icon.svg" alt="icon" style={{ width: 'auto', height: 'auto' }} />
                  <span
                    style={{
                      fontFamily: 'Roboto, sans-serif',
                      fontWeight: 400,
                      fontSize: '24px',
                      lineHeight: '110%',
                      color: '#000',
                    }}
                  >
                    {course.directions[2].charAt(0).toUpperCase() + course.directions[2].slice(1)}
                  </span>
                </div>
              )}
              {course.directions[3] && (
                <div
                  className="course-direction-item"
                  style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
                >
                  <img src="/image/icon.svg" alt="icon" style={{ width: 'auto', height: 'auto' }} />
                  <span
                    style={{
                      fontFamily: 'Roboto, sans-serif',
                      fontWeight: 400,
                      fontSize: '24px',
                      lineHeight: '110%',
                      color: '#000',
                    }}
                  >
                    {course.directions[3].charAt(0).toUpperCase() + course.directions[3].slice(1)}
                  </span>
                </div>
              )}
            </div>

            {}
            <div
              className="course-directions-column"
              style={{
                width: '284px',
                height: '86px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              {course.directions[4] && (
                <div
                  className="course-direction-item"
                  style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
                >
                  <img src="/image/icon.svg" alt="icon" style={{ width: 'auto', height: 'auto' }} />
                  <span
                    style={{
                      fontFamily: 'Roboto, sans-serif',
                      fontWeight: 400,
                      fontSize: '24px',
                      lineHeight: '110%',
                      color: '#000',
                    }}
                  >
                    {course.directions[4].charAt(0).toUpperCase() + course.directions[4].slice(1)}
                  </span>
                </div>
              )}
              {course.directions[5] && (
                <div
                  className="course-direction-item"
                  style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
                >
                  <img src="/image/icon.svg" alt="icon" style={{ width: 'auto', height: 'auto' }} />
                  <span
                    style={{
                      fontFamily: 'Roboto, sans-serif',
                      fontWeight: 400,
                      fontSize: '24px',
                      lineHeight: '110%',
                      color: '#000',
                    }}
                  >
                    {course.directions[5].charAt(0).toUpperCase() + course.directions[5].slice(1)}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {}
        <div
          className="course-start-block"
          style={{
            position: 'absolute',
            top: '1167px',
            left: '140px',
            width: '1160px',
            height: '486px',
            backgroundColor: '#FFFFFF',
            borderRadius: '30px',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
          }}
        >
          <div
            className="course-start-block-content"
            style={{
              position: 'absolute',
              top: '40px',
              left: '40px',
              width: '437px',
              height: '406px',
              display: 'flex',
              flexDirection: 'column',
              gap: '28px',
            }}
          >
            <div
              className="course-start-block-title"
              style={{
                width: '398px',
                height: '120px',
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 500,
                fontSize: '60px',
                lineHeight: '100%',
                letterSpacing: '0px',
                color: '#000',
              }}
            >
              Начните путь <br />к новому телу
            </div>
            <div
              className="course-start-block-list"
              style={{
                width: '437px',
                opacity: '0.6',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 400,
                fontSize: '24px',
                lineHeight: '110%',
                letterSpacing: '0px',
                color: '#000',
              }}
            >
              <div>• проработка всех групп мышц</div>
              <div>• тренировка суставов</div>
              <div>• улучшение циркуляции крови</div>
              <div>• упражнения заряжают бодростью</div>
              <div>• помогают противостоять стрессам</div>
            </div>
            <button
              className="course-add-button"
              onClick={handleAddCourse}
              style={{
                width: '437px',
                padding: '16px 26px',
                borderRadius: '46px',
                backgroundColor: '#BCEC30',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'Roboto, sans-serif',
                fontSize: '16px',
                fontWeight: '500',
                color: '#000',
                textAlign: 'center',
              }}
            >
              {isAuth ? 'Добавить курс' : 'Войдите, чтобы добавить курс'}
            </button>
          </div>

          {}
          <div className="course-start-block-images">
            <img
              className="course-vector"
              src="/image/vector.svg"
              alt="vector"
              style={{
                position: 'absolute',
                top: '115.6px',
                left: '445.06px',
                width: '730.18px',
                height: '420.98px',
                transform: 'rotate(-0.01deg)',
                boxSizing: 'border-box',
                clipPath: 'inset(0 0 50px 0)',
              }}
            />
            <img
              className="course-man"
              src="/image/man_in_green.svg"
              alt="man in green"
              style={{
                position: 'absolute',
                top: '-82.19px',
                left: '610.99px',
                width: '519.47px',
                height: '539.54px',
                transform: 'rotate(-0.99deg)',
              }}
            />
          </div>
        </div>
      </div>

      <ModalAuth isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </div>
  )
}

export default CoursePage
