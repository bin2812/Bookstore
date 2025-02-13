import ItemCalculator from "./ItemCalculator";

export function Calculator() {
  return (
    <div>
      <ItemCalculator num1={10} num2={5} />
      <ItemCalculator num1={20} num2={15} />
      <ItemCalculator num1={100} num2={25} />
    </div>
  );
}
