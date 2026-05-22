import { useEffect } from "react"
import { Counter } from "./components/counter/Counter"
import { toaster } from "./components/ui/toaster"

function App() {
  useEffect(() => {
    toaster.success({
      title: "Incremented",
      description: "Counter is now 3",
      duration: Number.MAX_SAFE_INTEGER,
    })
  }, [])

  return (
    <div className="grid w-full grid-cols-1 gap-12 p-12">
      <Counter />
    </div>
  )
}

export default App
