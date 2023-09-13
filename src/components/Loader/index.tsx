import React from "react";
import classNames from "classnames";

import { LoaderProps } from "./types";
import styles from "./Loader.module.scss";

const Loader: React.FC<LoaderProps> = ({ loadingMore }) => {
  const containerClassNames = classNames(styles.container, {
    [styles.container_loading_more]: loadingMore,
  });

  return (
    <div className={containerClassNames}>
      <div className={styles.container__lds_ellipsis}>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Loader;
