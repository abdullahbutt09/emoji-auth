import { forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const InputField = forwardRef(
  (
    {
      label,
      name,
      type = "text",
      value,
      onChange,
      placeholder,
      error,
      disabled = false,
      required = false,
      className = "",
      ...props
    },
    ref
  ) => {
    const hasValue = value !== undefined && value !== "";

    return (
      <div className={["relative w-full", className].join(" ")}>
        <input
          ref={ref}
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder || " "}
          disabled={disabled}
          required={required}
          aria-invalid={!!error}
          aria-describedby={error ? `${name}-error` : undefined}
          className={[
            "peer block w-full rounded-md border border-gray-300 bg-white px-3 pt-5 pb-2 text-sm text-gray-900 placeholder-transparent focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:cursor-not-allowed disabled:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:disabled:bg-gray-800",
            error
              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
              : "",
          ].join(" ")}
          {...props}
        />

        <label
          htmlFor={name}
          className={[
            "absolute left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-gray-700 peer-focus:text-sm dark:text-gray-400 dark:peer-focus:text-gray-200",
          ].join(" ")}
        >
          {label}{required ? " *" : ""}
        </label>

        <AnimatePresence>
          {error && (
            <motion.p
              id={`${name}-error`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-1 text-xs text-red-500 dark:text-red-400"
            >
              {error}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

export default InputField;