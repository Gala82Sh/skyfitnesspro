import { useState } from 'react'
import ModalAuth from '@/components/ModalAuth/ModalAuth'

const Home = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)

  return (
    <div style={{ backgroundColor: '#FAFAFA', minHeight: '1559px' }}>
      {/* Центрированный контейнер */}
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
        <button
          onClick={() => setIsAuthModalOpen(true)}
          style={{
            position: 'absolute',
            top: '50px',
            right: '140px',
            padding: '16px 26px',
            borderRadius: '46px',
            backgroundColor: '#BCEC30',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'Roboto, sans-serif',
            fontSize: '16px',
            fontWeight: '500',
            color: '#000'
          }}
        >
          Войти
        </button>

        {/* КАРТОЧКИ КУРСОВ */}

        {/* Йога */}
        <div style={{
          position: 'absolute',
          top: '350px',
          left: '140px',
          width: '360px',
          height: '501px',
          backgroundColor: '#FFFFFF',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',   
          borderRadius: '30px',
          overflow: 'hidden',
          paddingBottom: '15px'
        }}>
          <img src="/image/yoga.svg" alt="Yoga" style={{ width: '360px', height: '325px', objectFit: 'cover', display: 'block' }} />
          <div style={{ padding: '20px', boxSizing: 'border-box' }}>
            <div style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 700, fontSize: '32px', lineHeight: '110%', marginBottom: '20px' }}>Йога</div>
            <div style={{ display: 'flex', gap: '6px', marginBottom: '6px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '10px', backgroundColor: '#F7F7F7', borderRadius: '50px' }}>
                <img src="/image/data.svg" alt="data" />
                <span style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '110%' }}>25 дней</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '10px', backgroundColor: '#F7F7F7', borderRadius: '50px' }}>
                <img src="/image/time.svg" alt="time" />
                <span style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '110%' }}>20-50 мин/день</span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '10px', backgroundColor: '#F7F7F7', borderRadius: '50px', width: 'fit-content' }}>
              <img src="/image/level.svg" alt="level" />
              <span style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '110%' }}>Сложность</span>
            </div>
          </div>
        </div>

        {/* Стретчинг */}
        <div style={{
          position: 'absolute',
          top: '350px',
          left: '540px',
          width: '360px',
          height: '501px',
          backgroundColor: '#FFFFFF',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',   
          borderRadius: '30px',
          overflow: 'hidden',
          paddingBottom: '15px'
        }}>
          <img src="/image/stretching.svg" alt="Stretching" style={{ width: '360px', height: '325px', objectFit: 'cover', display: 'block' }} />
          <div style={{ padding: '20px', boxSizing: 'border-box' }}>
            <div style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 700, fontSize: '32px', lineHeight: '110%', marginBottom: '20px' }}>Стретчинг</div>
            <div style={{ display: 'flex', gap: '6px', marginBottom: '6px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '10px', backgroundColor: '#F7F7F7', borderRadius: '50px' }}>
                <img src="/image/data.svg" alt="data" />
                <span style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '110%' }}>25 дней</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '10px', backgroundColor: '#F7F7F7', borderRadius: '50px' }}>
                <img src="/image/time.svg" alt="time" />
                <span style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '110%' }}>20-50 мин/день</span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '10px', backgroundColor: '#F7F7F7', borderRadius: '50px', width: 'fit-content' }}>
              <img src="/image/level.svg" alt="level" />
              <span style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '110%' }}>Сложность</span>
            </div>
          </div>
        </div>

        {/* Фитнес */}
        <div style={{
          position: 'absolute',
          top: '350px',
          left: '940px',
          width: '360px',
          height: '501px',
          backgroundColor: '#FFFFFF',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',   
          borderRadius: '30px',
          overflow: 'hidden',
          paddingBottom: '15px'
        }}>
          <img src="/image/fitness.svg" alt="Fitness" style={{ width: '360px', height: '325px', objectFit: 'cover', display: 'block' }} />
          <div style={{ padding: '20px', boxSizing: 'border-box' }}>
            <div style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 700, fontSize: '32px', lineHeight: '110%', marginBottom: '20px' }}>Фитнес</div>
            <div style={{ display: 'flex', gap: '6px', marginBottom: '6px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '10px', backgroundColor: '#F7F7F7', borderRadius: '50px' }}>
                <img src="/image/data.svg" alt="data" />
                <span style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '110%' }}>25 дней</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '10px', backgroundColor: '#F7F7F7', borderRadius: '50px' }}>
                <img src="/image/time.svg" alt="time" />
                <span style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '110%' }}>20-50 мин/день</span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '10px', backgroundColor: '#F7F7F7', borderRadius: '50px', width: 'fit-content' }}>
              <img src="/image/level.svg" alt="level" />
              <span style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '110%' }}>Сложность</span>
            </div>
          </div>
        </div>

        {/* Степ-аэробика */}
        <div style={{
          position: 'absolute',
          top: '891px',
          left: '140px',
          width: '360px',
          height: '501px',
          backgroundColor: '#FFFFFF',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',   
          borderRadius: '30px',
          overflow: 'hidden',
          paddingBottom: '15px'
        }}>
          <img src="/image/step_aerobics.svg" alt="Step aerobics" style={{ width: '360px', height: '325px', objectFit: 'cover', display: 'block' }} />
          <div style={{ padding: '20px', boxSizing: 'border-box' }}>
            <div style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 700, fontSize: '32px', lineHeight: '110%', marginBottom: '20px' }}>Степ-аэробика</div>
            <div style={{ display: 'flex', gap: '6px', marginBottom: '6px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '10px', backgroundColor: '#F7F7F7', borderRadius: '50px' }}>
                <img src="/image/data.svg" alt="data" />
                <span style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '110%' }}>25 дней</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '10px', backgroundColor: '#F7F7F7', borderRadius: '50px' }}>
                <img src="/image/time.svg" alt="time" />
                <span style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '110%' }}>20-50 мин/день</span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '10px', backgroundColor: '#F7F7F7', borderRadius: '50px', width: 'fit-content' }}>
              <img src="/image/level.svg" alt="level" />
              <span style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '110%' }}>Сложность</span>
            </div>
          </div>
        </div>

        {/* Бодифлекс */}
        <div style={{
          position: 'absolute',
          top: '891px',
          left: '540px',
          width: '360px',
          height: '501px',
          backgroundColor: '#FFFFFF',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',   
          borderRadius: '30px',
          overflow: 'hidden',
          paddingBottom: '15px'
        }}>
          <img src="/image/bodyflex.svg" alt="Bodyflex" style={{ width: '360px', height: '325px', objectFit: 'cover', display: 'block' }} />
          <div style={{ padding: '20px', boxSizing: 'border-box' }}>
            <div style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 700, fontSize: '32px', lineHeight: '110%', marginBottom: '20px' }}>Бодифлекс</div>
            <div style={{ display: 'flex', gap: '6px', marginBottom: '6px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '10px', backgroundColor: '#F7F7F7', borderRadius: '50px' }}>
                <img src="/image/data.svg" alt="data" />
                <span style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '110%' }}>25 дней</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '10px', backgroundColor: '#F7F7F7', borderRadius: '50px' }}>
                <img src="/image/time.svg" alt="time" />
                <span style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '110%' }}>20-50 мин/день</span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '10px', backgroundColor: '#F7F7F7', borderRadius: '50px', width: 'fit-content' }}>
              <img src="/image/level.svg" alt="level" />
              <span style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '110%' }}>Сложность</span>
            </div>
          </div>
        </div>

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

      {/* Модальное окно авторизации */}
      <ModalAuth isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </div>
  )
}

export default Home
