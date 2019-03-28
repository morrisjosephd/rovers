import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import WebFont from 'webfontloader'

import './index.css'
import App from './components/App/App'

WebFont.load({
    google: {
        families: ['Roboto:300,400', 'sans-serif']
    }
})

ReactDOM.render(<App message={'Hello, World!'} />, document.getElementById('root'))
