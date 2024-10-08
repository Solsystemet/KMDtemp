import styles from "./Buttons.module.css";
import React, { CSSProperties, ReactNode } from "react";

const FilledButton = ({
   children: text,
   style,
   onClick,
}: {
   children: ReactNode;
   style: CSSProperties;
   onClick: () => void;
}) => {
   return (
      <button style={style} className={styles.filledButton} onClick={onClick}>
         {text}
      </button>
   );
};

export default FilledButton;
