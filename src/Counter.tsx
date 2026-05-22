import { useState } from "react"

export const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      Current count {count}{" "}
      <button
        type="button"
        onClick={() => setCount(count + 1)}
        className="rounded-md bg-gray-100 px-2 py-1 hover:bg-gray-200"
      >
        +1
      </button>
    </div>
  )
}
