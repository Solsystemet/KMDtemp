import styles from "./Buttons.module.css";
import React from 'react';

const FilledButton = ({children: text, color, backgroundColor, fontSize, onClick, border}) => {
    return (
        <button
            style={{
                color: color,
                backgroundColor: backgroundColor,
                fontSize: fontSize,
                border: border,
            }}
            className={styles.filledButton}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default FilledButton;
