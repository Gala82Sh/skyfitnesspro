import './ModalSuccess.scss'

interface ModalSuccessProps {
  isOpen: boolean
  onClose: () => void
}

const ModalSuccess = ({ isOpen, onClose }: ModalSuccessProps) => {
  if (!isOpen) return null

  return (
    <div className="modal-success-overlay" onClick={onClose}>
      <div className="modal-success" onClick={(e) => e.stopPropagation()}>
        <div className="success-text">
          Ваш прогресс
          <br />
          засчитан!
        </div>
        <img src="/image/check-in-circle.svg" alt="success" className="success-icon" />
      </div>
    </div>
  )
}

export default ModalSuccess
