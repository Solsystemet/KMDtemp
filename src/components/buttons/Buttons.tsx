import styles from "./Buttons.module.css";
import React from "react";

type ButtonProps = {
   children: React.ReactNode;
   onClick: () => void;
   style?: React.CSSProperties;
};

export function Button({ children, onClick, style }: ButtonProps) {
   return (
      <button style={style} className={styles.filledButton} onClick={onClick}>
         {children}
      </button>
   );
}
