import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BlogGrid from './components/BlogGrid';
import Footer from './components/Footer';

function TopPicks() {
  const picks = [
    {
      title: 'Adjustable Dumbbells',
      desc: 'Space-saving and perfect for progressive overload at home.',
      url: 'https://www.amazon.com/s?k=adjustable+dumbbells&tag=your-affiliate-id',
    },
    {
      title: 'Resistance Bands Set',
      desc: 'Versatile add-on for mobility, warm-ups, and accessory work.',
      url: 'https://www.amazon.com/s?k=resistance+bands&tag=your-affiliate-id',
    },
    {
      title: 'Creatine Monohydrate',
      desc: 'Backed by decades of research for strength and performance.',
      url: 'https://www.amazon.com/s?k=creatine+monohydrate&tag=your-affiliate-id',
    },
  ];

  return (
    <section id="top-picks" className="py-20 bg-gradient-to-b from-emerald-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900">Top Picks</h2>
          <p className="mt-2 text-slate-600">Curated essentials that deliver value without hype.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {picks.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{p.desc}</p>
              <a
                href={p.url}
                target="_blank"
                rel="nofollow sponsored noopener"
                className="mt-4 inline-flex items-center justify-center rounded-md bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700"
              >
                View on Amazon
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <BlogGrid />
        <TopPicks />
      </main>
      <Footer />
    </div>
  );
}

export default App;
