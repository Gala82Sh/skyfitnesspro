import './CoursePage.module.scss'

const CoursePage = () => {
    return (
        <div style={{ backgroundColor: '#FAFAFA', minHeight: '1703px' }}>
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

                {/* Кнопка Вход */}
                <button
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

                {/* Картинка yoga2 */}
                <img
                    src="/image/yoga2.svg"
                    alt="Yoga"
                    style={{
                        position: 'absolute',
                        top: '180px',
                        left: '140px',
                        width: '1160px',
                        height: '310px',
                        borderRadius: '30px',
                        objectFit: 'cover'
                    }}
                />

                {/* Заголовок "Подойдет для вас, если:" */}
                <div
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
                        margin: 0
                    }}
                >
                    Подойдет для вас, если:
                </div>

                {/* Пункт 1 */}
                <div style={{
                    position: 'absolute',
                    top: '620px',
                    left: '140px',
                    width: '368px',
                    backgroundColor: '#151720',
                    borderRadius: '28px',
                    display: 'flex',
                    gap: '10px',
                    alignItems: 'flex-start',
                    padding: '20px'
                }}>
                    <div style={{
                        width: '35px',
                        height: '101px',
                        flex: 'none',
                        order: 0,
                        flexGrow: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <div style={{
                            fontFamily: 'Roboto, sans-serif',
                            fontWeight: 500,
                            fontSize: '75px',
                            lineHeight: '135%',
                            letterSpacing: '0px',
                            color: '#BCEC30',
                            marginBottom: '20px'
                        }}>1</div>
                    </div>
                    <div style={{
                        width: '268px',
                        fontFamily: 'Roboto, sans-serif',
                        fontWeight: 400,
                        fontSize: '24px',
                        lineHeight: '110%',
                        letterSpacing: '0px',
                        color: '#FFFFFF'
                    }}>
                        Давно хотели <br />попробовать йогу, <br />но не решались начать
                    </div>
                </div>

                {/* Пункт 2 */}
                <div style={{
                    position: 'absolute',
                    top: '620px',
                    left: '525px',
                    width: '431px',
                    backgroundColor: '#151720',
                    borderRadius: '28px',
                    display: 'flex',
                    gap: '10px',
                    alignItems: 'flex-start',
                    padding: '20px'
                }}>
                    <div style={{
                        width: '43px',
                        height: '101px',
                        flex: 'none',
                        order: 0,
                        flexGrow: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <div style={{
                            fontFamily: 'Roboto, sans-serif',
                            fontWeight: 500,
                            fontSize: '75px',
                            lineHeight: '135%',
                            letterSpacing: '0px',
                            color: '#BCEC30',
                            marginBottom: '20px'
                        }}>2</div>
                    </div>
                    <div style={{
                        width: '323px',
                        fontFamily: 'Roboto, sans-serif',
                        fontWeight: 400,
                        fontSize: '24px',
                        lineHeight: '110%',
                        letterSpacing: '0px',
                        color: '#FFFFFF'
                    }}>
                        Хотите укрепить позвоночник, избавиться от болей в спине
                    </div>
                </div>

                {/* Пункт 3 */}
                <div style={{
                    position: 'absolute',
                    top: '620px',
                    left: '973px',
                    width: '327px',
                    backgroundColor: '#151720',
                    borderRadius: '28px',
                    display: 'flex',
                    gap: '10px',
                    alignItems: 'flex-start',
                    padding: '20px'
                }}>
                    <div style={{
                        width: '43px',
                        height: '101px',
                        flex: 'none',
                        order: 0,
                        flexGrow: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <div style={{
                            fontFamily: 'Roboto, sans-serif',
                            fontWeight: 500,
                            fontSize: '75px',
                            lineHeight: '135%',
                            letterSpacing: '0px',
                            color: '#BCEC30',
                            marginBottom: '20px'
                        }}>3</div>
                    </div>
                    <div style={{
                        width: '219px',
                        fontFamily: 'Roboto, sans-serif',
                        fontWeight: 400,
                        fontSize: '24px',
                        lineHeight: '110%',
                        letterSpacing: '0px',
                        color: '#FFFFFF'
                    }}>
                        Ищете активность, полезную для тела и души
                    </div>
                </div>

                {/* Блок Направления */}
                <div style={{
                    position: 'absolute',
                    top: '821px',
                    left: '140px',
                    width: '1160px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '40px'
                }}>
                    <div style={{
                        width: '810px',
                        height: '44px',
                        fontFamily: 'Roboto, sans-serif',
                        fontWeight: 600,
                        fontSize: '40px',
                        lineHeight: '110%',
                        letterSpacing: '0px',
                        color: '#000'
                    }}>
                        Направления
                    </div>
                    <div style={{
                        width: '1160px',
                        backgroundColor: '#BCEC30',
                        borderRadius: '28px',
                        padding: '30px',
                        display: 'flex',
                        gap: '10px',
                        justifyContent: 'space-between'
                    }}>
                        <div style={{
                            width: '284px',
                            height: '86px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <img src="/image/icon.svg" alt="icon" style={{ width: 'auto', height: 'auto' }} />
                                <span style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400, fontSize: '24px', lineHeight: '110%', color: '#000' }}>Йога для новичков</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <img src="/image/icon.svg" alt="icon" style={{ width: 'auto', height: 'auto' }} />
                                <span style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400, fontSize: '24px', lineHeight: '110%', color: '#000' }}>Классическая йога</span>
                            </div>
                        </div>
                        <div style={{
                            width: '284px',
                            height: '86px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <img src="/image/icon.svg" alt="icon" style={{ width: 'auto', height: 'auto' }} />
                                <span style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400, fontSize: '24px', lineHeight: '110%', color: '#000' }}>Кундалини-йога</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <img src="/image/icon.svg" alt="icon" style={{ width: 'auto', height: 'auto' }} />
                                <span style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400, fontSize: '24px', lineHeight: '110%', color: '#000' }}>Йогатерапия</span>
                            </div>
                        </div>
                        <div style={{
                            width: '284px',
                            height: '86px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <img src="/image/icon.svg" alt="icon" style={{ width: 'auto', height: 'auto' }} />
                                <span style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400, fontSize: '24px', lineHeight: '110%', color: '#000' }}>Хатха-йога</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <img src="/image/icon.svg" alt="icon" style={{ width: 'auto', height: 'auto' }} />
                                <span style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400, fontSize: '24px', lineHeight: '110%', color: '#000' }}>Аштанга-йога</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Блок "Начните путь к новому телу" */}
                <div style={{
                    position: 'absolute',
                    top: '1167px',
                    left: '140px',
                    width: '1160px',
                    height: '486px',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '30px',
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)'
                }}>
                    {/* Левый блок */}
                    <div style={{
                        position: 'absolute',
                        top: '40px',
                        left: '40px',
                        width: '437px',
                        height: '406px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '28px'
                    }}>
                        <div style={{
                            width: '398px',
                            height: '120px',
                            fontFamily: 'Roboto, sans-serif',
                            fontWeight: 500,
                            fontSize: '60px',
                            lineHeight: '100%',
                            letterSpacing: '0px',
                            color: '#000'
                        }}>
                            Начните путь <br />к новому телу
                        </div>
                        <div style={{
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
                            color: '#000'
                        }}>
                            <div>• проработка всех групп мышц</div>
                            <div>• тренировка суставов</div>
                            <div>• улучшение циркуляции крови</div>
                            <div>• упражнения заряжают бодростью</div>
                            <div>• помогают противостоять стрессам</div>
                        </div>
                        <button style={{
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
                            textAlign: 'center'
                        }}>
                            Войдите, чтобы добавить курс
                        </button>
                    </div>

                    {/* Вектор */}
                    <img
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
                            clipPath: 'inset(0 0 50px 0)'
                        }}
                    />

                    {/* Человек */}
                    <img
                        src="/image/man_in_green.svg"
                        alt="man in green"
                        style={{
                            position: 'absolute',
                            top: '-82.19px',
                            left: '610.99px',
                            width: '519.47px',
                            height: '539.54px',
                            transform: 'rotate(-0.99deg)'
                        }}
                    />


                </div>

            </div>
        </div>
    )
}

export default CoursePage