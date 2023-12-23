import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom"; // Make sure to import Outlet

import "./App.css";
import Navbar from "./Navbar";
import MainBody from "./MainBody";
// import Footer from "./Footer";

function App() {
  const Layout = () => {
    return (
      <>
        <div className="app">
          <Navbar />
          <MainBody />
          <Outlet />
          {/* <Footer /> */}
        </div>
      </>
    );
  };

  return (
    <>
      {/* Use BrowserRouter and define your routes with Routes and Route components */}
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
