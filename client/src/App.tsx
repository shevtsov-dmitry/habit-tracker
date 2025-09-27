import { ReactElement } from "react";
import { Route, Routes } from "react-router";

import NavigationPanel from "./components/navigation/panel/NavigationPanel.tsx";
import AccountTab from "./components/navigation/tabs/AccountTab.tsx";
import HomeTab from "./components/navigation/tabs/HomeTab.tsx";
import SettingsTab from "./components/navigation/tabs/SettingsTab.tsx";

const App = (): ReactElement => {
  return (
    <main
      className={"h-screen max-w-full"}
      style={{
        backgroundImage:
          "linear-gradient(to top, #241f22, #282328, #2c272f, #2f2c36, #30313d, #2d323e, #2b333e, #28343e, #243137, #222d31, #21292a, #202525)",
      }}
    >
      <div className={"h-full max-w-full flex flex-col"}>
        <div className={"flex-1"}>
          <Routes>
            <Route path="/" element={<HomeTab />} />
            <Route path="/account" element={<AccountTab />} />
            <Route path="/settings" element={<SettingsTab />} />
          </Routes>
        </div>
        <div className={"flex-0"}>
          <NavigationPanel />
        </div>
      </div>
    </main>
  );
};

export default App;
