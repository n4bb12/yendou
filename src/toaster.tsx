import {
  Toaster as ChakraToaster,
  createToaster,
  Portal,
  Toast,
} from "@chakra-ui/react"
import { ToastCard } from "./ToastCard"

export const toaster = createToaster({
  placement: "bottom",
  offsets: "1rem",
})

export const Toaster = () => {
  return (
    <Portal>
      <ChakraToaster toaster={toaster}>
        {(toast) => (
          <Toast.Root
            width={{ base: "calc(100vw - 2rem)", md: "sm" }}
            className="rounded-lg bg-zinc-600 p-px shadow-xl"
          >
            <ToastCard
              toast={toast}
              closeTrigger={toast.closable && <Toast.CloseTrigger />}
            />
          </Toast.Root>
        )}
      </ChakraToaster>
    </Portal>
  )
}
