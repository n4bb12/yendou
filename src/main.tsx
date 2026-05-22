import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import { CounterProvider } from "./CounterContext"
import { Toaster } from "./toaster"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider value={defaultSystem}>
      <CounterProvider>
        <App />
      </CounterProvider>
      <Toaster />
    </ChakraProvider>
  </StrictMode>,
)
