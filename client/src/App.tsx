import { ReactElement } from "react";
import { Routes, Route } from "react-router";

import HomeTab from "./components/navigation/tabs/HomeTab.tsx";
import AccountTab from "./components/navigation/tabs/AccountTab.tsx";
import SettingsTab from "./components/navigation/tabs/SettingsTab.tsx";
import NavigationPanel from "./components/navigation/panel/NavigationPanel.tsx";

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
