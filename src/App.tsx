import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { Homepage } from "./pages/homepage/Homepage";
import { UploadPage } from "./pages/uploadPage/UploadPage";

function App() {
   return (
      <>
         <Navbar
            children={[
               { url: "/home", label: "Home" },
               { url: "/about", label: "About" },
               { url: "/contact", label: "Contact" },
            ]}
         />
         <UploadPage />
      </>
   );
}

export default App;
