import React from 'react'

import './index.scss'

import Step from './Step'
import Enroll from './Enroll'
import Sign from './Sign'
import Share from './Share'
import Person from './Person'

class Sponsor extends React.Component {
    render () {
        const {step, increaseStep, decreaseStep} = this.props
        var stepComponent = null
        var signComponent = null
        var shareComponent = null
        var personComponent = null
        switch (step) {
            case 0:
              stepComponent = <Enroll increaseStep={increaseStep} decreaseStep={decreaseStep}/>
              break;
            case 1:
              signComponent = <Sign increaseStep={increaseStep} decreaseStep={decreaseStep}/>
              break;
            case 2:
              shareComponent =  <Share increaseStep={increaseStep} decreaseStep={decreaseStep}/>
              break;
            default:
                personComponent = <Person increaseStep={increaseStep} decreaseStep={decreaseStep}/>
        }
        return (
            <div>
                <Step step={step}/>
                {stepComponent}
                {signComponent}
                {shareComponent}
                {personComponent}
            </div>
        )
    }
}

export default Sponsor