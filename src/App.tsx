import React, { useState, useEffect } from "react";
import ThemeToggle from "./components/ThemeToggle";
import Transcriber from "./components/Transcriber";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="App">
      <ThemeToggle theme={theme} setTheme={setTheme} />
      <Transcriber />
    </div>
  );
}

export default App;
