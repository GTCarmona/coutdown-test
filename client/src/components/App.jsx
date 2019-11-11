import React from 'react'
import { Route, Switch } from 'react-router-dom'
// import MainNavbar from './MainNavbar'
import Home from './pages/Home'
import Countries from './pages/Countries'
import AddCountry from './pages/AddCountry'
import Secret from './pages/Secret'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Countdown from 'react-countdown-now'

export default function App() {
  const Completionist = () => <span>TIME TO COME BACK BRIDGETTE!</span>
  const endDate = new Date('2020-01-29T03:24:00')
  // var date2 = new Date('1995-12-17T03:24:00');
  // Sun Dec 17 1995 03:24:00 GMT...

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />
    } else {
      // Render a countdown
      return (
        <span>
          Days: {days} Hours:{hours} Minutes: {minutes} Seconds:{seconds}
        </span>
      )
    }
  }
  return (
    <div className="App">
      {/* <MainNavbar /> */}
      <h1>Brandy's countdown</h1>
      <Countdown date={endDate} renderer={renderer} zeroPadTime={2}></Countdown>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/countries" component={Countries} />
        <Route path="/add-country" component={AddCountry} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/secret" component={Secret} />
        <Route render={() => <h2>404</h2>} />
      </Switch>
    </div>
  )
}
