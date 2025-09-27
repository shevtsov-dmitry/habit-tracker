import { ReactElement } from "react";
import { Route, Routes } from "react-router";

import NavigationPanel from "./components/navigation/panel/NavigationPanel.tsx";
import AccountTab from "./components/navigation/tabs/AccountTab.tsx";
import HomeTab from "./components/navigation/tabs/HomeTab.tsx";
import SettingsTab from "./components/navigation/tabs/SettingsTab.tsx";

const App = (): ReactElement => {
  return (
    <main className={"min-h-screen max-w-full "}>
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
