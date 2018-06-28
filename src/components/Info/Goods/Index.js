import React from 'react'

import './index.scss'

import Search from './Search'
import Good from './Good'
import Button from './Button'

class Goods extends React.Component {
    render () {
        return (
            <div className="row-container">
                <Search/>
                <div className="goods-container">
                    <Good/>
                    <Good/>
                    <Good/>
                    <Good/>
                    <Good/>
                    <Good/>
                    <Good/>
                    <Good/>
                    <Good/>
                    <Good/>
                    <Good/>
                    <Good/>
                </div>
                <div className="fixed-btn">
                    <Button value={{icon: 'plus', title: '添加'}}/>
                    <Button value={{icon: 'bars', title: '添加分类'}}/>
                    <Button value={{icon: 'coffee', title: '添加菜品'}}/>
                </div>
            </div>
        )
    }
}

export default Goods