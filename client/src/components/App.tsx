import { ReactElement } from "react";
import "../App.css";
import TopPanel from "./top-panel/TopPanel";

const App = (): ReactElement => {
  return (
    <main
      className="flex min-h-screen w-full flex-col items-center bg-gray-50 text-gray-900"
      style={{
        backgroundImage:
          "linear-gradient(to right top, #181d18, #171f1c, #162120, #172224, #1a2328, #1b2429, #1d242a, #1e252b, #1d262a, #1d2629, #1e2728, #1f2727)",
      }}
    >
      <div className="flex w-full max-w-5xl flex-1 flex-col overflow-y-auto p-6">
        <TopPanel />
      </div>
    </main>
  );
};

export default App;
