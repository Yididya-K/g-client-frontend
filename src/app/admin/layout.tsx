'use client';

import { useState, useEffect } from 'react';
import {
  LayoutDashboard,
  FileText,
  Users,
  GraduationCap,
  BookOpen,
  BarChart2,
  Settings,
  LogOut,
  Moon,
  Sun,
  Menu,
  X,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Image from 'next/image';


const menuItems = [
  { name: 'Dashboard', icon: LayoutDashboard, href: '/admin' },
  { name: 'Invoices', icon: FileText, href: '/admin/invoices' },
  { name: 'Learners', icon: Users, href: '/admin/learners' },
  { name: 'Tracks', icon: GraduationCap, href: '/admin/tracks' },
  { name: 'Courses', icon: BookOpen, href: '/admin/courses' },
  { name: 'Report', icon: BarChart2, href: '/admin/report' },
];

interface MenuItem {
  name: string;
  icon: React.ElementType;
  href: string;
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
   
    // const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    // setDarkMode(localStorage.getItem('darkMode') === 'true' || (!('darkMode' in localStorage) && isSystemDark));
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      // localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      // localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  const sidebarBgColor = 'bg-[#01589A]'; 
  const sidebarTextColor = 'text-white';
  const sidebarIconColor = 'text-white';
  const sidebarHoverBgColor = 'hover:bg-[#E6EFF5]';
  const sidebarActiveBgColor = 'bg-white';
  const sidebarActiveTextColor = 'text-[#01589A]';

  // Top bar colors
  const topBarLightBg = 'bg-white';
  const topBarDarkBg = 'dark:bg-slate-800';

  // Main content colors
  const mainContentLightBg = 'bg-slate-50';
  const mainContentDarkBg = 'dark:bg-slate-900';

  const handleLinkClick = () => {
    if (window.innerWidth < 768) { 
      setSidebarOpen(false);
    }
  };

  return (
    <div className={clsx('flex min-h-screen', darkMode ? 'dark' : '')}>
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 transition-opacity md:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={clsx(
          sidebarBgColor,
          'fixed top-0 left-0 z-40 w-64 h-screen flex flex-col transition-transform duration-300 ease-in-out md:relative md:translate-x-0 rounded-xl',
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {/* Logo and Mobile Close Button */}
        <div className="flex items-center justify-between p-2">
          <Link href="/admin/" className="flex items-center" onClick={handleLinkClick}>
            <div className="text-3xl font-bold text-white">
             <Image
                src="/admin-logo.png" alt={''}      
                width={264}
                height={93}       />
             
            </div>
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className={clsx(sidebarTextColor, 'hover:text-white md:hidden')}
            aria-label="Close sidebar"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Links*/}
        <nav className="flex-grow px-2 py-4 space-y-1.5">
          {menuItems.map((item: MenuItem) => {
            const isActive = pathname === item.href || (item.href !== '/admin/' && pathname.startsWith(item.href) && item.href.length > '/admin/'.length);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={clsx(
                  'flex items-center space-x-3 px-3 py-2.5 rounded-md text-[15px] font-medium transition-colors ',
                  isActive
                    ? `${sidebarActiveBgColor} ${sidebarActiveTextColor}`
                    : `${sidebarTextColor} ${sidebarHoverBgColor} hover:text-[#01589A]`
                )}
                onClick={handleLinkClick}
              >
                <item.icon className={clsx('w-5 h-5 ', isActive ? sidebarActiveTextColor : sidebarIconColor, "hover:text-[#01589A]")} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Footer Links (Settings, Logout) - This section is at the bottom due to flex-grow on nav */}
        <div className="px-2 pb-4 space-y-1.5">
          <Link
            href="/admin/settings"
            className={clsx(
              'flex items-center space-x-3 px-3 py-2.5 rounded-md text-[15px] font-medium transition-colors hover:text-[#01589A]',
              pathname === '/admin/settings'
                ? `${sidebarActiveBgColor} ${sidebarActiveTextColor}`
                : `${sidebarTextColor} ${sidebarHoverBgColor} hover:text-[#01589A]`
            )}
            onClick={handleLinkClick}
          >
            <Settings className={clsx('w-5 h-5', pathname === '/admin/settings' ? sidebarActiveTextColor : sidebarIconColor)} />
            <span>Settings</span>
          </Link>
        
          <Link
             href="/login"
            className={clsx(
              'flex items-center space-x-3 px-2 py-2.5 rounded-md text-[15px] font-medium w-full text-left',
              
              `${sidebarTextColor} ${sidebarHoverBgColor} hover:text-[#01589A]`
            )}
             onClick={ handleLinkClick }
          >
            <LogOut className={clsx('w-5 h-5' , sidebarIconColor)} />
            <span>Logout</span>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-x-hidden">
        {/* Top Bar */}
        <header className={clsx(
            "sticky top-0 z-20 pt-4 px-6",
            darkMode ? topBarDarkBg : topBarLightBg,
            darkMode ? 'text-white' : 'text-slate-700'
        )}>
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <button
                  onClick={() => setSidebarOpen(true)}
                  className={clsx(
                    "p-2 rounded-md md:hidden",
                    darkMode ? 'text-slate-300 hover:text-white hover:bg-slate-700' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100'
                  )}
                  aria-label="Open sidebar"
                >
                  <Menu className="w-6 h-6" />
                </button>
              </div>

              <div className="flex items-center space-x-4 ml-auto md:ml-0">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={clsx(
                    "p-2 rounded-full focus:outline-none transition-colors duration-200",
                    darkMode ? 'bg-slate-700 hover:bg-slate-600 text-yellow-400 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-slate-800'
                             : 'bg-slate-100 hover:bg-slate-200 text-[#004AAD] focus:ring-2 focus:ring-[#004AAD] focus:ring-offset-2'
                  )}
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>

                <div className="flex items-center space-x-2 cursor-pointer">
                  <div className={clsx(
                      "w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold",
                      darkMode ? 'bg-sky-600 text-white' : 'bg-[#004AAD] text-white'
                  )}>
                    JD
                  </div>
                  <span className={clsx(
                      "font-medium hidden sm:block text-sm",
                      darkMode ? 'text-slate-200' : 'text-slate-700'
                  )}>
                    John Doe
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className={clsx(
            "flex-1 p-6 transition-colors duration-300",
            darkMode ? mainContentDarkBg : mainContentLightBg
        )}>
          {children}
        </main>
      </div>
    </div>
  );
}