import React from 'react'
import Articles from './components/Articles'
import User from './components/User'

const App = () => {
  return (
    <div className="app">
      <header>
        <h1>React Skeleton</h1>
      </header>
      <div className="content">
        <Articles/>
        <User/>
      </div>
    </div>
  )
}

export default App