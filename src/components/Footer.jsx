export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <h3 className="text-xl font-semibold text-slate-900">FitAffiliates</h3>
            <p className="mt-2 text-slate-600 max-w-md">
              Honest reviews, simple programs, and curated picks to help you build sustainable fitness.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Explore</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="#blogs" className="hover:text-slate-900">Blogs</a></li>
              <li><a href="#top-picks" className="hover:text-slate-900">Top Picks</a></li>
              <li><a href="#" className="hover:text-slate-900">About</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Legal</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>
                <span className="block">
                  This site uses affiliate links. If you buy through our links, we may earn a commission at no extra cost to you.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-6 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} FitAffiliates. All rights reserved.</p>
          <a href="#" className="hover:text-slate-700">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
