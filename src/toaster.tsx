import {
  Toaster as ChakraToaster,
  createToaster,
  Portal,
  Stack,
  Toast,
} from "@chakra-ui/react"

export const toaster = createToaster({
  placement: "top-end",
  offsets: "1rem",
})

export const Toaster = () => {
  return (
    <Portal>
      <ChakraToaster toaster={toaster}>
        {(toast) => (
          <Toast.Root width={{ base: "calc(100vw - 2rem)", md: "sm" }}>
            <Toast.Indicator />
            <Stack flex="1" gap="1">
              {toast.title && <Toast.Title>{toast.title}</Toast.Title>}
              {toast.description && (
                <Toast.Description>{toast.description}</Toast.Description>
              )}
            </Stack>
            {toast.closable && <Toast.CloseTrigger />}
          </Toast.Root>
        )}
      </ChakraToaster>
    </Portal>
  )
}
