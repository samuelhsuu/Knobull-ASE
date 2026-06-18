import { useState } from 'react'
import ResultCard from './components/ResultCard'
import './App.css'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001'

function App() {
  const [goal, setGoal] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [recommendations, setRecommendations] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    const trimmedGoal = goal.trim()
    if (!trimmedGoal) return

    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch(`${API_URL}/api/recommend`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ goal: trimmedGoal }),
      })
      const data = await response.json()
      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Something went wrong.')
      }
      setRecommendations(data.recommendations)
      setStatus('success')
    } catch (error) {
      setErrorMessage(error.message)
      setStatus('error')
    }
  }

  const searched = status !== 'idle'

  return (
    <>
      <section id="hero" className={searched ? 'searched' : ''}>
        <h1>Knobull</h1>
        {!searched && (
          <p>Tell us what you're working toward, and we'll match you to courses and resources.</p>
        )}
        <form id="goal-form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={goal}
            onChange={(event) => setGoal(event.target.value)}
            placeholder="e.g. I want to save the planet"
            aria-label="Your academic or career goal"
          />
          <button type="submit" disabled={status === 'loading' || !goal.trim()} aria-label="Search">
            {status === 'loading' ? '…' : 'Search'}
          </button>
        </form>
      </section>

      <section id="results">
        {status === 'error' && <p className="status-message error">{errorMessage}</p>}
        {status === 'success' && recommendations.length === 0 && (
          <p className="status-message">No matches found. Try rephrasing your goal.</p>
        )}
        {recommendations.length > 0 && (
          <div className="result-list">
            {recommendations.map((recommendation) => (
              <ResultCard key={recommendation.id} recommendation={recommendation} />
            ))}
          </div>
        )}
      </section>
    </>
  )
}

export default App
