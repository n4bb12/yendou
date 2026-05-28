import { create } from "zustand"

type State = {
  count: number
}

const defaultState: State = {
  count: 0,
}

const store = create(() => defaultState)

export function increment() {
  store.setState((state) => ({ count: state.count + 1 }))
}

export function useCount() {
  return store((state) => state.count)
}

export function getCount() {
  return store.getState().count
}
