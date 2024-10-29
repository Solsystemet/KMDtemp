import styles from "./UploadPage.module.css";
import { FileUpload } from "../../components/fileUpload/FileUpload";
import { StandardButton } from "../../components/buttons/Buttons";
import { Navbar } from "../../components/navbar/Navbar";

export function UploadPage() {
   return (
      <>
         <main>
            <div className={styles.fileUploadContent}>
               <div>
                  <FileUpload />
               </div>
            </div>

            <StandardButton color={"White"} fontSize={"1rem"}>
               Submit
            </StandardButton>
         </main>
      </>
   );
}
