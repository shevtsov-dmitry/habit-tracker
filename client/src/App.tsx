import { ReactElement } from "react";
import { Routes, Route } from "react-router";

import HomeTab from "./components/tabs/HomeTab.tsx";
import AccountTab from "./components/tabs/AccountTab.tsx";
import SettingsTab from "./components/tabs/SettingsTab.tsx";
import NavigationPanel from "./components/panel/NavigationPanel.tsx";

const App = (): ReactElement => {
  return (
    <main className={"bg-red-950 max-w-full min-h-screen"}>
      <div className={"min-h-full w-full"}>
        <Routes>
          <Route path="/" element={<HomeTab />} />
          <Route path="/account" element={<AccountTab />} />
          <Route path="/settings" element={<SettingsTab />} />
        </Routes>
        <NavigationPanel />
      </div>
    </main>
  );
};

export default App;
