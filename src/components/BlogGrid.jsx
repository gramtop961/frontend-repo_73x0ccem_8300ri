import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Star } from 'lucide-react';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export default function BlogGrid() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [form, setForm] = useState({
    title: '',
    summary: '',
    tag: '',
    image: '',
    affiliate_label: '',
    affiliate_url: '',
  });
  const [submitting, setSubmitting] = useState(false);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${BACKEND_URL}/blogs`);
      const data = await res.json();
      setPosts(Array.isArray(data) ? data : []);
    } catch (e) {
      setError('Failed to load blogs');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch(`${BACKEND_URL}/blogs`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Create failed');
      setForm({ title: '', summary: '', tag: '', image: '', affiliate_label: '', affiliate_url: '' });
      await fetchBlogs();
    } catch (e) {
      setError('Could not create blog. Check fields and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="blogs" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Latest Blogs</h2>
            <p className="mt-2 text-slate-600">Actionable guides with curated product picks.</p>
          </div>
          <a
            href="#top-picks"
            className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-4 py-2 text-slate-700 hover:bg-slate-50 self-start md:self-auto"
          >
            <Star className="h-4 w-4 text-emerald-600" /> Top Picks
          </a>
        </div>

        <div className="mb-10 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Quick Add Blog</h3>
          <p className="mt-1 text-sm text-slate-600">Add a new blog post. You can include an affiliate CTA.</p>
          <form onSubmit={onSubmit} className="mt-4 grid gap-3 sm:grid-cols-2">
            <input
              required
              value={form.title}
              onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
              placeholder="Title"
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <input
              required
              value={form.tag}
              onChange={(e) => setForm((f) => ({ ...f, tag: e.target.value }))}
              placeholder="Tag (e.g., Training, Nutrition, Gear)"
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <input
              required
              value={form.summary}
              onChange={(e) => setForm((f) => ({ ...f, summary: e.target.value }))}
              placeholder="Short Summary"
              className="w-full sm:col-span-2 rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <input
              value={form.image}
              onChange={(e) => setForm((f) => ({ ...f, image: e.target.value }))}
              placeholder="Image URL (optional)"
              className="w-full sm:col-span-2 rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <input
              value={form.affiliate_label}
              onChange={(e) => setForm((f) => ({ ...f, affiliate_label: e.target.value }))}
              placeholder="Affiliate CTA Label (optional)"
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <input
              value={form.affiliate_url}
              onChange={(e) => setForm((f) => ({ ...f, affiliate_url: e.target.value }))}
              placeholder="Affiliate URL (optional)"
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <div className="sm:col-span-2 flex items-center gap-3">
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700 disabled:opacity-60"
              >
                {submitting ? 'Adding…' : 'Add Blog'}
              </button>
              {error && <span className="text-sm text-red-600">{error}</span>}
            </div>
          </form>
        </div>

        {loading ? (
          <div className="text-slate-600">Loading blogs…</div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, idx) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  {post.image ? (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="h-full w-full bg-emerald-50 flex items-center justify-center text-emerald-700">{post.tag || 'Blog'}</div>
                  )}
                </div>
                <div className="p-5">
                  {post.tag && (
                    <span className="inline-block rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold px-2 py-1">
                      {post.tag}
                    </span>
                  )}
                  <h3 className="mt-3 text-lg font-semibold text-slate-900">{post.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{post.summary}</p>
                  <div className="mt-4 flex items-center gap-3">
                    {post.affiliate_url && post.affiliate_label && (
                      <a
                        href={post.affiliate_url}
                        target="_blank"
                        rel="nofollow sponsored noopener"
                        className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-3 py-2 text-white hover:bg-emerald-700"
                      >
                        {post.affiliate_label}
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                    <a href="#" className="text-sm text-slate-600 hover:text-slate-900">
                      Read more
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
