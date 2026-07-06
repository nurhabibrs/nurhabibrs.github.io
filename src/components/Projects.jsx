import { useSelector } from 'react-redux'

export default function Projects() {
  const { items, loading, error } = useSelector((s) => s.repos)

  const topRepos = items
    .filter((r) => !r.fork && !r.archived)
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 6)

  return (
    <section id="projects" className="max-w-5xl mx-auto px-8 py-16 text-center">
      <span className="text-purple-400 text-sm">My Work</span>
      <h3 className="text-2xl font-bold mt-1 mb-8">GitHub Repositories</h3>

      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[1, 2, 3].map((n) => (
            <div key={n} className="bg-white/5 p-5 rounded-xl border border-white/10 animate-pulse">
              <div className="h-5 bg-gray-700 rounded w-3/4 mb-3" />
              <div className="h-3 bg-gray-700 rounded w-full mb-2" />
              <div className="h-3 bg-gray-700 rounded w-2/3" />
            </div>
          ))}
        </div>
      )}

      {error && (
        <div className="text-red-400">Failed to load repositories: {error}. <a href="https://github.com/nurhabibrs" className="underline" target="_blank">View on GitHub</a></div>
      )}

      {!loading && !error && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {topRepos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 p-5 rounded-xl border border-white/10 backdrop-blur text-left hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 block"
              >
                <h4 className="text-purple-400 font-semibold truncate">{repo.name}</h4>
                <p className="text-gray-400 text-sm mt-2 line-clamp-2">
                  {repo.description || 'No description'}
                </p>
                <div className="flex gap-4 mt-3 text-xs text-gray-500">
                  <span>{repo.stargazers_count} ★</span>
                  <span>{repo.forks_count} forks</span>
                  <span>{repo.language || '-'}</span>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-8">
            <a
              href="https://github.com/nurhabibrs?tab=repositories"
              target="_blank"
              className="inline-block px-6 py-3 border border-purple-400 text-purple-400 rounded-lg font-medium hover:bg-purple-400/10 transition"
            >
              View All Repositories →
            </a>
          </div>
        </>
      )}
    </section>
  )
}
