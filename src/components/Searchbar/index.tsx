import React, { useRef, useState, FormEvent, ChangeEvent } from "react";
import classNames from "classnames";

import { SearchIcon } from "@assets";
import { useOutsideClick } from "@hooks";

import Suggestions from "./Suggestions";
import { SearchbarProps } from "./types";
import styles from "./Searchbar.module.scss";

const Searchbar: React.FC<SearchbarProps> = ({
  options,
  className,
  maxLength,
  placeholder,
  setSearchValue,
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const submitButtonRef = useRef<HTMLButtonElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const inputRefValue = inputRef.current?.value || "";
    const searchValue = inputRefValue.trim().toLowerCase();

    setSearchValue(searchValue);
    inputRef.current?.blur();
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const clickSubmit = () => {
    submitButtonRef.current?.click();
  };

  useOutsideClick(inputRef, () => {
    setIsInputFocused(false);
  });

  return (
    <form
      onSubmit={handleSubmit}
      className={classNames(styles.container, className)}
    >
      <input
        ref={inputRef}
        value={inputValue}
        maxLength={maxLength}
        placeholder={placeholder}
        onFocus={handleInputFocus}
        onChange={handleInputChange}
        className={styles.container__input}
      />
      <button
        name="search"
        ref={submitButtonRef}
        className={styles.container__search_button}
      >
        <SearchIcon />
      </button>
      <Suggestions
        options={options}
        inputRef={inputRef}
        inputValue={inputValue}
        submitForm={clickSubmit}
        setInputValue={setInputValue}
        isInputFocused={isInputFocused}
      />
    </form>
  );
};

export default Searchbar;
