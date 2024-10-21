import { useState } from "react";
import styles from "./SelectButton.module.css";

type SelectButtonProps = {
   children: string[];
};
export function SelectForm(props: SelectButtonProps) {
   const [isChecked, setChecked] = useState(false);

   const handleChange = () => {
      setChecked(!isChecked);
   };

   return (
      <div className={styles.Chekcbox}>
         {props.children.map((option, index) => (
            <div key={index} className={styles.option}></div>
         ))}
      </div>
   );
}
