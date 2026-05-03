import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:transition-transform [&_svg]:duration-200 hover:[&_svg]:translate-x-0.5 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]" +
" hover-elevate active-elevate-2",
  {
    variants: {
      variant: {
        default:
           "bg-primary text-primary-foreground border border-primary-border shadow-md shadow-primary/20 hover:shadow-xl hover:shadow-primary/40 hover:bg-primary/95",
        destructive:
          "bg-destructive text-destructive-foreground shadow-md shadow-destructive/20 border-destructive-border hover:shadow-xl hover:shadow-destructive/40",
        outline:
          " border [border-color:var(--button-outline)] shadow-xs hover:shadow-md hover:border-primary/60 active:shadow-none ",
        secondary:
          "border bg-secondary text-secondary-foreground border border-secondary-border hover:shadow-md hover:bg-secondary/90 ",
        ghost: "border border-transparent hover:translate-y-0 hover:bg-slate-100 hover:[&_svg]:translate-x-0",
        link: "text-primary underline-offset-4 hover:underline hover:translate-y-0 hover:[&_svg]:translate-x-0",
      },
      size: {
        // @replit changed sizes
        default: "min-h-9 px-4 py-2",
        sm: "min-h-8 rounded-md px-3 text-xs",
        lg: "min-h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
