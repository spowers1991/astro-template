
function Button({ onClick, type, children }: { onClick?: () => void; type?: "button" | "submit" | "reset"; children: React.ReactNode }) {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;