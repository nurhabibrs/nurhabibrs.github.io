export default function Hero() {
  return (
    <section id="hero" className="text-center px-8 pt-20 pb-16">
      <p className="text-purple-400 text-lg">
        Hello! I am <span className="text-purple-300 font-semibold">Nur Habib</span>
      </p>
      <h1 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
        Software Engineer &amp; <span className="text-purple-400">Full-stack Developer</span>
      </h1>
      <p className="max-w-3xl mx-auto mt-6 text-gray-400 text-lg">
        Software Engineer with ~3 years of experience building scalable,
        end-to-end applications across healthcare, fintech, and ERP sectors.
        Proven expertise in developing robust backend architectures using{' '}
        <strong className="text-white">Go, Node.js, and Laravel</strong>,
        seamlessly integrated with responsive frontend interfaces utilizing{' '}
        <strong className="text-white">Vue.js and Nuxt.js</strong>.
        Adept at implementing offline-first systems, real-time data
        synchronization, and secure third-party payment gateways. Strong track
        record of optimizing database queries (improving performance by up to
        90%) and ensuring overall system reliability to deliver secure,
        user-centric engineering solutions.
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
