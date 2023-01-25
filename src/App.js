import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import Header from "./components/MainComponents/Header";
import HomePage from "./components/MainComponents/HomePage";
import BookingPage from "./components/MainComponents/BookingPage";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <ChakraProvider>
          <div className="content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/reservation" element={<BookingPage />} />
            </Routes>
          </div>
        </ChakraProvider>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
