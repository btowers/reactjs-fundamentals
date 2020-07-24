import React from 'react'

import Card from './components/layout/Card'
import Random from './components/basics/Random'
import Fragment from './components/basics/Fragment'
import ComponentWithParams from './components/basics/ComponentWithParams'
import FirstComponent from './components/basics/FirstComponent'

export default () => (
    <div id="app">

        <h1>React Fundamentals</h1>

        <Card title="Exemplo de Card"></Card>

        <Random min={1} max={61} />
        <Fragment />
        <ComponentWithParams title="Student Situation" student="Bruno Torres" note={9.3} />
        <FirstComponent></FirstComponent>
    </div>
)