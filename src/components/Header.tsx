import React from 'react'


type headerProps = {
  category: string,
  title: string,
}

const Header = ({title, category}: headerProps) => {
  return (
    <div className='mb-10'>
      <p className='text-gray-400 dark:text-slate-200'>
        {category}
      </p>
      <p className='text-3xl font-extrabold tracking-tight text-slate-900 dark:text-stone-100'>{title}</p>
    </div>
  )
}

export default Header