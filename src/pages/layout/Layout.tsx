import React from 'react'
import Header from './header'
import { Router } from '@/route'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';

const Layout = () => {
  return (
    <div className="flex h-screen">
        <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
            {/* Header */}
            <Header />

      <div className="flex flex-col flex-1">
        
        {/* Main Content */}
        <main className="p-6 pt-4 ">

          <Router /> {/* Directly renders the Router component */}
        </main>
      </div>
      </SidebarInset>
      </SidebarProvider>
    </div>
  );
};

export default Layout;
