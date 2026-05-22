import { useCounter } from "./CounterContext"

export const Counter = () => {
  const { count, increment } = useCounter()

  return (
    <div>
      Current count {count}{" "}
      <button
        type="button"
        onClick={increment}
        className="rounded-md bg-gray-100 px-2 py-1 hover:bg-gray-200"
      >
        +1
      </button>
    </div>
  )
}
