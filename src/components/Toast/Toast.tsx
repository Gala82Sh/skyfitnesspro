import { useEffect } from 'react'
import './Toast.scss'

interface ToastProps {
  message: string
  type: 'success' | 'error' | 'info'
  duration?: number
  onClose: () => void
}

const Toast = ({ message, type, duration = 2000, onClose }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  return (
    <div className={`toast toast--${type}`}>
      <div className="toast__content">
        {type === 'success' && <span className="toast__icon">✅</span>}
        {type === 'error' && <span className="toast__icon">❌</span>}
        {type === 'info' && <span className="toast__icon">ℹ️</span>}
        <span className="toast__message">{message}</span>
      </div>
    </div>
  )
}

export default Toast