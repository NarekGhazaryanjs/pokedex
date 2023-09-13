import { VoidFunction } from "@types";

export type DropdownOptionProps = {
  option: string;
  closeDropdown: VoidFunction;
  setSelectedOption: (option: string) => void;
};
