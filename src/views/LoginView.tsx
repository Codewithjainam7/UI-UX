import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Lock, Mail, ArrowRight, ShieldCheck, Cpu, Globe, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LoginViewProps {
  onLogin: (email: string) => void;
}

export function LoginView({ onLogin }: LoginViewProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    setTimeout(() => {
      if (email === 'admin@debales.ai' && password === 'admin') {
        onLogin(email);
      } else {
        setError('UNAUTHORIZED ACCESS: Check credentials');
        setIsLoading(false);
      }
    }, 2000);
  };

  return (
    <div className="min-h-screen w-full bg-[#020617] flex items-center justify-center p-6 relative overflow-hidden font-sans">
      {/* Immersive Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(15,23,42,0)_0%,#020617_100%)] z-10" />
        
        {/* Animated Mesh Gradients */}
        <motion.div 
          animate={{ 
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -left-1/4 w-[1000px] h-[1000px] bg-primary/20 blur-[150px] rounded-full opacity-40"
        />
        <motion.div 
          animate={{ 
            x: [0, -80, 0],
            y: [0, 120, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute -bottom-1/4 -right-1/4 w-[1000px] h-[1000px] bg-indigo-500/20 blur-[150px] rounded-full opacity-30"
        />
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none z-20" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] z-10" />
      </div>

      {/* Floating System Stats (Decorative) */}
      <div className="absolute top-12 left-12 z-20 hidden lg:flex flex-col gap-6 opacity-40">
        <div className="flex items-center gap-3">
          <div className="w-1 h-12 bg-gradient-to-b from-primary to-transparent rounded-full" />
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-primary uppercase tracking-[0.3em]">Core Status</span>
            <span className="text-xs text-white font-mono uppercase tracking-widest mt-1 font-bold">Optimal / 2.4ghz</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-1 h-12 bg-gradient-to-b from-indigo-500 to-transparent rounded-full" />
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-[0.3em]">Neural Link</span>
            <span className="text-xs text-white font-mono uppercase tracking-widest mt-1 font-bold">Encrypted / Active</span>
          </div>
        </div>
      </div>

      <motion.div 
        style={{ x: mousePos.x, y: mousePos.y }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-[540px] relative z-30"
      >
        {/* Card Container */}
        <div className="relative group">
          {/* Outer Prismatic Glow */}
          <div className="absolute -inset-20 bg-primary/10 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          
          {/* Animated Border */}
          <div className="absolute -inset-[1.5px] bg-gradient-to-br from-white/20 via-primary/40 to-white/10 rounded-[40px] blur-[0.5px]" />
          
          {/* Main Card */}
          <div className="relative bg-slate-950/40 backdrop-blur-[100px] rounded-[40px] p-10 sm:p-14 border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.8)] overflow-hidden">
            {/* Inner highlights */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

            {/* Logo Section */}
            <div className="flex flex-col items-center mb-12">
              <motion.div 
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="relative mb-6"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-indigo-600 rounded-[28px] flex items-center justify-center shadow-[0_0_50px_rgba(124,58,237,0.5)] relative z-10 overflow-hidden border border-white/20">
                  <Sparkles className="text-white" size={48} />
                  {/* Internal scan effect */}
                  <motion.div 
                    animate={{ y: [-100, 200] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent"
                  />
                </div>
                {/* Outer halo */}
                <div className="absolute inset-[-15px] bg-primary/20 blur-2xl rounded-full animate-pulse" />
              </motion.div>
              
              <h1 className="text-5xl font-display font-black text-white tracking-tighter mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
                Debales AI
              </h1>
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary/40" />
                <p className="text-primary-container font-sans font-black tracking-[0.5em] uppercase text-[10px] drop-shadow-sm">Security Terminal</p>
                <div className="h-px w-8 bg-gradient-to-l from-transparent to-primary/40" />
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-3">
                <label className="text-[10px] font-sans font-black text-white/40 uppercase tracking-[0.3em] ml-2">Operator ID</label>
                <div className="relative group/input">
                  <div className="absolute left-5 top-1/2 -translate-y-1/2 z-10">
                    <Mail size={20} className="text-white/20 group-focus-within/input:text-primary transition-colors duration-300" />
                  </div>
                  <input 
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-16 bg-white/[0.02] border border-white/5 rounded-2xl pl-14 pr-4 text-white font-sans text-lg focus:outline-none focus:ring-1 focus:ring-primary/50 focus:bg-white/[0.05] transition-all placeholder:text-white/5 placeholder:font-bold"
                    placeholder="ADMIN@DEBALES.AI"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-focus-within/input:opacity-100 transition-opacity pointer-events-none" />
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center ml-2">
                  <label className="text-[10px] font-sans font-black text-white/40 uppercase tracking-[0.3em]">Access Key</label>
                  <span className="text-[10px] font-bold text-primary/40 hover:text-primary cursor-pointer transition-colors uppercase tracking-widest">Protocol Reset</span>
                </div>
                <div className="relative group/input">
                  <div className="absolute left-5 top-1/2 -translate-y-1/2 z-10">
                    <Lock size={20} className="text-white/20 group-focus-within/input:text-primary transition-colors duration-300" />
                  </div>
                  <input 
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full h-16 bg-white/[0.02] border border-white/5 rounded-2xl pl-14 pr-4 text-white font-sans text-lg focus:outline-none focus:ring-1 focus:ring-primary/50 focus:bg-white/[0.05] transition-all placeholder:text-white/5 placeholder:font-bold"
                    placeholder="••••••••"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-focus-within/input:opacity-100 transition-opacity pointer-events-none" />
                </div>
              </div>

              {error && (
                <motion.div 
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-500/10 border border-red-500/20 text-red-400 text-[11px] py-4 px-5 rounded-2xl font-bold flex items-center gap-3 uppercase tracking-wider"
                >
                  <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)] animate-pulse" />
                  {error}
                </motion.div>
              )}

              <button 
                type="submit"
                disabled={isLoading}
                className="w-full h-18 bg-primary hover:bg-primary-hover text-white rounded-2xl font-sans font-black text-lg flex items-center justify-center gap-4 shadow-[0_20px_50px_rgba(124,58,237,0.3)] hover:shadow-[0_25px_60px_rgba(124,58,237,0.5)] active:scale-[0.98] transition-all disabled:opacity-50 relative group/btn overflow-hidden border border-white/20"
              >
                {isLoading ? (
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span className="uppercase tracking-[0.2em] text-sm">Authenticating...</span>
                  </div>
                ) : (
                  <>
                    <span className="uppercase tracking-[0.3em]">Initialize System</span>
                    <ArrowRight className="group-hover/btn:translate-x-2 transition-transform duration-500" size={24} />
                  </>
                )}
                {/* Prismatic fill effect */}
                <motion.div 
                  animate={{ x: [-300, 600] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-30"
                />
              </button>
            </form>
          </div>
        </div>

        {/* Dynamic System Info Footer */}
        <div className="mt-12 flex flex-col items-center gap-6 opacity-30 hover:opacity-100 transition-opacity duration-700">
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-2">
              <Globe size={14} className="text-primary" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Global Nodes: 12</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap size={14} className="text-indigo-400" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Latency: 14ms</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={14} className="text-emerald-400" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Verified</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4 px-6 py-2 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-md">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[9px] font-black uppercase tracking-[0.5em] text-white/60">System Ready for Deployment</span>
          </div>
        </div>
      </motion.div>

      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[10%] left-[10%] w-2 h-2 bg-white/20 rounded-full animate-ping" />
        <div className="absolute bottom-[20%] right-[15%] w-1.5 h-1.5 bg-white/10 rounded-full animate-ping [animation-delay:1s]" />
      </div>
    </div>
  );
}
