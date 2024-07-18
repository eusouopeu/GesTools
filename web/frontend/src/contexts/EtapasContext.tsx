'use client'
import React, { createContext, useContext, useEffect, useState, useCallback } from 'react'


// Estado inicial
type EtapasContextType = {
  Etapa: number,
  SelectEtapa: (e: number) => void
}
const initialState: EtapasContextType = {
  Etapa: 0,
  SelectEtapa: () => {},
}

// Criando o contexto
const EtapasContext = createContext<EtapasContextType>(initialState)

// Criando o provider
type ContextProps = {
  children: React.ReactNode
}
export const EtapasProvider: React.FC<ContextProps> = ({ children }) => {
  const [Etapa, setEtapa] = useState(0)

  const SelectEtapa = (e: number) => {
    setEtapa(e)
  }


  return (
      <EtapasContext.Provider value={{ Etapa, SelectEtapa }}>
        {children}
      </EtapasContext.Provider>
  )
}

// Hook personalizado para usar o contexto
export const useEtapas = () => useContext(EtapasContext)