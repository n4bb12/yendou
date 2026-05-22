import "@fontsource-variable/inter/wght.css"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import { CounterProvider } from "./components/counter/CounterContext.tsx"
import { Provider } from "./components/ui/provider.tsx"
import { Toaster } from "./components/ui/toaster.tsx"

const rootElement = document.getElementById("root")

if (!rootElement) {
  throw new Error("Root element not found")
}

createRoot(rootElement).render(
  <StrictMode>
    <Provider>
      <CounterProvider>
        <App />
      </CounterProvider>
      <Toaster />
    </Provider>
  </StrictMode>,
)
