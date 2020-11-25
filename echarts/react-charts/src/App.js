import React, { useState, useEffect } from 'react'

import ReactEcharts from "echarts-for-react";

export default function App() {
  let [option, setOption] = useState({})

  useEffect(() => {
    setOption({
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
        }]
      }
    )
  }, [])

  return (
    <div>
      <ReactEcharts
        option={option}
      />
    </div>
  )
}
