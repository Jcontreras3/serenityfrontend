import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LoginComponent from "./Components/LoginPage/LoginComponent";
import CreateAccountComponent from "./Components/CreateAccountPage/CreateAccountComponent";
import HomeComponent from "./Components/HomePage/HomeComponent";
import ResourcesComponent from "./Components/ResourcesPage/ResourcesComponent";
import {AffirmationsComponent } from "./Components/AffirmationsPage/AffirmationsComponent";
import MemesComponent from "./Components/MemesPage/MemesComponent";
import ProfileComponent from "./Components/ProfilePage/ProfileComponent";
import MusicComponent from "./Components/MusicPage/MusicComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DailyCheckin from "./Components/DailyCheckin/DailyCheckin";
import React, { useContext, useState } from "react";
import DataContext from "./Context/DataContext";
import useHooks from "./Hooks/UseHooks";


function App() {

  const [updatedPublisherName, setUpdatedPublisherName] = useState("");
  const [updatedUserId, setUpdatedUserId] = useState(0);

  const hooks = useHooks();

  return (
    // <ResourcesComponent/>
    <BrowserRouter>
      <DataContext.Provider value={{ updatedPublisherName, updatedUserId, setUpdatedPublisherName, setUpdatedUserId }}>
        <>
          <Routes>
            <Route path="/" element={<LoginComponent />} />
            <Route path="/CreateAccount" element={<CreateAccountComponent />} />
            <Route path="/Home" element={<HomeComponent />} />
            <Route path="/Resources" element={<ResourcesComponent />} />
            <Route path="/Affirmations" element={<AffirmationsComponent />} />
            <Route path="/Memes" element={<MemesComponent />} />
            <Route path="/Profile" element={<ProfileComponent />} />
            <Route path="/Music" element={<MusicComponent />} />
            <Route path="/DailyCheckIn" element={<DailyCheckin />} />
          </Routes>
        </>
      </DataContext.Provider>

    </BrowserRouter>
  );
}

export default App;

