import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

export default function StudentDashboard() {
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
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Welcome back, Ritik!</h1>
            <p className="text-slate-500 dark:text-slate-400 mt-1">Here's what's happening with your job applications.</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 bg-blue-50 dark:bg-blue-900/10 rounded-2xl border border-blue-100 dark:border-blue-900/20">
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider">Applied</span>
              <div className="text-4xl font-bold text-slate-900 dark:text-white mt-2">12</div>
              <p className="text-blue-600/60 dark:text-blue-400/60 text-sm mt-1">+2 this week</p>
            </div>
            <div className="p-6 bg-indigo-50 dark:bg-indigo-900/10 rounded-2xl border border-indigo-100 dark:border-indigo-900/20">
              <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Interviews</span>
              <div className="text-4xl font-bold text-slate-900 dark:text-white mt-2">3</div>
              <p className="text-indigo-600/60 dark:text-indigo-400/60 text-sm mt-1">Next: Tomorrow at 10 AM</p>
            </div>
            <div className="p-6 bg-emerald-50 dark:bg-emerald-900/10 rounded-2xl border border-emerald-100 dark:border-emerald-900/20">
              <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Offers</span>
              <div className="text-4xl font-bold text-slate-900 dark:text-white mt-2">1</div>
              <p className="text-emerald-600/60 dark:text-emerald-400/60 text-sm mt-1">Pending review</p>
            </div>
          </div>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Recommended Jobs</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:shadow-md transition-shadow flex justify-between items-center">
                  <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center font-bold text-slate-400">
                      C{i}
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">Software Engineer Intern</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">TechCorp Inc. • Remote • $4k - $6k</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
