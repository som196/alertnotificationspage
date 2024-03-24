import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'
import './index.css'

const notificationdata = [
  {
    icon: <AiFillCheckCircle className="icon success-icon" />,
    heading: <h1 className="heading success-heading">Success</h1>,
    description: (
      <p className="description">You can access all the files in the folder</p>
    ),
  },

  {
    icon: <RiErrorWarningFill className="icon error-icon" />,
    heading: <h1 className="heading error-heading">Error</h1>,
    description: (
      <p className="description">
        Sorry, you are not authorized to have access to delete the file
      </p>
    ),
  },
  {
    icon: <MdWarning className="icon warning-icon" />,
    heading: <h1 className="heading warning-heading">Warning</h1>,
    description: (
      <p className="description">
        Viewers of this file can see comments and suggestions
      </p>
    ),
  },
  {
    icon: <MdInfo className="icon info-icon" />,
    heading: <h1 className="heading info-heading">Info</h1>,
    description: (
      <p className="description">Anyone on the internet can view these files</p>
    ),
  },
]

const AlertNotifications = () => (
  <div className="alert-notifications-container">
    <h1>Alert Notifications</h1>
    <div>
      {notificationdata.map(each => (
        <Notification key={Math.floor(Math.random() * 1000)}>
          {each.icon}
          {each.heading}
          {each.description}
        </Notification>
      ))}
    </div>
  </div>
)

export default AlertNotifications
