// import { VariantProps } from "class-variance-authority"
// import React from "react"

// export interface ButtonProps
//   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
//     VariantProps<typeof buttonVariants> {
//   asChild?: boolean
// }

// const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
//   ({ className, variant, size, asChild = false, ...props }, ref) => {
//     return (
//       <button
//         {...props}
//       />
//     )
//   }
// )
// Button.displayName = "Button"