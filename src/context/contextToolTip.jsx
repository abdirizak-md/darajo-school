import { createContext, useContext, useState } from "react"
import { createPortal } from "react-dom"

const TooltipContext = createContext()

export const TooltipProvider = ({ children }) => {
  const [tooltip, setTooltip] = useState({
    visible: false,
    content: "",
    x: 0,
    y: 0,
  })

  const showTooltip = (content, rect) => {
    setTooltip({
      visible: true,
      content,
      x: rect.right + 8,
      y: rect.top + rect.height / 2,
    })
  }

  const hideTooltip = () => {
    setTooltip((prev) => ({ ...prev, visible: false }))
  }

  return (
    <TooltipContext.Provider value={{ showTooltip, hideTooltip }}>
      {children}

      {tooltip.visible &&
        createPortal(
          <div
            className="fixed z-[9999] -translate-y-1/2 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-1 text-xs text-white shadow-lg pointer-events-none"
            style={{
              top: tooltip.y,
              left: tooltip.x,
            }}
          >
            {tooltip.content}
          </div>,
          document.body
        )}
    </TooltipContext.Provider>
  )
}

export const useTooltip = () => useContext(TooltipContext)
