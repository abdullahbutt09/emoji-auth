import { Link } from "react-router-dom";

const Button = ({
  children,
  variant = "primary", // primary | secondary | accent | ghost | outline
  size = "md",         // sm | md | lg
  loading = false,
  disabled = false,
  to,                  // if present → Link
  type = "button",
  className = "",
  onClick,
}) => {
  const base = "btn";
  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    accent: "btn-accent",
    ghost: "btn-ghost",
    outline: "btn-outline",
  };

  const sizes = {
    sm: "btn-sm",
    md: "",
    lg: "btn-lg",
  };

  const classes = `
    ${base}
    ${variants[variant]}
    ${sizes[size]}
    ${loading ? "loading" : ""}
    ${className}
  `;

  // 👉 If `to` exists → act as Link
  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={classes}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;