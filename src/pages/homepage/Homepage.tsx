import { Navbar } from "../../components/navbar/Navbar";
import { PopUp } from "../../components/popup/Popup";
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
      </>
   );
}
