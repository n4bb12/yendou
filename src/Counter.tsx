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
    <div>
      Current count {count}{" "}
      <button
        type="button"
        onClick={onClick}
        className="rounded-md bg-gray-100 px-2 py-1 hover:bg-gray-200"
      >
        +1
      </button>
    </div>
  )
}
