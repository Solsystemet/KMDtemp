import styles from "./Buttons.module.css";
import React from "react";

type ButtonProps = {
   children: React.ReactNode;
   color: string;
   backgroundColor?: string;
   fontSize: string;
   border?: string;
   onClick?: () => void;
};

export function Button(props: ButtonProps) {
   return (
      <button style={{
         color: props.color,
         backgroundColor:props.backgroundColor,
         fontSize: props.fontSize,
         border: props.border,
      }
         } className={styles.Button} onClick={props.onClick}>
         {props.children}
      </button>
   );
}
