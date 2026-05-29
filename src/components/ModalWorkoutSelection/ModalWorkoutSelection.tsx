import './ModalWorkoutSelection.scss'

interface ModalWorkoutSelectionProps {
  isOpen: boolean
  onClose: () => void
  workouts: { _id: string; name: string }[]
  onSelectWorkout: (workoutId: string) => void
  onStart: () => void
  selectedWorkoutId: string | null
  completedWorkoutIds?: string[]
}

const ModalWorkoutSelection = ({
  isOpen,
  onClose,
  workouts,
  onSelectWorkout,
  onStart,
  selectedWorkoutId,
  completedWorkoutIds = [],
}: ModalWorkoutSelectionProps) => {
  if (!isOpen) return null

  const formatWorkoutName = (fullName: string) => {
    const cleaned = fullName.replace(/ \/ Алексей Казубский$/, '')
    const parts = cleaned.split(' / ')
    const firstLine = parts[0] || cleaned
    const secondLine = parts.slice(1).join(' / ')
    return { firstLine, secondLine }
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-workout" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">Выберите тренировку</h2>
        <div className="workouts-list">
          {workouts.map((workout) => {
            const { firstLine, secondLine } = formatWorkoutName(workout.name)
            const isCompleted = completedWorkoutIds.includes(workout._id)

            return (
              <div
                key={workout._id}
                className={`workout-item ${selectedWorkoutId === workout._id ? 'selected' : ''}`}
                onClick={() => onSelectWorkout(workout._id)}
              >
                <div className="workout-radio">
                  {isCompleted ? (
                    <img src="/image/check-in-circle.svg" alt="completed" className="radio-icon" />
                  ) : selectedWorkoutId === workout._id ? (
                    <img src="/image/radio.svg" alt="selected" className="radio-icon" />
                  ) : (
                    <div className="radio-empty"></div>
                  )}
                </div>
                <div className="workout-info">
                  <div className="workout-name">{firstLine}</div>
                  {secondLine && <div className="workout-subtitle">{secondLine}</div>}
                </div>
              </div>
            )
          })}
        </div>
        <button className="modal-start-btn" onClick={onStart} disabled={!selectedWorkoutId}>
          Начать
        </button>
      </div>
    </div>
  )
}

export default ModalWorkoutSelection