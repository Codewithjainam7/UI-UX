import React from 'react';
import { 
  Expand, 
  ChevronDown, 
  Sparkles, 
  ReplyAll, 
  Forward, 
  MoreVertical,
  CheckCircle2,
  Edit2,
  RefreshCcw,
  Send,
  Inbox,
  FileText,
  Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';


import { cn } from '@/lib/utils';

interface InboxViewProps {
  emails: Email[];
  selectedEmailId: number;
  setSelectedEmailId: (id: number) => void;
  searchQuery: string;
  onApprove: (id: number, replyText: string) => void;
  view: 'inbox' | 'sent';
}

export function InboxView({ emails, selectedEmailId, setSelectedEmailId, searchQuery, onApprove, view }: InboxViewProps) {
  const [activeFolder, setActiveFolder] = React.useState('all');
  const [isEditing, setIsEditing] = React.useState(false);
  const [replyVersion, setReplyVersion] = React.useState<{ [key: number]: number }>({});
  const [isGenerating, setIsGenerating] = React.useState(false);
  const [isOldestFirst, setIsOldestFirst] = React.useState(false);
  const [localDrafts, setLocalDrafts] = React.useState<{ [key: number]: string }>({});
  const [localSubjects, setLocalSubjects] = React.useState<{ [key: number]: string }>({});
  const [showDetailOnMobile, setShowDetailOnMobile] = React.useState(false);

  const filteredEmails = emails.filter(email => {
    // Folder filter
    if (activeFolder === 'priority' && email.priority !== 'HIGH') return false;
    if (activeFolder === 'unread' && email.replied) return false; // Unread logic
    
    // Search filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return email.sender.toLowerCase().includes(q) || 
             email.subject.toLowerCase().includes(q) || 
             email.body.toLowerCase().includes(q);
    }
    return true;
  }).sort((a, b) => {
    return isOldestFirst ? a.id - b.id : b.id - a.id;
  });

  const currentEmail = emails.find(e => e.id === selectedEmailId) || filteredEmails[0] || null;
  const currentReplyVersion = currentEmail ? (replyVersion[currentEmail.id] || 1) : 1;
  
  const baseDraftText = currentEmail 
    ? (currentReplyVersion === 1 ? currentEmail.replyV1 : currentEmail.replyV2) 
    : "";
    
  const draftText = currentEmail && localDrafts[currentEmail.id] !== undefined
    ? localDrafts[currentEmail.id]
    : baseDraftText;

  const draftSubject = currentEmail && localSubjects[currentEmail.id] !== undefined
    ? localSubjects[currentEmail.id]
    : currentEmail?.subject || "";

  const handleRegenerate = () => {
    if (!currentEmail) return;
    setIsGenerating(true);
    setTimeout(() => {
      setReplyVersion(prev => ({
        ...prev,
        [currentEmail.id]: (prev[currentEmail.id] || 1) === 1 ? 2 : 1
      }));
      // Clear local draft when regenerating to show the new AI version
      setLocalDrafts(prev => {
        const next = { ...prev };
        delete next[currentEmail.id];
        return next;
      });
      setIsGenerating(false);
    }, 800);
  };

  const [isApproving, setIsApproving] = React.useState(false);
  const [sendProgress, setSendProgress] = React.useState(0);

  const handleApproveClick = () => {
    if (!currentEmail || currentEmail.replied) return;
    setIsApproving(true);
    setSendProgress(0);
    
    // Simulate progressive sending
    const interval = setInterval(() => {
      setSendProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 50);

    setTimeout(() => {
      onApprove(currentEmail.id, draftText);
      setIsApproving(false);
      setSendProgress(0);
      setShowDetailOnMobile(false);
    }, 1200);
  };

  return (
    <div className="flex w-full h-full relative overflow-hidden">
      {/* Middle Column: Email List */}
      <div className={cn(
        "w-full md:w-[380px] border-r border-white/10 bg-black/10 backdrop-blur-[20px] flex flex-col flex-shrink-0 z-20 shadow-lg transition-transform duration-300",
        showDetailOnMobile ? "-translate-x-full md:translate-x-0" : "translate-x-0"
      )}>
        <div className="p-4 border-b border-white/10 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-display font-semibold text-white capitalize">{view}</h2>
            <button 
              onClick={() => setIsOldestFirst(!isOldestFirst)}
              className="flex items-center gap-1 text-xs font-sans font-medium text-on-surface-variant hover:text-white transition-all bg-white/5 hover:bg-white/10 px-2.5 py-1.5 rounded-lg border border-white/10 active:scale-95"
            >
              Sort: {isOldestFirst ? 'Oldest' : 'Newest'}
              <ChevronDown className={`transition-transform duration-300 ${isOldestFirst ? 'rotate-180' : ''}`} size={14} />
            </button>
          </div>
          <div className="flex gap-2 overflow-x-auto custom-scrollbar pb-1">
            <button 
              onClick={() => setActiveFolder('all')}
              className={`whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-sans font-semibold transition-all ${activeFolder === 'all' ? 'bg-primary-container/20 text-primary border border-primary-container/50' : 'bg-white/5 text-on-surface-variant border border-white/10 hover:bg-white/10'}`}
            >
              All
            </button>
            <button 
              onClick={() => setActiveFolder('unread')}
              className={`whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-sans font-semibold transition-all ${activeFolder === 'unread' ? 'bg-primary-container/20 text-primary border border-primary-container/50' : 'bg-white/5 text-on-surface-variant border border-white/10 hover:bg-white/10'}`}
            >
              Unread
            </button>
            <button 
              onClick={() => setActiveFolder('priority')}
              className={`whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-sans font-semibold transition-all flex items-center gap-1.5 ${activeFolder === 'priority' ? 'bg-primary-container/20 text-primary border border-primary-container/50' : 'bg-white/5 text-on-surface-variant border border-white/10 hover:bg-white/10'}`}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-error shadow-[0_0_8px_rgba(255,180,171,0.8)]"></div> Priority
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar p-3 space-y-2">
          <AnimatePresence mode="popLayout">
            {filteredEmails.length === 0 ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                exit={{ opacity: 0 }}
                className="h-full flex flex-col items-center justify-center text-on-surface-variant p-8 text-center"
                key="empty"
              >
                <Inbox size={48} className="mb-4" />
                <p className="text-sm font-semibold uppercase tracking-widest">No messages found</p>
              </motion.div>
            ) : (
              filteredEmails.map(email => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                  transition={{ duration: 0.2 }}
                  key={email.id}
                  onClick={() => {
                    setSelectedEmailId(email.id);
                    setShowDetailOnMobile(true);
                  }}
                  className={`relative border transition-all rounded-xl p-4 cursor-pointer ${selectedEmailId === email.id ? 'bg-white/10 border-primary-container/40 shadow-[0_0_15px_rgba(124,58,237,0.1)]' : 'bg-transparent hover:bg-white/5 border-transparent group'}`}
                >
                  {email.priority === 'HIGH' && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-10 bg-error rounded-r-full shadow-[0_0_8px_rgba(255,180,171,0.8)]"></div>
                  )}
                  <div className="pl-2">
                    <div className="flex justify-between items-start mb-1.5">
                      <span className={`text-[15px] font-sans font-semibold ${selectedEmailId === email.id ? 'text-white' : 'text-on-surface'}`}>{email.sender}</span>
                      <span className="text-[11px] font-sans font-medium text-on-surface-variant">{email.time}</span>
                    </div>
                    <h3 className={`text-sm font-sans mb-2 truncate ${selectedEmailId === email.id ? 'font-semibold text-white' : 'font-medium text-on-surface'}`}>{email.subject}</h3>
                    <p className="text-xs font-sans text-on-surface-variant/90 line-clamp-2 mb-3 leading-relaxed">
                      {email.preview}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-sans font-semibold uppercase tracking-wider border ${email.priority === 'HIGH' ? 'bg-error-container/30 text-error border-error/20' : 'bg-secondary-container/30 text-secondary border-secondary/20'}`}>
                        {email.category}
                      </span>
                      <div className="flex items-center gap-1.5 text-[10px] font-sans font-semibold uppercase tracking-wider text-primary">
                        {email.replied ? (
                          <>
                            <CheckCircle2 size={12} />
                            <span>Sent</span>
                          </>
                        ) : (
                          <>
                            <Sparkles size={12} />
                            <span>AI Score: {email.confidence}%</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Right Column: Detail Wrapper */}
      <div className={cn(
        "flex-1 flex flex-col h-full bg-black/5 relative z-10 min-w-0 transition-transform duration-300",
        showDetailOnMobile ? "translate-x-0 fixed inset-0 md:relative md:inset-auto z-[30]" : "translate-x-full md:translate-x-0"
      )}>
        {/* Mobile Back Button */}
        <div className="md:hidden p-4 border-b border-white/10 bg-slate-950 flex items-center gap-3 shrink-0">
          <button 
            onClick={() => setShowDetailOnMobile(false)}
            className="p-2 text-on-surface-variant hover:bg-white/5 rounded-lg"
          >
            <ChevronDown className="rotate-90" size={24} />
          </button>
          <span className="font-semibold text-white">Back to Inbox</span>
        </div>

        {/* Top Section: Email Detail Content (Designated Scrollable Area) */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 sm:p-10">
          {currentEmail ? (
            <motion.div 
              key={currentEmail.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-gradient-to-br from-primary-container/40 to-indigo-500/20 text-white font-bold text-xl overflow-hidden shadow-xl">
                    {currentEmail.sender.charAt(0)}
                  </div>
                  <div>
                    <h2 className="text-2xl font-display font-bold text-white mb-0.5">{currentEmail.sender}</h2>
                    <div className="flex items-center text-xs font-sans text-on-surface-variant">
                      <span>{currentEmail.email}</span>
                    </div>
                  </div>
                </div>
              </div>

              <motion.h1 
                key="subject"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl sm:text-3xl font-display font-bold text-white mb-8 leading-tight tracking-tight"
              >
                {currentEmail.subject}
              </motion.h1>
              
              <div className="text-[16px] font-sans text-on-surface/90 leading-relaxed space-y-6 bg-white/[0.03] p-6 sm:p-8 rounded-[24px] border border-white/10 whitespace-pre-wrap shadow-xl backdrop-blur-sm">
                {currentEmail.body}
              </div>

              {/* Replied Message Section (Thread View) */}
              <AnimatePresence>
                {currentEmail.replied && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-10 pt-10 border-t border-white/10"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center bg-primary/10 text-primary font-bold text-lg shadow-lg">
                        S
                      </div>
                      <div>
                        <h3 className="text-lg font-display font-bold text-white mb-0.5">Support Team (You)</h3>
                        <p className="text-xs font-sans text-primary font-bold uppercase tracking-wider">Sent Reply</p>
                      </div>
                    </div>
                    <div className="text-[15px] font-sans text-on-surface/80 leading-relaxed space-y-4 bg-primary/5 p-6 sm:p-8 rounded-[24px] border border-primary/20 whitespace-pre-wrap shadow-lg italic">
                      {currentEmail.sentReply || currentEmail.replyV1}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center opacity-40 text-on-surface-variant text-center p-8">
              <FileText size={80} strokeWidth={1} className="mb-6 opacity-20" />
              <p className="text-2xl font-display font-semibold tracking-tight">Select an email to view thread</p>
            </div>
          )}
        </div>

        {/* Bottom Section: AI Draft Section (Designated Area) */}
        <AnimatePresence>
          {!currentEmail?.replied && currentEmail && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="shrink-0 bg-surface-dim/95 backdrop-blur-[60px] border-t border-white/15 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] flex flex-col z-[40]"
            >
              {isApproving && (
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${sendProgress}%` }}
                  className="h-[3px] bg-gradient-to-r from-primary to-indigo-500 absolute top-0 left-0 z-[60]"
                />
              )}
              
              <div className="max-w-5xl mx-auto w-full p-4 sm:p-6 flex flex-col gap-4">
                {/* AI Header */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary-container/20 border border-primary-container/50 flex items-center justify-center shadow-lg">
                      <Sparkles className="text-primary" size={16} />
                    </div>
                    <div>
                      <h3 className="text-sm font-sans font-bold text-white tracking-wide">AI Smart Reply</h3>
                      <div className="flex gap-2 mt-0.5">
                        <span className="px-2 py-0.5 rounded-lg text-[9px] font-sans font-bold uppercase tracking-widest bg-primary-container/30 text-primary border border-primary/20">Draft</span>
                        <span className="px-2 py-0.5 rounded-lg text-[9px] font-sans font-bold uppercase tracking-widest bg-white/10 text-white border border-white/20">Confidence: {currentEmail.confidence}%</span>
                      </div>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center gap-3 bg-black/40 px-3 py-1.5 rounded-lg border border-white/10">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-on-surface-variant">Sentiment</span>
                    <span className="text-xs">{currentEmail.sentimentEmoji}</span>
                    <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-white">{currentEmail.sentiment}</span>
                  </div>
                </div>

                {/* Draft Editor Section */}
                <div className="flex flex-col gap-3">
                  <AnimatePresence>
                    {isEditing && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                        key="edit-subject"
                      >
                        <div className="bg-black/30 border border-white/10 rounded-lg p-3 mb-1">
                          <label className="text-[9px] font-sans font-bold uppercase tracking-widest text-primary mb-1 block">Reply Subject</label>
                          <input 
                            type="text"
                            className="w-full bg-transparent border-none text-sm font-sans font-bold text-white focus:outline-none placeholder:text-white/20"
                            value={draftSubject}
                            onChange={(e) => {
                              if (currentEmail) {
                                setLocalSubjects(prev => ({ ...prev, [currentEmail.id]: e.target.value }));
                              }
                            }}
                            placeholder="Reply Subject..."
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="relative group">
                    <textarea 
                      className={cn(
                        "w-full h-32 sm:h-40 bg-black/40 border rounded-[18px] p-4 text-sm font-sans text-white focus:outline-none resize-none transition-all custom-scrollbar leading-relaxed",
                        isEditing ? "border-primary ring-2 ring-primary/10 bg-black/60" : "border-white/10 hover:border-white/20"
                      )}
                      readOnly={!isEditing}
                      value={draftText}
                      onChange={(e) => {
                        if (currentEmail) {
                          setLocalDrafts(prev => ({ ...prev, [currentEmail.id]: e.target.value }));
                        }
                      }}
                      placeholder="AI is drafting a reply..."
                    />
                    {isGenerating && (
                      <div className="absolute inset-0 bg-black/60 backdrop-blur-md rounded-[18px] flex items-center justify-center z-50">
                        <div className="flex flex-col items-center gap-3">
                          <RefreshCcw className="animate-spin text-primary" size={24} />
                          <span className="text-[10px] font-bold text-white uppercase tracking-[0.2em]">Regenerating...</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Action Bar */}
                <div className="flex justify-between items-center">
                  <div className="flex gap-3">
                    <button 
                      onClick={() => setIsEditing(!isEditing)}
                      className={cn(
                        "px-6 py-2.5 rounded-xl text-[11px] font-sans font-bold uppercase tracking-[0.1em] transition-all flex items-center gap-2 shadow-xl active:scale-95",
                        isEditing 
                          ? "bg-primary text-slate-950 border border-primary shadow-[0_0_20px_rgba(210,187,255,0.3)]" 
                          : "bg-white/10 border border-white/20 text-white hover:bg-white/20"
                      )}
                    >
                      {isEditing ? (
                        <>
                          <CheckCircle2 size={14} /> DONE
                        </>
                      ) : (
                        <>
                          <Edit2 size={14} /> Edit Draft
                        </>
                      )}
                    </button>
                    <button 
                      onClick={handleRegenerate}
                      disabled={isGenerating}
                      className="px-5 py-2.5 rounded-xl text-[11px] font-sans font-bold uppercase tracking-[0.1em] text-white hover:bg-white/10 transition-all flex items-center gap-2 border border-white/10 disabled:opacity-30 active:scale-95"
                    >
                      <RefreshCcw className={isGenerating ? 'animate-spin' : ''} size={14} /> Regenerate
                    </button>
                  </div>

                  <button 
                    onClick={handleApproveClick}
                    disabled={isApproving}
                    className="bg-gradient-to-br from-primary-container via-primary-container to-indigo-600 text-white px-8 py-3 rounded-xl text-[11px] font-sans font-bold uppercase tracking-[0.15em] hover:brightness-110 hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] transition-all flex items-center gap-3 active:scale-95 border border-white/20 shadow-2xl min-w-[180px] justify-center"
                  >
                    <AnimatePresence mode="wait">
                      {isApproving ? (
                        <motion.div 
                          key="sending"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 10 }}
                          className="flex items-center gap-2"
                        >
                          <RefreshCcw className="animate-spin" size={16} /> SENDING...
                        </motion.div>
                      ) : (
                        <motion.div 
                          key="send"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="flex items-center gap-2"
                        >
                          <Send size={16} /> APPROVE & SEND
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
