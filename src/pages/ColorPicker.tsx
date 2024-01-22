import React, { useState } from 'react';
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';
import { Header } from '../components';
import { useStateContext } from '../contexts/ContextProvider';

const ColorPicker = () => {
  const { currentColor } = useStateContext();
  const [colorValue, setColorValue] = useState('');
  const [ bgColor, setBgColor ] = useState(currentColor);


  const change = (args: { currentValue: { hex: string; }; }) => {
    console.log(args);
    
    setBgColor(args.currentValue.hex);
    
    setColorValue(args.currentValue.hex);
  };

  return (
    <div className='m-2 md:m-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header title='ColorPicker' category='App' />
      <div className='text-center'>
        <div id='preview' style={{backgroundColor: bgColor}} >
          <input className='bg-transparent mt-6 text-center' contentEditable='false' type="text" value={colorValue} />
        </div>

        <div className='flex flex-wrap justify-center items-center gap-10'>
          <div>
            <p className='text-2xl font-semibold mt-2 mb-4'>Inline Pallete</p>
            <ColorPickerComponent
              id='inline-pallete'
              mode='Palette'
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change} />
          </div>
          <div>
            <p className='text-2xl font-semibold mt-2 mb-4'>Inline Picker</p>
            <ColorPickerComponent
              id='inline-Picker'
              mode='Picker'
              inline
              showButtons={false}
              change={change} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default ColorPicker