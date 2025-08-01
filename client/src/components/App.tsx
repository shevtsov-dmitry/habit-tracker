import "../App.css";
import "../i18n/i18n.js";

import SessionManagement from "./session_management/SessionManagement.tsx";
import TopPanel from "./top_panel/TopPanel.tsx";

function App() {
  return (
    <main
      className="min-w-screen min-h-screen dark:bg-cyan-700"
      style={{
        backgroundImage:
          "linear-gradient(to left bottom, #eee7e9, #f0ebed, #f2eff1, #f4f2f4, #f7f6f7, #f6f5f6, #f6f5f6, #f5f4f5, #f1eff0, #eee9eb, #eae4e5, #e7dfdf)",
      }}
    >
      <TopPanel />
      <div className="my-2"/>
      <SessionManagement />
    </main>
  );
}

export default App;
