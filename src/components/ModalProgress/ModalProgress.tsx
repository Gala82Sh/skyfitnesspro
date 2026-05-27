import { useState } from 'react'
import './ModalProgress.scss'

interface Exercise {
  name: string
  quantity: number
}

interface ModalProgressProps {
  isOpen: boolean
  onClose: () => void
  exercises: Exercise[]
  onSave: (progressData: number[]) => void
}

const ModalProgress = ({ isOpen, onClose, exercises, onSave }: ModalProgressProps) => {
  const [progressValues, setProgressValues] = useState<number[]>(exercises.map(() => 0))

  if (!isOpen) return null

  const handleChange = (index: number, value: string) => {
    const newValues = [...progressValues]

    
    if (value === '') {
      newValues[index] = 0
      setProgressValues(newValues)
      return
    }

    const num = parseInt(value)
    if (!isNaN(num)) {
      newValues[index] = num
      setProgressValues(newValues)
    }
  }

  const handleSave = () => {
    onSave(progressValues)
    onClose()
  }

  return (
    <div className="modal-progress-overlay" onClick={onClose}>
      <div className="modal-progress" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-progress-title">Мой прогресс</h2>
        <div className="modal-progress-list">
          {exercises.map((ex, idx) => (
            <div key={idx} className="modal-progress-item">
              <div className="question">Сколько раз вы сделали {ex.name.toLowerCase()}?</div>
              <input
                type="number"
                className="progress-input"
                value={progressValues[idx] === 0 ? '' : progressValues[idx]}
                onChange={(e) => handleChange(idx, e.target.value)}
                placeholder="0"
                inputMode="numeric"
              />
            </div>
          ))}
        </div>
        <button className="modal-progress-save" onClick={handleSave}>
          Сохранить
        </button>
      </div>
    </div>
  )
}

export default ModalProgress
