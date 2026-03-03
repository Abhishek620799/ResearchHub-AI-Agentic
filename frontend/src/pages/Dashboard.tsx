import { useNavigate } from "react-router-dom"

export default function Dashboard() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-gray-400 mb-8">Welcome to ResearchHub AI</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div onClick={() => navigate("/workspaces")} className="bg-gray-900 p-6 rounded-2xl cursor-pointer hover:bg-gray-800 transition">
            <h2 className="text-xl font-semibold mb-2">My Workspaces</h2>
            <p className="text-gray-400">Manage your research workspaces</p>
          </div>
          <div onClick={() => navigate("/search")} className="bg-gray-900 p-6 rounded-2xl cursor-pointer hover:bg-gray-800 transition">
            <h2 className="text-xl font-semibold mb-2">Search Papers</h2>
            <p className="text-gray-400">Find and import research papers</p>
          </div>
        </div>
      </div>
    </div>
  )
}
