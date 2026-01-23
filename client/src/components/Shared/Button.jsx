import { forwardRef } from "react";
import { motion } from "framer-motion";

const variants = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500",
  secondary:
    "bg-gray-100 text-gray-900 hover:bg-gray-200 focus-visible:ring-gray-400",
  danger:
    "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500",
  ghost:
    "bg-transparent text-gray-700 hover:bg-gray-100 focus-visible:ring-gray-300",
};

const sizes = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

const spinnerSizes = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
};

const Button = forwardRef(
  (
    {
      children,
      onClick,
      type = "button",
      variant = "primary",
      size = "md",
      loading = false,
      disabled = false,
      className = "",
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <motion.button
        ref={ref}
        type={type}
        onClick={onClick}
        disabled={isDisabled}
        whileHover={!isDisabled ? { scale: 1.03 } : undefined}
        whileTap={!isDisabled ? { scale: 0.97 } : undefined}
        className={[
          "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-60",
          variants[variant],
          sizes[size],
          className,
        ].join(" ")}
        {...props}
      >
        {loading && (
          <span
            className={[
              "animate-spin rounded-full border-2 border-current border-t-transparent",
              spinnerSizes[size],
            ].join(" ")}
          />
        )}
        <span className={loading ? "opacity-80" : ""}>{children}</span>
      </motion.button>
    );
  }
);

export default Button;