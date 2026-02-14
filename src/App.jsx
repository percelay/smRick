import { useEffect, useRef } from 'react'

// Unsplash images for construction aesthetic
const HERO_IMG = 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2000&q=80'

const GALLERY_IMAGES = [
  { src: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=800&q=80', alt: 'Modern glass building' },
  { src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80', alt: 'Architectural structure' },
  { src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80', alt: 'Construction crane at sunset' },
  { src: 'https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?auto=format&fit=crop&w=800&q=80', alt: 'Luxury residence' },
  { src: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=800&q=80', alt: 'Modern interior' },
]

const SERVICES = [
  {
    title: 'Residential Construction',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    description: 'From custom luxury homes to multi-family developments, we bring visionary residential designs to life with uncompromising quality and craftsmanship.',
  },
  {
    title: 'Commercial Development',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    description: 'We deliver state-of-the-art commercial spaces — offices, retail centers, and mixed-use developments — engineered for performance and built to impress.',
  },
  {
    title: 'Renovation & Remodeling',
    image: 'https://images.unsplash.com/photo-1574359411659-15573a27fd0c?auto=format&fit=crop&w=800&q=80',
    description: 'Breathing new life into existing structures, our renovation team transforms outdated spaces into modern masterpieces while preserving their character.',
  },
]

function useInView() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in-view')
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

function FadeIn({ children, className = '', delay = 0 }) {
  const ref = useInView()
  return (
    <div
      ref={ref}
      className={`opacity-0 translate-y-8 transition-all duration-700 ease-out [&.in-view]:opacity-100 [&.in-view]:translate-y-0 ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="font-serif text-2xl font-bold text-white tracking-wide">
          S<span className="text-gold">&</span>M
        </a>
        <div className="hidden md:flex items-center gap-8">
          {['Gallery', 'Services'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-light tracking-widest uppercase text-slate-300 hover:text-gold transition-colors duration-300"
            >
              {item}
            </a>
          ))}
          <a
            href="#services"
            className="ml-2 px-5 py-2 text-sm font-medium tracking-wider uppercase border border-gold text-gold hover:bg-gold hover:text-slate-950 transition-all duration-300"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_IMG})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950/90" />
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <FadeIn>
          <div className="w-16 h-px bg-gold mx-auto mb-8" />
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tight">
            S<span className="text-gold">&</span>M.
          </h1>
          <p className="mt-4 font-serif text-xl sm:text-2xl md:text-3xl text-slate-200 font-light italic tracking-wide">
            The Construction Standard.
          </p>
          <div className="w-16 h-px bg-gold mx-auto mt-8" />
        </FadeIn>
        <FadeIn delay={400}>
          <a
            href="#gallery"
            className="inline-block mt-12 px-8 py-3 text-sm font-medium tracking-[0.2em] uppercase border border-gold/60 text-gold hover:bg-gold hover:text-slate-950 transition-all duration-500"
          >
            View Our Work
          </a>
        </FadeIn>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-gold/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}

function Gallery() {
  return (
    <section id="gallery" className="bg-slate-950 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <p className="text-gold text-sm font-medium tracking-[0.3em] uppercase text-center">Portfolio</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white text-center mt-3">
            Our Work
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-6" />
        </FadeIn>

        <div className="mt-16 columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {GALLERY_IMAGES.map((img, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="break-inside-avoid group relative overflow-hidden cursor-pointer">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/40 transition-all duration-500 flex items-end">
                  <p className="text-white text-sm font-light tracking-wider p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    {img.alt}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="bg-slate-900 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <p className="text-gold text-sm font-medium tracking-[0.3em] uppercase text-center">What We Do</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white text-center mt-3">
            Our Services
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-6" />
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => (
            <FadeIn key={i} delay={i * 150}>
              <div className="group bg-slate-950/50 border border-white/5 hover:border-gold/30 transition-all duration-500 overflow-hidden">
                <div className="overflow-hidden h-56">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-xl font-semibold text-white group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  <div className="w-8 h-px bg-gold/40 mt-4 mb-4 group-hover:w-12 transition-all duration-500" />
                  <p className="text-slate-400 text-sm leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="font-serif text-2xl font-bold text-white">
          S<span className="text-gold">&</span>M
        </p>
        <p className="text-slate-500 text-xs tracking-widest uppercase mt-4">
          The Construction Standard
        </p>
        <div className="w-8 h-px bg-gold/30 mx-auto mt-6 mb-6" />
        <p className="text-slate-600 text-xs">
          &copy; {new Date().getFullYear()} S&M Construction. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Gallery />
      <Services />
      <Footer />
    </div>
  )
}
