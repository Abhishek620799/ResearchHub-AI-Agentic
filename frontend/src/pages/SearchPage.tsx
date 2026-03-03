import { useState } from "react"
import axios from "axios"

interface Paper { title: string; authors: string; year: string; abstract: string }

export default function SearchPage() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<Paper[]>([])
  const [loading, setLoading] = useState(false)

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const token = localStorage.getItem("token")
      const res = await axios.get(`/api/papers/search?q=${encodeURIComponent(query)}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      setResults(res.data)
    } catch {
      setResults([])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Search Research Papers</h1>
        <form onSubmit={handleSearch} className="flex gap-3 mb-8">
          <input
            type="text" placeholder="Search papers by title, author, or topic..."
            value={query} onChange={e => setQuery(e.target.value)}
            className="flex-1 px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition">
            Search
          </button>
        </form>
        {loading && <p className="text-gray-400">Searching...</p>}
        <div className="space-y-4">
          {results.map((paper, i) => (
            <div key={i} className="bg-gray-900 p-6 rounded-2xl">
              <h2 className="text-lg font-semibold">{paper.title}</h2>
              <p className="text-blue-400 text-sm mt-1">{paper.authors} · {paper.year}</p>
              <p className="text-gray-400 text-sm mt-2 line-clamp-3">{paper.abstract}</p>
              <button className="mt-3 bg-green-700 hover:bg-green-600 text-white text-sm px-4 py-2 rounded-lg transition">
                Import to Workspace
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
