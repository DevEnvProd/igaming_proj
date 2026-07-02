import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  TrendingUp, 
  Users, 
  Star, 
  Play, 
  ChevronRight, 
  ChevronLeft,
  Github, 
  Twitter, 
  MessageSquare, 
  Menu, 
  X,
  Trophy,
  Zap,
  Shield,
  Calendar,
  Clock,
  BookOpen,
  ShoppingBag,
  HelpCircle,
  ExternalLink
} from 'lucide-react';
import { GAMES, CATEGORIES, Game } from './constants';
import { ARTICLES, Article } from './articles';

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Article filter states
  const [articleCategory, setArticleCategory] = useState('All');
  const [articleSearch, setArticleSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  // FAQ state
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

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

  const filteredArticles = ARTICLES.filter(art => {
    const matchesCategory = articleCategory === 'All' || art.category === articleCategory;
    const matchesSearch = art.title.toLowerCase().includes(articleSearch.toLowerCase()) ||
                         art.summary.toLowerCase().includes(articleSearch.toLowerCase()) ||
                         art.content.toLowerCase().includes(articleSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Pagination for articles
  const articlesPerPage = 9;
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);

  useEffect(() => {
    setCurrentPage(1);
  }, [articleCategory, articleSearch]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setSelectedArticle(null);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 3 Latest articles for Home widget
  const latestArticles = ARTICLES.slice(0, 3);

  // Store Items
  const storeItems = [
    {
      id: "s1",
      title: "Cosmic Mechanical Keyboard",
      price: "$189.00",
      description: "Custom Gasket-mounted 75% gaming keyboard with lubricated linear switches and keycaps inspired by Illuminate colors.",
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80&w=600",
      category: "Gear"
    },
    {
      id: "s2",
      title: "UltraSync Pro 240Hz Monitor",
      price: "$349.00",
      description: "27-inch QHD fast IPS panel with 1ms response time and G-Sync compatibility for maximum frame advantage.",
      image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=600",
      category: "Hardware"
    },
    {
      id: "s3",
      title: "Bespoke Ergo Gaming Chair",
      price: "$420.00",
      description: "Supreme lower back support, premium adaptive memory foam, and customizable 4D armrests for long tournament sessions.",
      image: "https://images.unsplash.com/photo-1598550476439-6847785fce6e?auto=format&fit=crop&q=80&w=600",
      category: "Furniture"
    },
    {
      id: "s4",
      title: "Illuminated Premium Keycap Set",
      price: "$59.00",
      description: "Thick double-shot PBT keycaps with crisp legends and beautiful glowing gradient side-legends.",
      image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&q=80&w=600",
      category: "Accessories"
    },
    {
      id: "s5",
      title: "Exclusive Winbox VIP Gold Pass",
      price: "$99.00",
      description: "Unlock premium cashback multipliers and immediate entry to the high-rollers suite on the official Winbox portal.",
      image: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?auto=format&fit=crop&q=80&w=600",
      category: "Virtual Packages"
    },
    {
      id: "s6",
      title: "Winbox Platinum Token Bundle",
      price: "$250.00",
      description: "Get immediate priority access to automated secure deposits and double rebate coefficients inside baccarat lobbies.",
      image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?auto=format&fit=crop&q=80&w=600",
      category: "Virtual Packages"
    }
  ];

  // FAQ Data promoting Winbox only with authorized links
  const faqData = [
    {
      question: "How do I register an account on Winbox?",
      answer: "Signing up is incredibly fast and secure. You can visit the official registration hub at <a href=\"https://winbox666.online\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-brand-primary font-bold hover:underline\">winbox666</a>. Complete the verification steps, set a strong password, and secure your account. Once registered, you will have immediate access to all online slot cabinets, live dealer tables, and sports books."
    },
    {
      question: "Are the slots and casino games on Winbox certified and fair?",
      answer: "Absolutely. All games hosted on <a href=\"https://winbox666.com\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-brand-primary font-bold hover:underline\">winbox</a> utilize certified Random Number Generators (RNG) that are independently tested and verified by global laboratories like iTech Labs and GLI. This ensures that every deal, spin, and result is 100% random and unbiased."
    },
    {
      question: "What secure deposit methods are available on the platform?",
      answer: "The platform integrates highly secure, automated payment gateways to ensure peace of mind. Players can execute instant local bank transfers, popular verified e-wallets, or secure decentralized digital tokens. All financial routes are fully protected by 256-bit bank-grade SSL encryption for absolute peace of mind."
    },
    {
      question: "How do I download the Winbox mobile application safely?",
      answer: "To avoid clone apps or fake portals, always download the native application from official channels. Go to <a href=\"https://winbox666.com\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-brand-primary font-bold hover:underline\">winbox</a> to fetch the genuine Android APK package or iOS installation certificates. The mobile app offers biometric protection, single-tap logins, and smooth HD live baccarat streams."
    },
    {
      question: "What are the rollover requirements for online promotions on Winbox?",
      answer: "Rollover or turnover requirements define the wagering multipliers needed before converting bonus funds to cash. These rules are kept completely transparent on <a href=\"https://winbox666.online\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-brand-primary font-bold hover:underline\">winbox666</a>. For instance, a 5x rollover on a $10 credit means placing $50 in total valid bets across eligible slot cabinets or tables."
    },
    {
      question: "Who can I contact if I require technical assistance?",
      answer: "Outstanding player support is available around the clock. Simply access the live help chat on <a href=\"https://winbox666.com\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-brand-primary font-bold hover:underline\">winbox</a> to speak directly with an expert multilingual assistance agent. Support is available 24 hours a day, 7 days a week, to resolve any technical questions immediately."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled || activeTab !== 'Home' ? 'bg-bg-dark/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="group cursor-pointer" onClick={() => handleTabChange('Home')}>
            <span className="text-3xl font-display font-black tracking-tighter text-gradient transition-all duration-300 group-hover:tracking-tight">
              ILLUMINATE
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'Games', 'Store', 'Community', 'Support'].map((item) => (
              <button
                key={item}
                onClick={() => handleTabChange(item)}
                className={`text-sm font-medium transition-colors cursor-pointer ${
                  activeTab === item 
                    ? 'text-brand-primary font-bold' 
                    : 'text-white/70 hover:text-brand-primary'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a 
              href="https://winbox666.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary py-2 text-sm text-center font-bold"
            >
              Sign In
            </a>
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
            className="fixed inset-0 z-40 bg-bg-dark pt-24 px-6 md:hidden flex flex-col justify-between pb-12"
          >
            <div className="flex flex-col gap-6">
              {['Home', 'Games', 'Store', 'Community', 'Support'].map((item) => (
                <button 
                  key={item} 
                  onClick={() => handleTabChange(item)}
                  className={`text-2xl font-display font-bold text-left ${
                    activeTab === item ? 'text-brand-primary' : 'text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <div>
              <div className="h-px bg-white/10 my-6" />
              <a 
                href="https://winbox666.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary w-full block text-center py-3 font-bold"
              >
                Sign In to Winbox
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow">
        {activeTab === 'Home' && (
          <>
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
                      FEATURED HUB
                    </span>
                    <span className="text-white/40 text-xs font-medium">LIVE COMPATIBLE PLATFORM</span>
                  </div>
                  <h1 className="text-6xl md:text-8xl font-display font-bold leading-none mb-6">
                    BEYOND THE <span className="text-gradient">HORIZON</span>
                  </h1>
                  <p className="text-lg text-white/60 mb-8 leading-relaxed">
                    Illuminate your gaming world. Discover high-RTP slots, live dealer baccarat, and professional sportsbooks on the world's premier platform. Experience instant cashouts and complete security.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href="https://winbox666.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-primary flex items-center gap-2"
                    >
                      <Play className="w-5 h-5 fill-current" /> Play Now
                    </a>
                    <button 
                      onClick={() => handleTabChange('Community')}
                      className="btn-secondary flex items-center gap-2 cursor-pointer"
                    >
                      Read Strategy Guides <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              </div>

              {/* Floating Stats */}
              <div className="absolute bottom-12 right-6 hidden xl:flex gap-8">
                {[
                  { label: 'Active Players', value: '2.4M+', icon: Users },
                  { label: 'Positive Reviews', value: '98%', icon: Star },
                  { label: 'Verified Audits', value: '100% Fair', icon: Trophy },
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
                    { title: 'Ultra Low Latency', desc: 'Secure local payment pathways and live streams with sub-20ms ping for extreme responsiveness.', icon: Zap },
                    { title: 'Secure Wallet Systems', desc: 'Protected by 256-bit bank-grade encryption to guarantee fast and safe payouts.', icon: Shield },
                    { title: 'Global Fair Auditing', desc: 'RNG algorithms are audited regularly by independent labs for complete transparency.', icon: Trophy },
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

            {/* Home Community Articles Preview Widget */}
            <section className="py-16 bg-bg-dark/50 border-y border-white/5">
              <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-end mb-12">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-display font-bold">LATEST <span className="text-gradient">COMMUNITY GUIDES</span></h2>
                    <p className="text-white/40 mt-2">Get professional tips, strategies, and industry news for Winbox players.</p>
                  </div>
                  <button 
                    onClick={() => handleTabChange('Community')}
                    className="hidden sm:flex items-center gap-2 text-brand-primary hover:underline font-bold"
                  >
                    View All 27 Articles <ArrowRightIcon className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {latestArticles.map((art) => (
                    <div 
                      key={art.id} 
                      className="bg-bg-card rounded-2xl overflow-hidden border border-white/5 hover:border-brand-primary/20 transition-all flex flex-col justify-between h-full"
                    >
                      <div>
                        <div className="h-48 overflow-hidden relative">
                          <img 
                            src={art.image} 
                            alt={art.title} 
                            className="w-full h-full object-cover"
                          />
                          <span className="absolute top-4 left-4 bg-brand-primary text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                            {art.category}
                          </span>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-4 text-xs text-white/40 mb-3">
                            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {art.date}</span>
                            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {art.readTime}</span>
                          </div>
                          <h3 className="text-lg font-display font-bold mb-3 hover:text-brand-primary transition-colors line-clamp-1">{art.title}</h3>
                          <p className="text-sm text-white/50 line-clamp-2">{art.summary}</p>
                        </div>
                      </div>
                      <div className="p-6 pt-0">
                        <button 
                          onClick={() => {
                            setSelectedArticle(art);
                            setActiveTab('Community');
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className="w-full py-2 bg-white/5 hover:bg-brand-primary hover:text-black transition-all rounded-xl text-xs font-bold flex items-center justify-center gap-1"
                        >
                          Read Article <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Game Library Widget */}
            <section className="py-24 bg-bg-dark">
              <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
                  <div>
                    <h2 className="text-4xl font-display font-bold mb-4">POPULAR <span className="text-gradient">TITLES</span></h2>
                    <p className="text-white/40">Highly rewarding visual cabinets available for active members.</p>
                  </div>
                  <button 
                    onClick={() => handleTabChange('Games')} 
                    className="btn-secondary py-2 text-xs"
                  >
                    View Game Library
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {GAMES.slice(0, 3).map((game) => (
                    <div
                      key={game.id}
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

                        <a 
                          href="https://winbox666.com" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="w-full py-3 bg-white/5 hover:bg-brand-primary hover:text-black transition-all rounded-xl font-bold flex items-center justify-center gap-2 group/btn"
                        >
                          Play Now <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-24 relative overflow-hidden">
              <div className="absolute inset-0 bg-brand-secondary/10" />
              <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="glass p-12 md:p-24 rounded-[3rem] text-center max-w-4xl mx-auto">
                  <TrendingUp className="w-12 h-12 text-brand-primary mx-auto mb-6" />
                  <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">GET COMPREHENSIVE <span className="text-gradient">WINBOX BONUSES</span></h2>
                  <p className="text-white/60 mb-10 text-lg">Activate your official registration. Winbox is an online casino platform that offers unmatched jackpots, rolling weekly rebates, and complete privacy protocols.</p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                    <input 
                      type="email" 
                      placeholder="Enter your email address" 
                      className="flex-grow bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-primary/50"
                    />
                    <a 
                      href="https://winbox666.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-primary whitespace-nowrap block text-center font-bold"
                    >
                      Join Winbox Now
                    </a>
                  </div>
                  <p className="mt-6 text-xs text-white/30">Wagering requirements and local regulatory terms apply. Play responsibly.</p>
                </div>
              </div>
            </section>
          </>
        )}

        {activeTab === 'Games' && (
          <section className="py-32 bg-bg-dark min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
                <div>
                  <h2 className="text-4xl font-display font-bold mb-4">PREMIUM <span className="text-gradient">GAME DESK</span></h2>
                  <p className="text-white/40">Explore our curated collection of top-rated mobile baccarat, high-RTP slots, and virtual games.</p>
                </div>
                
                {/* Category Filters */}
                <div className="flex flex-wrap gap-2">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
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

                        <a 
                          href="https://winbox666.com" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="w-full py-3 bg-white/5 hover:bg-brand-primary hover:text-black transition-all rounded-xl font-bold flex items-center justify-center gap-2 group/btn"
                        >
                          Play Now <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'Store' && (
          <section className="py-32 bg-bg-dark min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
              <div className="mb-12">
                <span className="px-3 py-1 bg-brand-primary/20 text-brand-primary text-xs font-bold rounded-full border border-brand-primary/30">
                  MERCHANDISE &amp; CREDITS
                </span>
                <h2 className="text-4xl font-display font-bold mt-4 mb-2">ILLUMINATE <span className="text-gradient">STORE</span></h2>
                <p className="text-white/40">Premium gaming peripherals, limited-edition accessories, and high-roller virtual pass codes.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {storeItems.map((item) => (
                  <div 
                    key={item.id} 
                    className="bg-bg-card rounded-2xl border border-white/5 overflow-hidden flex flex-col justify-between h-full hover:border-brand-primary/20 transition-all"
                  >
                    <div>
                      <div className="h-64 overflow-hidden relative">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                        <span className="absolute top-4 right-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold">{item.category}</span>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-display font-bold">{item.title}</h3>
                          <span className="text-brand-primary font-bold font-display text-lg">{item.price}</span>
                        </div>
                        <p className="text-sm text-white/50 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                    <div className="p-6 pt-0">
                      <a 
                        href="https://winbox666.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-full py-3 bg-brand-primary text-black hover:shadow-[0_0_15px_rgba(0,255,136,0.4)] transition-all font-bold rounded-xl flex items-center justify-center gap-2 text-sm"
                      >
                        <ShoppingBag className="w-4 h-4" /> Secure Order / Register
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeTab === 'Community' && (
          <section className="py-32 bg-bg-dark min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
              {!selectedArticle ? (
                <>
                  <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="px-3 py-1 bg-brand-primary/20 text-brand-primary text-xs font-bold rounded-full border border-brand-primary/30">
                      STRATEGY BLOGS &amp; DAILY ARTICLES
                    </span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-4">ILLUMINATE <span className="text-gradient">COMMUNITY</span></h2>
                    <p className="text-white/60">
                      Stay ahead of the curve. Discover 27 exclusive guides, certified payout analyses, and gameplay tips. Winbox is an online casino platform built for players who demand elite standards.
                    </p>
                  </div>

                  {/* Search and Filters */}
                  <div className="bg-bg-card p-6 rounded-3xl border border-white/5 mb-12 flex flex-col md:flex-row gap-6 justify-between items-center">
                    <div className="relative w-full md:w-96">
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                      <input 
                        type="text" 
                        placeholder="Search 27 articles..." 
                        value={articleSearch}
                        onChange={(e) => setArticleSearch(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 focus:outline-none focus:border-brand-primary/50 text-sm"
                      />
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {["All", "Guides", "Slots", "Live Casino", "Games", "Sports"].map((cat) => (
                        <button
                          key={cat}
                          onClick={() => setArticleCategory(cat)}
                          className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                            articleCategory === cat 
                              ? 'bg-brand-primary text-black' 
                              : 'bg-white/5 text-white/60 hover:bg-white/10'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Article Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {currentArticles.map((art) => (
                      <div 
                        key={art.id} 
                        className="bg-bg-card rounded-2xl border border-white/5 overflow-hidden hover:border-brand-primary/20 transition-all flex flex-col justify-between h-full"
                      >
                        <div>
                          <div className="h-56 overflow-hidden relative">
                            <img src={art.image} alt={art.title} className="w-full h-full object-cover" />
                            <span className="absolute top-4 left-4 bg-brand-primary text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                              {art.category}
                            </span>
                          </div>
                          <div className="p-6">
                            <div className="flex items-center gap-4 text-xs text-white/40 mb-3">
                              <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {art.date}</span>
                              <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {art.readTime}</span>
                            </div>
                            <h3 className="text-xl font-display font-bold mb-3 line-clamp-2 hover:text-brand-primary transition-colors cursor-pointer" onClick={() => setSelectedArticle(art)}>
                              {art.title}
                            </h3>
                            <p className="text-sm text-white/50 leading-relaxed line-clamp-3">{art.summary}</p>
                          </div>
                        </div>
                        <div className="p-6 pt-0">
                          <button 
                            onClick={() => {
                              setSelectedArticle(art);
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className="w-full py-3 bg-white/5 hover:bg-brand-primary hover:text-black transition-all rounded-xl text-sm font-bold flex items-center justify-center gap-2 cursor-pointer"
                          >
                            <BookOpen className="w-4 h-4" /> Read Full Article
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Pagination controls */}
                  {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-4">
                      <button
                        onClick={() => {
                          if (currentPage > 1) {
                            setCurrentPage(currentPage - 1);
                            window.scrollTo({ top: 400, behavior: 'smooth' });
                          }
                        }}
                        disabled={currentPage === 1}
                        className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <span className="text-sm font-medium text-white/60">
                        Page <span className="text-white font-bold">{currentPage}</span> of {totalPages}
                      </span>
                      <button
                        onClick={() => {
                          if (currentPage < totalPages) {
                            setCurrentPage(currentPage + 1);
                            window.scrollTo({ top: 400, behavior: 'smooth' });
                          }
                        }}
                        disabled={currentPage === totalPages}
                        className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  )}

                  {filteredArticles.length === 0 && (
                    <div className="text-center py-24">
                      <BookOpen className="w-16 h-16 text-white/10 mx-auto mb-4" />
                      <h3 className="text-xl font-display font-bold text-white/40">No articles matching search filters found.</h3>
                    </div>
                  )}
                </>
              ) : (
                /* Article Reader View */
                <div className="max-w-4xl mx-auto">
                  <button 
                    onClick={() => setSelectedArticle(null)}
                    className="flex items-center gap-2 text-brand-primary hover:underline font-bold mb-8 cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" /> Back to Articles
                  </button>

                  <div className="mb-8">
                    <span className="px-3 py-1 bg-brand-primary/20 text-brand-primary text-xs font-bold rounded-full border border-brand-primary/30 uppercase">
                      {selectedArticle.category}
                    </span>
                    <h1 className="text-3xl md:text-5xl font-display font-bold mt-4 mb-4">{selectedArticle.title}</h1>
                    
                    <div className="flex items-center gap-6 text-sm text-white/40 border-b border-white/5 pb-6">
                      <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> Published: {selectedArticle.date}</span>
                      <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> Read Time: {selectedArticle.readTime}</span>
                      <span className="flex items-center gap-2"><Users className="w-4 h-4" /> Author: Illuminate Editor</span>
                    </div>
                  </div>

                  <div className="h-96 rounded-3xl overflow-hidden mb-10">
                    <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-full object-cover" />
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                      {/* Rendering article body with precise links */}
                      <div 
                        className="prose prose-invert max-w-none text-white/75 space-y-6 text-lg leading-relaxed article-content"
                        dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
                      />
                    </div>

                    {/* Promotion Sidebar pointing only to authorized links */}
                    <div>
                      <div className="bg-bg-card p-6 rounded-3xl border border-white/10 sticky top-32">
                        <h4 className="font-display font-bold text-xl mb-4 text-gradient">OFFICIAL WINBOX ACCESS</h4>
                        <p className="text-sm text-white/60 leading-relaxed mb-6">
                          Winbox is an online casino platform featuring fair random layouts, instant cash rebates, and premium live dealer baccarat.
                        </p>
                        <div className="space-y-4">
                          <a 
                            href="https://winbox666.com" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="w-full py-3 bg-brand-primary text-black font-bold rounded-xl flex items-center justify-center gap-2 text-sm hover:scale-105 transition-transform"
                          >
                            Play on Winbox <ExternalLink className="w-4 h-4" />
                          </a>
                          <a 
                            href="https://winbox666.online" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-xl flex items-center justify-center gap-2 text-sm"
                          >
                            Register on Winbox666 <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {activeTab === 'Support' && (
          <section className="py-32 bg-bg-dark min-h-screen">
            <div className="max-w-4xl mx-auto px-6">
              <div className="text-center mb-16">
                <span className="px-3 py-1 bg-brand-primary/20 text-brand-primary text-xs font-bold rounded-full border border-brand-primary/30">
                  PLAYER SUPPORT &amp; FAQ
                </span>
                <h2 className="text-4xl font-display font-bold mt-4 mb-2">HELP <span className="text-gradient">CENTER</span></h2>
                <p className="text-white/40">Find detailed answers to system questions, payment processing protocols, and certified gameplay rules.</p>
              </div>

              <div className="space-y-4 mb-16">
                {faqData.map((faq, idx) => (
                  <div 
                    key={idx} 
                    className="bg-bg-card border border-white/5 rounded-2xl overflow-hidden transition-all duration-300"
                  >
                    <button
                      onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                      className="w-full p-6 text-left font-display font-bold text-lg flex justify-between items-center hover:text-brand-primary transition-colors cursor-pointer"
                    >
                      {faq.question}
                      <span className={`text-brand-primary transform transition-transform duration-300 ${openFAQ === idx ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                    </button>
                    <AnimatePresence>
                      {openFAQ === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="border-t border-white/5 bg-white/[0.01]"
                        >
                          <div 
                            className="p-6 text-white/60 leading-relaxed text-sm prose prose-invert"
                            dangerouslySetInnerHTML={{ __html: faq.answer }}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              <div className="glass p-8 rounded-3xl text-center border border-brand-primary/20">
                <HelpCircle className="w-12 h-12 text-brand-primary mx-auto mb-4" />
                <h3 className="text-2xl font-display font-bold mb-2">STILL HAVE QUESTIONS?</h3>
                <p className="text-sm text-white/50 leading-relaxed mb-6">
                  Our professional player assistance team is active 24/7. Access the direct help stream to activate your account or consult with an expert.
                </p>
                <div className="flex justify-center gap-4 flex-wrap">
                  <a 
                    href="https://winbox666.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-primary py-3 text-sm font-bold flex items-center gap-2"
                  >
                    Contact Winbox Live Support <ExternalLink className="w-4 h-4" />
                  </a>
                  <a 
                    href="https://winbox666.online" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-secondary py-3 text-sm font-bold flex items-center gap-2"
                  >
                    Go to Winbox666 Portal <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}
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
                The ultimate premium destination for digital entertainment, guides, and fair play algorithms.
              </p>
              <div className="flex gap-4">
                {[Twitter, Github, MessageSquare].map((Icon, i) => (
                  <a 
                    key={i} 
                    href="https://winbox666.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 glass rounded-xl hover:text-brand-primary transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-display font-bold mb-6">Platform</h4>
              <ul className="space-y-4 text-sm text-white/40">
                <li><button onClick={() => handleTabChange('Games')} className="hover:text-white transition-colors cursor-pointer">Browse Games</button></li>
                <li><button onClick={() => handleTabChange('Store')} className="hover:text-white transition-colors cursor-pointer">Game Store</button></li>
                <li><button onClick={() => handleTabChange('Community')} className="hover:text-white transition-colors cursor-pointer">Community Blogs</button></li>
                <li><button onClick={() => handleTabChange('Support')} className="hover:text-white transition-colors cursor-pointer">FAQ Help Center</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-white/40">
                <li><a href="https://winbox666.online" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Registration Guide</a></li>
                <li><a href="https://winbox666.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Official Portal</a></li>
                <li><a href="https://winbox666.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">VIP Systems</a></li>
                <li><a href="https://winbox666.online" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Download App</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold mb-6">Legal</h4>
              <ul className="space-y-4 text-sm text-white/40">
                <li><button onClick={() => handleTabChange('Support')} className="hover:text-white transition-colors cursor-pointer">Privacy Policy</button></li>
                <li><button onClick={() => handleTabChange('Support')} className="hover:text-white transition-colors cursor-pointer">Terms of Use</button></li>
                <li><button onClick={() => handleTabChange('Support')} className="hover:text-white transition-colors cursor-pointer">Cookie Policy</button></li>
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

function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}
