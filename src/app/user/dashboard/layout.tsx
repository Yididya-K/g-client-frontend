// app/dashboard/layout.tsx

"use client"

import Link from 'next/link';
import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Settings,
  Mail,
  ReceiptText,
} from 'lucide-react';

const navItems = [
  { name: 'Dashboard', path: '', icon: <LayoutDashboard className="w-4 h-4 mr-2" /> },
  { name: 'Settings', path: 'settings', icon: <Settings className="w-4 h-4 mr-2" /> },
  { name: 'Messages', path: 'messages', icon: <Mail className="w-4 h-4 mr-2" /> },
  { name: 'Invoices', path: 'invoices', icon: <ReceiptText className="w-4 h-4 mr-2" /> },
];

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div>
     <div className="bg-[#01589A] pt-14 px-2 h-[135px]">
        <div className="flex justify-center items-center">
            <div className="bg-white w-[1042px] h-[78px] rounded-md flex overflow-hidden divide-x divide-gray-200 shadow-md ">
            {navItems.map((item) => {
              const isActive = pathname === `/user/dashboard${item.path ? `/${item.path}` : ''}`;

              return (
                <Link
                  key={item.name}
                  href={`/user/dashboard${item.path ? `/${item.path}` : ''}`}
                  className={`px-6 py-2 flex items-center text-sm font-bold w-[184px] justify-center  transition-colors duration-200 ease-in-out  ${
                    isActive ? 'text-white bg-[#014273]' : 'text-gray-950'
                  } ' hover:bg-[#014273] hover:text-white`}
                >
                  {item.icon}
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6">{children}</div>
    </div>
  );
}
