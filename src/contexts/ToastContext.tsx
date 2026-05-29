import { createContext, useContext, useState, ReactNode } from 'react'
import Toast from '../components/Toast/Toast'

interface ToastContextType {
  showToast: (message: string, type: 'success' | 'error' | 'info') => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export const useToast = () => {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within ToastProvider')
  }
  return context
}

interface ToastProviderProps {
  children: ReactNode
}

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [toast, setToast] = useState<{
    message: string
    type: 'success' | 'error' | 'info'
    isOpen: boolean
  }>({
    message: '',
    type: 'info',
    isOpen: false,
  })

  const showToast = (message: string, type: 'success' | 'error' | 'info') => {
    setToast({ message, type, isOpen: true })
    setTimeout(() => {
      setToast((prev) => ({ ...prev, isOpen: false }))
    }, 2000)
  }

  const handleClose = () => {
    setToast((prev) => ({ ...prev, isOpen: false }))
  }

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast.isOpen && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={handleClose}
        />
      )}
    </ToastContext.Provider>
  )
}