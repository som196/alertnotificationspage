import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {children} = props
  const [
    notificationIconElement,
    notificationHeaderElement,
    notificationDescriptionElement,
  ] = children

  return (
    <div className="each-notification-main-container">
      <div className="each-notification-item-container">
        <div className="notification-header-description-container">
          <div className="notification-icon-container">
            {notificationIconElement}
          </div>
          <div className="header-description-container">
            {notificationHeaderElement}
            {notificationDescriptionElement}
          </div>
        </div>
        <div className="close-icon-container">
          <GrFormClose className="close-form-icon" />
        </div>
      </div>
    </div>
  )
}

export default Notification
