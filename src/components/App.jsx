import { Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

export const App = () => {
  return (
    <Routes>
    {/* <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </div> */}

    <Route path="/" element={<HomePage />} />

    </Routes>
  );
};


