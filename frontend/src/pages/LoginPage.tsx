import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await axios.post("/api/auth/login", { email, password })
      localStorage.setItem("token", res.data.access_token)
      navigate("/dashboard")
    } catch {
      setError("Invalid credentials")
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center">
      <div className="bg-gray-900 p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-white mb-2">ResearchHub AI</h1>
        <p className="text-gray-400 mb-6">Sign in to your account</p>
        {error && <p className="text-red-400 mb-4">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email" placeholder="Email"
            value={email} onChange={e => setEmail(e.target.value)}
            className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password" placeholder="Password"
            value={password} onChange={e => setPassword(e.target.value)}
            className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition">
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}
