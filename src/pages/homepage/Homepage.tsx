import { ChangeEvent } from "react";
import { Button } from "../../components/buttons/Buttons";
import { Navbar } from "../../components/navbar/Navbar";
import { ProgressBar } from "../../components/progressBar/ProgressBar";
import { Searchbar } from "../../components/searchbar/Searchbar";


export function Homepage() {
   return (
      <Searchbar value={"Thi is just as test to see if it adjusts"} searchHandler={function (): void {
         throw new Error("Function not implemented.");
      } } placeholder={"Type any text"}/>
   )
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
