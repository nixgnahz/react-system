import React from 'react'

import {Card, Icon, Rate} from 'antd'

const movies = [
    {
        "id": 1,
        "name": "The Shawshank Redemption",
        "url": "",
        "rate": 9.6
    },
    {
        "id": 2,
        "name": "阿甘正传",
        "url": "",
        "rate": 9.8
    },
    {
        "id": 3,
        "name": "The Professional",
        "url": "",
        "rate": 8.4
    },
    {
        "id": 4,
        "name": "盗梦空间",
        "url": "",
        "rate": 8.8
    },
    {
        "id": 5,
        "name": "Farewell to My Concubine",
        "url": "",
        "rate": 8.5
    },
    {
        "id": 6,
        "name": "肖申克的救赎",
        "url": "",
        "rate": 9.2
    },
    {
        "id": 7,
        "name": "Forrest Gump",
        "url": "",
        "rate": 6.4
    },
    {
        "id": 8,
        "name": "机器人总动员",
        "url": "",
        "rate": 7.2
    },
    {
        "id": 9,
        "name": "Life Is Beautiful",
        "url": "",
        "rate": 9.5
    },
    {
        "id": 10,
        "name": "美丽人生",
        "url": "",
        "rate": 8.3
    },
    {
        "id": 11,
        "name": "Spirited Away",
        "url": "",
        "rate": 9.9
    },
    {
        "id": 12,
        "name": "千与千寻",
        "url": "",
        "rate": 7.2
    },
    {
        "id": 13,
        "name": "The Legend of 1900",
        "url": "",
        "rate": 5.2
    },
    {
        "id": 14,
        "name": "海上钢琴师",
        "url": "",
        "rate": 8.2
    },
    {
        "id": 15,
        "name": "WALL·E",
        "url": "",
        "rate": 9.3
    },
    {
        "id": 16,
        "name": "辛德勒的名单",
        "url": "",
        "rate": 8.2
    },
    {
        "id": 17,
        "name": "Inception",
        "url": "",
        "rate": 7.2
    },
    {
        "id": 18,
        "name": "这个杀手不太冷",
        "url": "",
        "rate": 8.8
    }
]

class Recommend extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            recommendMovies: []
        }
        this.changeRecommendMovies = this.changeRecommendMovies.bind(this)
    }

    componentWillMount () {
        this.changeRecommendMovies()
    }

    changeRecommendMovies () {
        let temp = []
        for (let index in movies) {
            temp.push(movies[index])
        }
        const arr = [];
        for (let i = 0; i < 5; i++) {
            if (temp.length > 0) {
                const arrIndex = Math.floor(Math.random() * temp.length)
                arr[i] = temp[arrIndex]
                arr[i].computedRate = getComputedRate(arr[i].rate)
                temp.splice(arrIndex, 1)
            } else {
                break;
            }
        }
        this.setState({
            recommendMovies: arr
        })
    }

    render () {
        return (
            <div className="rate-container">
                <Card hoverable={true} title="每日推荐" extra={<p><Icon type="reload" style={{color: '#2d8cf0', marginRight: '0.1rem'}}></Icon><span className="exchange-word" onClick={this.changeRecommendMovies}>Change</span></p>}>
                    {
                        this.state.recommendMovies.map((movie)=>
                            <div className="movie" key={movie.id}>
                                {movie.name}
                                <Rate allowHalf defaultValue={movie.computedRate} disabled={true}/>
                                <span className="rate">{movie.rate}</span>
                            </div>
                        )
                    }
                </Card>
            </div>
        )
    }
}

function getComputedRate(rate) {
    return (rate / 2 - Number("0." + String(rate / 2 - 0.5).split('.')[1]))
}

export default Recommend