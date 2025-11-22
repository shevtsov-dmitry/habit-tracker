import { ReactElement } from 'react'
import { Route, Routes } from 'react-router'
import './style.css'

import NavigationPanel from './components/panel/NavigationPanel.tsx'
import AccountTab from './components/tabs/AccountTab.tsx'
import HomeTab from './components/tabs/HomeTab.tsx'
import SettingsTab from './components/tabs/SettingsTab.tsx'

const App = (): ReactElement => {
    return (
        <main className={'min-h-screen max-w-full bg-red-950'}>
            <div className={'min-h-full w-full'}>
                <Routes>
                    <Route path="/" element={<HomeTab />} />
                    <Route path="/account" element={<AccountTab />} />
                    <Route path="/settings" element={<SettingsTab />} />
                </Routes>
                <NavigationPanel />
            </div>
        </main>
    )
}

export default App
