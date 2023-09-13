import React from "react";
import classNames from "classnames";

import { PageButtonProps } from "./types";
import styles from "./PageButton.module.scss";

const PageButton: React.FC<PageButtonProps> = ({
  name,
  setPage,
  currentPage,
}) => {
  const buttonName = `page ${name}`;
  const buttonClasses = classNames(styles.button, {
    [styles.button_active]: name === currentPage,
  });

  const handleClick = () => {
    setPage(name);
  };

  return (
    <li>
      <button name={buttonName} onClick={handleClick} className={buttonClasses}>
        {name}
      </button>
    </li>
  );
};

export default PageButton;
