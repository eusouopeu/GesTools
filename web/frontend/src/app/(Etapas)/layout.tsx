import React from 'react'
import SideBar from '@/components/SideBar'


export default function layout(
  { children }: { children: React.ReactNode }
) {
  return (
    <main className='flex w-full h-full pr-[64px] gap-[64px]'>
      <SideBar />
      {children}
    </main>
  )
}
