import React from 'react';
import { 
  ArrowUpRight, 
  ArrowDownRight, 
  MoreHorizontal, 
  Filter,
  Activity,
  Tag,
  CheckCircle2,
  FileText,
  Calendar
} from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

import { Email } from '../data/emails';

export function AnalyticsView({ stats, emails, onNavigate }: { stats: any, emails: Email[], onNavigate: (tab: string) => void }) {
  // Dynamic Category Breakdown
  const categories = emails.reduce((acc: any, email) => {
    acc[email.category] = (acc[email.category] || 0) + 1;
    return acc;
  }, {});

  const dynamicPieData = Object.entries(categories).map(([name, value], index) => ({
    name,
    value: value as number,
    color: ['#7c3aed', '#3131c0', '#a15100', '#10b981', '#f59e0b'][index % 5]
  }));

  // Dynamic Activity Feed (Last 5 sent replies)
  const sentEmails = emails.filter(e => e.replied).sort((a, b) => b.id - a.id).slice(0, 5);

  const lineData = [
    { name: 'Mon', manual: 60, ai: 40 },
    { name: 'Tue', manual: 65, ai: 45 },
    { name: 'Wed', manual: 55, ai: 60 },
    { name: 'Thu', manual: 70, ai: 85 },
    { name: 'Fri', manual: 60, ai: 100 },
    { name: 'Sat', manual: 50, ai: 110 },
    { name: 'Sun', manual: 40, ai: 95 },
  ];
  return (
    <div className="flex h-full w-full">
      {/* Left/Center Column (Metrics & Charts) */}
      <div className="flex-1 flex flex-col gap-4 sm:gap-6 min-w-0 p-4 sm:p-8 overflow-y-auto custom-scrollbar">
        {/* Header */}
        <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between glass-panel rounded-xl px-5 py-4 gap-4 border-white/10 shadow-lg">
          <h2 className="text-xl sm:text-2xl font-display font-semibold text-white">Analytics Overview</h2>
          <div className="flex items-center gap-3 bg-black/20 border border-white/10 rounded-lg px-4 py-2 text-on-surface-variant text-sm cursor-pointer hover:bg-white/5 transition-colors w-full sm:w-auto justify-center">
            <Calendar size={18} />
            <span>Last 30 Days</span>
            <span className="material-symbols-outlined text-[18px]">expand_more</span>
          </div>
        </header>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard title="Total Emails" value={stats.total} trend="12%" up isUp glowColor="bg-primary-container" />
          <StatCard title="Sent (AI)" value={stats.sent} trend={`${stats.resolvedRate}%`} up isUp glowColor="bg-tertiary" />
          <StatCard title="Avg Response" value={<>{stats.avgResponse}<span className="text-2xl text-on-surface-variant ml-1 font-normal">min</span></>} trend="94%" isUp={false} glowColor="bg-primary" />
          <StatCard title="CSAT" value="4.8" trend="0.3" up isUp glowColor="bg-secondary-container" />
        </div>

        {/* Chart Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Bar Chart (Fake UI as per prompt design) */}
          <div className="col-span-1 lg:col-span-3 glass-panel rounded-xl p-6 flex flex-col min-h-[300px]">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-display font-semibold text-white">Volume by Hour</h3>
              <button className="text-on-surface-variant hover:text-white transition-colors">
                <MoreHorizontal size={20} />
              </button>
            </div>
            <div className="flex flex-1 items-end justify-between gap-3 mt-auto pt-4 border-b border-white/10">
              <div className="w-full bg-primary-container/20 hover:bg-primary-container/80 transition-all rounded-t h-[20%] relative group cursor-pointer"></div>
              <div className="w-full bg-primary-container/20 hover:bg-primary-container/80 transition-all rounded-t h-[35%] relative group cursor-pointer"></div>
              <div className="w-full bg-primary-container/20 hover:bg-primary-container/80 transition-all rounded-t h-[60%] relative group cursor-pointer"></div>
              <div className="w-full bg-primary-container/80 hover:bg-primary-container transition-all rounded-t h-[90%] relative group shadow-[0_0_15px_rgba(124,58,237,0.5)] cursor-pointer"></div>
              <div className="w-full bg-primary-container/20 hover:bg-primary-container/80 transition-all rounded-t h-[75%] relative group cursor-pointer"></div>
              <div className="w-full bg-primary-container/20 hover:bg-primary-container/80 transition-all rounded-t h-[40%] relative group cursor-pointer"></div>
              <div className="w-full bg-primary-container/20 hover:bg-primary-container/80 transition-all rounded-t h-[25%] relative group cursor-pointer"></div>
              <div className="w-full bg-primary-container/20 hover:bg-primary-container/80 transition-all rounded-t h-[15%] relative group cursor-pointer"></div>
            </div>
            <div className="flex justify-between mt-3 text-[11px] font-sans font-semibold tracking-wider uppercase text-on-surface-variant/70">
              <span>8 AM</span>
              <span>12 PM</span>
              <span>4 PM</span>
              <span>8 PM</span>
            </div>
          </div>

          {/* Donut Chart */}
          <div className="col-span-1 lg:col-span-2 glass-panel rounded-xl p-6 flex flex-col items-center justify-center relative min-h-[350px]">
            <div className="w-full flex justify-between items-center absolute top-6 left-0 px-6">
              <h3 className="text-lg font-display font-semibold text-white">Category Breakdown</h3>
            </div>
            
            <div className="relative w-48 h-48 mt-8">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={dynamicPieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    stroke="none"
                    dataKey="value"
                  >
                    {dynamicPieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-display font-bold text-white leading-tight mt-1">100%</span>
                <span className="text-[10px] font-sans font-semibold uppercase tracking-wider text-on-surface-variant">Categorized</span>
              </div>
            </div>
          </div>
        </div>

        {/* Chart Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 flex-1 min-h-[350px]">
          {/* Line Chart */}
          <div className="col-span-1 lg:col-span-3 glass-panel rounded-xl p-6 flex flex-col relative overflow-hidden">
            <div className="flex justify-between items-center mb-6 relative z-10">
              <h3 className="text-lg font-display font-semibold text-white">Resolution Time AI vs Manual</h3>
              <div className="flex gap-6">
                <div className="flex items-center gap-2 text-xs font-sans font-semibold text-on-surface-variant uppercase tracking-wider">
                  <div className="w-3 h-1.5 bg-primary-container rounded-full shadow-[0_0_8px_rgba(124,58,237,0.8)]"></div> AI
                </div>
                <div className="flex items-center gap-2 text-xs font-sans font-semibold text-on-surface-variant uppercase tracking-wider">
                  <div className="w-3 h-1.5 bg-white/30 rounded-full"></div> Manual
                </div>
              </div>
            </div>
            
            <div className="flex-1 w-full relative z-10">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={lineData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                  <XAxis dataKey="name" stroke="none" tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }} dy={10} />
                  <YAxis stroke="none" tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'rgba(20,20,35,0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', backdropFilter: 'blur(10px)' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Line type="monotone" dataKey="ai" stroke="#7c3aed" strokeWidth={3} dot={false} activeDot={{ r: 6, fill: '#7c3aed', stroke: '#fff' }} />
                  <Line type="monotone" dataKey="manual" stroke="rgba(255,255,255,0.3)" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            
            {/* Visual background gradient for the chart (aesthetic) */}
            <div className="absolute inset-x-0 bottom-0 top-[30%] bg-gradient-to-t from-primary-container/10 to-transparent pointer-events-none"></div>
          </div>

          {/* Horizontal Bar Chart */}
          <div className="col-span-1 lg:col-span-2 glass-panel rounded-xl p-6 flex flex-col min-h-[250px]">
            <h3 className="text-lg font-display font-semibold text-white mb-8">Top Issues</h3>
            <div className="flex flex-col gap-6 flex-1 justify-center">
              <ProgressBar label="Password Reset" value="45%" percent={45} color="bg-primary-container" />
              <ProgressBar label="Billing Inquiry" value="28%" percent={28} color="bg-secondary-container" />
              <ProgressBar label="Feature Request" value="15%" percent={15} color="bg-tertiary-container" />
              <ProgressBar label="Bug Report" value="12%" percent={12} color="bg-white/20" />
            </div>
          </div>
        </div>

        {/* Mobile Activity Feed (Visible only on mobile/tablet) */}
        <div className="xl:hidden glass-panel rounded-xl p-6 flex flex-col gap-6 mb-8">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-display font-semibold text-white">Recent Activity</h3>
            <button onClick={() => onNavigate('sent')} className="text-xs font-bold text-primary uppercase tracking-widest hover:underline">View All</button>
          </div>
          <div className="flex flex-col gap-8">
            {sentEmails.slice(0, 3).map((email, idx) => (
              <FeedItem 
                key={email.id}
                icon={<Activity size={16} className="text-primary" />} 
                iconBg="bg-primary-container/20 border-primary/50 shadow-[0_0_12px_rgba(124,58,237,0.4)]"
                title={`Replied to ${email.sender}`}
                time="Just now"
                last={idx === 2}
              >
                <div className="mt-3 bg-black/20 border border-white/5 rounded-lg p-3 text-xs text-on-surface-variant/90 leading-relaxed break-words line-clamp-2">
                  "{email.sentReply || email.preview}"
                </div>
              </FeedItem>
            ))}
          </div>
        </div>
      </div>

      {/* Right Sidebar (Activity Feed) - Hidden on mobile */}
      <aside className="hidden xl:flex w-80 flex-shrink-0 glass-panel border-y-0 border-r-0 lg:border-l border-white/10 flex-col h-full bg-black/10 backdrop-blur-md overflow-hidden">
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-h-0 p-6">
          <div className="flex items-center justify-between mb-8 flex-shrink-0">
            <h3 className="text-xl font-display font-semibold text-white">Activity Feed</h3>
            <Filter size={18} className="text-on-surface-variant hover:text-white cursor-pointer transition-colors" />
          </div>
          
          <div className="flex-1 overflow-y-auto pr-2 flex flex-col gap-8 custom-scrollbar">
            {sentEmails.length > 0 ? sentEmails.map((email, idx) => (
              <FeedItem 
                key={email.id}
                icon={<Activity size={16} className="text-primary" />} 
                iconBg="bg-primary-container/20 border-primary/50 shadow-[0_0_12px_rgba(124,58,237,0.4)]"
                title={`Replied to ${email.sender}`}
                time="Just now"
                last={idx === sentEmails.length - 1}
              >
                <div className="mt-3 bg-black/20 border border-white/5 rounded-lg p-3 text-xs text-on-surface-variant/90 leading-relaxed break-words line-clamp-3">
                  "{email.sentReply || email.preview}"
                </div>
              </FeedItem>
            )) : (
              <div className="text-center py-10 opacity-30 flex flex-col items-center">
                <Activity size={40} className="mb-4" />
                <p className="text-sm font-bold uppercase tracking-widest">No recent activity</p>
              </div>
            )}
          </div>
        </div>
        
        {/* Footer Area */}
        <div className="p-6 border-t border-white/10 flex-shrink-0">
          <button 
            onClick={() => onNavigate('sent')}
            className="w-full py-3 rounded-lg border border-white/10 text-on-surface-variant font-sans font-semibold text-sm hover:bg-white/5 hover:text-white transition-all active:scale-[0.98] group relative overflow-hidden"
          >
            <span className="relative z-10">View All Activity</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </button>
        </div>
      </aside>
    </div>
  );
}

// Subcomponents

function StatCard({ title, value, trend, isUp, glowColor }: any) {
  return (
    <div className="glass-panel rounded-xl p-6 flex flex-col gap-2 relative overflow-hidden group hover:bg-white/5 transition-colors border border-white/10 cursor-pointer shadow-lg">
      <div className={`absolute -right-4 -top-4 w-20 h-20 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity ${glowColor}`}></div>
      <span className="text-sm font-sans font-medium text-on-surface-variant">{title}</span>
      <div className="flex items-baseline gap-3 mt-1">
        <span className="text-4xl font-display font-bold text-white tracking-tight">{value}</span>
        <span className={`text-[10px] font-sans font-bold flex items-center px-1.5 py-0.5 rounded border 
          ${isUp ? 'bg-secondary/10 text-secondary border-secondary/20' : 'bg-primary/10 text-primary border-primary/20'}`}>
          {isUp ? <ArrowUpRight size={12} className="mr-0.5" /> : <ArrowDownRight size={12} className="mr-0.5" />} 
          {trend}
        </span>
      </div>
    </div>
  );
}

function ProgressBar({ label, value, percent, color }: any) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between text-sm font-sans text-on-surface-variant">
        <span>{label}</span>
        <span className="text-white font-medium">{value}</span>
      </div>
      <div className="w-full h-2 bg-black/30 rounded-full overflow-hidden border border-white/5">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${percent}%` }}></div>
      </div>
    </div>
  );
}

function FeedItem({ icon, iconBg, title, time, desc, children, last }: any) {
  return (
    <div className="flex gap-4 relative">
      {!last && <div className="absolute left-[15px] top-8 bottom-[-32px] w-px bg-white/10"></div>}
      <div className={`relative z-10 w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 ${iconBg}`}>
        {icon}
      </div>
      <div className="flex flex-col flex-1 pb-2 min-w-0">
        <p className="text-sm font-sans font-medium text-white">{title}</p>
        <span className="text-[10px] font-sans font-semibold text-on-surface-variant/60 uppercase tracking-wider mt-1">{time}</span>
        {desc && <p className="text-xs font-sans text-on-surface-variant/80 mt-2 leading-relaxed">{desc}</p>}
        {children}
      </div>
    </div>
  );
}
