import AutoScalingText from "./AutoScalingText";

interface Props {
  value: string;
}

const CalculatorDisplay = ({ value }: Props) => {
  const language = navigator.language || "en-US";

  let formattedValue = parseFloat(value).toLocaleString(language, {
    useGrouping: true,
    maximumFractionDigits: 6,
  });

  const match = value.match(/\.\d*?(0*)$/);

  if (match) formattedValue += /[1-9]/.test(match[0]) ? match[1] : match[0];

  return (
    <>
      <div className="calculator-display">
        <AutoScalingText>{formattedValue}</AutoScalingText>
      </div>
    </>
  );
};
export default CalculatorDisplay;
