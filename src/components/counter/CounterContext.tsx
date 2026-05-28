import type { ReactNode } from "react"
import { createContext, useCallback, useContext, useMemo, useState } from "react"

export type CounterContextValue = {
  count: number
  increment: () => number
}

const CounterContext = createContext<CounterContextValue | undefined>(undefined)

export type CounterProviderProps = {
  children: ReactNode
}

export const CounterProvider = ({ children }: CounterProviderProps) => {
  const [count, setCount] = useState(0)

  const increment = useCallback(() => {
    const newCount = count + 1

    setCount(newCount)

    return newCount
  }, [count])

  const value = useMemo(() => ({ count, increment }), [count, increment])

  return <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
}

export const useCounter = () => {
  const context = useContext(CounterContext)

  if (!context) {
    throw new Error("useCounter must be used within a CounterProvider")
  }

  return context
}
