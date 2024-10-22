import { Navbar } from "../../components/navbar/Navbar";
import { MultipleSelect } from "../../components/multipleSelect/MultipleSelect";
import { RadioButtonSelect } from "../../components/radiobutton/Radiobutton";

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

         <MultipleSelect>
            {"Option 1"}
            {"Option 2"}
            {"Option 3"}
            {"Option 4"}
         </MultipleSelect>

         <RadioButtonSelect>
            {"Option 1"}
            {"Option 2"}
            {"Option 3"}
         </RadioButtonSelect>

      </>
   );
}
