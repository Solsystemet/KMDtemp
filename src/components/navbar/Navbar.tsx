import styles from "./Navbar.module.css";
import React, { ReactNode, Children } from "react";
import imgKMD from "../../assets/imgKMD.svg";
type NavbarProps = {
   children: ReactNode;
};

export function Navbar({ children }: NavbarProps) {
   return (
      <nav>
         <div className={styles.contentContainer}>
            <img src={imgKMD} alt="Logo" />
            {Children.map(children, child => (
               <div className={styles.menuButtonContainer}>
                  <p className={styles.text}>{child}</p>
               </div>
            ))}
         </div>
      </nav>
   );
}
