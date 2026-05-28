import { create } from "zustand"
import { toaster } from "../ui/toaster"

type State = {
  count: number
}

const defaultState: State = {
  count: 0,
}

const store = create(() => defaultState)

export function useCount() {
  return store((state) => state.count)
}

export function increment() {
  store.setState((state) => {
    const newCount = state.count + 1

    toaster.success({
      title: "Incremented",
      description: `Counter is now ${newCount}`,
    })

    return { count: newCount }
  })
}
