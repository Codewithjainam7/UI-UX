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
  Send
} from 'lucide-react';

export function InboxView() {
  return (
    <div className="flex w-full h-full">
      {/* Middle Column: Email List */}
      <div className="w-[380px] border-r border-white/10 bg-black/10 backdrop-blur-[20px] flex flex-col flex-shrink-0 z-20 shadow-lg">
        <div className="p-4 border-b border-white/10 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-display font-semibold text-white">Inbox</h2>
            <button className="flex items-center gap-1 text-xs font-sans font-medium text-on-surface-variant hover:text-white transition-colors bg-white/5 px-2.5 py-1.5 rounded-lg border border-white/10">
              Sort: Newest
              <ChevronDown size={14} />
            </button>
          </div>
          <div className="flex gap-2 overflow-x-auto custom-scrollbar pb-1">
            <button className="whitespace-nowrap px-3 py-1.5 rounded-full bg-primary-container/20 text-primary border border-primary-container/50 text-xs font-sans font-semibold">All</button>
            <button className="whitespace-nowrap px-3 py-1.5 rounded-full bg-white/5 text-on-surface-variant border border-white/10 hover:bg-white/10 transition-colors text-xs font-sans font-semibold">Unread</button>
            <button className="whitespace-nowrap px-3 py-1.5 rounded-full bg-white/5 text-on-surface-variant border border-white/10 hover:bg-white/10 transition-colors text-xs font-sans font-semibold flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-error shadow-[0_0_8px_rgba(255,180,171,0.8)]"></div> Priority
            </button>
            <button className="whitespace-nowrap px-3 py-1.5 rounded-full bg-white/5 text-on-surface-variant border border-white/10 hover:bg-white/10 transition-colors text-xs font-sans font-semibold flex items-center gap-1.5">
              <Sparkles size={12} /> AI Replied
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar p-3 space-y-2">
          {/* Email Item 1 (Active) */}
          <div className="relative bg-white/10 border border-primary-container/40 shadow-[0_0_15px_rgba(124,58,237,0.1)] rounded-xl p-4 cursor-pointer">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-10 bg-error rounded-r-full shadow-[0_0_8px_rgba(255,180,171,0.8)]"></div>
            <div className="pl-2">
              <div className="flex justify-between items-start mb-1.5">
                <span className="text-[15px] font-sans font-semibold text-white">Sarah Jenkins</span>
                <span className="text-[11px] font-sans font-medium text-on-surface-variant">10:42 AM</span>
              </div>
              <h3 className="text-sm font-sans font-semibold text-white mb-2 truncate">Urgent: Q4 Marketing Budget Approval</h3>
              <p className="text-xs font-sans text-on-surface-variant/90 line-clamp-2 mb-3 leading-relaxed">
                Hi team, we need to finalize the Q4 budget by end of day. The AI predictions suggest a 15% shortfall if we proceed with current spend. Please review attached docs.
              </p>
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded text-[10px] font-sans font-semibold uppercase tracking-wider bg-error-container/30 text-error border border-error/20">Finance</span>
                <div className="flex items-center gap-1.5 text-[10px] font-sans font-semibold uppercase tracking-wider text-primary">
                  <Sparkles size={12} />
                  <span>AI Score: 98%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Email Item 2 */}
          <div className="relative bg-transparent hover:bg-white/5 border border-transparent rounded-xl p-4 cursor-pointer transition-colors group">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-10 bg-emerald-400/50 rounded-r-full group-hover:bg-emerald-400 transition-colors"></div>
            <div className="pl-2">
              <div className="flex justify-between items-start mb-1.5">
                <span className="text-[15px] font-sans font-semibold text-on-surface">Michael Chen</span>
                <span className="text-[11px] font-sans font-medium text-on-surface-variant">09:15 AM</span>
              </div>
              <h3 className="text-sm font-sans font-medium text-on-surface mb-2 truncate">Project Alpha Deployment Status</h3>
              <p className="text-xs font-sans text-on-surface-variant/80 line-clamp-2 mb-3 leading-relaxed">
                Deployment went smoothly. All systems are green. Waiting for QA sign-off before we route 100% traffic.
              </p>
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded text-[10px] font-sans font-semibold uppercase tracking-wider bg-secondary-container/30 text-secondary border border-secondary/20">Engineering</span>
                <div className="flex items-center gap-1.5 text-[10px] font-sans font-semibold uppercase tracking-wider text-primary/70">
                  <CheckCircle2 size={12} />
                  <span>Auto-Replied</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Detail & AI Action */}
      <div className="flex-1 flex flex-col h-full bg-black/5 relative z-10 min-w-0">
        
        {/* Top Section: Email Detail */}
        <div className="flex-1 flex flex-col p-8 overflow-y-auto custom-scrollbar">
          <div className="flex justify-between items-start mb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-white/20 overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" 
                  alt="Sarah Jenkins" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-display font-semibold text-white">Sarah Jenkins</h2>
                <div className="flex items-center text-sm font-sans text-on-surface-variant mt-1">
                  <span>sarah.j@acmecorp.com</span>
                  <span className="mx-2 text-white/20">•</span>
                  <span>To: Me, Finance Team</span>
                </div>
              </div>
            </div>
            
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-on-surface-variant hover:text-white hover:bg-white/10 transition-all shadow-md">
                <ReplyAll size={18} />
              </button>
              <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-on-surface-variant hover:text-white hover:bg-white/10 transition-all shadow-md">
                <Forward size={18} />
              </button>
              <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-on-surface-variant hover:text-white hover:bg-white/10 transition-all shadow-md">
                <MoreVertical size={18} />
              </button>
            </div>
          </div>

          <h1 className="text-3xl font-display font-bold text-white mb-8 leading-tight">Urgent: Q4 Marketing Budget Approval</h1>
          
          <div className="text-base font-sans text-on-surface/90 leading-relaxed max-w-4xl space-y-6">
            <p>Hi team,</p>
            <p>We need to finalize the Q4 budget by end of day. The AI predictions suggest a 15% shortfall if we proceed with current spend allocations across social channels.</p>
            <p>I've reviewed the preliminary numbers from last week's campaign, and while acquisition costs are down, lifetime value projections are lagging. We need to reallocate roughly $50k from top-of-funnel to retention efforts.</p>
            <p>Please review attached docs and advise if you see any blockers for this reallocation. I need this approved before the executive sync tomorrow at 9 AM.</p>
            <p>Best,<br/>Sarah</p>
          </div>
        </div>

        {/* Bottom Section: AI Analysis & Reply */}
        <div className="flex-shrink-0 bg-surface-dim/90 backdrop-blur-[40px] border-t border-white/10 flex flex-col shadow-[0_-10px_40px_rgba(0,0,0,0.3)]">
          <div className="p-6 flex flex-col h-[340px] max-h-[50vh]">
            {/* AI Analysis Header */}
            <div className="flex justify-between items-end mb-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary-container/20 border border-primary-container/50 flex items-center justify-center shadow-[0_0_15px_rgba(124,58,237,0.3)]">
                  <Sparkles className="text-primary" size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-sans font-semibold text-white">AI Analysis & Draft</h3>
                  <div className="flex gap-2 mt-1.5">
                    <span className="px-2 py-0.5 rounded text-[10px] font-sans font-bold uppercase tracking-wider bg-error-container/30 text-error border border-error/20">Urgent</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-sans font-bold uppercase tracking-wider bg-secondary-container/30 text-secondary border border-secondary/20">Budget Reallocation</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-sans font-bold uppercase tracking-wider bg-white/10 text-white border border-white/20">Requires Action</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[10px] font-sans font-semibold uppercase tracking-wider text-on-surface-variant mb-1.5">Sentiment: Anxious / Urgent</span>
                <div className="w-28 h-1.5 bg-black/40 rounded-full overflow-hidden border border-white/5">
                  <div className="w-[80%] h-full bg-gradient-to-r from-tertiary to-error"></div>
                </div>
              </div>
            </div>

            {/* AI Generated Reply Textarea */}
            <div className="flex-1 relative mb-5">
              <textarea 
                className="w-full h-full bg-black/20 border border-white/10 rounded-xl p-4 text-sm font-sans text-white focus:outline-none focus:border-primary-container/50 focus:ring-1 focus:ring-primary-container/50 resize-none transition-all"
                defaultValue={`Hi Sarah,\n\nI've reviewed the numbers and agree with the AI prediction regarding the 15% shortfall. The proposed reallocation of $50k from top-of-funnel to retention efforts makes strategic sense given the lagging LTV projections.\n\nConsider this approved from my end. Let me know if you need any formal sign-offs in the system before your 9 AM executive sync tomorrow.\n\nThanks,\n[Your Name]`}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between items-center">
              <div className="flex gap-3">
                <button className="bg-white/5 border border-white/10 px-4 py-2.5 rounded-lg text-xs font-sans font-semibold uppercase tracking-wider text-white hover:bg-white/10 transition-colors flex items-center gap-2 shadow-sm">
                  <Edit2 size={14} /> Edit
                </button>
                <button className="bg-white/5 border border-white/10 px-4 py-2.5 rounded-lg text-xs font-sans font-semibold uppercase tracking-wider text-white hover:bg-white/10 transition-colors flex items-center gap-2 shadow-sm">
                  <RefreshCcw size={14} /> Regenerate
                </button>
              </div>
              <div className="flex gap-3">
                <button className="px-4 py-2.5 rounded-lg text-xs font-sans font-semibold uppercase tracking-wider text-on-surface-variant hover:text-white transition-colors border border-transparent hover:border-white/10">
                  Discard
                </button>
                <button className="bg-gradient-to-r from-primary-container to-indigo-500 text-white px-6 py-2.5 rounded-lg text-xs font-sans font-bold uppercase tracking-wider hover:opacity-90 transition-opacity shadow-[0_4px_14px_rgba(124,58,237,0.39)] flex items-center gap-2">
                  <Send size={14} /> Approve & Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
