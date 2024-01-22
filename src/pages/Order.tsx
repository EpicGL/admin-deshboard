import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject  } from '@syncfusion/ej2-react-grids'
import { ordersData, ordersGrid } from '../data/dummy'
import { Header } from '../components'

const Order = () => {
  return (
    <div className='m-2 md:m-10 p2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header
        category='Page'
        title='Orders'
      />
      <GridComponent
        id='grindcomp'
        dataSource={ordersData}
        allowPaging
        allowSorting
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, Filter, Page, ContextMenu, ExcelExport, PdfExport,Edit]}/>
      </GridComponent>
    </div>
  )
}

export default Order