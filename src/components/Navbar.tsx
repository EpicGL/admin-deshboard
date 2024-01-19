import React,{useEffect} from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avator from '../data/avatar.jpg'
import {Chat, Cart, Notification, UserProfile} from '.'

import { useStateContext } from '../contexts/ContextProvider';

interface NavButtonProps {
  title: string,
  customFunc: ()=> void,
  icon: React.ReactNode,
  color: string,
  dotcolor?: string,
}

const Navbar = () => {
  const { setActiveMenu, isClick, handleClick, screenSize, setScreenSize, currentColor } = useStateContext();
  const NavButton = ({ title, customFunc, icon, color, dotcolor }: NavButtonProps) => (
    <TooltipComponent content={title} position='BottomCenter'>
      <button type='button' style={{color:color}} onClick={customFunc}
        className='relative text-xl rounded-full p-3 hover:bg-light-gray'>
          <span style={{ background: dotcolor }} className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2' />{
          icon}
      </button>
    </TooltipComponent>
  )

  useEffect(() => {
    const handleReSize = () => setScreenSize(window.innerWidth)

    window.addEventListener('resize', handleReSize)
    
    handleReSize();

    return () => window.removeEventListener('resize', handleReSize)
    
  }, [])

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false)
    } else {
      setActiveMenu(true)
    }
  },[screenSize])

  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton title={'menu'} customFunc={()=>(setActiveMenu((prevstate: boolean)=>!prevstate))} color={currentColor} icon={<AiOutlineMenu/>} />
      <div className='flex'>
        <NavButton
          title={'Cart'}
          customFunc={() => handleClick('cart')}
          color={currentColor}
          icon={<FiShoppingCart />}
        />
        <NavButton
          title={'Chat'}
          dotcolor="#03C9D7"
          customFunc={() => handleClick('chat')}
          color={currentColor}
          icon={<BsChatLeft />}
        />
        <NavButton
          title={'Notification'}
          dotcolor="#03C9D7"
          customFunc={() => handleClick('notification')}
          color={currentColor}
          icon={<RiNotification3Line />}
        /> 
        <TooltipComponent
          content={"Profile"}
          position='BottomCenter'
         >
          <div className='flex items-center gap-2 cursor-pointer p-1 hove:bg-light-gray rounded-lg '
          onClick={()=>handleClick('userProfile')}
          >
            <img className='rounded-full w-8 h-8' src={avator} alt="profile" />
            <p>
              <span className='text-gray-400 text-14 '>Hi, </span> {' '} <span className='text-gray-400 text-14 font-bold ml-1'>Jhone Doe</span>
            </p>
            <MdKeyboardArrowDown className='text-gray-400 text-14 '/>
          </div>
        </TooltipComponent>

        {isClick.cart && <Cart/>}
        {isClick.chat && <Chat/>}
        {isClick.notification && <Notification/>}
        {isClick.userProfile && <UserProfile/>}

      </div>
    </div>
    )
}

export default Navbar