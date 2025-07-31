import React, { useState, useEffect } from "react";
import ThemeToggle from "./components/ThemeToggle";
import Transcriber from "./components/Transcriber";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="App">
      <ThemeToggle theme={theme} setTheme={setTheme} />
      <main>
        <Transcriber />
      </main>
      <Footer />
    </div>
  );
}

export default App;
