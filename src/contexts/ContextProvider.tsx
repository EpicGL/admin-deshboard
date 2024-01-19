import React, { createContext, useContext, useEffect, useState, Dispatch, SetStateAction } from 'react';

const initialState = {
  cart: false,
  chat: false,
  userProfile: false,
  notification: false,
};

type ChildrenProps = {
  children: React.ReactNode;
};

type StateContextProps = {
  activeMenu: boolean;
  setActiveMenu: Dispatch<SetStateAction<boolean>>;
  isClick: {
    cart: boolean;
    chat: boolean;
    userProfile: boolean;
    notification: boolean;
  };
  setIsClick: Dispatch<SetStateAction<{
    cart: boolean;
    chat: boolean;
    userProfile: boolean;
    notification: boolean;
  }>>;
  handleClick: (click: string) => void;
  screenSize: number;
  setScreenSize: Dispatch<SetStateAction<number>>;
  setColor: (color: string) => void;
  setMode: (mode: string) => void;
  currentMode: string;
  currentColor: string;
  themeSettings: boolean;
  setThemeSettings: Dispatch<SetStateAction<boolean>>;
};

const defaultContextValues: StateContextProps = {
  activeMenu: false,
  setActiveMenu: () => {},
  isClick: initialState,
  setIsClick: () => {},
  handleClick: () => {},
  screenSize: 0,
  setScreenSize: () => {},
  setColor: () => {},
  setMode: () => {},
  currentMode: 'Light',
  currentColor: '#03C9D7',
  themeSettings: false,
  setThemeSettings: () => {},
};

const StateContext = createContext<StateContextProps>(defaultContextValues);

const ContextProvider = ({ children }: ChildrenProps) => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [isClick, setIsClick] = useState(initialState);
  const [screenSize, setScreenSize] = useState(0);
  const [currentColor, setcurrentColor] = useState('#03C9D7');
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false);

  const setMode = (e: string) => {
    setCurrentMode(e);
    localStorage.setItem('themeMode', e);
  };

  const setColor = (e: string) => {
    setcurrentColor(e);
    localStorage.setItem('colorMode', e);
    setThemeSettings(false);
  };

  const handleClick = (click: string) => (
    setIsClick({ ...initialState, [click]: true })
  );

  useEffect(() => {
    try {
      const color = localStorage.getItem('colorMode');
      if (color !== null) {
        setColor(color);
      }
    } catch {
      console.log('No color was stored');
    }
    try {
      const theme = localStorage.getItem('themeMode');
      if (theme !== null) {
        setMode(theme);
      }
    } catch {
      console.log('No theme was stored');
    }
  }, []);

  const contextValues: StateContextProps = {
    activeMenu,
    setActiveMenu,
    isClick,
    setIsClick,
    handleClick,
    screenSize,
    setScreenSize,
    setColor,
    setMode,
    currentMode,
    currentColor,
    themeSettings,
    setThemeSettings,
  };

  return (
    <StateContext.Provider value={contextValues}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
export default ContextProvider;
