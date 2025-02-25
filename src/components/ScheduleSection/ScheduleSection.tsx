import { FC } from 'react'
import styles from './ScheduleSection.module.css'

interface ScheduleEvent {
  startTime: string
  duration: string
  presenter: string
}

const scheduleEvents: ScheduleEvent[] = [
  { startTime: '2:50 PM', duration: '5 min', presenter: 'LEADER' },
  { startTime: '2:55 PM', duration: '15 min', presenter: 'Cradlepoint' },
  { startTime: '3:10 PM', duration: '15 min', presenter: 'APC' },
  { startTime: '3:25 PM', duration: '15 min', presenter: 'TP-LINK' },
  { startTime: '3:40 PM', duration: '10 min', presenter: 'BREAK' },
  { startTime: '3:50 PM', duration: '15 min', presenter: 'Microsoft & LEADER' },
  { startTime: '4:05 PM', duration: '20 min', presenter: 'Microsoft' },
  { startTime: '4:25 PM', duration: '15 min', presenter: 'Ubiquiti' },
  { startTime: '4:40 PM', duration: '20 min', presenter: 'Lenovo' },
  { startTime: '5:00 PM', duration: '2.5 hours', presenter: 'Exhibition Opening' },
  { startTime: '6:00 PM', duration: '15 min', presenter: 'Teltonika' },
  { startTime: '6:15 PM', duration: '20 min', presenter: 'Breeze & 3CX' },
  { startTime: '6:35 PM', duration: '15 min', presenter: 'Yealink & Microsoft Teams Rooms' },
  { startTime: '6:50 PM', duration: '15 min', presenter: 'MSI' },
  { startTime: '7:30 PM', duration: '30 min', presenter: 'PRIZE DRAW' },
  { startTime: '8:00 PM', duration: '', presenter: 'Exhibition Closed' }
]

const ScheduleSection: FC = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>EVENT SCHEDULE</h2>
      <p className={styles.description}>
      Join industry pioneers and thought leaders as they share invaluable knowledge, practical insights, and proven strategies to accelerate your business growth.
      Whether you're looking to implement AI solutions, optimize operations, or stay ahead of technological trends, Leader EXPO 2025 is your gateway to the future of business success.
      </p>
      <div className={styles.scheduleGrid}>
        <div className={styles.header}>
          <span>Start Time</span>
          <span>Duration</span>
          <span>Presenter/Speaker</span>
        </div>
        {scheduleEvents.map((event, index) => (
          <div 
            key={index} 
            className={`${styles.event} ${
              event.presenter === 'Exhibition Opening' || 
              event.presenter === 'PRIZE DRAW' ? styles.eventBreak :
              event.presenter === 'BREAK' || 
              event.presenter === 'Exhibition Closed' ? styles.eventDark :
              ''
            }`}
          >
            <span className={styles.time}>{event.startTime}</span>
            <span className={styles.duration}>{event.duration}</span>
            <span className={styles.presenter}>{event.presenter}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ScheduleSection
