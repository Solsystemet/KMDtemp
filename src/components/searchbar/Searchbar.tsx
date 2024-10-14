import React from "react";
import styles from "./Searchbar.module.css";


type SearchbarProps = {
    children: React.ReactNode;
    color: string;
    backgroundColor?: string;
    fontSize: string;
    border?: string;
    onClick: () => void;
 };
 
 export function Searchbar(props: SearchbarProps) {
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