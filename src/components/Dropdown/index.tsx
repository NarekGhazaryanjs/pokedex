import React, { useMemo, useRef } from "react";
import { uniq } from "lodash";
import classNames from "classnames";
import { useToggle } from "react-use";

import { RightArrowIcon } from "@assets";
import { useOutsideClick } from "@hooks";

import { DropdownProps } from "./types";
import styles from "./Dropdown.module.scss";
import DropdownOption from "./DropdownOption";

const Dropdown: React.FC<DropdownProps> = ({
  className,
  options,
  optionsClassName,
  setSelectedOption,
  selectedOption,
}) => {
  const [isOpen, toggleIsOpen] = useToggle(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const containerClasses = classNames(styles.dropdown, className);
  const headClasses = classNames(styles.dropdown__head, {
    [styles.dropdown__head_active]: isOpen,
  });
  const arrowClasses = classNames(styles.dropdown__head__icon, {
    [styles.dropdown__head__icon_active]: isOpen,
  });
  const optionsClasses = classNames(styles.dropdown__options, optionsClassName);

  const closeDropdown = (): void => {
    toggleIsOpen(false);
  };

  useOutsideClick(dropdownRef, closeDropdown);

  const optionsList = useMemo(
    () =>
      uniq(options).map((option) => (
        <DropdownOption
          key={option}
          option={option}
          closeDropdown={closeDropdown}
          setSelectedOption={setSelectedOption}
        />
      )),
    [options]
  );

  return (
    <div className={containerClasses}>
      <div
        role="button"
        ref={dropdownRef}
        onClick={toggleIsOpen}
        className={headClasses}
      >
        <p>{selectedOption}</p>
        <RightArrowIcon className={arrowClasses} />
      </div>
      {isOpen && <div className={optionsClasses}>{optionsList}</div>}
    </div>
  );
};

export default Dropdown;
