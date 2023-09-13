import React from "react";

import { DropdownOptionProps } from "./types";
import styles from "./DropdownOption.module.scss";

const DropdownOption: React.FC<DropdownOptionProps> = ({
  option,
  closeDropdown,
  setSelectedOption,
}) => {
  const handleClick = () => {
    setSelectedOption(option);
    closeDropdown();
  };

  return (
    <div role="button" onClick={handleClick} className={styles.option}>
      <p>{option}</p>
    </div>
  );
};

export default DropdownOption;
