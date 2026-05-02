import React from 'react';
import { Brain, Zap, TrendingUp, TrendingDown, Trash2, AlertCircle, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ComponentLibraryView() {
  return (
    <div className="p-8 max-w-7xl mx-auto w-full pb-24">
      <header className="mb-12">
        <h2 className="text-display-lg font-display text-white mb-2 leading-tight tracking-tight">
          Component Library
        </h2>
        <p className="text-lg font-sans text-on-surface-variant max-w-2xl">
          A showcase of Debales AI design system components, featuring Liquid Glassmorphism, refractive depth, and premium interaction patterns.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column */}
        <div className="col-span-1 lg:col-span-8 flex flex-col gap-6">
          
          <section className="glass-panel rounded-xl p-6">
            <h3 className="text-xl font-display font-semibold text-white mb-6 border-b border-white/10 pb-4">Buttons</h3>
            <div className="flex flex-wrap gap-6 items-center">
              <button className="bg-gradient-to-r from-primary-container to-indigo-500 text-white px-6 py-2.5 rounded-lg shadow-[0_4px_14px_0_rgba(124,58,237,0.39)] font-sans font-semibold hover:opacity-90 transition-opacity">
                Primary
              </button>
              <button className="bg-transparent border border-white/20 text-white px-6 py-2.5 rounded-lg backdrop-blur-[40px] hover:bg-white/10 transition-colors font-sans font-semibold">
                Secondary
              </button>
              <button className="text-on-surface hover:text-white px-6 py-2.5 rounded-lg hover:bg-white/5 transition-colors font-sans font-semibold">
                Ghost Action
              </button>
              <button className="bg-error-container/20 text-error border border-error/30 px-6 py-2.5 rounded-lg hover:bg-error-container/40 transition-colors font-sans font-semibold flex items-center gap-2">
                <Trash2 size={18} /> Destructive
              </button>
            </div>
          </section>

          <section className="glass-panel rounded-xl p-6">
            <h3 className="text-xl font-display font-semibold text-white mb-6 border-b border-white/10 pb-4">Input Fields</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-sans font-semibold text-on-surface-variant tracking-wider uppercase">Default Input</label>
                <input 
                  type="text" 
                  placeholder="Enter query..."
                  className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-on-surface-variant/50 focus:outline-none transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-sans font-semibold text-on-surface-variant tracking-wider uppercase">Focused State</label>
                <input 
                  type="text" 
                  value="System prompt active"
                  readOnly
                  className="w-full bg-black/20 border border-primary-container/50 shadow-[0_0_15px_rgba(124,58,237,0.2)] rounded-lg px-4 py-2.5 text-white focus:outline-none transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-sans font-semibold text-on-surface-variant tracking-wider uppercase">Error State</label>
                <input 
                  type="text" 
                  value="Invalid API Key"
                  readOnly
                  className="w-full bg-error-container/10 border border-error/50 rounded-lg px-4 py-2.5 text-error focus:outline-none transition-colors"
                />
                <span className="text-xs text-error mt-1 flex items-center gap-1">
                  <AlertCircle size={12} /> Authentication failed
                </span>
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-panel rounded-xl p-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                <Brain className="text-primary-container w-10 h-10 drop-shadow-[0_0_15px_rgba(124,58,237,0.8)]" />
              </div>
              <h4 className="text-sm font-sans text-on-surface-variant mb-2">Model Confidence</h4>
              <p className="text-display-lg font-display font-bold text-white leading-none">99.8%</p>
              <div className="mt-4 flex items-center gap-2 text-xs text-secondary">
                <TrendingUp size={16} />
                <span>+0.4% from last epoch</span>
              </div>
            </div>

            <div className="glass-panel rounded-xl p-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                <Zap className="text-tertiary w-10 h-10 drop-shadow-[0_0_15px_rgba(255,183,132,0.8)]" fill="currentColor" />
              </div>
              <h4 className="text-sm font-sans text-on-surface-variant mb-2">Processing Latency</h4>
              <p className="text-display-lg font-display font-bold text-white leading-none">12ms</p>
              <div className="mt-4 flex items-center gap-2 text-xs text-tertiary">
                <TrendingDown size={16} />
                <span>Optimal performance</span>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="col-span-1 lg:col-span-4 flex flex-col gap-6">
          <section className="glass-panel rounded-xl p-6">
            <h3 className="text-xl font-display font-semibold text-white mb-6 border-b border-white/10 pb-4">Badges & Tags</h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-on-surface-variant">Status: Active</span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-900/30 text-emerald-400 border border-emerald-500/40 flex items-center gap-1.5 backdrop-blur-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span> Stable
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-on-surface-variant">Processing Error</span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-error-container/30 text-error border border-error/40 flex items-center gap-1.5 backdrop-blur-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-error shadow-[0_0_8px_rgba(255,180,171,0.8)]"></span> Failed
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-on-surface-variant">AI Pulse</span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary-container/20 text-primary border border-primary-container/50 flex items-center gap-1.5 backdrop-blur-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(210,187,255,0.8)] animate-pulse"></span> Analyzing
                </span>
              </div>
            </div>
          </section>

          <section className="glass-panel rounded-xl p-6">
            <h3 className="text-xl font-display font-semibold text-white mb-6 border-b border-white/10 pb-4">Toggles & Avatars</h3>
            
            <div className="flex items-center justify-between mb-6">
              <span className="text-base text-white">Auto-Optimization</span>
              <div className="w-12 h-6 rounded-full bg-primary-container/40 border border-primary-container/60 relative cursor-pointer shadow-[inset_0_0_10px_rgba(124,58,237,0.3)]">
                <div className="absolute right-1 top-0.5 w-4 h-4 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"></div>
              </div>
            </div>
            
            <div className="flex items-center justify-between mb-8">
              <span className="text-base text-on-surface-variant">Debug Mode</span>
              <div className="w-12 h-6 rounded-full bg-black/40 border border-white/20 relative cursor-pointer">
                <div className="absolute left-1 top-0.5 w-4 h-4 rounded-full bg-white/50"></div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full border border-white/20 shadow-lg overflow-hidden flex-shrink-0">
                <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop" alt="Avatar" className="w-full h-full object-cover" />
              </div>
              <div className="flex -space-x-3">
                <div className="w-8 h-8 rounded-full border-2 border-surface shadow-md overflow-hidden flex-shrink-0 z-10">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop" alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-surface bg-surface-bright flex items-center justify-center text-xs text-white font-semibold shadow-md z-0">
                  +3
                </div>
              </div>
            </div>
          </section>

          <section className="glass-panel rounded-xl p-6 flex flex-col gap-6">
            <div>
              <h4 className="text-sm font-sans text-on-surface-variant mb-4">Loading State</h4>
              <div className="animate-pulse flex flex-col gap-3">
                <div className="h-4 bg-white/10 rounded-full w-3/4"></div>
                <div className="h-4 bg-white/10 rounded-full w-1/2"></div>
                <div className="h-4 bg-white/10 rounded-full w-5/6"></div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-lg p-4 flex items-start gap-3 shadow-lg relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500"></div>
                <CheckCircle2 className="text-emerald-400 mt-0.5 flex-shrink-0" size={20} />
                <div>
                  <p className="text-sm font-sans text-white font-semibold">Deployment Successful</p>
                  <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">Model v2.4 is now live and processing.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
