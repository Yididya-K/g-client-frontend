import React from 'react';
import Nav from '@/src/components/user/navbar'; 
import Footer from '@/src/components/user/footer'; 




interface UserLayoutProps {
  children: React.ReactNode;
}

export default function UserLayout({ children }: UserLayoutProps) {
  return (
    
     < div className="flex flex-col min-h-screen">
        <Nav />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
   
  );
}