import React, { useEffect, useState } from "react";
import { uniq } from "lodash";
import { nanoid } from "nanoid";

import { getPokemonSuggestions } from "@utils";
import { useSuggestionsControls } from "@hooks";

import SuggestionOption from "../SuggestionOption";

import { SuggestionsProps } from "./types";
import styles from "./Suggestions.module.scss";

const Suggestions: React.FC<SuggestionsProps> = ({
  options,
  inputRef,
  inputValue,
  submitForm,
  setInputValue,
  isInputFocused,
}) => {
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const inputFilterValue = inputValue.trim().toLowerCase();
  const isInputValueEmpty = !!inputFilterValue.length;
  const optionIsInputValue =
    suggestions.length === 1 &&
    suggestions[0].toLowerCase() === inputFilterValue;

  useEffect(() => {
    const newSuggestions = getPokemonSuggestions(options, inputValue.trim());
    setSuggestions(uniq(newSuggestions));
  }, [inputValue, options]);

  useSuggestionsControls({
    inputRef,
    submitForm,
    inputValue,
    suggestions,
    setInputValue,
  });

  const suggestionOptions = suggestions.map((option) => (
    <SuggestionOption
      key={nanoid()}
      option={option}
      submitForm={submitForm}
      setInputValue={setInputValue}
    />
  ));

  return isInputFocused && isInputValueEmpty && !optionIsInputValue ? (
    <ul className={styles.suggestions}>{suggestionOptions}</ul>
  ) : (
    <React.Fragment />
  );
};

export default Suggestions;
