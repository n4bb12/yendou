import type { ToastOptions } from "@chakra-ui/react"
import type { ReactNode } from "react"

export type ToastProps = {
  toast: ToastOptions
  closeTrigger?: ReactNode
  onClose?: () => void
}

export const ToastCard = ({ toast, closeTrigger, onClose }: ToastProps) => {
  return (
    <div className="flex w-full flex-row items-center gap-2 rounded-md bg-zinc-800 py-3 pr-5 pl-4">
      <div
        aria-hidden="true"
        className="flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald-400 text-sm font-bold leading-none text-zinc-900"
      >
        ✓
      </div>
      <div className="flex flex-1 flex-col gap-1">
        {toast.title && (
          <div className="text-sm leading-4 font-semibold text-white">
            {toast.title}
          </div>
        )}
        {toast.description && (
          <div className="text-sm leading-4 font-medium text-white">
            {toast.description}
          </div>
        )}
      </div>
      {closeTrigger}
      {!closeTrigger && toast.closable && (
        <button
          type="button"
          aria-label="Dismiss notification"
          onClick={onClose}
          className="rounded px-1 text-sm text-zinc-300 hover:text-white"
        >
          ×
        </button>
      )}
    </div>
  )
}
