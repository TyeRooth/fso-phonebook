import "./Notification.css"

const Notification = ({ message, isErrorMessage }) => {
  if (message === null) {
    return null;
  }

  return (
    <div className={`notification ${isErrorMessage ? 'error-message' : 'success-message'}`}>
      <p className="notification-message">{message}</p>
    </div>
  )
};

export default Notification;