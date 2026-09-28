export const Button = ({ children, onClick, className, type = "button", ...props }) => {
  return (
    <button type={type} className={`button ${className || ""}`} onClick={onClick} {...props}>
      {children}
    </button>
  );
};
