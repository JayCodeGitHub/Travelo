interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

export default function Button({ onClick, children }: ButtonProps) {
  return (
    <button
      className="px-4 py-2 text-lg border-2 border-white backdrop-blur-[3px] bg-white/10 rounded-md"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
