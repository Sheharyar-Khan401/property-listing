import React, { useState, useEffect } from "react";
import './App.css';
import { AppRouter } from './routes';
import { Provider as propertyContextProvider } from "./context/propertyContext";

function App() {
  return (
    <React.Fragment>
      <div className="main-container">
      <propertyContextProvider>
        <AppRouter />
        </propertyContextProvider>
      </div>
    </React.Fragment>
  );
}

export default App;
