import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import "@fontsource-variable/inter/wght.css"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import { CounterProvider } from "./CounterContext"
import { Toaster } from "./toaster"

const rootElement = document.getElementById("root")

if (!rootElement) {
  throw new Error("Root element not found")
}

createRoot(rootElement).render(
  <StrictMode>
    <ChakraProvider value={defaultSystem}>
      <CounterProvider>
        <App />
      </CounterProvider>
      <Toaster />
    </ChakraProvider>
  </StrictMode>,
)
