import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  TrendingUp, 
  Users, 
  Star, 
  Play, 
  ChevronRight, 
  Github, 
  Twitter, 
  MessageSquare, 
  Menu, 
  X,
  Trophy,
  Zap,
  Shield
} from 'lucide-react';
import { GAMES, CATEGORIES, Game } from './constants';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredGames = GAMES.filter(game => {
    const matchesCategory = selectedCategory === 'All' || game.category === selectedCategory;
    const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         game.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-bg-dark/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="group cursor-pointer">
            <span className="text-3xl font-display font-black tracking-tighter text-gradient transition-all duration-300 group-hover:tracking-tight">
              ILLUMINATE
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'Games', 'Store', 'Community', 'Support'].map((item) => (
              <a key={item} href="#" className="text-sm font-medium text-white/70 hover:text-brand-primary transition-colors">
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <input 
                type="text" 
                placeholder="Search games..." 
                className="bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-brand-primary/50 w-64 transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button className="btn-primary py-2 text-sm">Sign In</button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-bg-dark pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {['Home', 'Games', 'Store', 'Community', 'Support'].map((item) => (
                <a key={item} href="#" className="text-2xl font-display font-bold">{item}</a>
              ))}
              <div className="h-px bg-white/10 my-4" />
              <button className="btn-primary w-full">Sign In</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=1920" 
              className="w-full h-full object-cover opacity-40"
              alt="Hero Background"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-bg-dark via-transparent to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="px-3 py-1 bg-brand-primary/20 text-brand-primary text-xs font-bold rounded-full border border-brand-primary/30">
                  FEATURED GAME
                </span>
                <span className="text-white/40 text-xs font-medium">NEW UPDATE AVAILABLE</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-display font-bold leading-none mb-6">
                BEYOND THE <span className="text-gradient">HORIZON</span>
              </h1>
              <p className="text-lg text-white/60 mb-8 leading-relaxed">
                Experience the next generation of open-world exploration. Discover uncharted planets, build your legacy, and conquer the galaxy in the most ambitious RPG of the decade.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="btn-primary flex items-center gap-2">
                  <Play className="w-5 h-5 fill-current" /> Play Now
                </button>
                <button className="btn-secondary flex items-center gap-2">
                  Learn More <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Floating Stats */}
          <div className="absolute bottom-12 right-6 hidden xl:flex gap-8">
            {[
              { label: 'Active Players', value: '2.4M+', icon: Users },
              { label: 'Positive Reviews', value: '98%', icon: Star },
              { label: 'Tournaments', value: '150+', icon: Trophy },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="glass p-6 rounded-2xl min-w-[200px]"
              >
                <stat.icon className="w-6 h-6 text-brand-primary mb-3" />
                <div className="text-2xl font-display font-bold">{stat.value}</div>
                <div className="text-xs text-white/40 uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 bg-bg-dark relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Ultra Low Latency', desc: 'Our global server network ensures smooth gameplay with sub-20ms ping.', icon: Zap },
                { title: 'Secure Gaming', desc: 'Advanced anti-cheat and encryption systems keep your account safe.', icon: Shield },
                { title: 'Pro Community', desc: 'Join millions of players and compete in professional tournaments.', icon: Trophy },
              ].map((feature, i) => (
                <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-brand-primary/20 transition-colors group">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-brand-primary" />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-3">{feature.title}</h3>
                  <p className="text-white/50 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Game Library */}
        <section className="py-24 bg-bg-dark">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
              <div>
                <h2 className="text-4xl font-display font-bold mb-4">DISCOVER <span className="text-gradient">GAMES</span></h2>
                <p className="text-white/40">Explore our curated collection of top-rated titles across all genres.</p>
              </div>
              
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === cat 
                        ? 'bg-brand-primary text-black' 
                        : 'bg-white/5 text-white/60 hover:bg-white/10'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode='popLayout'>
                {filteredGames.map((game) => (
                  <motion.div
                    layout
                    key={game.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="group relative bg-bg-card rounded-3xl overflow-hidden border border-white/5 hover:border-brand-primary/30 transition-all"
                  >
                    <div className="aspect-[16/10] overflow-hidden relative">
                      <img 
                        src={game.image} 
                        alt={game.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 right-4 glass px-2 py-1 rounded-lg flex items-center gap-1">
                        <Star className="w-3 h-3 text-brand-primary fill-current" />
                        <span className="text-xs font-bold">{game.rating}</span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-brand-primary uppercase tracking-widest">{game.category}</span>
                        <div className="flex items-center gap-1 text-white/40">
                          <Users className="w-3 h-3" />
                          <span className="text-[10px] font-medium">{game.players}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-display font-bold mb-2">{game.title}</h3>
                      <p className="text-sm text-white/50 mb-4 line-clamp-2">{game.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {game.tags.map(tag => (
                          <span key={tag} className="text-[10px] px-2 py-1 bg-white/5 rounded-md text-white/40">#{tag}</span>
                        ))}
                      </div>

                      <button className="w-full py-3 bg-white/5 hover:bg-brand-primary hover:text-black transition-all rounded-xl font-bold flex items-center justify-center gap-2 group/btn">
                        Play Now <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            
            {filteredGames.length === 0 && (
              <div className="text-center py-24">
                <Search className="w-12 h-12 text-white/10 mx-auto mb-4" />
                <h3 className="text-xl font-display font-bold text-white/40">No games found matching your search.</h3>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-brand-secondary/10" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="glass p-12 md:p-24 rounded-[3rem] text-center max-w-4xl mx-auto">
              <TrendingUp className="w-12 h-12 text-brand-primary mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">STAY IN THE <span className="text-gradient">LOOP</span></h2>
              <p className="text-white/60 mb-10 text-lg">Subscribe to our newsletter and be the first to know about new releases, exclusive rewards, and community events.</p>
              
              <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-grow bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-primary/50"
                  required
                />
                <button type="submit" className="btn-primary whitespace-nowrap">Join Illuminate</button>
              </form>
              <p className="mt-6 text-xs text-white/30">By joining, you agree to our Terms of Service and Privacy Policy.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-bg-dark border-t border-white/5 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-24">
            <div className="col-span-2 lg:col-span-2">
              <div className="mb-6">
                <span className="text-3xl font-display font-black tracking-tighter text-gradient">
                  ILLUMINATE
                </span>
              </div>
              <p className="text-white/40 max-w-xs mb-8">
                The ultimate destination for gamers. Play, compete, and connect with millions of players worldwide.
              </p>
              <div className="flex gap-4">
                {[Twitter, Github, MessageSquare].map((Icon, i) => (
                  <a key={i} href="#" className="p-3 glass rounded-xl hover:text-brand-primary transition-colors">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-display font-bold mb-6">Platform</h4>
              <ul className="space-y-4 text-sm text-white/40">
                <li><a href="#" className="hover:text-white transition-colors">Browse Games</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Game Store</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tournaments</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Leaderboards</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-white/40">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press Kit</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold mb-6">Legal</h4>
              <ul className="space-y-4 text-sm text-white/40">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5 text-xs text-white/20">
            <p>© 2026 Illuminate Gaming Hub. All rights reserved.</p>
            <div className="flex gap-8">
              <span>Status: All Systems Operational</span>
              <span>Region: Global</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
