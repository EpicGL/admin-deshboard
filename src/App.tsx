import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useStateContext } from './contexts/ContextProvider';

import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { FiSettings } from 'react-icons/fi';

import { Navbar, Sidebar, ThemeSettings } from './components';
import { Calender,Area,Bar,ColoerMapping,ColorPicker,Customers,Ecommarce,Editor,Empolyees,Fainancial,Kanban,Line,Order,Pie,Pyramid,Stacked } from './pages';
import './App.css'

function App() {
  const contextValues = useStateContext() || {};
  const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } = contextValues;
  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4' style={{zIndex:'9999'}}>
            <TooltipComponent content="Settings" position='TopCenter' >
              <button type='button' onClick={() => (setThemeSettings(true))} className='text-white hover:shadow hover:bg-ligh-gray p-2 text-3xl' style={{borderRadius:'50%', backgroundColor:currentColor}} ><FiSettings/></button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className='w-72 fixed sidebar 
            dark:bg-secondary-dark-bg bg-white
            '>
              <Sidebar/>
            </div>
          ) : (
            <div className='w-0 dark:bg-secondary-dark-bg bg-white'>
              
            </div>
          )}
          <div className={`dark:bg-main-dark-bg  bg-main-bg min-h-screen w-full
            ${activeMenu ? 'md:ml-72' : 'flex-1'}`
          }>
          <div>

            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
              <Navbar/>
            </div>

            {themeSettings && <ThemeSettings/>}
        
              <Routes>
            
                {/* DashBoard */}
            
                <Route index element={<Ecommarce/>} />
                <Route path='/ecommerce' element={<Ecommarce/>} />
                
                {/* pages */}
                
                <Route path='/orders' element={<Order/>} />
                <Route path='/employees' element={<Empolyees/>} />
                <Route path='/customers' element={<Customers/>} />
                
                {/* Apps */}
                
                <Route path='/kanban' element={<Kanban/>} />
                <Route path='/editor' element={<Editor/>} />
                <Route path='/calendar' element={<Calender/>} />
                <Route path='/color-picker' element={<ColorPicker/>} />
                
                {/* Charts */}
                
                <Route path='/line' element={<Line/>} />
                <Route path='/area' element={<Area/>} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter >
    </div>
      )
}

export default App
