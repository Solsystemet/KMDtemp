import React, { ChangeEventHandler } from "react";
import styles from "./Searchbar.module.css";
import { Search } from 'lucide-react';  // Importing Search icon

type SearchbarProps = {
  value: string;
  searchHandler: ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
};

export function Searchbar(props: SearchbarProps) {
  return (
    <div className={styles.searchbarWrapper}> {/* Wrapper for flex alignment */}
      <input
        type="text"
        className={styles.Searchbar}  // Apply class for input only
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.searchHandler}
      />
      <div className={styles.searchIcon}>  {/* Icon aligned next to input */}
        <Search />
      </div>
    </div>
  );
}
