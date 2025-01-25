//Transition

type TransitionProps = {
  children: React.ReactNode;
  className?: string;
};

export function Transition({ children, className }: TransitionProps) {
  return <div className={className}>{children}</div>;
}
