import "@fontsource-variable/inter/wght.css"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.tsx"
import { Provider } from "./components/ui/provider.tsx"
import { Toaster } from "./components/ui/toaster.tsx"
import "./index.css"

const rootElement = document.getElementById("root")

if (!rootElement) {
  throw new Error("Root element not found")
}

createRoot(rootElement).render(
  <StrictMode>
    <Provider>
      <App />
      <Toaster />
    </Provider>
  </StrictMode>,
)
