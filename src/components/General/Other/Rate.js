import React from 'react'

import {Card, Rate} from 'antd'

const rates = [
    {
        "name": "服务评价",
        "rate": 4,
        "word": "满意"
    },
    {
        "name": "外观评价",
        "rate": 4,
        "word": "满意"
    },
    {
        "name": "使用评价",
        "rate": 4,
        "word": "满意"
    },
    {
        "name": "总体评价",
        "rate": 4,
        "word": "满意"
    }
]

class DishesRate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rates: rates
        }
    }

    render () {
        return (
            <div className="rate-container">
                <Card hoverable={true} title="评价中心">
                {
                    this.state.rates.map((rate, index)=>
                        <div key={index}>
                            {rate.name}
                            <Rate allowHalf defaultValue={rate.rate}/>
                            <span className="rate-word">{rate.word}</span>
                        </div>
                    )
                }
                </Card>
            </div>
        )
    }
}

export default DishesRate