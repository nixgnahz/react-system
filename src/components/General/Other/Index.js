import React from 'react'

import './index.scss'

import Recommend from './Recommend'
import DishesRate from './Rate'
import Dishes from './Dishes'

class Other extends React.Component {
    render () {
        return (
            <div>
                <Recommend/>
                <DishesRate/>
                <Dishes/>
            </div>
        )
    }
}

export default Other