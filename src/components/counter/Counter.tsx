import { toaster } from "../ui/toaster"
import { getCount, increment, useCount } from "./state"

export const Counter = () => {
  const count = useCount()

  const onClick = () => {
    increment()

    toaster.success({
      title: "Incremented",
      description: `Counter is now ${getCount()}`,
    })
  }

  return (
    <div className="flex items-center gap-2">
      <div>Current count {count}</div>
      <button type="button" onClick={onClick} className="rounded-md bg-stone-200 px-3 py-1 hover:bg-stone-300">
        +1
      </button>
    </div>
  )
}
