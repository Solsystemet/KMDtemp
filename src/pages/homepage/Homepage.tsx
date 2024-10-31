import { Navbar } from "../../components/navbar/Navbar";
import { MultipleSelect } from "../../components/multipleSelect/MultipleSelect";
import { RadioButtonSelect } from "../../components/radiobutton/Radiobutton";
import { Search } from "../../components/searchbar/Search";
import { SurveyTab } from "../../components/surveyTab/SurveyTab";

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

         <SurveyTab children={[
            { date: new Date(), company: "Company 1", projectName: "Project 1", dataProcessor: "Processor 1" },
            { date: new Date(), company: "Company 2", projectName: "Project 2", dataProcessor: "Processor 2" },
            { date: new Date(), company: "Company 3", projectName: "Project 3", dataProcessor: "Processor 3" },
            { date: new Date(), company: "Company 4", projectName: "Project 4", dataProcessor: "Processor 4" },
         ]}/>

      </>
)};
