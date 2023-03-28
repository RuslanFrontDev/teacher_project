import React from "react";
import "../src/App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import DeleteData from "./pages/DeleteData";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";


function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/details-data/:id" element={<DeleteData />} />
        <Route  path= "*"  element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
