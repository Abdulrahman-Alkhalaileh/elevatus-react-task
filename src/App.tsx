import React from "react";
import Header from "./components/Navigation/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Home from "./pages/Home";
import JobInformation from "./pages/JobInformation";
import Footer from "./components/Navigation/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Box
          py={3}
          px={{ xs: 2, md: 8 }}
          minHeight="83.7vh"
          bgcolor="background.default"
        >
          <Routes>
            <Route path="/about" element={<h1>About</h1>} />
            <Route path="/" element={<Home />} />
            <Route path="/:slug" element={<JobInformation />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </Box>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
