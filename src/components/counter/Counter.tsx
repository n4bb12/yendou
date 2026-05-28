import { increment, useCount } from "./state"

export const Counter = () => {
  const count = useCount()

  return (
    <div className="flex items-center gap-2">
      <div>Current count {count}</div>
      <button type="button" onClick={increment} className="rounded-md bg-stone-200 px-3 py-1 hover:bg-stone-300">
        +1
      </button>
    </div>
  )
}
