import React from 'react'
import { Stacked,Button,SparkedLineChart  } from '../components'
import { earningData, SparklineAreaData } from '../data/dummy'
import { BsDot } from 'react-icons/bs'
import { useStateContext } from '../contexts/ContextProvider'
const Ecommarce = () => {
  const { currentColor } = useStateContext()
  
  return (
    <div className='mt-12'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white  dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-right'>
          <div className='flex justify-between  items-center'>
            <div>
              <p className='font-bold text-gray-800'>Earnings</p>
              <p className='text-2xl text-gray-800'>$60,232.02</p>
            </div>
          </div>
          <div className='mt-6'>
            <Button
              color= 'white'
              bgColor= {currentColor}
              text= 'Downwload'
              borderRadius= '10px'
              size= 'md'
            />
          </div>
        </div>
        
        <div className='flex m-3 flex-warp lg:flex-none justify-center gap-2 items-center'>
          {earningData.map((item) => (
            <div
              key={item.title}
              className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl'
            >
              <button type="button"
                style={{
                  color: item.iconColor,
                  backgroundColor: item.iconBg,
                }} className='text-2xl opacity-90 rounded-full p-4 hover:drop-shadow-xl'>
                  {item.icon}
              </button>
              <p className='mt-3'>
                <span className='text-lg font-semibold'>
                  {item.amount}
                </span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
                <p className='text-sm text-gray-400 mt-1'>
                  {item.title}
                </p>
              </p>
            </div>
          ))}
        </div>
      </div>
      
      <div className='flex flex-wrap gap-10 justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-3 rounded-2xl md:w-780'>
          <div className='flex justify-between'>
            <p className='font-semibold text-xl'>Revenu Updates</p>
            <div className='flex items-center gap-4'>
            <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                <span className='text-3xl'>
                  <BsDot/>
                </span>
                <span>Expense</span>
              </p>
              <p className='flex items-center gap-2 text-green-600 hover:drop-shadow-xl'>
                <span className='text-3xl'>
                  <BsDot/>
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>

          <div className='mt-10 flex gap-10 flex-wrap justify-center'>
            
            <div className='border-r-1 border-color m-4 pr-10 '>
              <div>
                <p>
                  <span className='text-3xl font-semibold'>$93,102</span>
                  <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full bg-green-400 text-white ml-3 text-xs'>24%</span>
                </p>
                <p className='text-gray-500 mt-1'>Budget</p>    
              </div>
              <div className='mt-8'>
                <p>
                  <span className='text-3xl font-semibold'>$50,000</span>
              </p>
                <p className='text-gray-500 mt-1'>Expense</p>
              </div>
              <div className='mt-5'>
                <SparkedLineChart
                  currentColor='blue'
                  id='line-sparkline'
                  height='80px'
                  width='250px'
                  data={SparklineAreaData}
                  color='blue'
                  />
              </div>
              <div className='mt-10'>
                <Button
                  color='white'
                  bgColor={currentColor}
                  borderRadius='10px'
                  size='md'
                  text='Download Report'
                />
              </div>
            </div>
            <div>
              <Stacked
                height='360px'
                width='320px'
              />
            </div>
          </div>

        </div>
      </div>
    
    </div>
  )
}

export default Ecommarce