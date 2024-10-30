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

         <Search/>

         <SurveyTab date={new Date()} company={"Company"} projectName={"Project Name"} dataProcessor={"Data responsible"}/>
         <SurveyTab date={new Date()} company={"Company"} projectName={"Project Name"} dataProcessor={"Data responsible"}/>
         <SurveyTab date={new Date()} company={"Company"} projectName={"Project Name"} dataProcessor={"Data responsible"}/>
         <SurveyTab date={new Date()} company={"Company"} projectName={"Project Name"} dataProcessor={"Data responsible"}/>
         <SurveyTab date={new Date()} company={"Company"} projectName={"Project Name"} dataProcessor={"Data responsible"}/>
      </>
   );
}
