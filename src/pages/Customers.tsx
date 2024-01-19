import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Sort,  Selection, Page, Edit, Toolbar, Inject, Filter  } from '@syncfusion/ej2-react-grids'
import { customersData, customersGrid } from '../data/dummy'
import { Header } from '../components'



const Customers = () => {
  return (
    <div className='m-2 md:m-10 p2 md:p-10 bg-white rounded-3xl'>
      <Header
        category='Page'
        title='Customer'
      />
      <GridComponent
        id='grindcomp'
        dataSource={customersData}
        allowPaging
        allowSorting
        editSettings={{allowDeleting: true, allowEditing:true}}
        toolbar={['Delete']}
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Sort, Page, Toolbar, Selection, Edit, Filter]}/>
      </GridComponent>
    </div>
  )
}

export default Customers