import React from 'react'

import './index.scss'

import Step from './Step'
import Enroll from './Enroll'
import Sign from './Sign'
import Share from './Share'
import Person from './Person'

class Sponsor extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    render () {
        return (
            <div>
                <Step/>
                <Enroll/>
            </div>
        )
    }
}

export default Sponsor