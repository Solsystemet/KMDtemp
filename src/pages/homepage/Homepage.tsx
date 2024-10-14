import { Button } from "../../components/buttons/Buttons";
import { Navbar } from "../../components/navbar/Navbar";

export function Homepage() {
   return (
      <Button
         children={undefined}
         color={""}
         fontSize={""}
         onClick={function (): void {
            throw new Error("Function not implemented.");
         }}
      />
   );
}

export function Test() {
   return (
      <Navbar>
         <span>Listings</span>
         <span>Create Listing</span>
      </Navbar>
   );
}
