import { VoidFunction } from "@types";

export type SuggestionOptionProps = {
  option: string;
  submitForm: VoidFunction;
  setInputValue: (value: string) => void;
};
