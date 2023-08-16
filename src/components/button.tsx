interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

export default function Button({ onClick, children }: ButtonProps) {
  return (
    <button className="" onClick={onClick}>
      {children}
    </button>
  );
}
