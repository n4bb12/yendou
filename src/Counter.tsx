import { useState } from "react"

export const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      Current count {count}{" "}
      <button
        type="button"
        onClick={() => setCount(count + 1)}
        className="bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded-md"
      >
        +1
      </button>
    </div>
  )
}
