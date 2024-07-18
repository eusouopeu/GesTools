'use client'
import React from 'react'
import Link from 'next/link'
import { useEtapas } from '@/contexts/EtapasContext'


export default function SideBar() {
  const { SelectEtapa } = useEtapas()

  return (
    <aside className=''>
      <ul className=''>
        <li className=''>
          <button onClick={() => SelectEtapa(0)}>
            Intro
          </button>
        </li>
        <li>
          <button onClick={() => SelectEtapa(1)}>
            1<sup>a</sup> Etapa
          </button>
        </li>
        <li>
          <button onClick={() => SelectEtapa(2)}>
          2<sup>a</sup> Etapa
          </button>
        </li>
        <li>
          <button onClick={() => SelectEtapa(3)}>
          3<sup>a</sup> Etapa
          </button>
        </li>
        <li>
          <button onClick={() => SelectEtapa(4)}>
          4<sup>a</sup> Etapa
          </button>
        </li>
        <li>
          <button onClick={() => SelectEtapa(5)}>
          5<sup>a</sup> Etapa
          </button>
        </li>
      </ul>
    </aside>
  )
}
