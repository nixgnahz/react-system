import React from 'react'

import echarts from 'echarts/lib/echarts'
import 'echarts/lib/component/title'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/chart/pie'

import {Breadcrumb} from 'antd'

class Pie extends React.Component {
    componentDidMount() {
        var myChart = echarts.init(document.getElementById('chart'));
        myChart.setOption({
            title: {
                x:'center',
                text: '用户访问来源图'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:335, name:'直接访问'},
                        {value:310, name:'邮件营销'},
                        {value:234, name:'联盟广告'},
                        {value:135, name:'视频广告'},
                        {value:1548, name:'搜索引擎'}
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        })
    }

    render () {
        return (
            <div>
                <div className='top-header'>
                    <p>饼状图</p>
                    <Breadcrumb>
                        <Breadcrumb.Item>图表</Breadcrumb.Item>
                        <Breadcrumb.Item>饼状图</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div id="chart"></div>
            </div>
        )
    }
}

export default Pie