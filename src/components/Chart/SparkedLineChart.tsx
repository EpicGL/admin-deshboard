import React from 'react'
import {SparklineComponent, Inject, SparklineTooltip} from '@syncfusion/ej2-react-charts'

type props = {
  currentColor: string,
  id: string,
  height: string,
  width: string,
  data: object[],
  color:string

}

const SparkedLineChart = ({currentColor,id,color,data,height,width}: props) => {
  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      lineWidth={1}
      valueType='Numeric'
      fill={color}
      border={{ color: currentColor, width: 2 }}
      dataSource={data}
      xName='x'
      yName='y'
      type={'Line'}
      tooltipSettings={{
        visible: true,
        format: '${x} : data ${y}',
        trackLineSettings: {
          visible: true
          
        }
      }}
    >
      <Inject services={[SparklineTooltip]} />

    </SparklineComponent>
  )
}

export default SparkedLineChart