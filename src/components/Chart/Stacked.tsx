import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts'
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'

type porp = {
  width: string,
  height: string,
}

const Stacked = ({width, height}: porp) => {
  const Xaris: object = stackedPrimaryXAxis
  const Yaris: object = stackedPrimaryYAxis
  const { currentMode } = useStateContext();

  return (
    <ChartComponent
      height={height}
      width={width}
      id='charts'
      background={currentMode === 'Dark' ? '#33373E' : 'white'}
      primaryXAxis={Xaris}
      primaryYAxis={Yaris}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      legendSettings={ currentMode === 'Dark' ? { background: '#33373E', textStyle:{ color:'white'} } : { background: 'white' } }
    >
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
      <SeriesCollectionDirective>
        {
          stackedCustomSeries.map((item, index) => (
            <SeriesDirective key={index}  {...item} />
          ))
        }
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default Stacked