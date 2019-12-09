import React from 'react'
// import { Route, Switch } from 'react-router-dom'
// import MainNavbar from './MainNavbar'
import image1 from '../images/49523C1-R01-007A.Jpg'
import Countdown from 'react-countdown-now'

export default function App() {
  const Completionist = () => <span>TIME TO COME BACK BRIDGETTE!</span>
  const endDate = new Date('2020-01-29T03:24:00')

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />
    } else {
      // Render a countdown
      const header = 'Only more'
      const footer = 'To see your best mates again! '

      if (50 >= days >= 40) {
        header = 'Only more'
        footer = 'To see your best mates again! '
      }
      return (
        <div className="timer">
          <span>{header} </span>
          <span>
            {days}Days {hours}H
          </span>
          <br />
          <span>
            {minutes}min {seconds} seconds
          </span>
          <br />

          <span>{footer} </span>

          <div className="image">
            <img src={image1} alt="" />
          </div>
        </div>
      )
    }
  }
  return (
    <div className="Countdown">
      {/* <MainNavbar /> */}
      <h1>Bridgette's countdown</h1>
      <Countdown date={endDate} renderer={renderer} zeroPadTime={2}></Countdown>
    </div>
  )
}
