import React, { ChangeEventHandler } from "react";
import styles from "./Searchbar.module.css";



type SearchbarProps = {
   value: string,
   searchHandler: ChangeEventHandler,
   placeholder: string,
 };

 export function Searchbar (props: SearchbarProps){
   return (
      <input
      type = "search"
      className = "styles.searchbar"
      placeholder = {props.placeholder}
      value = {props.value}
      onChange={props.searchHandler} />
   )

 }

 
 
