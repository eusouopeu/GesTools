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
export default function Environment({className}: IdentityProps) {
  const { Etapa } = useEtapas()

  const [oportunidades, setOportunidades] = useState<{answer: string, impact: number, effort: number} | string>('')
  const [oportunidadesDef, setOportunidadesDef] = useState<any[]>([])
  const [ameacas, setAmeacas] = useState<string>('')
  const [ameacasDef, setAmeacasDef] = useState<any[]>([])
  const [forcas, setForcas] = useState<string>('')
  const [forcasDef, setForcasDef] = useState<any[]>([])
  const [problemas, setProblemas] = useState<string>('')
  const [problemasDef, setProblemasDef] = useState<any[]>([])

  const submitValue = (e: React.FormEvent<HTMLFormElement>, setState: any) => {
    e.preventDefault()
    switch (e.currentTarget.id) {
      case 'id1':
        if (oportunidadesDef.some((valor: string) => valor === Object.values(oportunidades)[0])) {
          return alert('Valor já adicionado')
        }
        return (
          setState((prevDef: string[]) => ([
            ...prevDef,
            oportunidades
          ])),
          setOportunidades('')
        )
      case 'id2':
        if (ameacasDef.some((valor: string) => valor === ameacas)) {
          return alert('Valor já adicionado')
        }
        return (
          setState((prevDef: string[]) => ([
            ...prevDef,
            ameacas
          ])),
          setAmeacas('')
        )
      case 'id3':
        if (forcasDef.some((valor: string) => valor === forcas)) {
          return alert('Valor já adicionado')
        }
        return (
        setState((prevDef: string[]) => ([
          ...prevDef,
          forcas
        ])),
        setForcas('')
      )
      case 'id4':
        if (problemasDef.some((valor: string) => valor === problemas)) {
          return alert('Valor já adicionado')
        }
        return (
        setState((prevDef: string[]) => ([
          ...prevDef,
          problemas
        ])),
        setProblemas('')
      )
    }
  }
  
  return (
    <section id='identidade-organizacional' className={clsx('absolute pr-[48px] transition-all duration-1000', Etapa === 2 ? 'visible opacity-100' : 'opacity-0')}>
      <h5>2<sup>a</sup> Etapa</h5>
      <h2>Diagnóstico</h2>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius dolores, aspernatur voluptatum nostrum inventore officia mollitia sapiente dolorum quidem similique natus dicta quasi illum aliquid perferendis omnis eveniet a dignissimos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque at magni ut quisquam facere molestiae esse! Tempore, deleniti! Incidunt voluptate impedit fugit natus excepturi sequi quo alias rem quaerat dicta.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius dolores, aspernatur voluptatum nostrum inventore officia mollitia sapiente dolorum quidem similique natus dicta quasi illum aliquid perferendis omnis eveniet a dignissimos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque at magni ut quisquam facere molestiae esse! Tempore, deleniti! Incidunt voluptate impedit fugit natus excepturi sequi quo alias rem quaerat dicta.</p>

      <div className='self-center flex items-center justify-between w-full h-[75vh] h-fit mt-[16px] py-[16px] px-[24px] gap-[8px] bg-gradient-to-r from-emerald-500 from-60% to-sky-500 rounded-xl shadow-xl transition-all duration-1000'>
        
        {/* OPORTUNIDADES */}
        <div className='flex flex-col w-[30%] h-[280px] p-[16px] gap-[8px] bg-gradient-to-b from-white from-80% to-slate-300 rounded-lg shadow-lg'>
          <h3 className='text-emerald-500'>Oportunidades</h3>

          <form id='id1' className='flex flex-col justify-between mb-[4px] p-[8px] gap-[4px] bg-gradient-to-b from-slate-300 from-80% to-slate-400 border-2 border-slate-400 rounded-lg shadow' onSubmit={(e) => submitValue(e, setOportunidadesDef)}>
            <input name='oportunidades' value={Object.values(oportunidades)[10]} onChange={(e) => setOportunidades(e.target.value)} type='text' className='appearance-none bg-transparent' placeholder='Resposta' required/>

            <fieldset className='flex justify-between'>

              <div className='flex items-center justify-between gap-[8px]'>
                <label className='text-xs w-[40%] font-bold' htmlFor="impact">Impacto:</label>
                <input name='impact' value={Object.values(oportunidades)[2]} onChange={(e) => setOportunidades(e.target.value)}  type='number' className='w-[50%] rounded px-[4px] placeholder:text-xs bg-slate-50' min={1} max={5} placeholder='(1-5)' required/>
              </div>

              <div className='flex items-center justify-between gap-[8px]'>
                <label className='text-xs w-[40%] font-bold' htmlFor="effort">Esforço:</label>
                <input name='effort' value={Object.values(oportunidades)[3]} onChange={(e) => setOportunidades(e.target.value)}  type='number' className='w-[50%] rounded px-[4px] placeholder:text-xs bg-slate-50' min={1} max={5} placeholder='(1-5)' required/>
              </div>

              <button type='submit'>
                <PlusCircleIcon width={24} className='fill-slate-600' />
              </button>
            </fieldset>
          </form>

          <ul className='flex flex-col gap-[8px]'>
            {oportunidadesDef.length > 0 &&
            oportunidadesDef.slice(0,4).map((valor, index) => (
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

        {/* AMEAÇAS */}
        <div className='flex flex-col w-[30%] h-[280px] p-[16px] gap-[8px] bg-gradient-to-b from-white from-80% to-slate-300 rounded-lg shadow-lg'>
          <h3 className='text-emerald-500'>Ameaças</h3>

          <form id='id2' className='flex items-center justify-between mb-[4px] p-[8px] gap-[4px] bg-gradient-to-b from-slate-300 from-80% to-slate-400 border-2 border-slate-400 rounded-lg shadow' onSubmit={(e) => submitValue(e, setAmeacasDef)}>
            <input name='ameacas' value={ameacas} onChange={(e) => setAmeacas(e.target.value)}  type='text' className='appearance-none bg-transparent w-full' required/>
            <button type='submit'>
              <PlusCircleIcon width={24} className='fill-slate-600' />
            </button>
          </form>

          <ul className='flex flex-col gap-[8px]'>
            {ameacasDef.length > 0 &&
            ameacasDef.slice(0,4).map((valor, index) => (
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

        {/* FORÇAS */}
        <div className='flex flex-col w-[30%] h-[280px] p-[16px] gap-[8px] bg-gradient-to-b from-white from-80% to-slate-300 rounded-lg shadow-lg'>
          <h3 className='text-emerald-500'>Forças</h3>

          <form id='id3' className='flex items-center justify-between mb-[4px] p-[8px] gap-[4px] bg-gradient-to-b from-slate-300 from-80% to-slate-400 border-2 border-slate-400 rounded-lg shadow' onSubmit={(e) => submitValue(e, setForcasDef)}>
            <input name='forcas' value={forcas} onChange={(e) => setForcas(e.target.value)}  type='text' className='appearance-none bg-transparent w-full' required/>
            <button type='submit'>
              <PlusCircleIcon width={24} className='fill-slate-600' />
            </button>
          </form>

          <ul className='flex flex-col gap-[8px]'>
            {forcasDef.length > 0 &&
            forcasDef.slice(0,4).map((valor, index) => (
              <li key={index} className={clsx(
                'flex items-center justify-between p-[8px] gap-[4px] rounded-lg shadow-lg',
                index === 0 && 'bg-gradient-to-b from-rose-300 from-80% to-rose-400',
                index === 1 && 'bg-gradient-to-b from-teal-300 from-80% to-teal-400',
                index === 2 && 'bg-gradient-to-b from-amber-300 from-80% to-amber-400',
                index === 3 && 'bg-gradient-to-b from-indigo-300 from-80% to-indigo-400',
              )}
              >
                {valor}
              </li>
            ))}
          </ul>

        </div>

        {/* PROBLEMAS */}
        <div className='flex flex-col w-[30%] h-[280px] p-[16px] gap-[8px] bg-gradient-to-b from-white from-80% to-slate-300 rounded-lg shadow-lg'>
          <h3 className='text-emerald-500'>Problemas</h3>

          <form id='id4' className='flex items-center justify-between mb-[4px] p-[8px] gap-[4px] bg-gradient-to-b from-slate-300 from-80% to-slate-400 border-2 border-slate-400 rounded-lg shadow' onSubmit={(e) => submitValue(e, setProblemasDef)}>
            <input name='problemas' value={problemas.answer} onChange={(e) => setProblemas(e.target.value)}  type='text' className='appearance-none bg-transparent w-full' required/>
            <input name='impact' value={problemas.impact} onChange={(e) => setProblemas(e.target.value)}  type='number' className='appearance-none bg-transparent w-full' required/>
            <input name='effort' value={problemas.effort} onChange={(e) => setProblemas(e.target.value)}  type='number' className='appearance-none bg-transparent w-full' required/>
            <button type='submit'>
              <PlusCircleIcon width={24} className='fill-slate-600' />
            </button>
          </form>

          <ul className='flex flex-col gap-[8px]'>
            {problemasDef.length > 0 &&
            problemasDef.slice(0,4).map((valor, index) => (
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