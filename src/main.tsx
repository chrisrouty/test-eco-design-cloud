import { createRoot } from 'react-dom/client'
import './assets/css/index.css'

function App() {
  return <main className="min-h-screen bg-white p-6 text-black">helloword</main>
}

createRoot(document.getElementById('root')!).render(<App />)
