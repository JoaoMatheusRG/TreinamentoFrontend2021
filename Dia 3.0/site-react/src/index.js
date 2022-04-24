import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import Cabeca from './components/header'
import Corpo from './components/main'
import Pe from './components/footer'

ReactDOM.render(
    <div>
        <Cabeca/>
        <Corpo/>
        <Pe/>
    </div>,
    document.getElementById('root')
)


