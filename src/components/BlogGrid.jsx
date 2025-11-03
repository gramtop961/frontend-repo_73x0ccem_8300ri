import { motion } from 'framer-motion';
import { ExternalLink, Star } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: 'The Ultimate Beginner Gym Guide',
    summary:
      'Start strong with a simple, effective 8-week plan, form cues, and the gear that gives you the biggest ROI.',
    tag: 'Training',
    image:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop',
    affiliate: {
      label: 'Check Adjustable Dumbbells',
      url: 'https://www.amazon.com/s?k=adjustable+dumbbells&tag=your-affiliate-id',
    },
  },
  {
    id: 2,
    title: 'Home Gym Essentials (On Any Budget)',
    summary:
      'We break down the must-haves vs. nice-to-haves, from resistance bands to racks that won’t wobble.',
    tag: 'Gear',
    image:
      'https://images.unsplash.com/photo-1571732073365-0918a0a7c1b7?q=80&w=1470&auto=format&fit=crop',
    affiliate: {
      label: 'Browse Best Sellers',
      url: 'https://www.amazon.com/s?k=fitness+equipment&tag=your-affiliate-id',
    },
  },
  {
    id: 3,
    title: 'Supplements That Are Actually Worth It',
    summary:
      'Evidence-based picks you can feel good about. No magic, just proven basics that move the needle.',
    tag: 'Nutrition',
    image:
      'https://images.unsplash.com/photo-1594390777839-9c9f1a1c84f5?q=80&w=1470&auto=format&fit=crop',
    affiliate: {
      label: 'Shop Creatine Monohydrate',
      url: 'https://www.amazon.com/s?k=creatine+monohydrate&tag=your-affiliate-id',
    },
  },
];

export default function BlogGrid() {
  return (
    <section id="blogs" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Latest Blogs</h2>
            <p className="mt-2 text-slate-600">Actionable guides with curated product picks.</p>
          </div>
          <a
            href="#top-picks"
            className="hidden sm:inline-flex items-center gap-2 rounded-md border border-slate-200 px-4 py-2 text-slate-700 hover:bg-slate-50"
          >
            <Star className="h-4 w-4 text-emerald-600" /> Top Picks
          </a>
        </div>

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
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <span className="inline-block rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold px-2 py-1">
                  {post.tag}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">{post.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{post.summary}</p>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href={post.affiliate.url}
                    target="_blank"
                    rel="nofollow sponsored noopener"
                    className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-3 py-2 text-white hover:bg-emerald-700"
                  >
                    {post.affiliate.label}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    className="text-sm text-slate-600 hover:text-slate-900"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
