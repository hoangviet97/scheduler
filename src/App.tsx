import React from "react";
import { FunctionComponent } from "react";
import { GlobalProvider } from "./context/GlobalState";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homePage/Homepage";
import Settings from "./pages/settings/Settings";
import ContentNotFound from "./pages/404/ContentNotFound";

const App: FunctionComponent = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<ContentNotFound />} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
};

export default App;
