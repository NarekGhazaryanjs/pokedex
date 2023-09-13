export type DropdownProps = {
  options: string[];
  className?: string;
  selectedOption: string;
  optionsClassName?: string;
  setSelectedOption: (value: string) => void;
};
