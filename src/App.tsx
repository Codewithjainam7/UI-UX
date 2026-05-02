/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { CheckCircle2, Sparkles, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout } from './components/Layout';
import { InboxView } from './views/InboxView';
import { AnalyticsView } from './views/AnalyticsView';
import { ConfigurationView } from './views/ConfigurationView';
import { ComponentLibraryView } from './views/ComponentLibraryView';
import { emailData } from './data/emails';

export default function App() {
  const [activeTab, setActiveTab] = useState('inbox');
  const [emails, setEmails] = useState(emailData);
  const [selectedEmailId, setSelectedEmailId] = useState(emailData[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const [notification, setNotification] = useState<{ message: string, type: 'success' | 'error' } | null>(null);
  const [isComposeOpen, setIsComposeOpen] = useState(false);
  const [stats, setStats] = useState({
    total: emailData.length,
    sent: emailData.filter(e => e.replied).length,
    resolvedRate: 81,
    avgResponse: 1.2
  });

  const handleApprove = (id: number, replyText: string) => {
    setNotification({ message: 'Email approved and sent successfully!', type: 'success' });
    
    setEmails(prev => prev.map(email => 
      email.id === id ? { ...email, replied: true, sentReply: replyText } : email
    ));

    setStats(prev => {
      const newSent = prev.sent + 1;
      const newResolvedRate = Math.min(100, Math.floor((newSent / prev.total) * 100));
      return {
        ...prev,
        sent: newSent,
        resolvedRate: newResolvedRate
      };
    });
    
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const renderView = () => {
    switch (activeTab) {
      case 'inbox':
        return (
          <InboxView 
            emails={emails.filter(e => !e.replied)} 
            selectedEmailId={selectedEmailId} 
            setSelectedEmailId={setSelectedEmailId}
            searchQuery={searchQuery}
            onApprove={handleApprove}
            view="inbox"
          />
        );
      case 'sent':
        return (
          <InboxView 
            emails={emails.filter(e => e.replied)} 
            selectedEmailId={selectedEmailId} 
            setSelectedEmailId={setSelectedEmailId}
            searchQuery={searchQuery}
            onApprove={handleApprove}
            view="sent"
          />
        );
      case 'analytics':
        return <AnalyticsView stats={stats} emails={emails} />;
      default:
        return (
          <div className="p-8 flex items-center justify-center h-full text-on-surface-variant">
            Select a view from the sidebar.
          </div>
        );
    }
  };

  const inboxCount = emails.filter(e => !e.replied).length;

  return (
    <Layout 
      activeTab={activeTab} 
      setActiveTab={setActiveTab}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      inboxCount={inboxCount}
      onCompose={() => setIsComposeOpen(true)}
    >
      {renderView()}
      
      {/* Sent Notification Popup: Hyper-Glass Prismatic Style */}
      <AnimatePresence>
        {notification && (
          <motion.div 
            initial={{ opacity: 0, x: 100, y: -40, scale: 0.8, rotate: 5 }}
            animate={{ 
              opacity: 1, 
              x: 0, 
              y: 0, 
              scale: 1, 
              rotate: 0,
              transition: { 
                type: "spring", 
                damping: 15, 
                stiffness: 150 
              } 
            }}
            exit={{ opacity: 0, scale: 0.8, x: 20, transition: { duration: 0.3 } }}
            className="fixed top-24 right-8 z-[200]"
          >
            <div className="relative p-[1px] overflow-hidden rounded-2xl group">
              {/* Rotating Liquid Border Effect */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_150deg,#7c3aed_180deg,transparent_210deg,transparent_360deg)] opacity-40 group-hover:opacity-100 transition-opacity"
              />

              <div className="relative overflow-hidden rounded-[15px]">
                {/* Hyper-Glass Background */}
                <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[40px] shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]" />
                
                {/* Internal Prismatic Glow */}
                <div className="absolute -left-10 -top-10 w-32 h-32 bg-primary/30 blur-[40px] rounded-full" />
                <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-indigo-500/20 blur-[40px] rounded-full" />

                <div className="relative px-7 py-6 flex items-center gap-6 min-w-[380px] border border-white/10 rounded-[15px]">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/40 to-indigo-600/40 border border-white/30 flex items-center justify-center shadow-[0_0_30px_rgba(124,58,237,0.3)] relative z-10 overflow-hidden">
                      {/* Internal light sweep */}
                      <motion.div 
                        animate={{ x: [-100, 200] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                      />
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", damping: 10, stiffness: 100, delay: 0.2 }}
                      >
                        <CheckCircle2 className="text-white drop-shadow-lg" size={32} />
                      </motion.div>
                    </div>
                    {/* Pulsing Aura */}
                    <motion.div 
                      animate={{ scale: [1, 1.4], opacity: [0.4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="absolute inset-0 rounded-2xl bg-primary/40"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#7c3aed] animate-pulse" />
                      <p className="text-[11px] font-sans font-black uppercase tracking-[0.4em] text-primary-container drop-shadow-md">Transmission Confirmed</p>
                    </div>
                    <p className="text-[18px] font-display font-bold text-white tracking-tight leading-tight">
                      {notification.message}
                    </p>
                    <p className="text-[12px] font-sans text-on-surface-variant/80 mt-1 font-medium italic">Conversation history updated in Sent folder.</p>
                  </div>

                  <button 
                    onClick={() => setNotification(null)}
                    className="w-10 h-10 rounded-xl hover:bg-white/10 flex items-center justify-center text-white/30 hover:text-white transition-all active:scale-90"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Micro Progress Tracker */}
                <motion.div 
                  initial={{ width: "100%" }}
                  animate={{ width: 0 }}
                  transition={{ duration: 3, ease: "linear" }}
                  className="h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent absolute bottom-0 left-0 w-full opacity-60"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Compose Modal */}
      {isComposeOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-300">
          <div className="w-full max-w-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
            <div className="p-6 border-b border-white/10 flex justify-between items-center bg-white/5">
              <h2 className="text-xl font-display font-bold text-white">New Message</h2>
              <button onClick={() => setIsComposeOpen(false)} className="text-on-surface-variant hover:text-white transition-colors">
                <CheckCircle2 className="rotate-45" size={24} />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-sans font-semibold text-on-surface-variant uppercase tracking-widest">Recipient</label>
                <input type="text" placeholder="example@startup.io" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-all" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-sans font-semibold text-on-surface-variant uppercase tracking-widest">Subject</label>
                <input type="text" placeholder="Quick question..." className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-all" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-sans font-semibold text-on-surface-variant uppercase tracking-widest">Message Body</label>
                <textarea rows={8} className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-primary transition-all resize-none" />
              </div>
            </div>
            <div className="p-6 border-t border-white/10 bg-white/5 flex justify-end gap-3">
              <button onClick={() => setIsComposeOpen(false)} className="px-6 py-2.5 rounded-lg text-sm font-sans font-semibold text-white hover:bg-white/5 transition-colors">Cancel</button>
              <button 
                onClick={() => {
                  setIsComposeOpen(false);
                  setNotification({ message: 'Message sent successfully!', type: 'success' });
                  setTimeout(() => setNotification(null), 3000);
                }} 
                className="bg-primary text-white px-8 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wider shadow-lg hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
