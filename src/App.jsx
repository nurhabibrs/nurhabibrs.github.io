import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchRepos } from './store/reposSlice'
import Header from './components/Header'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRepos())
  }, [dispatch])

  return (
    <div className="min-h-screen bg-[#0b0617] text-white overflow-x-hidden">
      <div className="fixed top-[10%] left-[5%] w-80 h-80 bg-purple-400/20 rounded-full blur-[80px] animate-float -z-10" />
      <div className="fixed bottom-[20%] right-[10%] w-80 h-80 bg-purple-400/20 rounded-full blur-[80px] animate-float animation-delay-[4s] -z-10" />
      <Header />
      <main className="pt-20">
        <Hero />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
