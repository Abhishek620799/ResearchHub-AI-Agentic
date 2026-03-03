import { Routes, Route, Navigate } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import Dashboard from "./pages/Dashboard"
import WorkspaceList from "./pages/WorkspaceList"
import SearchPage from "./pages/SearchPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/workspaces" element={<WorkspaceList />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  )
}

export default App
