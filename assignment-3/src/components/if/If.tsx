import { ReactNode } from "react";

interface IfProps {
  condition: boolean | number;
  children: ReactNode;
  else?: ReactNode;
}

const If = ({ condition, children, else: elseComponent }: IfProps) => {
  return <>{condition ? children : elseComponent}</>;
};

export default If;
