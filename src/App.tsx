import {
  Smartphone,
  Mail,
  Globe,
  Gift,
  Users,
  Star,
  Moon,
  Sun,
  Menu,
  X,
} from 'lucide-react';
import { FaApple, FaAndroid } from 'react-icons/fa';
import { useState, useEffect } from 'react';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') setIsDark(true);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const navLinks = ['About', 'Features', 'Contact'];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-gray-50' : 'bg-gradient-to-br from-white via-gray-50 to-gray-100 text-gray-900'
        } pb-[env(safe-area-inset-bottom)]`}
    >
      {/* NAVBAR */}
      <nav
        className={`border-b sticky top-0 z-50 shadow-lg transition-all duration-300 pt-[env(safe-area-inset-top)] ${isDark ? 'bg-gray-900/98 border-gray-700/50 backdrop-blur-md shadow-gray-900/50' : 'bg-white/98 border-gray-200 backdrop-blur-md shadow-gray-200/50'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <div className="flex items-center gap-2 sm:gap-3">
              <img
                src="/easyREWARD logo.png"
                alt="easyREWARD"
                width="48"
                height="48"
                className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
              />
              <span className="text-lg sm:text-xl md:text-2xl font-bold">easyREWARD</span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`font-medium transition-colors ${isDark
                    ? 'text-gray-300 hover:text-yellow-400'
                    : 'text-gray-700 hover:text-yellow-500'
                    }`}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsDark(!isDark)}
                className={`p-3 rounded-lg transition-transform hover:scale-110 active:scale-95 ${isDark
                  ? 'bg-gray-700 text-yellow-400'
                  : 'bg-gray-100 text-gray-700 hover:text-yellow-500'
                  }`}
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                className="md:hidden p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition active:scale-95"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div
              className={`flex flex-col gap-2 py-4 border-t md:hidden animate-in slide-in-from-top-2 ${isDark ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-gray-50'
                }`}
            >
              {navLinks.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-center py-4 font-medium text-lg ${isDark
                    ? 'text-gray-300 hover:text-yellow-400 active:bg-gray-700'
                    : 'text-gray-700 hover:text-yellow-500 active:bg-gray-200'
                    } transition-colors rounded-lg`}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* HERO */}
      <section className="relative bg-gradient-to-r from-yellow-400 to-orange-400 py-16 sm:py-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="flex items-center justify-center gap-3 mb-4">
          <img
            src="/easyREWARD logo.png"
            alt="easyREWARD"
            width="80"
            height="80"
            className="h-16 w-16 sm:h-20 sm:w-20 object-contain drop-shadow-md"
          />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">easyREWARD</h1>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
            Your Guide to Membership Benefits
          </h2>
        </div>
      </section>

      {/* FEATURES */}
      <section
        id="features"
        className={`py-16 sm:py-24 px-4 ${isDark ? 'bg-gray-800' : 'bg-gray-50'} transition-colors`}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-16 ${isDark ? 'text-white' : 'text-gray-900'
              }`}
          >
            Why Choose easyREWARD?
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Gift,
                title: 'All Benefits in One Place',
                desc: 'Discover great membership perks from a wide range of organizations — easy to find, simple to enjoy, all gathered in one place.',
              },
              {
                icon: Star,
                title: 'Save Your Favorites',
                desc: 'Log in and save your favorite partners for instant access to the deals you love most.',
              },
              {
                icon: Users,
                title: 'Easy to Use',
                desc: 'A clean, intuitive platform that makes discovering and exploring membership benefits effortless for everyone.',
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className={`p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all ${isDark ? 'bg-gray-700' : 'bg-white'
                  }`}
              >
                <div className="w-16 h-16 mx-auto bg-yellow-400 rounded-full flex items-center justify-center mb-6 shadow-md">
                  <Icon size={32} className="text-gray-900" />
                </div>
                <h3 className="text-xl font-bold mb-3">{title}</h3>
                <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className={`py-16 sm:py-24 px-4 ${isDark ? 'bg-gray-900' : 'bg-white'} transition-colors`}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">What is easyREWARD?</h2>
            <p className="text-lg sm:text-xl mb-6 leading-relaxed">
              We all love good deals — but let's be honest, keeping track of memberships and perks can be a headache.
            </p>
            <p className="font-semibold text-lg mb-6">
              Our mission is simple: make membership benefits more accessible, transparent and enjoyable for everyone
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              easyREWARD brings everything together in one simple place.
            </p>
          </div>

          <div className="bg-gradient-to-br from-yellow-400 to-orange-400 p-6 sm:p-8 rounded-3xl shadow-xl transform hover:scale-[1.02] transition-transform">
            <div className="bg-white p-6 sm:p-8 rounded-2xl text-gray-900">
              <Smartphone size={56} className="text-yellow-500 mb-4 mx-auto md:mx-0" />
              <h3 className="text-2xl font-bold mb-3 text-center md:text-left">Get the Web App</h3>
              <p className="mb-6 text-center md:text-left text-gray-600">
                Install easyREWARD on your phone for instant access to your benefits anywhere.
              </p>
              <div className="space-y-4 text-sm">
                {/* iPhone - Apple Icon */}
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-white rounded-full shadow-sm">
                    <FaApple size={24} className="text-gray-900" />
                  </div>
                  <div>
                    <span className="font-bold block text-base">iPhone</span>
                    <span className="text-gray-600">Share → Add to Home Screen</span>
                  </div>
                </div>

                {/* Android - Android Icon */}
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-white rounded-full shadow-sm">
                    <FaAndroid size={24} className="text-green-600" />
                  </div>
                  <div>
                    <span className="font-bold block text-base">Android</span>
                    <span className="text-gray-600">Menu → Install App</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className={`py-16 sm:py-24 px-4 ${isDark ? 'bg-gray-800' : 'bg-gray-50'} transition-colors`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Get in Touch</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-12 text-lg">
            Have questions or suggestions? We’d love to hear from you!
          </p>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {[
              {
                icon: Mail,
                label: 'Email Us',
                detail: 'contact@easyreward.net',
                link: 'mailto:contact@easyreward.net',
              },
              {
                icon: Globe,
                label: 'Visit Website',
                detail: 'www.easyreward.net',
                link: 'https://dev.easyreward.net',
              },
            ].map(({ icon: Icon, label, detail, link }) => (
              <a
                key={label}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-5 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all group ${isDark ? 'bg-gray-700' : 'bg-white'
                  }`}
              >
                <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                  <Icon className="text-gray-900" size={28} />
                </div>
                <div className="text-left">
                  <p className="font-bold text-lg">{label}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-300">{detail}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-6 px-4 pb-[calc(1.5rem+env(safe-area-inset-bottom))]">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4 opacity-80">
            <img
              src="/easyREWARD logo.png"
              alt="easyREWARD"
              width="32"
              height="32"
              loading="lazy"
              className="h-6 w-6 sm:h-8 sm:w-8 object-contain grayscale brightness-200"
            />
            <span className="text-lg sm:text-xl font-bold">easyREWARD</span>
          </div>
          <p className="text-gray-400 text-xs sm:text-sm">© 2025 easyREWARD. Your Guide to Membership Benefits.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
