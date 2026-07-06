export default function Contact() {
  return (
    <footer id="contact" className="text-center px-8 py-16 bg-black/40">
      <h3 className="text-2xl font-bold mb-4">Contact</h3>
      <p className="text-gray-400 mb-2">
        Looking to collaborate or need a reliable engineer? Let's connect.
      </p>
      <a href="mailto:nurhabibrs@gmail.com" className="text-purple-400 text-lg block mb-6 hover:underline">
        nurhabibrs@gmail.com
      </a>
      <div className="flex justify-center gap-8">
        <a href="https://github.com/nurhabibrs" target="_blank" className="text-gray-400 hover:text-purple-400 transition">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/nurhabibrs" target="_blank" className="text-gray-400 hover:text-purple-400 transition">
          LinkedIn
        </a>
      </div>
    </footer>
  )
}
