import { Navbar } from "../../components/navbar/Navbar";
import { SelectForm } from "../../components/selectButton/SelectButton";

export function Homepage() {
   return (
      <>
         <Navbar
            children={[
               { url: "/home", label: "Home" },
               { url: "/about", label: "About" },
               { url: "/contact", label: "Contact" },
            ]}
         />

         <SelectForm>
            {"Option 1"}
            {"Option 2"}
            {"Option 3"}
            {"Option 4"}
         </SelectForm>
      </>
   );
}
