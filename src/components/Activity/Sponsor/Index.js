import React from 'react'

import './index.scss'

import Step from './Step'
import Enroll from './Enroll'
import Sign from './Sign'
import Share from './Share'
import Person from './Person'

class Sponsor extends React.Component {
    render () {
        return (
            <div>
                <Step/>
                <Enroll/>
                <Sign/>
                <Share/>
                <Person/>
            </div>
        )
    }
}

export default Sponsor