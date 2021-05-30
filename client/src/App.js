import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import HomeScreen from './screens/HomeScreen'
import CategoryScreen from './screens/CategoryScreen'
import ItemScreen from './screens/ItemScreen'
import LoginScreen from './screens/LoginScreen'

const App = () => {
  return (
    <Router>
      <Header />

      <main className='main container'>
        <Route path='/' exact component={LoginScreen} />
        <Route path='/store' exact component={HomeScreen} />
        <Route path='/store/:id' component={CategoryScreen} exact />
        <Route path='/item/:id' component={ItemScreen} exact />
      </main>

      <Footer />
    </Router>
  )
}

export default App
