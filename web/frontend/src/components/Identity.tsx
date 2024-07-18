'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowLeftIcon, ArrowRightIcon, PlusCircleIcon } from '@heroicons/react/20/solid'
import BackwardsBtn from './BackwardsBtn'
import clsx from 'clsx'
import { useEtapas } from '@/contexts/EtapasContext'


type IdentityProps = {
  className?: string
}
export default function Identity({className}: IdentityProps) {
  const { Etapa } = useEtapas()

  const [valores, setValores] = useState<string>('')
  const [valoresDef, setValoresDef] = useState<any[]>([])
  const [missao, setMissao] = useState<string>('')
  const [missaoDef, setMissaoDef] = useState<any[]>([])
  const [visao, setVisao] = useState<string>('')
  const [visaoDef, setVisaoDef] = useState<any[]>([])

  const submitValue = (e: React.FormEvent<HTMLFormElement>, setState: any) => {
    e.preventDefault()
    switch (e.currentTarget.id) {
      case 'id1':
        if (valoresDef.some((valor: string) => valor === valores)) {
          return alert('Valor já adicionado')
        }
        return (
          setState((prevValoresDef: string[]) => ([
            ...prevValoresDef,
            valores
          ])),
          setValores('')
        )
      case 'id2':
        if (missaoDef.some((valor: string) => valor === missao)) {
          return alert('Valor já adicionado')
        }
        return (
          setState((prevValoresDef: string[]) => ([
            ...prevValoresDef,
            missao
          ])),
          setMissao('')
        )
      case 'id3':
        if (visaoDef.some((valor: string) => valor === visao)) {
          return alert('Valor já adicionado')
        }
        return (
        setState((prevValoresDef: string[]) => ([
          ...prevValoresDef,
          visao
        ])),
        setVisao('')
      )
    }
  }
  
  return (
    <section id='identidade-organizacional' className={clsx('absolute pr-[48px] transition-all duration-1000', Etapa === 1 ? 'visible opacity-100' : 'opacity-0')}>
      <h5>1<sup>a</sup> Etapa</h5>
      <h2>Identidade Organizacional</h2>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius dolores, aspernatur voluptatum nostrum inventore officia mollitia sapiente dolorum quidem similique natus dicta quasi illum aliquid perferendis omnis eveniet a dignissimos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque at magni ut quisquam facere molestiae esse! Tempore, deleniti! Incidunt voluptate impedit fugit natus excepturi sequi quo alias rem quaerat dicta.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius dolores, aspernatur voluptatum nostrum inventore officia mollitia sapiente dolorum quidem similique natus dicta quasi illum aliquid perferendis omnis eveniet a dignissimos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque at magni ut quisquam facere molestiae esse! Tempore, deleniti! Incidunt voluptate impedit fugit natus excepturi sequi quo alias rem quaerat dicta.</p>

      <div className='self-center flex items-center justify-between w-full h-[75vh] h-fit mt-[16px] py-[16px] px-[24px] gap-[8px] bg-gradient-to-r from-emerald-500 from-60% to-sky-500 rounded-xl shadow-xl transition-all duration-1000'>
        
        {/* VALORES */}
        <div className='flex flex-col w-[30%] h-[280px] p-[16px] gap-[8px] bg-gradient-to-b from-white from-80% to-slate-300 rounded-lg shadow-lg'>
          <h3 className='text-emerald-500'>Valores</h3>

          <form id='id1' className='flex items-center justify-between mb-[4px] p-[8px] gap-[4px] bg-gradient-to-b from-slate-300 from-80% to-slate-400 border-2 border-slate-400 rounded-lg shadow' onSubmit={(e) => submitValue(e, setValoresDef)}>
            <input name='id1' value={valores} onChange={(e) => setValores(e.target.value)}  type='text' className='appearance-none bg-transparent w-full' required/>
            <button type='submit'>
              <PlusCircleIcon width={24} className='fill-slate-600' />
            </button>
          </form>

          <ul className='flex flex-col gap-[8px]'>
            {valoresDef.length > 0 &&
            valoresDef.slice(0,4).map((valor, index) => (
              <li key={index} className={clsx(
                'flex items-center justify-between p-[8px] gap-[4px] rounded-lg shadow-lg hover:scale-[1.02] transition-all duration-500',
                index === 0 && 'bg-gradient-to-b from-indigo-300 from-80% to-indigo-400',
                index === 1 && 'bg-gradient-to-b from-amber-300 from-80% to-amber-400',
                index === 2 && 'bg-gradient-to-b from-teal-300 from-80% to-teal-400',
                index === 3 && 'bg-gradient-to-b from-rose-300 from-80% to-rose-400',
              )}
              >
                {valor}
              </li>
            ))}
          </ul>

        </div>

        {/* MISSÃO */}
        <div className='flex flex-col w-[30%] h-[280px] p-[16px] gap-[8px] bg-gradient-to-b from-white from-80% to-slate-300 rounded-lg shadow-lg'>
          <h3 className='text-emerald-500'>Missão</h3>

          <form id='id2' className='flex items-center justify-between mb-[4px] p-[8px] gap-[4px] bg-gradient-to-b from-slate-300 from-80% to-slate-400 border-2 border-slate-400 rounded-lg shadow' onSubmit={(e) => submitValue(e, setMissaoDef)}>
            <input name='id2' value={missao} onChange={(e) => setMissao(e.target.value)}  type='text' className='appearance-none bg-transparent w-full' required/>
            <button type='submit'>
              <PlusCircleIcon width={24} className='fill-slate-600' />
            </button>
          </form>

          <ul className='flex flex-col gap-[8px]'>
            {missaoDef.length > 0 &&
            missaoDef.slice(0,4).map((valor, index) => (
              <li key={index} className={clsx(
                'flex items-center justify-between p-[8px] gap-[4px] rounded-lg shadow-lg',
                index === 0 && 'bg-gradient-to-b from-teal-300 from-80% to-teal-400',
                index === 1 && 'bg-gradient-to-b from-indigo-300 from-80% to-indigo-400',
                index === 2 && 'bg-gradient-to-b from-rose-300 from-80% to-rose-400',
                index === 3 && 'bg-gradient-to-b from-amber-300 from-80% to-amber-400',
              )}
              >
                {valor}
              </li>
            ))}
          </ul>

        </div>

        {/* VISÃO */}
        <div className='flex flex-col w-[30%] h-[280px] p-[16px] gap-[8px] bg-gradient-to-b from-white from-80% to-slate-300 rounded-lg shadow-lg'>
          <h3 className='text-emerald-500'>Visão</h3>

          <form id='id3' className='flex items-center justify-between mb-[4px] p-[8px] gap-[4px] bg-gradient-to-b from-slate-300 from-80% to-slate-400 border-2 border-slate-400 rounded-lg shadow' onSubmit={(e) => submitValue(e, setVisaoDef)}>
            <input name='id3' value={visao} onChange={(e) => setVisao(e.target.value)}  type='text' className='appearance-none bg-transparent w-full' required/>
            <button type='submit'>
              <PlusCircleIcon width={24} className='fill-slate-600' />
            </button>
          </form>

          <ul className='flex flex-col gap-[8px]'>
            {visaoDef.length > 0 &&
            visaoDef.slice(0,4).map((valor, index) => (
              <li key={index} className={clsx(
                'flex items-center justify-between p-[8px] gap-[4px] rounded-lg shadow-lg',
                index === 0 && 'bg-gradient-to-b from-amber-300 from-80% to-amber-400',
                index === 1 && 'bg-gradient-to-b from-rose-300 from-80% to-rose-400',
                index === 2 && 'bg-gradient-to-b from-teal-300 from-80% to-teal-400',
                index === 3 && 'bg-gradient-to-b from-indigo-300 from-80% to-indigo-400',
              )}
              >
                {valor}
              </li>
            ))}
          </ul>

        </div>
      </div>

    </section>

  )
}