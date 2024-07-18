import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { useEtapas } from '@/contexts/EtapasContext'


type SCanvasProps = {
  className?: any
}
export default function SCanvas({className}: SCanvasProps) {
  const { Etapa } = useEtapas()

  return (
    <section className={clsx('absolute flex flex-col items-center justify-center w-[75vw] h-fit p-[12px] pt-[2px] bg-gradient-to-r from-emerald-500 from-50% to-sky-500 rounded-2xl shadow-xl text-white transition-all duration-1000',
    Etapa === 0 ? 'visible opacity-100' : 'opacity-0'
  )}>
      <h2>SCanvas</h2>

      <div className='flex justify-start w-full h-fit gap-[8px]'>
        {/* ETAPA 1 */}
        <Link className='flex flex-col w-[14%] border-2 border-slate-100 rounded-lg hover:scale-[1.02] transition-all duration-300' href='/IdentidadeOrganizacional'>
          <div className='flex flex-col py-[4px] px-[8px] bg-gradient-to-b from-white from-70% to-slate-300 rounded-t text-black'>
            <h3 className='w-fit'>1<sup>a</sup> Etapa</h3>
            <p className='w-fit text-sm'>Id. Organizacional</p>
          </div>

          <ul className='mt-[px] mb-[8px] mx-[8px]'>
            <li>
              <h4>Valores</h4>
              <div className='flex w-full h-[90px] bg-gradient-to-b from-white from-80% to-slate-300 rounded-lg shadow'>.</div>
            </li>
            <li>
              <h4>Missão</h4>
              <div className='flex w-full h-[90px] bg-gradient-to-b from-white from-80% to-slate-300 rounded-lg shadow'>.</div>
            </li>
            <li>
              <h4>Visão</h4>
              <div className='flex w-full h-[122px] bg-gradient-to-b from-white from-80% to-slate-300 rounded-lg shadow'>.</div>
            </li>
          </ul>
        </Link>

        {/* ETAPA 2 */}
        <Link className='flex flex-col w-[14%] border-2 border-slate-100 rounded-lg hover:scale-[1.02] transition-all duration-300' href='/AnaliseDoAmbiente'>
          <div className='flex flex-col py-[4px] px-[8px] bg-gradient-to-b from-white from-70% to-slate-300 rounded-t text-black'>
            <h3 className='w-fit'>2<sup>a</sup> Etapa</h3>
            <p className='w-fit text-sm'>Análise do Ambiente</p>
          </div>

          <ul className='mt-[px] mb-[8px] mx-[8px]'>
            <li>
              <h4>Oportunidades</h4>
              <div className='flex w-full h-[90px] bg-gradient-to-b from-white from-80% to-slate-300 rounded-lg shadow'>.</div>
            </li>
            <li>
              <h4>Ameaças</h4>
              <div className='flex w-full h-[90px] bg-gradient-to-b from-white from-80% to-slate-300 rounded-lg shadow'>.</div>
            </li>
            <li>
              <h4>Forças</h4>
              <div className='flex w-full h-[50px] bg-gradient-to-b from-white from-80% to-slate-300 rounded-lg shadow'>.</div>
            </li>
            <li>
              <h4>Problemas</h4>
              <div className='flex w-full h-[50px] bg-gradient-to-b from-white from-80% to-slate-300 rounded-lg shadow'>.</div>
            </li>
          </ul>
        </Link>

        <div className='flex flex-col gap-[8px]'>
          <div className='flex gap-[8px]'>
            {/* ETAPA 3 */}
            <Link className='flex flex-col w-[350px] border-2 border-slate-100 rounded-lg hover:scale-[1.02] transition-all duration-300' href='/AnaliseDoAmbiente'>
              <div className='flex flex-col py-[4px] px-[8px] bg-gradient-to-b from-white from-70% to-slate-300 rounded-t text-black'>
                <h3 className='w-fit'>3<sup>a</sup> Etapa</h3>
                <p className='w-fit'>Análise do Ambiente</p>
              </div>

              <ul className='flex mt-[px] mb-[8px] mx-[8px] gap-[16px]'>
              <li className='w-[100px]'>
                  <h4> Estratégias </h4>
                  <div className='flex flex-col justify-between w-full h-[300px] py-[4px] px-[8px] bg-gradient-to-b from-white from-95% to-slate-300 divide-y-[2px] divide-slate-400 divide-dashed rounded-lg shadow text-black'>
                    <div className='h-[calc(100%/5)]'>
                      <div className='flex w-[30px] items-center justify-center m-[1px] py-[2px] bg-amber-300 shadow-lg shadow-slate-500 rounded-full font-bold'>1</div>
                    </div>
                    <div className='h-[calc(100%/5)]'>
                      <div className='flex w-[30px] items-center justify-center m-[1px] py-[2px] bg-lime-300 shadow-lg shadow-slate-500 rounded-full font-bold'>2</div>
                    </div>
                    <div className='h-[calc(100%/5)]'>
                      <div className='flex w-[30px] items-center justify-center m-[1px] py-[2px] bg-cyan-300 shadow-lg shadow-slate-500 rounded-full font-bold'>3</div>
                    </div>
                    <div className='h-[calc(100%/5)]'>
                      <div className='flex w-[30px] items-center justify-center m-[1px] py-[2px] bg-blue-300 shadow-lg shadow-slate-500 rounded-full font-bold'>4</div>
                    </div>
                    <div className='h-[calc(100%/5)]'>
                      <div className='flex w-[30px] items-center justify-center m-[1px] py-[2px] bg-purple-300 shadow-lg shadow-slate-500 rounded-full font-bold'>5</div>
                    </div>
                  </div>
                </li>
                <li className='w-[100px]'>
                  <h4> Objetivos </h4>
                  <div className='flex flex-col justify-between w-full h-[300px] py-[4px] px-[8px] bg-gradient-to-b from-white from-95% to-slate-300 divide-y-[2px] divide-slate-400 divide-dashed rounded-lg shadow text-black'>
                    <div className='h-[calc(100%/5)]'>
                      <div className='flex w-[30px] items-center justify-center m-[1px] py-[2px] bg-amber-300 shadow-lg shadow-slate-500 rounded-full font-bold'>1</div>
                    </div>
                    <div className='h-[calc(100%/5)]'>
                      <div className='flex w-[30px] items-center justify-center m-[1px] py-[2px] bg-lime-300 shadow-lg shadow-slate-500 rounded-full font-bold'>2</div>
                    </div>
                    <div className='h-[calc(100%/5)]'>
                      <div className='flex w-[30px] items-center justify-center m-[1px] py-[2px] bg-cyan-300 shadow-lg shadow-slate-500 rounded-full font-bold'>3</div>
                    </div>
                    <div className='h-[calc(100%/5)]'>
                      <div className='flex w-[30px] items-center justify-center m-[1px] py-[2px] bg-blue-300 shadow-lg shadow-slate-500 rounded-full font-bold'>4</div>
                    </div>
                    <div className='h-[calc(100%/5)]'>
                      <div className='flex w-[30px] items-center justify-center m-[1px] py-[2px] bg-purple-300 shadow-lg shadow-slate-500 rounded-full font-bold'>5</div>
                    </div>
                  </div>
                </li>
                <li className='w-[100px]'>
                  <h4> Metas </h4>
                  <div className='flex flex-col justify-between w-full h-[300px] p-[8px] bg-gradient-to-b from-white from-95% to-slate-300 divide-y-[2px] divide-slate-400 divide-dashed rounded-lg shadow text-black'>
                    <div className='h-[calc(100%/5)]'>
                      <div className='flex w-[30px] items-center justify-center m-[1px] py-[2px] bg-amber-300 shadow-lg shadow-slate-500 rounded-full font-bold'>1</div>
                    </div>
                    <div className='h-[calc(100%/5)]'>
                      <div className='flex w-[30px] items-center justify-center m-[1px] py-[2px] bg-lime-300 shadow-lg shadow-slate-500 rounded-full font-bold'>2</div>
                    </div>
                    <div className='h-[calc(100%/5)]'>
                      <div className='flex w-[30px] items-center justify-center m-[1px] py-[2px] bg-cyan-300 shadow-lg shadow-slate-500 rounded-full font-bold'>3</div>
                    </div>
                    <div className='h-[calc(100%/5)]'>
                      <div className='flex w-[30px] items-center justify-center m-[1px] py-[2px] bg-blue-300 shadow-lg shadow-slate-500 rounded-full font-bold'>4</div>
                    </div>
                    <div className='h-[calc(100%/5)]'>
                      <div className='flex w-[30px] items-center justify-center m-[1px] py-[2px] bg-purple-300 shadow-lg shadow-slate-500 rounded-full font-bold'>5</div>
                    </div>
                  </div>
                </li>
              </ul>
            </Link>

            {/* ETAPA 5 */}
            <Link className='flex flex-col h-fit border-2 border-slate-100 rounded-lg hover:scale-[1.02] transition-all duration-300' href='/AnaliseDoAmbiente'>
              <div className='flex flex-col py-[4px] px-[8px] bg-gradient-to-b from-white from-70% to-slate-300 rounded-t text-black'>
                <h3 className='w-fit'>4<sup>a</sup> Etapa</h3>
                <p className='w-fit'>Implementação e Monitoramento</p>
              </div>

              <ul className='flex justify-between mt-[px] mb-[8px] mx-[8px] gap-[16px]'>
                <li className='w-[100px]'>
                  <h4>1<sup>o</sup> bimestre</h4>
                  <div className='flex flex-col justify-between w-full h-[300px] p-[8px] bg-gradient-to-b from-white from-95% to-slate-300 divide-y-[2px] divide-slate-400 divide-dashed rounded-lg shadow text-black'>
                    <div className='h-[calc(100%/5)]'>
                      <div className='flex w-[30px] items-center justify-center m-[1px] py-[2px] bg-amber-300 shadow-lg shadow-slate-500 rounded-full font-bold'>1</div>
                    </div>
                    <div className='h-[calc(100%/5)]'>
                      <div className='flex w-[30px] items-center justify-center m-[1px] py-[2px] bg-lime-300 shadow-lg shadow-slate-500 rounded-full font-bold'>2</div>
                    </div>
                    <div className='h-[calc(100%/5)]'>
                      <div className='flex w-[30px] items-center justify-center m-[1px] py-[2px] bg-cyan-300 shadow-lg shadow-slate-500 rounded-full font-bold'>3</div>
                    </div>
                    <div className='h-[calc(100%/5)]'>
                      <div className='flex w-[30px] items-center justify-center m-[1px] py-[2px] bg-blue-300 shadow-lg shadow-slate-500 rounded-full font-bold'>4</div>
                    </div>
                    <div className='h-[calc(100%/5)]'>
                      <div className='flex w-[30px] items-center justify-center m-[1px] py-[2px] bg-purple-300 shadow-lg shadow-slate-500 rounded-full font-bold'>5</div>
                    </div>
                  </div>
                </li>
                <li className='w-[100px]'>
                  <h4>2<sup>o</sup> bimestre</h4>
                  <div className='flex flex-col justify-between w-full h-[300px] p-[8px] bg-gradient-to-b from-white from-95% to-slate-300 divide-y-[2px] divide-slate-400 divide-dashed rounded-lg shadow text-black'>
                    <div className='h-[calc(100%/5)]'>
                      <div className='flex w-[30px] items-center justify-center m-[1px] py-[2px] bg-amber-300 shadow-lg shadow-slate-500 rounded-full font-bold'>1</div>
                    </div>
                    <div className='h-[calc(100%/5)]'>
                      <div className='flex w-[30px] items-center justify-center m-[1px] py-[2px] bg-lime-300 shadow-lg shadow-slate-500 rounded-full font-bold'>2</div>
                    </div>
                    <div className='h-[calc(100%/5)]'>
                      <div className='flex w-[30px] items-center justify-center m-[1px] py-[2px] bg-cyan-300 shadow-lg shadow-slate-500 rounded-full font-bold'>3</div>
                    </div>
                    <div className='h-[calc(100%/5)]'>
                      <div className='flex w-[30px] items-center justify-center m-[1px] py-[2px] bg-blue-300 shadow-lg shadow-slate-500 rounded-full font-bold'>4</div>
                    </div>
                    <div className='h-[calc(100%/5)]'>
                      <div className='flex w-[30px] items-center justify-center m-[1px] py-[2px] bg-purple-300 shadow-lg shadow-slate-500 rounded-full font-bold'>5</div>
                    </div>
                  </div>
                </li>
                <li className='w-[100px]'>
                  <h4>3<sup>o</sup> bimestre</h4>
                  <div className='flex flex-col justify-between w-full h-[300px] p-[8px] bg-gradient-to-b from-white from-95% to-slate-300 divide-y-[2px] divide-slate-400 divide-dashed rounded-lg shadow text-black'>
                    <div className='h-[calc(100%/5)]'>
                      <div className='flex w-[30px] items-center justify-center m-[1px] py-[2px] bg-amber-300 shadow-lg shadow-slate-500 rounded-full font-bold'>1</div>
                    </div>
                    <div className='h-[calc(100%/5)]'>
                      <div className='flex w-[30px] items-center justify-center m-[1px] py-[2px] bg-lime-300 shadow-lg shadow-slate-500 rounded-full font-bold'>2</div>
                    </div>
                    <div className='h-[calc(100%/5)]'>
                      <div className='flex w-[30px] items-center justify-center m-[1px] py-[2px] bg-cyan-300 shadow-lg shadow-slate-500 rounded-full font-bold'>3</div>
                    </div>
                    <div className='h-[calc(100%/5)]'>
                      <div className='flex w-[30px] items-center justify-center m-[1px] py-[2px] bg-blue-300 shadow-lg shadow-slate-500 rounded-full font-bold'>4</div>
                    </div>
                    <div className='h-[calc(100%/5)]'>
                      <div className='flex w-[30px] items-center justify-center m-[1px] py-[2px] bg-purple-300 shadow-lg shadow-slate-500 rounded-full font-bold'>5</div>
                    </div>
                  </div>
                </li>
                <li className='w-[100px]'>
                  <h4>Status</h4>
                  <div className='flex flex-col justify-between w-full h-[300px] p-[8px] bg-gradient-to-b from-white from-95% to-slate-300 divide-y-[2px] divide-slate-400 divide-dashed rounded-lg shadow text-black'>
                    <div className='h-[calc(100%/5)]'>
                      <div className='flex w-[30px] items-center justify-center m-[1px] py-[2px] bg-amber-300 shadow-lg shadow-slate-500 rounded-full font-bold'>1</div>
                    </div>
                    <div className='h-[calc(100%/5)]'>
                      <div className='flex w-[30px] items-center justify-center m-[1px] py-[2px] bg-lime-300 shadow-lg shadow-slate-500 rounded-full font-bold'>2</div>
                    </div>
                    <div className='h-[calc(100%/5)]'>
                      <div className='flex w-[30px] items-center justify-center m-[1px] py-[2px] bg-cyan-300 shadow-lg shadow-slate-500 rounded-full font-bold'>3</div>
                    </div>
                    <div className='h-[calc(100%/5)]'>
                      <div className='flex w-[30px] items-center justify-center m-[1px] py-[2px] bg-blue-300 shadow-lg shadow-slate-500 rounded-full font-bold'>4</div>
                    </div>
                    <div className='h-[calc(100%/5)]'>
                      <div className='flex w-[30px] items-center justify-center m-[1px] py-[2px] bg-purple-300 shadow-lg shadow-slate-500 rounded-full font-bold'>5</div>
                    </div>
                  </div>
                </li>
              </ul>
            </Link>
          </div>

          {/* EQUIPES */}
          <Link className='flex items-center w-full py-[8px] px-[16px] gap-[32px] bg-gradient-to-b from-white from-80% to-slate-300 rounded-lg text-black' href='/AnaliseDoAmbiente'>
            <h4>Equipes</h4>

            <ul className='flex w-full justify-between mt-[8px] gap-[16px]'>
              <li>
                <div className='flex items-center justify-center p-[8px] bg-gradient-to-b from-amber-300 from-80% to-slate-400 rounded-lg shadow text-black'>
                  <h4>Comercial</h4>
                </div>
              </li>
              <li>
                <div className='flex items-center justify-center p-[8px] bg-gradient-to-b from-lime-300 from-80% to-slate-400 rounded-lg shadow text-black'>
                  <h4>Marketing</h4>
                </div>
              </li>
              <li>
                <div className='flex items-center justify-center p-[8px] bg-gradient-to-b from-cyan-300 from-80% to-slate-400 rounded-lg shadow text-black'>
                  <h4>Projetos</h4>
                </div>
              </li>
              <li>
                <div className='flex items-center justify-center p-[8px] bg-gradient-to-b from-blue-300 from-80% to-slate-400 rounded-lg shadow text-black'>
                  <h4>Tecnologia</h4>
                </div>
              </li>
              <li>
                <div className='flex items-center justify-center p-[8px] bg-gradient-to-b from-purple-300 from-80% to-slate-400 rounded-lg shadow text-black'>
                  <h4>Pessoas</h4>
                </div>
              </li>
            </ul>
          </Link>
        </div>
      </div>
    </section>
  )
}
