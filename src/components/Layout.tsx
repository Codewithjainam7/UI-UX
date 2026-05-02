import React from 'react';
import { 
  Inbox, 
  BarChart2, 
  Sparkles, 
  FileText, 
  Settings, 
  HelpCircle, 
  LogOut, 
  Search, 
  Bell,
  Menu,
  Edit2,
  Send
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface NavItem {
  id: string;
  icon: React.ReactNode;
  label: string;
  badge?: number;
  active?: boolean;
}

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  inboxCount: number;
  onCompose: () => void;
}

export function Layout({ children, activeTab, setActiveTab, searchQuery, setSearchQuery, inboxCount, onCompose }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const topNav: NavItem[] = [
    { id: 'inbox', icon: <Inbox size={20} />, label: 'Inbox', badge: inboxCount },
    { id: 'sent', icon: <Send size={20} />, label: 'Sent' },
    { id: 'analytics', icon: <BarChart2 size={20} />, label: 'Analytics' },
  ];

  return (
    <div className="flex h-screen w-full bg-background relative overflow-hidden font-sans">
      {/* Liquid Background Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary-container/20 blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-secondary-container/20 blur-[120px] mix-blend-screen" />
      </div>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <nav className={cn(
        "relative z-[110] flex flex-col w-64 h-full border-r border-white/10 bg-black/20 backdrop-blur-[40px] p-4 flex-shrink-0 transition-transform duration-300 md:translate-x-0",
        isMobileMenuOpen ? "translate-x-0 fixed inset-y-0 left-0" : "translate-x-[-100%] absolute md:relative"
      )}>
        <div className="flex items-center gap-3 mb-10 px-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-container to-secondary-container flex items-center justify-center shadow-lg">
            <Sparkles size={18} className="text-white" fill="currentColor" />
          </div>
          <div>
            <h1 className="text-lg font-black text-white font-display tracking-tight">Debales AI</h1>
            <p className="text-xs text-primary font-semibold uppercase tracking-wider">AI Engine Active</p>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-1">
          {topNav.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setIsMobileMenuOpen(false);
              }}
              className={cn(
                "flex items-center justify-between px-4 py-3 rounded-lg transition-all",
                activeTab === item.id
                  ? "bg-white/10 text-white border-l-2 border-violet-500"
                  : "text-slate-400 hover:text-white hover:bg-white/5 active:scale-[0.97]"
              )}
            >
              <div className="flex items-center gap-3">
                {item.icon}
                <span className="font-semibold text-sm">{item.label}</span>
              </div>
              {item.badge && (
                <span className="bg-primary-container text-white text-[10px] px-2 py-0.5 rounded-full font-semibold">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
          
        </div>

        <div className="mt-auto flex flex-col gap-1 pt-4 border-t border-white/10">
          <button className="flex items-center gap-3 text-slate-400 px-4 py-3 hover:text-white hover:bg-white/5 transition-all rounded-lg active:scale-95">
            <Settings size={20} />
            <span className="font-semibold text-sm">Settings</span>
          </button>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden relative z-10 w-full min-w-0">
        {/* Header */}
        <header className="flex-shrink-0 h-16 flex justify-between items-center px-4 sm:px-6 border-b border-white/10 bg-slate-950/40 backdrop-blur-[40px] z-50">
          <div className="flex items-center gap-3 w-full max-w-md">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 -ml-2 text-on-surface-variant md:hidden hover:bg-white/5 rounded-lg"
            >
              <Menu size={22} />
            </button>
            <div className="relative hidden sm:block w-full">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" />
              <input 
                type="text" 
                placeholder="Search..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-black/20 border border-white/10 pl-9 pr-4 py-2 rounded-full text-sm font-sans text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary-container/50 transition-all"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 text-slate-400 hover:text-white hover:bg-white/5 transition-all rounded-full">
              <Bell size={20} />
            </button>
            <button className="p-1 ml-2 rounded-full hover:bg-white/5 transition-all">
              <div className="w-8 h-8 rounded-full bg-surface-bright border border-white/20 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" 
                  alt="User" 
                  className="w-full h-full object-cover"
                />
              </div>
            </button>
          </div>
        </header>

        {/* Dynamic Canvas */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto custom-scrollbar relative z-10">
          {children}
        </main>
      </div>
    </div>
  );
}
