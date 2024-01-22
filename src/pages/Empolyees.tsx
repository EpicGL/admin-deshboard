import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Search , Toolbar, Inject  } from '@syncfusion/ej2-react-grids'
import { employeesData, employeesGrid } from '../data/dummy'
import { Header } from '../components'



const Empolyees = () => {
  return (
    <div className='m-2 md:m-10 p2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header
        category='Page'
        title='Empolyees'
      />
      <GridComponent 
        id='grindcomp'
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={['Search']}
        width='auto'
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Search, Page, Toolbar]}/>
      </GridComponent>
    </div>
)
}

export default Empolyees