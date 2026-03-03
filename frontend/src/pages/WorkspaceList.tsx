import { useState, useEffect } from "react"
import axios from "axios"

interface Workspace { id: string; name: string; description: string }

export default function WorkspaceList() {
  const [workspaces, setWorkspaces] = useState<Workspace[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem("token")
    axios.get("/api/workspaces", { headers: { Authorization: `Bearer ${token}` } })
      .then(res => setWorkspaces(res.data))
      .catch(() => setWorkspaces([]))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">My Workspaces</h1>
        {loading ? (
          <p className="text-gray-400">Loading...</p>
        ) : workspaces.length === 0 ? (
          <div className="bg-gray-900 p-8 rounded-2xl text-center">
            <p className="text-gray-400">No workspaces yet. Create one to get started.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {workspaces.map(ws => (
              <div key={ws.id} className="bg-gray-900 p-6 rounded-2xl hover:bg-gray-800 transition cursor-pointer">
                <h2 className="text-xl font-semibold">{ws.name}</h2>
                <p className="text-gray-400 mt-2">{ws.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
