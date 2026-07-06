export default function Hero() {
  return (
    <section id="hero" className="text-center px-8 pt-20 pb-16">
      <p className="text-purple-400 text-lg">
        Hello! I am <span className="text-purple-300 font-semibold">Nur Habib</span>
      </p>
      <h1 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
        Software Engineer &amp; <span className="text-purple-400">Full-stack Developer</span>
      </h1>
      <p className="max-w-xl mx-auto mt-6 text-gray-400 text-lg">
        Building scalable systems and interactive user experiences with{' '}
        <strong className="text-white">React, Node.js, PostgreSQL</strong>.
        Currently focused on healthcare and e-commerce platforms.
      </p>
      <div className="flex gap-4 justify-center mt-8">
        <a
          href="https://github.com/nurhabibrs"
          target="_blank"
          className="px-6 py-3 bg-purple-500 rounded-lg font-medium hover:bg-purple-600 transition"
        >
          View My Work
        </a>
        <a
          href="mailto:nurhabibrs@gmail.com"
          className="px-6 py-3 border border-purple-400 text-purple-400 rounded-lg font-medium hover:bg-purple-400/10 transition"
        >
          Get in Touch
        </a>
      </div>
    </section>
  )
}
