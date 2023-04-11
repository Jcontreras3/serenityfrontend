import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LoginComponent from "./Components/LoginPage/LoginComponent";
import CreateAccountComponent from "./Components/CreateAccountPage/CreateAccountComponent";
import NavbarComponent from "./Components/Navbar/NavbarComponent";
import HomeComponent from "./Components/HomePage/HomeComponent";
import ResourcesComponent from "./Components/ResourcesPage/ResourcesComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AffirmationsComponent from "./Components/AffirmationsPage/AffirmationsComponent";

function App() {
  return (
    // <ResourcesComponent/>
    <BrowserRouter>
      <>
        {/* <LoginComponent/> */}
        {/* <CreateAccountComponent /> */}
        {/* <HomeComponent/> */}

        <Routes>
          <Route index element={<LoginComponent />} />
          <Route path="/CreateAccount" element={<CreateAccountComponent />} />
          <Route path="/" element={<NavbarComponent/>}>
            <Route path="Home" element={<HomeComponent />} />
            <Route path="Affirmations" element={<HomeComponent/>}/>
          </Route>
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
