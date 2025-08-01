import "../App.css";
import '../i18n/i18n.js';

import SessionManagement from "./session_management/SessionManagement.tsx";
import TopPanel from "./top_panel/TopPanel.tsx";

function App() {

    return (
        <main className="min-w-screen min-h-screen bg-pink-100 dark:bg-cyan-700">
            <TopPanel/>
            <SessionManagement/>
        </main>
    );
}

export default App;
