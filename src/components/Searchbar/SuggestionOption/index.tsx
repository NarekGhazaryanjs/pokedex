import React from "react";

import { SuggestionOptionProps } from "./types";
import styles from "./SuggestionOption.module.scss";

const SuggestionOption: React.FC<SuggestionOptionProps> = ({
  option,
  submitForm,
  setInputValue,
}) => {
  const handleClick = () => {
    setInputValue(option);
    setTimeout(submitForm);
  };

  return (
    <li role="button" onClick={handleClick} className={styles.option}>
      {option}
    </li>
  );
};
export default SuggestionOption;
