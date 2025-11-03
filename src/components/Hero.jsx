import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/80 via-white/70 to-white pointer-events-none" />
        <div className="h-[520px] w-full">
          <Spline
            scene="https://prod.spline.design/4o1rTgS53c0uYcX9/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <span className="inline-block rounded-full bg-emerald-100 text-emerald-700 px-3 py-1 text-xs font-semibold">
              Fitness • Reviews • Results
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Build your best body with trusted gear and guides
            </h1>
            <p className="mt-4 text-slate-600 text-lg">
              Expert-backed workouts, honest product reviews, and curated affiliate picks to help you train smarter.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#blogs"
                className="inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-3 text-white shadow hover:bg-slate-800 transition-colors"
              >
                Read Blogs
              </a>
              <a
                href="#top-picks"
                className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-slate-900 ring-1 ring-slate-200 hover:ring-slate-300"
              >
                Shop Top Picks
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:ml-auto"
          >
            <div className="rounded-2xl bg-white/70 backdrop-blur p-6 ring-1 ring-slate-200 shadow-sm max-w-md mx-auto">
              <h3 className="text-xl font-semibold text-slate-900">Weekly Quick Start</h3>
              <ul className="mt-4 space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                  3-day full-body routine for busy schedules
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                  Essentials you actually need to get started
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                  Nutrition basics without the fluff
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
