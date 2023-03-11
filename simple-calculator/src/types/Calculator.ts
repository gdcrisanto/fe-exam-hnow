export interface Operations {
  [index: string]: (prevValue: number, nextValue: number) => number;
}

export interface State {
  value: number | null;
  displayValue: string;
  operator: string | null;
  waitingForOperand: boolean;
}
