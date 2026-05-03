import Link from 'next/link';

interface NavbarProps {
  role?: 'student' | 'company' | 'admin';
}

export default function Navbar({ role }: NavbarProps) {
  const brandColors = {
    student: 'text-blue-600',
    company: 'text-indigo-600',
    admin: 'text-rose-600',
    undefined: 'text-blue-600'
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Conect<span className={brandColors[role || 'undefined']}>.</span>
            </Link>
            {role && (
              <span className="ml-2 px-2 py-0.5 rounded text-xs font-semibold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                {role}
              </span>
            )}
          </div>

          <div className="hidden sm:flex items-center gap-6">
            <Link href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
              Help
            </Link>
            <Link href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
              Notifications
            </Link>
            <div className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 flex items-center justify-center overflow-hidden">
              <svg className="w-5 h-5 text-slate-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
