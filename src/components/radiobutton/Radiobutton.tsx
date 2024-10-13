import React from "react";
import styles from "./Radiobutton.module.css";

type RadioButtonProps = {
    label: string, 
    name: string,
    value: string,
    checked: boolean,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Radiobutton(props: RadioButtonProps) {
    return(
        <label className="{styles.RadioButtonLabel">
        <input
        type="radio"
        name={props.name}
        value={props.value}
        checked={props.checked}
        onChange={props.onChange}
        className={styles.RadioButtonInput}/>
        {props.label}
        </label>
    )
}