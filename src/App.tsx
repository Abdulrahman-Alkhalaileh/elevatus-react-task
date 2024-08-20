import React from "react";
import Header from "./components/Navigation/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header />
      <Box py={3} px={{xs:2,md:8}} bgcolor='background.default'>
        <BrowserRouter>
          <Routes>
            <Route path="/about" element={<h1>About</h1>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="*" element={<h1>404 Not Found</h1>}/>
          </Routes>
        </BrowserRouter>
      </Box>
    </>
  );
}

export default App;
