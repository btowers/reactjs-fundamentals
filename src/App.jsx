import './App.css'

import React from 'react'

import Card from './components/layout/Card'
import Random from './components/basics/Random'
import Fragment from './components/basics/Fragment'
import ComponentWithParams from './components/basics/ComponentWithParams'
import FirstComponent from './components/basics/FirstComponent'

export default () => (
    <div className="app">
        <h1>React Fundamentals</h1>
        <div className="cards">
            <Card title="#04 - Random" color="#93b5e1">
                <Random min={1} max={61} />
            </Card>
            <Card title="#03 - Fragment" color="#3b2e5a">
                <Fragment />
            </Card>
            <Card title="#02 - Component With Params" color="#3282b8">
                <ComponentWithParams title="Student Status" student="Bruno Torres" note={9.3} />
            </Card>
            <Card title="#01 - First Component" color="#d3de32">
                <FirstComponent></FirstComponent>
            </Card>
        </div>
    </div>
)