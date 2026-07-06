import { useSelector } from 'react-redux'

export default function Header() {
  const { loading } = useSelector((s) => s.repos)

  return (
    <header className="fixed top-0 left-0 w-full px-8 py-5 backdrop-blur bg-black/20 border-b border-white/10 z-50 flex justify-between items-center">
      <div className="text-xl font-bold">NHRB</div>
      <nav>
        <ul className="flex gap-6 list-none text-white/80">
          <li><a href="#hero" className="hover:text-purple-400 transition">Home</a></li>
          <li><a href="#experience" className="hover:text-purple-400 transition">Experience</a></li>
          <li><a href="#projects" className="hover:text-purple-400 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-purple-400 transition">Contact</a></li>
        </ul>
      </nav>
      <a
        href="https://github.com/nurhabibrs"
        target="_blank"
        className="text-sm text-purple-400 hover:text-purple-300 transition"
      >
        {loading ? 'Loading...' : 'GitHub'}
      </a>
    </header>
  )
}
