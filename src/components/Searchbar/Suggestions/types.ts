import { RefObject } from "react";

import { VoidFunction } from "@types";

export type SuggestionsProps = {
  options: string[];
  inputValue: string;
  isInputFocused: boolean;
  submitForm: VoidFunction;
  inputRef: RefObject<HTMLInputElement>;
  setInputValue: (value: string) => void;
};
