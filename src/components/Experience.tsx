const experiences = [
  {
    company: 'PT Bithealth Teknologi Pintar',
    role: 'Associate Software Engineer',
    items: [
      'Developed and maintained backend/frontend features for healthcare and e-commerce platforms including CMS, MCU Admin, and customer-facing web apps.',
      'Implemented RESTful APIs for content management, specialization data, orders, and payment workflows.',
      'Integrated Midtrans payment gateway handling checkout flows, callbacks, and edge cases.',
      'Built responsive frontend components for web and mobile views.',
      'Contributed to AI Chat and WebSocket features with UI enhancements and unit testing.',
      'Wrote unit tests for backend/frontend modules. Collaborated with cross-functional teams.',
    ],
  },
  {
    company: 'Konnco Studio',
    role: 'Full-stack Developer',
    items: [
      'Built full-stack apps with Laravel, Filament, Tailwind CSS, Livewire, and Alpine.js.',
      'Designed RESTful APIs for frontend-backend communication.',
      'Optimized MySQL queries for performance. Developed PHP unit tests.',
      'Compiled client feedback for product improvements. Mentored new developers.',
      'Integrated Satusehat API for patient data synchronization.',
    ],
  },
  {
    company: 'PT Trijaya Digital Group',
    role: 'Software Engineer',
    items: [
      'Developed P-Store.net and Tripay.co.id with Nuxt.js, Vue.js, Laravel, and MySQL.',
      'Built average transaction statistics and mail-blast features using Amazon SES.',
      'Assisted merchants with Tripay Payment Gateway integration.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-8 py-16">
      <h3 className="text-2xl font-bold mb-8">Work Experience</h3>
      <div className="flex flex-col gap-6">
        {experiences.map((exp, i) => (
          <div key={i} className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur">
            <h4 className="text-lg font-semibold">{exp.company}</h4>
            <span className="text-purple-400 block mt-1 mb-3">{exp.role}</span>
            <ul className="list-disc ml-5 text-gray-400 space-y-1 text-sm">
              {exp.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
