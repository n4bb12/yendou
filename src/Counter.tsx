import { useCounter } from "./CounterContext"
import { toaster } from "./toaster"

export const Counter = () => {
  const { count, increment } = useCounter()

  const onClick = () => {
    const newCount = increment()

    toaster.success({
      title: "Incremented",
      description: `Counter is now ${newCount}`,
    })
  }

  return (
    <div className="flex items-center gap-2">
      <div>Current count {count}</div>
      <button
        type="button"
        onClick={onClick}
        className="rounded-md bg-stone-200 px-3 py-1 hover:bg-stone-300"
      >
        +1
      </button>
    </div>
  )
}
