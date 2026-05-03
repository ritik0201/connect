import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-linear-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-6xl">
          Conect<span className="text-blue-600">.</span>
        </h1>
        <p className="mt-4 text-xl text-slate-600 dark:text-slate-400">
          Bridging the gap between talent and opportunity.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 max-w-6xl w-full">
        {/* Student Role */}
        <Link href="/student" className="group p-8 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">For Students</h2>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Find your dream job, apply with ease, and track your applications.
          </p>
          <span className="mt-6 font-medium text-blue-600 group-hover:underline">Enter Dashboard →</span>
        </Link>

        {/* Company Role */}
        <Link href="/company" className="group p-8 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-10V4m0 10V4m-4 6h4" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">For Companies</h2>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Post job openings, manage candidates, and hire the best talent.
          </p>
          <span className="mt-6 font-medium text-indigo-600 group-hover:underline">Manage Hiring →</span>
        </Link>

        {/* Admin Role */}
        <Link href="/admin" className="group p-8 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-rose-100 dark:bg-rose-900/30 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg className="w-8 h-8 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Administrator</h2>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Overview of platform activity, manage users, and system settings.
          </p>
          <span className="mt-6 font-medium text-rose-600 group-hover:underline">System Access →</span>
        </Link>
      </div>

      <footer className="mt-24 text-slate-500 text-sm">
        © 2026 Conect Platform. All rights reserved.
      </footer>
    </div>
  );
}
