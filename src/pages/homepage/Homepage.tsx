import { Button } from "../../components/buttons/Buttons";
import { Navbar } from "../../components/navbar/Navbar";
import { ProgressBar } from "../../components/progressBar/ProgressBar";


export function HomepageTest(){
    return(
        <Button children={undefined} color={""} fontSize={""}/> 
    )
}
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
   const handleClick1 = () => console.log("Clicked 1");
   const handleClick2 = () => console.log("Clicked 2");
   const handleClick3 = () => console.log("Clicked 3");

   return (
      <ProgressBar onClickHandlers={[handleClick1, handleClick2, handleClick3]}>
         <span>Lorem ibsum</span>
         <span>Lorem ibsum</span>
         <span>Lorem ibsum</span>
      </ProgressBar>
   );
}
