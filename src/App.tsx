import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LoginComponent from "./Components/LoginPage/LoginComponent";
import CreateAccountComponent from "./Components/CreateAccountPage/CreateAccountComponent";
import NavbarComponent from "./Components/Navbar/NavbarComponent";
import HomeComponent from "./Components/HomePage/HomeComponent";
import ResourcesComponent from "./Components/ResourcesPage/ResourcesComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
  <ResourcesComponent/>
  // <> 
  
    // {/* <BrowserRouter> */}
      
    //     {/* <LoginComponent/> */}
    //     {/* <CreateAccountComponent /> */}
        

    //     {/* <Routes>
    //       <Route path="/" element={<LoginComponent />} />
    //       <Route path="/CreateAccountComponent" element={<CreateAccountComponent />} />
         
    //     </Routes> */}
      
    // {/* </BrowserRouter> */}
    // </>
  );
}

export default App;
