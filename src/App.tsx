import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Antigravity from './Antigravity';
import { 
  Terminal, 
  Play, 
  Copy, 
  Check, 
  Heart, 
  MessageSquare, 
  Repeat2, 
  Share,
  ArrowRight,
  Download,
  Github,
  Flame,
  Zap,
  Shield,
  Monitor,
  Menu,
  X
} from 'lucide-react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  color: string;
}

export default function App() {
  const [stars, setStars] = useState<Star[]>([]);
  const [activeTab, setActiveTab] = useState<'windows' | 'macos' | 'linux'>('windows');
  const [copied, setCopied] = useState(false);
  const [likes, setLikes] = useState([142, 89, 214, 156]);
  const [liked, setLiked] = useState([false, false, false, false]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Generate stars for the background
  useEffect(() => {
    const starColors = ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FF4A4A', '#FFA3A3'];
    const generatedStars = Array.from({ length: 90 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.8 + 0.6,
      opacity: Math.random() * 0.7 + 0.3,
      color: starColors[Math.floor(Math.random() * starColors.length)]
    }));
    setStars(generatedStars);
  }, []);

  // Determine current command based on selected tab and OS
  const getCommandInfo = () => {
    switch (activeTab) {
      case 'windows':
        return {
          comment: '# Works on Windows. Installs everything. You\'re welcome. 🚀',
          command: 'powershell -c "irm https://raw.githubusercontent.com/AdamZoda/stremio/main/install.ps1 | iex"',
          footnote: 'Works on Windows Powershell. Auto-detects dependencies and installs them securely.'
        };
      case 'macos':
        return {
          comment: '# Works on macOS (Apple). Simple shell installer. 🍏',
          command: 'curl -sS https://raw.githubusercontent.com/AdamZoda/stremio/main/install.sh | bash',
          footnote: 'Works on Terminal (zsh/bash). Sets up local environment and binaries automatically.'
        };
      case 'linux':
        return {
          comment: '# Works on Linux. Installs everything seamlessly. 🐧',
          command: 'wget -qO- https://raw.githubusercontent.com/AdamZoda/stremio/main/install.sh | bash',
          footnote: 'Works on any Linux distro terminal. Direct binary integration.'
        };
    }
  };

  const { comment, command, footnote } = getCommandInfo();

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleLike = (index: number) => {
    const newLiked = [...liked];
    newLiked[index] = !newLiked[index];
    setLiked(newLiked);

    const newLikes = [...likes];
    newLikes[index] = newLiked[index] ? newLikes[index] + 1 : newLikes[index] - 1;
    setLikes(newLikes);
  };

  return (
    <div id="casawytub-app" className="bg-[#050508] text-[#F3F4F6] font-sans min-h-screen relative overflow-x-hidden selection:bg-[#FF4A4A] selection:text-white">
      
      {/* High-priority Antigravity Cursor Overlay */}
      <div style={{ width: '100%', height: '100vh', position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 9999 }}>
        <Antigravity
          count={280}
          magnetRadius={15}
          ringRadius={8}
          waveSpeed={0.5}
          waveAmplitude={1.2}
          particleSize={1.5}
          lerpSpeed={0.06}
          color="#FF4A4A"
          autoAnimate={true}
          particleVariance={0.8}
          rotationSpeed={0.02}
          particleShape="capsule"
        />
      </div>

      {/* Starry Night Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: star.color,
              boxShadow: star.color === '#FF4A4A' ? '0 0 4px #FF4A4A' : 'none',
              opacity: star.opacity,
              animation: `twinkle ${2 + (star.id % 4)}s ease-in-out infinite alternate`,
              animationDelay: `${star.id % 3}s`
            }}
          />
        ))}
        {/* Soft glowing ambient circular filters (Vibrant Coral/Red theme) */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-radial from-[#FF4A4A]/8 to-transparent blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-radial from-[#FF4A4A]/5 to-transparent blur-[100px]" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Top Header Navbar */}
        <header id="navbar" className="border-b border-white/10 bg-black/40 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              <a href="#howtouse" className="px-4 py-1.5 rounded-full text-xs font-semibold text-white/90 bg-[#FF4A4A]/10 border border-[#FF4A4A]/25 shadow-[0_2px_10px_rgba(255,74,74,0.1)] transition-all hover:bg-[#FF4A4A]/20">How to Use</a>
              <a href="#quickstart" className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-white/60 hover:text-white transition-colors">Quick Start</a>
            </nav>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <a 
                href="https://github.com/AdamZoda/stremio" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-xs font-medium text-white/80 transition-all"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a 
                href="#quickstart" 
                className="px-4 py-1.5 rounded-lg bg-[#FF4A4A] hover:bg-[#FF3333] text-white text-xs font-bold shadow-[0_0_20px_rgba(255,74,74,0.3)] hover:shadow-[0_0_25px_rgba(255,74,74,0.5)] transition-all"
              >
                Install Now
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="md:hidden p-1 text-white/70 hover:text-white hover:bg-white/5 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Dropdown Navigation */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden border-t border-white/5 bg-[#040508]"
              >
                <div className="px-4 py-4 flex flex-col gap-3">
                  <a href="#howtouse" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-white/5 text-sm font-semibold text-white">How to Use</a>
                  <a href="#quickstart" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-white/5 text-sm font-semibold text-white/70">Quick Start</a>
                  <hr className="border-white/5 my-1" />
                  <div className="flex items-center gap-3 pt-1">
                    <a 
                      href="https://github.com/AdamZoda/stremio" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg border border-white/10 bg-white/5 text-sm font-medium text-white/80"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                    <a 
                      href="#quickstart" 
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex-1 py-2.5 rounded-lg bg-[#FF4A4A] text-white text-center text-sm font-bold shadow-[0_0_15px_rgba(255,74,74,0.3)]"
                    >
                      Install
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        <main className="flex-1">
          
          {/* Hero / Header Section */}
          <section id="product" className="max-w-4xl mx-auto px-4 pt-16 pb-12 sm:pt-24 sm:pb-16 text-center relative">
            
            {/* Main Title with Glowing Effect */}
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white font-sans glow-title"
            >
              Casa<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4A4A] to-[#FF7575] drop-shadow-[0_0_35px_rgba(255,74,74,0.3)]">WyTub</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-4 text-xs sm:text-sm font-bold tracking-[0.25em] text-[#FF4A4A] uppercase"
            >
              THE ULTIMATE LOCAL YOUTUBE EXTRACTOR
            </motion.p>

            {/* Description */}
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-6 text-gray-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-medium"
            >
              Download MP4 and MP3 files directly to your local machine instantly.
              <br className="hidden sm:inline" /> <span className="text-white font-bold underline decoration-[#FF4A4A] decoration-2">No Ads & 100% Unlimited</span> — Completely free, forever.
            </motion.p>

            {/* Badge Metrics Row */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-8 flex flex-wrap justify-center gap-3 text-xs text-white/50"
            >
              <span className="flex items-center gap-1.5 px-4 py-1.5 rounded-full neon-badge text-[#FF8A8A] font-semibold">
                <Zap className="w-3.5 h-3.5 text-[#FF4A4A]" />
                Sans Limites (Unlimited)
              </span>
              <span className="flex items-center gap-1.5 px-4 py-1.5 rounded-full neon-badge text-[#FF8A8A] font-semibold">
                <Shield className="w-3.5 h-3.5 text-[#FF4A4A]" />
                Zero Ads (Sans Pubs)
              </span>
              <span className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/3 border border-white/10 text-white/70 font-semibold">
                <Flame className="w-3.5 h-3.5 text-[#FF4A4A]" />
                Direct Local Path
              </span>
            </motion.div>
          </section>


          {/* Quick Start Section */}
          <section id="quickstart" className="max-w-4xl mx-auto px-4 py-12 sm:py-16 relative">
            
            {/* Header with Red Prompt Arrow */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg sm:text-xl font-mono font-bold text-white flex items-center gap-2">
                <span className="text-[#FF4A4A] font-extrabold animate-pulse">&gt;</span> Quick Start Installer
              </h2>
              <div className="text-xs text-gray-500 font-mono hidden sm:block">
                v1.4.0 (stable)
              </div>
            </div>

            {/* Terminal Window container with LED Neon glow */}
            <div className="rounded-2xl border border-[#FF4A4A]/30 bg-[#0A0C14]/95 shadow-[0_0_35px_rgba(255,74,74,0.15)] hover:border-[#FF4A4A]/50 transition-all duration-300 overflow-hidden">
              
              {/* Tab Bar Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/5 px-4 py-3 bg-[#07080D]/90 gap-3">
                
                {/* OS Controls (Left) */}
                <div className="flex items-center gap-4">
                  {/* Red/Yellow/Green macOS window control dots */}
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/20" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/20" />
                    <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/20" />
                  </div>

                  {/* Tabs */}
                  <div className="flex items-center bg-white/3 border border-white/5 rounded-lg p-0.5 ml-2">
                    <button 
                      onClick={() => setActiveTab('windows')}
                      className={`px-3 py-1 text-xs font-semibold rounded-md transition-all flex items-center gap-1 ${
                        activeTab === 'windows' 
                          ? 'bg-[#FF4A4A]/10 text-[#FF4A4A] border border-[#FF4A4A]/25' 
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      🖥️ Windows
                    </button>
                    <button 
                      onClick={() => setActiveTab('macos')}
                      className={`px-3 py-1 text-xs font-semibold rounded-md transition-all flex items-center gap-1 ${
                        activeTab === 'macos' 
                          ? 'bg-[#FF4A4A]/10 text-[#FF4A4A] border border-[#FF4A4A]/25' 
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      🍏 macOS
                    </button>
                    <button 
                      onClick={() => setActiveTab('linux')}
                      className={`px-3 py-1 text-xs font-semibold rounded-md transition-all flex items-center gap-1 ${
                        activeTab === 'linux' 
                          ? 'bg-[#FF4A4A]/10 text-[#FF4A4A] border border-[#FF4A4A]/25' 
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      🐧 Linux
                    </button>
                  </div>
                </div>

                {/* Status indicator */}
                <div className="text-[10px] text-gray-500 font-mono flex items-center gap-1.5 self-end sm:self-auto bg-white/3 border border-white/5 px-2 py-1 rounded-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#27C93F] animate-pulse"></span>
                  <span>1-Command Setup</span>
                </div>
              </div>

              {/* Terminal Code Area */}
              <div className="p-6 sm:p-8 font-mono text-sm leading-relaxed text-left min-h-[160px] relative">
                
                {/* Glow behind copy button */}
                <div className="absolute right-6 top-6 z-0 w-20 h-20 bg-[#FF4A4A]/5 blur-xl pointer-events-none" />

                <div className="flex flex-col gap-3 relative z-10">
                  {/* Comment Label */}
                  <div className="text-gray-500 select-none">
                    {comment}
                  </div>

                  {/* Command Row */}
                  <div className="flex items-start justify-between gap-4 mt-1 bg-white/2 border border-white/5 rounded-xl p-4 pr-14 relative group/code overflow-x-auto">
                    <div className="flex items-center gap-2 text-white select-all break-all pr-2 font-mono whitespace-pre-wrap">
                      <span className="text-[#FF4A4A] select-none">$</span>
                      <span>{command}</span>
                    </div>

                    {/* Copier button */}
                    <button
                      onClick={handleCopy}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-lg border border-white/10 hover:border-[#FF4A4A]/40 bg-[#0E111A] hover:bg-[#151926] text-gray-400 hover:text-[#FF4A4A] transition-all flex items-center justify-center cursor-pointer shadow-md"
                      title="Copy to clipboard"
                    >
                      <AnimatePresence mode="wait">
                        {copied ? (
                          <motion.div
                            key="check"
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                          >
                            <Check className="w-4 h-4 text-[#27C93F]" />
                          </motion.div>
                        ) : (
                          <motion.div
                            key="copy"
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                          >
                            <Copy className="w-4 h-4" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  </div>
                </div>
              </div>

              {/* Copy Success Banner */}
              <AnimatePresence>
                {copied && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-[#27C93F]/10 border-t border-[#27C93F]/20 py-2.5 px-4 text-center text-xs font-mono text-[#27C93F] flex items-center justify-center gap-2"
                  >
                    <Check className="w-4 h-4 animate-bounce" />
                    <span>Command copied to clipboard successfully! Paste into your terminal to execute.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Explanatory Footnote beneath Terminal */}
            <p className="mt-4 text-xs text-gray-500 text-center leading-relaxed font-mono">
              {footnote}
              <br />
              No extra steps. Direct executable build pipelines with fast concurrent fetching.
            </p>
          </section>


          {/* How to Use / Video Walkthrough Section */}
          <section id="howtouse" className="max-w-4xl mx-auto px-4 py-12 sm:py-16 border-t border-white/5 relative scroll-mt-24">
            <div className="absolute inset-0 bg-[#FF4A4A]/2 rounded-3xl blur-[40px] pointer-events-none" />
            
            <div className="text-center mb-8 relative z-10">
              <span className="text-xs font-mono font-bold text-[#FF4A4A] bg-[#FF4A4A]/10 px-3 py-1 rounded-full border border-[#FF4A4A]/20 uppercase tracking-[0.2em]">
                &gt; Video Walkthrough
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-4 tracking-tight">
                Comment utiliser Casa<span className="text-[#FF4A4A]">Wy</span>Tub
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 mt-2 max-w-lg mx-auto">
                Watch the one-command setup in real-time. No ads, unlimited speed, absolute control.
              </p>
            </div>

            {/* Video Player Container with LED Neon glow */}
            <div className="relative z-10 rounded-2xl border border-[#FF4A4A]/40 bg-[#0A0C14]/90 p-2 sm:p-3 shadow-[0_0_35px_rgba(255,74,74,0.25)] hover:border-[#FF4A4A]/60 transition-all duration-300 overflow-hidden group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FF4A4A] to-[#FF7575] rounded-2xl opacity-10 group-hover:opacity-20 blur transition-all duration-500" />
              
              <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-[#05060a] flex flex-col items-center justify-center">
                <video 
                  src="/video.mp4" 
                  controls 
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover rounded-xl shadow-inner"
                >
                  <p className="text-xs text-gray-500 p-4 text-center font-mono">
                    Votre navigateur ne supporte pas la lecture de vidéos. Placez votre fichier "video.mp4" dans le dossier public pour le visionner ici.
                  </p>
                </video>
              </div>
            </div>
          </section>


          {/* Key Advantages / Features Section */}
          <section id="features" className="max-w-5xl mx-auto px-4 py-12 sm:py-16 border-t border-white/5">
            <div className="text-center mb-12">
              <h2 className="text-xs font-bold text-[#FF4A4A] uppercase tracking-[0.2em] mb-2">&gt; Core Capabilities</h2>
              <p className="text-2xl font-bold text-white">Engineered for Devs and Power Users</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl polished-card transition-all group">
                <div className="w-10 h-10 rounded-xl bg-[#FF4A4A]/10 flex items-center justify-center mb-4 text-[#FF4A4A] group-hover:bg-[#FF4A4A]/20 transition-colors">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-semibold text-white font-mono mb-2">Blazing Fast</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Leverages custom concurrent connection streams to bypass default server throttles. Downloads high quality raw data instantly.
                </p>
              </div>

              <div className="p-6 rounded-2xl polished-card transition-all group">
                <div className="w-10 h-10 rounded-xl bg-[#FF4A4A]/10 flex items-center justify-center mb-4 text-[#FF4A4A] group-hover:bg-[#FF4A4A]/20 transition-colors">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-semibold text-white font-mono mb-2">Completely Secure</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  No data ever exits your local host. Completely transparent open-source code executable with zero trackers, cookies, or hidden ads.
                </p>
              </div>

              <div className="p-6 rounded-2xl polished-card transition-all group">
                <div className="w-10 h-10 rounded-xl bg-[#FF4A4A]/10 flex items-center justify-center mb-4 text-[#FF4A4A] group-hover:bg-[#FF4A4A]/20 transition-colors">
                  <Monitor className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-semibold text-white font-mono mb-2">Zero Dependencies</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Auto-compiles into static binaries. No requirement for globally configured python scripts, node runtimes, or manually downloaded tools.
                </p>
              </div>
            </div>
          </section>


          {/* Testimonials Section */}
          <section id="testimonials" className="max-w-5xl mx-auto px-4 py-12 sm:py-20 border-t border-white/5">
            
            {/* Title & View all Navigation */}
            <div className="flex items-center justify-between mb-8 sm:mb-12">
              <h2 className="text-lg sm:text-xl font-mono font-bold text-white flex items-center gap-2">
                <span className="text-[#FF4A4A] font-extrabold animate-pulse">&gt;</span> What People Say
              </h2>
              <a href="#testimonials" className="text-xs font-mono text-[#FF4A4A] hover:text-[#FF7575] flex items-center gap-1 transition-colors">
                View all <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Testimonials Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Card 1 */}
              <div className="p-6 rounded-2xl polished-card transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#314B60] to-[#FF4A4A]/30 flex items-center justify-center font-bold text-xs text-white">
                        JS
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Jonah Ships</div>
                        <div className="text-[10px] text-gray-500 font-mono">@jonahships_</div>
                      </div>
                    </div>
                    {/* Twitter/X style badge */}
                    <div className="text-[#FF4A4A] text-xs font-bold px-2 py-0.5 rounded bg-[#FF4A4A]/10 border border-[#FF4A4A]/20">
                      PRO
                    </div>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed font-sans mb-6">
                    Setup <span className="text-[#FF4A4A] font-medium">@casawytub</span> yesterday. All I have to say is, wow. Downloaded a full 4K concert in literally 15 seconds. Totally offline, no ads, no shady popups. It just works.
                  </p>
                </div>
                
                {/* Micro Actions */}
                <div className="flex items-center gap-6 text-gray-500 pt-3 border-t border-white/3 select-none">
                  <button onClick={() => toggleLike(0)} className={`flex items-center gap-1.5 text-[10px] transition-colors hover:text-[#FF4A4A] ${liked[0] ? 'text-[#FF4A4A]' : ''}`}>
                    <Heart className={`w-3.5 h-3.5 ${liked[0] ? 'fill-[#FF4A4A]' : ''}`} />
                    <span>{likes[0]}</span>
                  </button>
                  <div className="flex items-center gap-1.5 text-[10px] hover:text-white transition-colors">
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>18</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] hover:text-white transition-colors">
                    <Repeat2 className="w-3.5 h-3.5" />
                    <span>9</span>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="p-6 rounded-2xl polished-card transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#1E2640] to-[#FF4A4A]/30 flex items-center justify-center font-bold text-xs text-white">
                        AD
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Aryeh Dubois</div>
                        <div className="text-[10px] text-gray-500 font-mono">@AryehDubois</div>
                      </div>
                    </div>
                    <div className="text-[#FF4A4A] text-xs font-bold px-2 py-0.5 rounded bg-[#FF4A4A]/10 border border-[#FF4A4A]/20">
                      DEV
                    </div>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed font-sans mb-6">
                    Tried custom bash scripts before, but <span className="text-[#FF4A4A] font-medium">@casawytub</span> is next level. The single line installer handles ffmpeg and audio merging perfectly. This is what developer tools should be.
                  </p>
                </div>
                
                {/* Micro Actions */}
                <div className="flex items-center gap-6 text-gray-500 pt-3 border-t border-white/3 select-none">
                  <button onClick={() => toggleLike(1)} className={`flex items-center gap-1.5 text-[10px] transition-colors hover:text-[#FF4A4A] ${liked[1] ? 'text-[#FF4A4A]' : ''}`}>
                    <Heart className={`w-3.5 h-3.5 ${liked[1] ? 'fill-[#FF4A4A]' : ''}`} />
                    <span>{likes[1]}</span>
                  </button>
                  <div className="flex items-center gap-1.5 text-[10px] hover:text-white transition-colors">
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>5</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] hover:text-white transition-colors">
                    <Repeat2 className="w-3.5 h-3.5" />
                    <span>3</span>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="p-6 rounded-2xl polished-card transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#3D2240] to-[#FF4A4A]/30 flex items-center justify-center font-bold text-xs text-white">
                        SW
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">SenatorWeb3</div>
                        <div className="text-[10px] text-gray-500 font-mono">@SenatorWeb3</div>
                      </div>
                    </div>
                    <div className="text-[#FF4A4A] text-xs font-bold px-2 py-0.5 rounded bg-[#FF4A4A]/10 border border-[#FF4A4A]/20">
                      ALPHA
                    </div>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed font-sans mb-6">
                    CasaWyTub is a game changer. The speed is absolute insanity. 10/10 recommendation for anyone building local archives or media servers. <span className="text-[#FF4A4A] font-medium">#SelfHosted #DataHoarder</span>
                  </p>
                </div>
                
                {/* Micro Actions */}
                <div className="flex items-center gap-6 text-gray-500 pt-3 border-t border-white/3 select-none">
                  <button onClick={() => toggleLike(2)} className={`flex items-center gap-1.5 text-[10px] transition-colors hover:text-[#FF4A4A] ${liked[2] ? 'text-[#FF4A4A]' : ''}`}>
                    <Heart className={`w-3.5 h-3.5 ${liked[2] ? 'fill-[#FF4A4A]' : ''}`} />
                    <span>{likes[2]}</span>
                  </button>
                  <div className="flex items-center gap-1.5 text-[10px] hover:text-white transition-colors">
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>34</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] hover:text-white transition-colors">
                    <Repeat2 className="w-3.5 h-3.5" />
                    <span>14</span>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="p-6 rounded-2xl polished-card transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#224A32] to-[#FF4A4A]/30 flex items-center justify-center font-bold text-xs text-white">
                        MN
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Manoel Neves</div>
                        <div className="text-[10px] text-gray-500 font-mono">@mneves75</div>
                      </div>
                    </div>
                    <div className="text-[#FF4A4A] text-xs font-bold px-2 py-0.5 rounded bg-[#FF4A4A]/10 border border-[#FF4A4A]/20">
                      GUEST
                    </div>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed font-sans mb-6">
                    No more shady download websites or sketchy extensions. <span className="text-[#FF4A4A] font-medium">@casawytub</span> is completely open source, safe, and works entirely locally. Absolutely brilliant.
                  </p>
                </div>
                
                {/* Micro Actions */}
                <div className="flex items-center gap-6 text-gray-500 pt-3 border-t border-white/3 select-none">
                  <button onClick={() => toggleLike(3)} className={`flex items-center gap-1.5 text-[10px] transition-colors hover:text-[#FF4A4A] ${liked[3] ? 'text-[#FF4A4A]' : ''}`}>
                    <Heart className={`w-3.5 h-3.5 ${liked[3] ? 'fill-[#FF4A4A]' : ''}`} />
                    <span>{likes[3]}</span>
                  </button>
                  <div className="flex items-center gap-1.5 text-[10px] hover:text-white transition-colors">
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>12</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] hover:text-white transition-colors">
                    <Repeat2 className="w-3.5 h-3.5" />
                    <span>4</span>
                  </div>
                </div>
              </div>

            </div>
          </section>

        </main>

        {/* Footer */}
        <footer className="border-t border-white/5 bg-[#020305] py-8 relative z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-[#FF4A4A] flex items-center justify-center">
                <Play className="w-3 h-3 text-white fill-white translate-x-[0.5px]" />
              </div>
              <span className="font-mono text-sm font-bold tracking-tight text-white">
                Casa<span className="text-[#FF4A4A]">Wy</span>Tub
              </span>
            </div>
            
            <p className="text-[10px] text-gray-600 font-mono">
              © {new Date().getFullYear()} CasaWyTub. Built with absolute speed & simplicity.
            </p>

            <div className="flex gap-4">
              <a href="https://github.com/AdamZoda/stremio" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}
