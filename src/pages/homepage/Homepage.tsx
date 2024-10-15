import { Button } from "../../components/buttons/Buttons";
import { FileUpload } from "../../components/fileUpload/FileUpload";
import { Navbar } from "../../components/navbar/Navbar";
import { ProgressBar } from "../../components/progressBar/ProgressBar";

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
      <>
         <Navbar>
            <span>Test 1</span>
            <span>Test 2</span>
            <span>Test 3</span>
         </Navbar>
         <FileUpload />
      </>
   );
}
