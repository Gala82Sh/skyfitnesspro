const Home = () => {
  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>

      {}
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

      {}
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

      {}
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

 {}
      <div
        style={{
          position: 'absolute',
          top: '180px',
          left: '1011px',
          paddingTop: '16px',
          paddingRight: '20px',
          paddingBottom: '16px',
          paddingLeft: '20px',
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


      {}
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


      {}
      <button
        style={{
          position: 'absolute',
          top: '50px',
          left: '1197px',
          paddingTop: '16px',
          paddingRight: '26px',
          paddingBottom: '16px',
          paddingLeft: '26px',
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
        Вход
      </button>

    </div>
  )
}

export default Home