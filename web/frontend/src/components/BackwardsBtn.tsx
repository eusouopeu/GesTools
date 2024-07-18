'use client'
import React from 'react'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/20/solid'

export default function BackwardsBtn() {
  const goBack = () => {
    console.log('não funciono ainda')
  }

  return (
    <div className='flex justify-between gap-[32px]'>
      <button onClick={goBack} className='flex items-center justify-between p-[4px] bg-gradient-to-b from-emerald-500 to-sky-500 rounded-full shadow-lg'>
        <ArrowLeftIcon />
      </button>
      <button form='identidade-organizacional' type='submit' className='flex items-center justify-between p-[4px] bg-gradient-to-b from-emerald-500 to-sky-500 rounded-full shadow-lg'>
        <ArrowRightIcon />
      </button>
    </div>
  )
}
