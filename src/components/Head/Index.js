import React from 'react'

import './index.scss'

import LeftHead from './LeftHead'
import MenuHead from './MenuHead'
import InfoHead from './InfoHead'

class Head extends React.Component {
    render () {
        return (
            <div className='head'>
                <LeftHead/>
                <MenuHead/>
                <InfoHead/>
            </div>
        )
    }
}

export default Head