import { Counter } from "./Counter"
import { ToastCard } from "./ToastCard"

function App() {
  return (
    <div className="w-full grid grid-cols-1 gap-12 p-12">
      <Counter />

      <div className="grid gap-2">
        <div>(for Preview purposes)</div>
        <ToastCard
          toast={{
            title: "Incremented",
            description: "Counter is now 3",
            type: "success",
          }}
        />
      </div>
    </div>
  )
}

export default App
