import React, { useState, useEffect } from "react";
import './App.css';
import { AppRouter } from './routes';
import { Provider as propertyContextProvider } from "./context/propertyContext";

function App() {
  return (
      <div className="main-container">
          <AppRouter />
      </div>
  );
}

export default App;
