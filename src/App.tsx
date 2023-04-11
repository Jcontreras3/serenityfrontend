import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LoginComponent from "./Components/LoginPage/LoginComponent";
import CreateAccountComponent from "./Components/CreateAccountPage/CreateAccountComponent";
import NavbarComponent from "./Components/Navbar/NavbarComponent";
import HomeComponent from "./Components/HomePage/HomeComponent";
import ResourcesComponent from "./Components/ResourcesPage/ResourcesComponent";
import AffirmationsComponent from "./Components/AffirmationsPage/AffirmationsComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    // <ResourcesComponent/>
    <BrowserRouter>
    
      <>
        <Routes>
          <Route path="/" element={<LoginComponent />} />
          <Route path="/CreateAccountComponent" element={<CreateAccountComponent />} />
          <Route path="/HomeComponent" element={<HomeComponent />} />
          <Route path="/ResourcesComponent" element={<ResourcesComponent />} />
          <Route path="/AffirmationsComponent" element={<AffirmationsComponent />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
