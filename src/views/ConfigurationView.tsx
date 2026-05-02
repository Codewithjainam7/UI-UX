import React from 'react';
import { 
  Cpu, 
  Settings2, 
  PlusCircle, 
  MessageSquare, 
  Truck, 
  RefreshCcw, 
  AlertTriangle,
  Tags,
  X,
  Plus,
  Clock,
  Info,
  PenTool,
  Save
} from 'lucide-react';

export function ConfigurationView() {
  return (
    <div className="p-8 max-w-7xl mx-auto w-full pb-24">
      <header className="mb-8">
        <h2 className="text-display-lg font-display text-white mb-2 leading-tight tracking-tight">
          AI Configuration
        </h2>
        <p className="text-lg font-sans text-on-surface-variant max-w-2xl">
          Manage model behavior, automation rules, and communication styling.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Model Configuration */}
        <div className="col-span-1 md:col-span-7 glass-panel rounded-xl p-6 flex flex-col gap-6">
          <div className="flex items-center gap-3 border-b border-white/10 pb-4">
            <div className="w-10 h-10 rounded-lg bg-primary-container/20 flex items-center justify-center border border-primary/30">
              <Cpu className="text-primary" size={20} />
            </div>
            <div>
              <h3 className="text-xl font-display font-semibold text-white">Model Configuration</h3>
              <p className="text-sm font-sans text-on-surface-variant">Select and tune the underlying language model.</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-sans font-semibold text-on-surface-variant tracking-wider uppercase">Base Engine</label>
              <div className="relative">
                <select className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white font-sans appearance-none focus:outline-none focus:border-primary-container/50 focus:ring-1 focus:ring-primary-container/50">
                  <option value="gpt4o">GPT-4o (Optimized)</option>
                  <option value="claude3">Claude 3.5 Sonnet</option>
                  <option value="gemini">Gemini 1.5 Pro</option>
                </select>
                <Settings2 className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none" size={18} />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-sans font-semibold text-on-surface-variant tracking-wider uppercase">Creativity / Temperature</label>
                <span className="text-sm text-primary font-semibold">0.7</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="1" 
                step="0.1" 
                defaultValue="0.7" 
                className="w-full accent-primary-container h-1 bg-surface-bright rounded-full appearance-none cursor-pointer mt-2" 
              />
              <div className="flex justify-between text-[11px] font-sans text-on-surface-variant/50 mt-1">
                <span>Precise</span>
                <span>Balanced</span>
                <span>Creative</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-sans font-semibold text-on-surface-variant tracking-wider uppercase">Response Length</label>
                <div className="flex bg-black/20 rounded-lg p-1 border border-white/10">
                  <button className="flex-1 py-1.5 rounded text-center text-sm font-sans text-on-surface-variant hover:text-white transition-colors">Brief</button>
                  <button className="flex-1 py-1.5 rounded text-center text-sm font-sans bg-surface-variant text-white shadow-sm border border-white/10">Standard</button>
                  <button className="flex-1 py-1.5 rounded text-center text-sm font-sans text-on-surface-variant hover:text-white transition-colors">Detailed</button>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-sans font-semibold text-on-surface-variant tracking-wider uppercase">Brand Tone</label>
                <div className="flex bg-black/20 rounded-lg p-1 border border-white/10">
                  <button className="flex-1 py-1.5 rounded text-center text-sm font-sans bg-surface-variant text-white shadow-sm border border-white/10">Professional</button>
                  <button className="flex-1 py-1.5 rounded text-center text-sm font-sans text-on-surface-variant hover:text-white transition-colors">Friendly</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Auto-Reply Rules */}
        <div className="col-span-1 md:col-span-5 glass-panel rounded-xl p-6 flex flex-col gap-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-secondary-container/20 flex items-center justify-center border border-secondary/30">
                <Settings2 className="text-secondary" size={20} />
              </div>
              <h3 className="text-xl font-display font-semibold text-white">Auto-Reply Rules</h3>
            </div>
            <button className="text-primary hover:text-primary-container transition-colors">
              <PlusCircle size={22} />
            </button>
          </div>
          
          <div className="flex flex-col gap-3 flex-1 overflow-y-auto pr-2 custom-scrollbar">
            {/* Rule 1 */}
            <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group">
              <div className="flex items-center gap-3">
                <MessageSquare className="text-on-surface-variant group-hover:text-primary transition-colors" size={20} />
                <div>
                  <p className="text-base font-sans text-white font-medium">General Inquiries</p>
                  <p className="text-xs text-on-surface-variant">Standard greeting & triage</p>
                </div>
              </div>
              <div className="w-10 h-5 rounded-full bg-primary-container/80 relative cursor-pointer shadow-[inset_0_0_10px_rgba(124,58,237,0.3)] shrink-0 border border-white/20">
                <div className="absolute right-0.5 top-[1px] w-4 h-4 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"></div>
              </div>
            </div>

            {/* Rule 2 */}
            <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group">
              <div className="flex items-center gap-3">
                <Truck className="text-on-surface-variant group-hover:text-primary transition-colors" size={20} />
                <div>
                  <p className="text-base font-sans text-white font-medium">Order Status</p>
                  <p className="text-xs text-on-surface-variant">Fetch via API integration</p>
                </div>
              </div>
              <div className="w-10 h-5 rounded-full bg-primary-container/80 relative cursor-pointer shadow-[inset_0_0_10px_rgba(124,58,237,0.3)] shrink-0 border border-white/20">
                <div className="absolute right-0.5 top-[1px] w-4 h-4 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"></div>
              </div>
            </div>

            {/* Rule 3 */}
            <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group opacity-60">
              <div className="flex items-center gap-3">
                <RefreshCcw className="text-on-surface-variant" size={20} />
                <div>
                  <p className="text-base font-sans text-white font-medium">Refund Requests</p>
                  <p className="text-xs text-on-surface-variant">Draft only, manual review</p>
                </div>
              </div>
              <div className="w-10 h-5 rounded-full bg-black/40 border border-white/20 relative cursor-pointer shrink-0">
                <div className="absolute left-0.5 top-[1px] w-4 h-4 rounded-full bg-white/50"></div>
              </div>
            </div>

            {/* Rule 4 */}
            <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group">
              <div className="flex items-center gap-3">
                <AlertTriangle className="text-on-surface-variant group-hover:text-error transition-colors" size={20} />
                <div>
                  <p className="text-base font-sans text-white font-medium">Auto-escalate</p>
                  <p className="text-xs text-on-surface-variant">High sentiment severity</p>
                </div>
              </div>
              <div className="w-10 h-5 rounded-full bg-error-container relative cursor-pointer shrink-0 border border-error/50">
                <div className="absolute right-0.5 top-[1px] w-4 h-4 rounded-full bg-white shadow-[0_0_8px_rgba(255,180,171,0.8)]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Routing */}
        <div className="col-span-1 md:col-span-6 glass-panel rounded-xl p-6 flex flex-col gap-4">
          <div className="flex items-center gap-3 border-b border-white/10 pb-4">
            <div className="w-10 h-10 rounded-lg bg-tertiary-container/20 flex items-center justify-center border border-tertiary/30">
              <Tags className="text-tertiary" size={20} />
            </div>
            <div>
              <h3 className="text-xl font-display font-semibold text-white">Category Routing</h3>
              <p className="text-sm font-sans text-on-surface-variant">Keywords mapping to specific queues.</p>
            </div>
          </div>
          
          <div className="space-y-6 pt-2">
            <div>
              <p className="text-xs font-sans font-semibold text-on-surface-variant tracking-wider uppercase mb-3">Refund & Billing</p>
              <div className="flex flex-wrap gap-2">
                {['Refund', 'Charge', 'Invoice'].map(tag => (
                  <span key={tag} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-tertiary/40 text-white text-sm">
                    {tag} <button className="hover:text-tertiary transition-colors"><X size={14} /></button>
                  </span>
                ))}
                <button className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-dashed border-white/30 hover:border-tertiary transition-colors text-on-surface-variant hover:text-tertiary">
                  <Plus size={16} />
                </button>
              </div>
            </div>

            <div>
              <p className="text-xs font-sans font-semibold text-on-surface-variant tracking-wider uppercase mb-3">Technical Support</p>
              <div className="flex flex-wrap gap-2">
                {['Bug', 'Login Issue', 'API'].map(tag => (
                  <span key={tag} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-secondary/40 text-white text-sm">
                    {tag} <button className="hover:text-secondary transition-colors"><X size={14} /></button>
                  </span>
                ))}
                <button className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-dashed border-white/30 hover:border-secondary transition-colors text-on-surface-variant hover:text-secondary">
                  <Plus size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Operating Hours */}
        <div className="col-span-1 md:col-span-6 glass-panel rounded-xl p-6 flex flex-col gap-4">
          <div className="flex items-center gap-3 border-b border-white/10 pb-4">
            <div className="w-10 h-10 rounded-lg bg-surface-bright flex items-center justify-center border border-white/20">
              <Clock className="text-white" size={20} />
            </div>
            <div>
              <h3 className="text-xl font-display font-semibold text-white">Operating Hours</h3>
              <p className="text-sm font-sans text-on-surface-variant">Define when handoffs occur.</p>
            </div>
          </div>
          
          <div className="space-y-5 pt-2">
            <div className="flex items-center justify-between">
              <span className="font-sans text-white font-medium w-24">Weekdays</span>
              <div className="flex items-center gap-3 flex-1">
                <input 
                  type="time" 
                  defaultValue="09:00" 
                  className="bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-sm text-white w-full focus:outline-none focus:border-primary-container/50" 
                />
                <span className="text-on-surface-variant text-sm font-medium">to</span>
                <input 
                  type="time" 
                  defaultValue="18:00" 
                  className="bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-sm text-white w-full focus:outline-none focus:border-primary-container/50" 
                />
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="font-sans text-white font-medium w-24">Weekends</span>
              <div className="flex items-center gap-3 flex-1">
                <div className="bg-black/40 border border-dashed border-white/20 rounded-lg px-3 py-2 text-sm text-on-surface-variant/50 w-full text-center cursor-not-allowed">
                  Offline
                </div>
              </div>
            </div>
            
            <div className="pt-2">
              <p className="text-[13px] font-sans text-primary flex items-start gap-2 bg-primary-container/10 p-3 rounded-lg border border-primary/20 leading-relaxed">
                <Info size={16} className="mt-0.5 shrink-0" />
                Outside these hours, all queries route to AI automatically.
              </p>
            </div>
          </div>
        </div>

        {/* AI Agent Signature */}
        <div className="col-span-1 md:col-span-12 glass-panel rounded-xl p-6 flex flex-col gap-4">
          <div className="flex items-center gap-3 border-b border-white/10 pb-4">
            <div className="w-10 h-10 rounded-lg bg-surface-bright flex items-center justify-center border border-white/20">
              <PenTool className="text-white" size={20} />
            </div>
            <div>
              <h3 className="text-xl font-display font-semibold text-white">AI Agent Signature</h3>
              <p className="text-sm font-sans text-on-surface-variant">Appended to automated responses.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-sans font-semibold text-on-surface-variant tracking-wider uppercase">Template</label>
              <textarea 
                className="w-full bg-black/20 border border-white/10 rounded-lg p-4 text-sm text-white resize-none font-mono focus:outline-none focus:border-primary-container/50" 
                rows={5}
                defaultValue={`--\nBest regards,\nDebales AI Assistant\n[Company Name] Support Team\nVisit our Help Center: support.example.com`}
              />
              <div className="flex gap-2 mt-2">
                <span className="text-[11px] px-2 py-1 bg-white/5 rounded border border-white/10 text-on-surface-variant cursor-pointer hover:bg-white/10 transition-colors">{'{ticket.id}'}</span>
                <span className="text-[11px] px-2 py-1 bg-white/5 rounded border border-white/10 text-on-surface-variant cursor-pointer hover:bg-white/10 transition-colors">{'{user.name}'}</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-xs font-sans font-semibold text-on-surface-variant tracking-wider uppercase">Live Preview</label>
              <div className="flex-1 bg-black/20 rounded-lg p-5 border border-white/10 flex flex-col justify-end">
                <div className="space-y-2 opacity-30 mb-6">
                  <div className="h-2.5 bg-white/50 rounded-full w-3/4"></div>
                  <div className="h-2.5 bg-white/50 rounded-full w-1/2"></div>
                </div>
                <div className="text-sm font-sans text-on-surface-variant border-t border-white/10 pt-4 leading-relaxed">
                  --<br/>
                  Best regards,<br/>
                  <strong className="text-primary font-semibold">Debales AI Assistant</strong><br/>
                  Acme Corp Support Team<br/>
                  <span className="text-secondary hover:underline cursor-pointer">Visit our Help Center: support.example.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 right-0 w-full md:w-[calc(100%-16rem)] p-6 bg-surface-dim/80 backdrop-blur-md border-t border-white/10 flex justify-end gap-4 z-30">
        <button className="px-6 py-2.5 rounded-lg border border-white/20 text-white font-sans font-semibold text-sm hover:bg-white/5 transition-colors">
          Discard Changes
        </button>
        <button className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-primary-container to-indigo-500 text-white font-sans font-semibold text-sm shadow-[0_4px_14px_rgba(124,58,237,0.39)] hover:opacity-90 transition-opacity flex items-center gap-2">
          <Save size={18} />
          Save Configuration
        </button>
      </div>
    </div>
  );
}
