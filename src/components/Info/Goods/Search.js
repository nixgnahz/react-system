import React from 'react'

import {Input} from 'antd'

class Search extends React.Component {
    render () {
        return (
            <div className="search">
                <Input.Search placeholder="搜索单品" style={{width: '4rem'}}/>
            </div>
        )
    }
}

export default Search