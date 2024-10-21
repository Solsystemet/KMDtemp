import { ChangeEvent } from "react";
import { StandardButton } from "../../components/buttons/Buttons";
import { Navbar } from "../../components/navbar/Navbar";
import { ProgressBar } from "../../components/progressBar/ProgressBar";
import { Searchbar } from "../../components/searchbar/Searchbar";
import { FileUpload } from "../../components/fileUpload/FileUpload";
export function Homepage() {}

export function Test() {
   return (
      <>
         <Navbar
            children={[
               { url: "/home", label: "Home" },
               { url: "/about", label: "About" },
               { url: "/contact", label: "Contact" },
            ]}
         />

         <StandardButton color={""} fontSize={""}>
            Hello
         </StandardButton>
      </>
   );
}
