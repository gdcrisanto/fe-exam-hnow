import { ReactNode } from "react";

interface Props {
  className: string;
  onPress: () => void;
  children: ReactNode;
}

const CalculatorKey = ({ className, onPress, children }: Props) => {
  return (
    <>
      <button className={`calculator-key ${className}`} onClick={onPress}>
        {children}
      </button>
    </>
  );
};
export default CalculatorKey;
