import React from 'react'

import Fragment from './components/basics/Fragment'
import ComponentWithParams from './components/basics/ComponentWithParams'
import FirstComponent from './components/basics/FirstComponent'

export default () => (
    <div id="app">

        <h1>React Fundamentals</h1>

        <Fragment />
        <ComponentWithParams title="Student Situation" student="Bruno Torres" note={9.3} />
        <FirstComponent></FirstComponent>
    </div>
)

