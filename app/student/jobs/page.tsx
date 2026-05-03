import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

export default function JobBrowser() {
  const navItems = [
    { label: 'Overview', href: '/student', icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg> },
    { label: 'Find Jobs', href: '/student/jobs', icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg> },
    { label: 'Applications', href: '#', icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg> },
    { label: 'Profile', href: '#', icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg> },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-950">
      <Navbar role="student" />
      <div className="flex flex-1">
        <Sidebar items={navItems} />
        <main className="flex-1 p-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Find your next role</h1>
              <p className="text-slate-500 dark:text-slate-400 mt-1">Explore 500+ open positions across top companies.</p>
            </div>
            <div className="flex gap-2">
              <input 
                type="text" 
                placeholder="Search jobs..." 
                className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none w-64"
              />
              <button className="px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-medium">Search</button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-6">
              <div className="p-6 border border-slate-200 dark:border-slate-800 rounded-2xl">
                <h3 className="font-bold text-slate-900 dark:text-white mb-4">Filters</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-slate-600 dark:text-slate-400 block mb-2">Job Type</label>
                    <div className="space-y-2">
                      {['Full-time', 'Part-time', 'Internship', 'Contract'].map(type => (
                        <label key={type} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                          <input type="checkbox" className="rounded border-slate-300 text-blue-600" />
                          {type}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="group p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-blue-500 dark:hover:border-blue-500 transition-all cursor-pointer">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center text-xl font-bold text-slate-400">
                        L{i}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">Frontend Developer (React)</h3>
                        <p className="text-slate-500 dark:text-slate-400">LogisticsPro • Remote • San Francisco</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs font-bold uppercase">New</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2 mb-4">
                    We are looking for a talented Frontend Developer to join our core team. You will be responsible for building high-performance web applications using React and Tailwind CSS.
                  </p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg text-xs font-medium">React</span>
                    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg text-xs font-medium">TypeScript</span>
                    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg text-xs font-medium">$120k - $160k</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
