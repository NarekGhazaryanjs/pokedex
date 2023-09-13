import { useState, useEffect, RefObject } from "react";

import { VoidFunction } from "@types";

const useSuggestionsControls = ({
  inputRef,
  submitForm,
  inputValue,
  suggestions,
  setInputValue,
}: {
  inputValue: string;
  suggestions: string[];
  submitForm: VoidFunction;
  inputRef: RefObject<HTMLInputElement>;
  setInputValue: (value: string) => void;
}) => {
  const [suggestionIndex, setSuggestionIndex] = useState<number>(0);

  const options = [inputValue, ...suggestions];

  const handleEnterPress = () => {
    if (inputRef.current) {
      setInputValue(inputRef.current.value);
      submitForm();
      setSuggestionIndex(0);
    }
  };

  const handleSetIndex = (index: number) => {
    if (inputRef.current) {
      setSuggestionIndex(index);
      inputRef.current.value = options[index];
    }
  };

  useEffect(() => {
    setSuggestionIndex(0);
  }, [inputValue]);

  useEffect(() => {
    const keydownHandler = (e: KeyboardEvent) => {
      const isBeginningIndex = suggestionIndex === 0 || suggestionIndex === -1;
      const prevIndex = isBeginningIndex
        ? options.length - 1
        : suggestionIndex - 1;
      const isLastIndex = suggestionIndex === options.length - 1;
      const nextIndex = isLastIndex ? 0 : suggestionIndex + 1;

      switch (e.key) {
        case "Enter": {
          e.preventDefault();
          handleEnterPress();
          break;
        }
        case "ArrowUp": {
          e.preventDefault();
          handleSetIndex(prevIndex);
          break;
        }
        case "ArrowDown": {
          e.preventDefault();
          handleSetIndex(nextIndex);
          break;
        }
      }
    };

    if (suggestions.length > 0) {
      window.addEventListener("keydown", keydownHandler);
    }

    return () => {
      window.removeEventListener("keydown", keydownHandler);
    };
  });
};

export default useSuggestionsControls;
