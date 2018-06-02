import React from 'react'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activityNum: 4,
            enrollNum: 400,
            viewNum: 800
        }
    }

    render () {
        return (
            <div className="header">
                <div className="item">
                    <p>{this.state.activityNum}</p>
                    <span>活动总数</span>
                </div>
                <div className="item">
                    <p>{this.state.enrollNum}</p>
                    <span>报名总数</span>
                </div>
                <div className="item">
                    <p>{this.state.viewNum}</p>
                    <span>浏览总数</span>
                </div>
            </div>
        )
    }
}

export default Header