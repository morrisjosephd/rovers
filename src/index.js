import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import WebFont from 'webfontloader'

import './index.css'
import App from './components/app/App'
import Firebase, { FirebaseContext } from './components/Firebase'

WebFont.load({
  google: {
    families: ['Roboto:300,400', 'sans-serif']
  }
})

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>, 
document.getElementById('root'))
