import { useState, useEffect, useRef } from 'react'
import {
  Menu, X, Star, MapPin, Mail, Phone,
  ChevronLeft, ChevronRight, Instagram, ArrowUp,
  Sparkles, Heart, Award, Users,
  Gem, Crown, Palette, Camera, Home, Scissors, Ribbon,
  MessageCircle, CalendarDays, Video
} from 'lucide-react'

const WA_LINK = "https://wa.me/2348022507694?text=Hi%20I'd%20like%20to%20book%20a%20makeup%20session"

// ─── Navbar ────────────────────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between h-20 md:h-24">
        {/* Logo */}
        <a href="#hero" className="flex items-center">
          <img src="./logo.png" alt="RIA~Artistry" className="h-14 md:h-20 w-auto object-contain" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map(l => (
            <a key={l.label} href={l.href}
              className="font-sans text-sm text-gray-700 hover:text-gold transition-colors duration-200 tracking-wide">
              {l.label}
            </a>
          ))}
          <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-whatsapp text-xs py-2 px-5">
            Book Now
          </a>
        </nav>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-gray-800 p-1">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-nude-light px-5 py-5 flex flex-col gap-4 shadow-lg">
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
              className="font-sans text-sm text-gray-700 hover:text-gold py-1 border-b border-nude-light last:border-none">
              {l.label}
            </a>
          ))}
          <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-whatsapp text-sm mt-2 justify-center">
            Book Now
          </a>
        </div>
      )}
    </header>
  )
}

// ─── Hero / Billboard Slider ────────────────────────────────────────────────
const heroSlides = [
  {
    image: './image-services/gele2.jpeg',
    tag: 'Bridal Makeup',
    heading: 'Flawless Bridal Beauty',
    sub: 'Your wedding day deserves perfection — timeless, radiant, unforgettable.',
    overlay: 'Confidence. Beauty. Elegance.',
  },
  {
    image: './image-services/birthday-model-makeup-glam.jpeg',
    tag: 'Soft Glam',
    heading: 'Soft Glam. Bold Confidence.',
    sub: 'Enhancing your natural beauty with a luxurious, polished finish.',
    overlay: 'Soft Glam. Bold Confidence.',
  },
  {
    image: './image-services/gele1.jpeg',
    tag: 'Gele Styling',
    heading: 'Elegant Gele & Hair Artistry',
    sub: 'Traditional elegance reimagined — every knot tells a story of grace.',
    overlay: 'Radiance. Grace. Power.',
  },
]

function Hero() {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef(null)

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setCurrent(p => (p + 1) % heroSlides.length)
    }, 4500)
  }

  useEffect(() => {
    startTimer()
    return () => clearInterval(timerRef.current)
  }, [])

  const goTo = (idx) => {
    clearInterval(timerRef.current)
    setCurrent(idx)
    startTimer()
  }
  const prev = () => goTo((current - 1 + heroSlides.length) % heroSlides.length)
  const next = () => goTo((current + 1) % heroSlides.length)

  const slide = heroSlides[current]

  const waIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.533 5.851L0 24l6.335-1.521A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.003-1.368l-.36-.214-3.76.904.938-3.665-.234-.374A9.818 9.818 0 1 1 12 21.818z"/>
    </svg>
  )

  return (
    <section id="hero" className="relative w-full min-h-[480px] h-[60vh] max-h-[700px] bg-gray-950 overflow-hidden">

      {/* ── Desktop: split layout ── */}
      <div className="hidden md:flex h-full">
        {/* Left: dark content panel */}
        <div className="relative w-[46%] flex-shrink-0 flex flex-col justify-center pt-24 pb-10 px-10 lg:px-16 xl:px-24 z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/95 to-gray-950/60" />
          <div className="relative z-10">
            <span className="inline-block font-sans text-xs tracking-[0.3em] uppercase text-gold-light mb-5 border border-gold/40 px-3 py-1 rounded-full w-fit bg-black/20">
              {slide.tag}
            </span>
            <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4 drop-shadow-lg">
              {slide.heading}
            </h1>
            <p className="font-sans text-base text-white/75 max-w-sm mb-5 leading-relaxed">
              {slide.sub}
            </p>
            <p className="font-script text-gold-light text-xl mb-8 tracking-wide">
              &ldquo;{slide.overlay}&rdquo;
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-whatsapp">
                {waIcon} Book Your Session
              </a>
              <a href="#services" className="inline-flex items-center gap-2 border border-white/50 text-white font-sans text-sm px-7 py-3 rounded-full hover:bg-white/10 transition-all duration-300">
                View Services
              </a>
            </div>
          </div>
        </div>
        {/* Right: image panel */}
        <div key={current} className="slide-fade flex-1 relative">
          <img src={slide.image} alt={slide.tag} className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/40 to-transparent" />
        </div>
      </div>

      {/* ── Mobile: full-bleed ── */}
      <div className="md:hidden h-full relative">
        <div key={`m-${current}`} className="slide-fade absolute inset-0">
          <img src={slide.image} alt={slide.tag} className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-center pt-20 px-6">
          <span className="inline-block font-sans text-xs tracking-[0.3em] uppercase text-gold-light mb-4 border border-gold/40 px-3 py-1 rounded-full w-fit bg-black/20">
            {slide.tag}
          </span>
          <h1 className="font-serif text-4xl font-bold text-white leading-tight mb-4 max-w-xs drop-shadow-lg">
            {slide.heading}
          </h1>
          <p className="font-sans text-sm text-white/80 max-w-xs mb-5 leading-relaxed">
            {slide.sub}
          </p>
          <p className="font-script text-gold-light text-lg mb-7 tracking-wide">
            &ldquo;{slide.overlay}&rdquo;
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-whatsapp text-xs py-2.5 px-5">
              {waIcon} Book Session
            </a>
            <a href="#services" className="inline-flex items-center border border-white/50 text-white font-sans text-xs px-5 py-2.5 rounded-full hover:bg-white/10 transition-all duration-300">
              View Services
            </a>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {heroSlides.map((_, i) => (
          <button key={i} onClick={() => goTo(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current ? 'w-8 h-2 bg-gold' : 'w-2 h-2 bg-white/50 hover:bg-white/80'
            }`} />
        ))}
      </div>

      {/* Arrow controls */}
      <button onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm">
        <ChevronLeft size={20} />
      </button>
      <button onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm">
        <ChevronRight size={20} />
      </button>
    </section>
  )
}

// ─── Services ──────────────────────────────────────────────────────────────
const services = [
  { name: 'Bridal Makeup',               price: '₦100,000',  Icon: Gem,      popular: false, image: './image-services/gele2.jpeg' },
  { name: 'Traditional Bridal Makeup',   price: '₦120,000',  Icon: Crown,    popular: true,  image: './image-services/makeup-gele3.png' },
  { name: 'Soft Glam',                   price: '₦35,000',   Icon: Sparkles, popular: false, image: './image-services/soft-glam-makeup1.png' },
  { name: 'Full Glam',                   price: '₦40,000',   Icon: Palette,  popular: false, image: './image-services/full-glam-makeup1.png' },
  { name: 'Studio Session',              price: '₦35,000',   Icon: Camera,   popular: false, image: './image-services/birthday-model-makeup-glam.jpeg' },
  { name: 'Home Service',                price: '₦50,000+',  Icon: Home,     popular: false, image: './image-services/soft-glam-makeup4.png', note: 'Extra charges may apply' },
  { name: 'Gele Styling',                price: '₦20,000',   Icon: Ribbon,   popular: false, image: './image-services/gele1.jpeg' },
  { name: 'Hairstyling / Wig Install',   price: '₦15,000+',  Icon: Scissors, popular: false, image: './image-services/soft-glam-makeup2.jpeg' },
]

function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5 md:px-10">
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold mb-3">What We Offer</p>
          <h2 className="section-title">Our Services & Pricing</h2>
          <div className="gold-divider" />
          <p className="section-subtitle max-w-xl mx-auto">
            Every service is delivered with precision, care, and a commitment to making you feel extraordinary.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-3">
          {services.map((s) => (
            <div key={s.name} className={s.popular ? 'pt-3' : ''}>
              <div className={`flip-card relative h-[280px] ${
                s.popular ? 'ring-2 ring-gold/60 rounded-2xl' : ''
              }`}>
                {s.popular && (
                  <span className="absolute -top-3 right-4 z-20 bg-gold text-white text-[10px] font-sans font-bold px-3 py-1 rounded-full tracking-wide uppercase shadow-sm">
                    Most Popular
                  </span>
                )}
                <div className="flip-card-inner">
                  {/* Front: pricing */}
                  <div className="flip-card-front bg-white shadow-sm p-6 flex flex-col gap-3">
                    <div className="w-10 h-10 rounded-full bg-nude-light flex items-center justify-center">
                      <s.Icon size={18} className="text-gold" />
                    </div>
                    <div>
                      <h3 className="font-serif text-base font-semibold text-gray-900 leading-snug">{s.name}</h3>
                      {s.note && <p className="font-sans text-[11px] text-gray-400 mt-0.5">{s.note}</p>}
                    </div>
                    <p className="font-sans text-xl font-bold text-gold mt-auto">{s.price}</p>
                    <a href={WA_LINK} target="_blank" rel="noreferrer"
                      className="font-sans text-xs text-center border border-gold/50 text-gold py-2 rounded-full mt-1">
                      Hover to preview
                    </a>
                  </div>
                  {/* Back: service image */}
                  <div className="flip-card-back">
                    <img src={s.image} alt={s.name} className="w-full h-full object-cover object-top" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="font-serif text-white font-semibold text-sm leading-snug">{s.name}</p>
                      <p className="font-sans text-gold-light font-bold text-lg mt-1">{s.price}</p>
                      <a href={WA_LINK} target="_blank" rel="noreferrer"
                        className="mt-2 inline-block font-sans text-[11px] bg-gold text-white px-4 py-1.5 rounded-full">
                        Book This
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── About ─────────────────────────────────────────────────────────────────
const aboutImages = [
  './image-services/soft-glam-makeup3.png',
  './image-services/full-glam-makeup1.png',
  './image-services/birthday-model-makeup-glam.jpeg',
  './image-services/gele1.jpeg',
  './image-services/gele2.jpeg',
  './image-services/makeup-gele3.png',
  './image-services/soft-glam-makeup1.png',
  './image-services/soft-glam-makeup2.jpeg',
  './image-services/soft-glam-makeup4.png',
]

function About() {
  const [imgIdx, setImgIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setImgIdx(p => (p + 1) % aboutImages.length), 4000)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="about" className="py-20 md:py-28 bg-nude-light">
      <div className="max-w-6xl mx-auto px-5 md:px-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl relative">
              {aboutImages.map((src, i) => (
                <img key={src} src={src} alt="RIA~Artistry — About"
                  className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
                    i === imgIdx ? 'opacity-100' : 'opacity-0'
                  }`} />
              ))}
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-3 md:right-[-20px] bg-white rounded-2xl shadow-lg px-5 py-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blush-light flex items-center justify-center">
                <Palette size={16} className="text-gold" />
              </div>
              <div>
                <p className="font-serif text-sm font-semibold text-gray-900">100+</p>
                <p className="font-sans text-[11px] text-gray-500">Happy Clients</p>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div>
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold mb-3">Our Story</p>
            <h2 className="section-title text-left mb-3">About RIA~Artistry</h2>
            <div className="w-12 h-0.5 bg-gold mb-6" />
            <p className="font-sans text-gray-600 leading-relaxed mb-5 text-base">
              RIA~Artistry is a professional beauty brand specializing in soft glam, bridal, and elegant everyday looks.
            </p>
            <p className="font-sans text-gray-600 leading-relaxed mb-8 text-base">
              We focus on enhancing natural beauty with a touch of luxury, ensuring every client looks
              <span className="font-semibold text-gray-800"> confident, radiant, and unforgettable</span>.
              From intimate ceremonies to grand celebrations, we are dedicated to making your moment perfect.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: 'Bridal Specialist', Icon: Gem },
                { label: 'Soft & Full Glam', Icon: Sparkles },
                { label: 'Gele Artistry', Icon: Ribbon },
                { label: 'Lagos-Based', Icon: MapPin },
              ].map(i => (
                <div key={i.label} className="flex items-center gap-2">
                  <i.Icon size={15} className="text-gold flex-shrink-0" />
                  <span className="font-sans text-sm text-gray-700">{i.label}</span>
                </div>
              ))}
            </div>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-primary">
              Let's Talk Beauty
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Gallery ───────────────────────────────────────────────────────────────
const galleryItems = [
  { src: './image-services/birthday-model-makeup-glam.jpeg', type: 'image', label: 'Birthday Glam' },
  { src: './image-services/full-glam-makeup1.png',          type: 'image', label: 'Full Glam' },
  { src: './image-services/gele1.jpeg',                     type: 'image', label: 'Gele Styling' },
  { src: './image-services/gele2.jpeg',                     type: 'image', label: 'Traditional Gele' },
  { src: './image-services/image23.png',                    type: 'image', label: 'Elegant Look' },
  { src: './image-services/makeup-gele3.png',               type: 'image', label: 'Makeup & Gele' },
  { src: './image-services/soft-glam-makeup1.png',          type: 'image', label: 'Soft Glam' },
  { src: './image-services/soft-glam-makeup2.jpeg',         type: 'image', label: 'Soft Glam' },
  { src: './image-services/soft-glam-makeup4.png',          type: 'image', label: 'Soft Glam' },
]

function GalleryItem({ item }) {
  if (item.type === 'video' && !item.src) {
    return (
      <div className="aspect-square rounded-2xl bg-nude-light border-2 border-dashed border-nude-dark flex flex-col items-center justify-center p-4 text-center gap-2">
        <Video size={28} className="text-nude-dark" />
        <p className="font-sans text-xs text-gray-400">{item.label}</p>
        <p className="font-sans text-[10px] text-gray-300">Add .mp4 to /assets</p>
      </div>
    )
  }
  if (item.type === 'video' && item.src) {
    return (
      <div className="aspect-square rounded-2xl overflow-hidden relative">
        <video src={item.src} className="w-full h-full object-cover" muted loop playsInline
          onMouseEnter={e => e.target.play()} onMouseLeave={e => e.target.pause()} />
        <div className="absolute bottom-2 left-2 bg-black/50 text-white text-[10px] px-2 py-0.5 rounded font-sans">
          {item.label}
        </div>
      </div>
    )
  }
  return (
    <div className="aspect-square rounded-2xl overflow-hidden group relative">
      <img src={item.src} alt={item.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 rounded-2xl" />
      <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <p className="font-sans text-white text-xs font-medium text-center">{item.label}</p>
      </div>
    </div>
  )
}

function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-5 md:px-10">
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold mb-3">Visual Portfolio</p>
          <h2 className="section-title">Our Work</h2>
          <div className="gold-divider" />
          <p className="section-subtitle max-w-lg mx-auto">
            A glimpse into the beauty transformations we create for our clients.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
          {galleryItems.map((item, i) => (
            <GalleryItem key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Testimonials ──────────────────────────────────────────────────────────
const screenshotTestimonials = [
  './Testimonial/image37.png',
  './Testimonial/image39.png',
  './Testimonial/image41.png',
  './Testimonial/image44.png',
  './Testimonial/image45.png',
]

function ScreenshotCard({ src, i }) {
  return (
    <div className="card flex-shrink-0 mx-3 overflow-hidden rounded-2xl shadow-md" style={{ width: 220 }}>
      <div className="relative">
        <div className="absolute top-2 left-2 bg-green-500 text-white text-[9px] font-sans font-bold px-2 py-0.5 rounded-full flex items-center gap-1 z-10">
          <svg viewBox="0 0 24 24" fill="white" className="w-2.5 h-2.5">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.533 5.851L0 24l6.335-1.521A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.003-1.368l-.36-.214-3.76.904.938-3.665-.234-.374A9.818 9.818 0 1 1 12 21.818z"/>
          </svg>
          WhatsApp Review
        </div>
        <img src={src} alt={`Client testimonial ${i + 1}`}
          className="w-full object-cover object-top"
          style={{ maxHeight: 400 }} />
      </div>
      <div className="p-3 flex items-center justify-center gap-1">
        {Array.from({ length: 5 }).map((_, j) => (
          <Star key={j} size={12} className="fill-gold text-gold" />
        ))}
      </div>
    </div>
  )
}

function Testimonials() {
  const trackRef = useRef(null)
  const [idx, setIdx] = useState(0)
  const total = screenshotTestimonials.length

  const scrollToCard = (i) => {
    const clamped = Math.max(0, Math.min(i, total - 1))
    setIdx(clamped)
    const track = trackRef.current
    const card = track?.children[clamped]
    if (track && card) {
      track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const t = setInterval(() => {
      setIdx(p => {
        const next = (p + 1) % total
        const track = trackRef.current
        const card = track?.children[next]
        if (track && card) {
          track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: 'smooth' })
        }
        return next
      })
    }, 4000)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-nude-light overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 md:px-10">
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold mb-3">Client Love</p>
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="gold-divider" />
          <p className="section-subtitle max-w-lg mx-auto">
            Real feedback from satisfied clients — no filters, just genuine experiences.
          </p>
        </div>

        {/* WhatsApp screenshot cards */}
        <div
          ref={trackRef}
          className="flex overflow-x-auto gap-0 pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {screenshotTestimonials.map((src, i) => (
            <div key={i} className="snap-center">
              <ScreenshotCard src={src} i={i} />
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {screenshotTestimonials.map((_, i) => (
            <button key={i} onClick={() => scrollToCard(i)}
              className={`rounded-full transition-all duration-300 ${
                i === idx ? 'w-6 h-2 bg-gold' : 'w-2 h-2 bg-nude-dark/40 hover:bg-gold/50'
              }`} />
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Why Choose Us ──────────────────────────────────────────────────────────
const whyPoints = [
  {
    icon: Award,
    title: 'Professional & Flawless Finish',
    desc: 'Precision artistry and years of expertise ensure a polished, camera-ready result every time.',
  },
  {
    icon: Heart,
    title: 'Personalized Beauty Experience',
    desc: 'We listen to your vision and tailor every look to complement your unique features and style.',
  },
  {
    icon: Sparkles,
    title: 'High-Quality Products',
    desc: 'We use only premium, skin-safe products for long-lasting, comfortable, and stunning wear.',
  },
  {
    icon: Users,
    title: 'Trusted by Happy Clients',
    desc: 'A growing community of brides, celebrities, and everyday clients who return for every occasion.',
  },
]

function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5 md:px-10">
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold mb-3">Our Difference</p>
          <h2 className="section-title">Why Choose RIA~Artistry</h2>
          <div className="gold-divider" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyPoints.map((p) => {
            const Icon = p.icon
            return (
              <div key={p.title}
                className="group card p-7 text-center flex flex-col items-center gap-4 hover:bg-nude-light transition-colors duration-300">
                <div className="w-14 h-14 rounded-full bg-blush-light flex items-center justify-center group-hover:bg-gold/10 transition-colors duration-300">
                  <Icon size={24} className="text-gold" />
                </div>
                <h3 className="font-serif text-base font-semibold text-gray-900">{p.title}</h3>
                <p className="font-sans text-sm text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─── How to Book ────────────────────────────────────────────────────────────
function HowToBook() {
  const steps = [
    { n: '01', title: 'Send a Message', desc: 'Reach out via WhatsApp — quick, easy, and always personal.', Icon: MessageCircle },
    { n: '02', title: 'Choose Your Service & Date', desc: 'We discuss your preferred look, location, and confirm availability.', Icon: CalendarDays },
    { n: '03', title: 'Get Ready to Look Stunning', desc: 'Show up and let us transform you into your most radiant self.', Icon: Sparkles },
  ]

  return (
    <section id="how-to-book" className="py-20 md:py-28 bg-cream">
      <div className="max-w-5xl mx-auto px-5 md:px-10">
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold mb-3">Simple Process</p>
          <h2 className="section-title">How to Book</h2>
          <div className="gold-divider" />
          <p className="section-subtitle max-w-lg mx-auto">
            Three easy steps to your most beautiful look yet.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-10 left-[calc(16.67%+20px)] right-[calc(16.67%+20px)] h-0.5 bg-gradient-to-r from-gold via-gold-light to-gold opacity-30" />

          {steps.map((s, i) => (
            <div key={s.n} className="flex flex-col items-center text-center gap-4">
              <div className="relative w-20 h-20 rounded-full bg-nude-light flex items-center justify-center shadow-sm z-10">
                <s.Icon size={28} className="text-gold" />
                <span className="absolute -top-2 -right-2 w-7 h-7 bg-gold text-white rounded-full flex items-center justify-center font-sans text-[10px] font-bold">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-serif text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="font-sans text-sm text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-whatsapp">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.533 5.851L0 24l6.335-1.521A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.003-1.368l-.36-.214-3.76.904.938-3.665-.234-.374A9.818 9.818 0 1 1 12 21.818z"/>
            </svg>
            Start Booking via WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── CTA Banner ─────────────────────────────────────────────────────────────
function CTABanner() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0">
        <img src="./image-services/makeup-gele3.png" alt="CTA background" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-black/65" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-10 text-center">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold-light mb-3">Don't Wait</p>
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
          Ready to Get Glammed?
        </h2>
        <p className="font-sans text-white/75 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Book your session today and let us bring out your best look. Dates fill up fast — secure yours now.
        </p>
        <a href={WA_LINK} target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-sans font-semibold text-base px-10 py-4 rounded-full shadow-xl transition-all duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.533 5.851L0 24l6.335-1.521A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.003-1.368l-.36-.214-3.76.904.938-3.665-.234-.374A9.818 9.818 0 1 1 12 21.818z"/>
          </svg>
          Chat on WhatsApp
        </a>
      </div>
    </section>
  )
}

// ─── Contact ────────────────────────────────────────────────────────────────
function Contact() {
  const details = [
    { icon: Mail, label: 'Email', value: 'hellofaceofria@gmail.com', href: 'mailto:hellofaceofria@gmail.com' },
    { icon: Phone, label: 'WhatsApp', value: '08022507694', href: WA_LINK },
    { icon: MapPin, label: 'Location', value: 'Lasu-Igando, Lagos', href: 'https://maps.google.com/?q=Lasu-Igando+Lagos' },
  ]

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-5 md:px-10">
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold mb-3">Reach Us</p>
          <h2 className="section-title">Contact Us</h2>
          <div className="gold-divider" />
          <p className="section-subtitle">We'd love to hear from you — reach out any time.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {details.map((d) => {
            const Icon = d.icon
            return (
              <a key={d.label} href={d.href} target="_blank" rel="noreferrer"
                className="card p-7 flex flex-col items-center text-center gap-3 hover:bg-nude-light transition-colors duration-300 group">
                <div className="w-12 h-12 rounded-full bg-blush-light flex items-center justify-center group-hover:bg-gold/10 transition-colors duration-300">
                  <Icon size={20} className="text-gold" />
                </div>
                <p className="font-sans text-xs text-gray-400 uppercase tracking-widest">{d.label}</p>
                <p className="font-serif text-sm font-semibold text-gray-800">{d.value}</p>
              </a>
            )
          })}
        </div>

        <div className="text-center">
          <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-primary">
            Message Us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── Footer ─────────────────────────────────────────────────────────────────
function Footer() {
  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="bg-gray-950 text-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <p className="font-serif text-2xl font-bold mb-1">
              RIA<span className="text-gradient-gold">~</span>Artistry
            </p>
            <p className="font-sans text-xs tracking-widest text-gray-400 uppercase mb-4">Beauty Studio</p>
            <p className="font-sans text-sm text-gray-400 leading-relaxed">
              Enhancing beauty, one look at a time. Serving Lagos with premium makeup and styling artistry.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-5">Quick Links</p>
            <ul className="flex flex-col gap-3">
              {navLinks.map(l => (
                <li key={l.label}>
                  <a href={l.href} className="font-sans text-sm text-gray-400 hover:text-gold transition-colors duration-200">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-5">Follow Us</p>
            <div className="flex flex-col gap-4">
              <a href="https://instagram.com/ria~artistry" target="_blank" rel="noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-pink-400 transition-colors duration-200 group">
                <div className="w-9 h-9 rounded-full bg-gray-800 group-hover:bg-pink-500/20 flex items-center justify-center transition-colors duration-200">
                  <Instagram size={16} />
                </div>
                <div>
                  <p className="font-sans text-sm font-medium">Ria~Artistry</p>
                  <p className="font-sans text-[11px] text-gray-600">Instagram</p>
                </div>
              </a>
              <a href="https://tiktok.com/@faceofria" target="_blank" rel="noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors duration-200 group">
                <div className="w-9 h-9 rounded-full bg-gray-800 group-hover:bg-cyan-500/20 flex items-center justify-center transition-colors duration-200">
                  {/* TikTok icon */}
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-sans text-sm font-medium">@faceofria</p>
                  <p className="font-sans text-[11px] text-gray-600">TikTok</p>
                </div>
              </a>
              <a href={WA_LINK} target="_blank" rel="noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors duration-200 group">
                <div className="w-9 h-9 rounded-full bg-gray-800 group-hover:bg-green-500/20 flex items-center justify-center transition-colors duration-200">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.533 5.851L0 24l6.335-1.521A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.003-1.368l-.36-.214-3.76.904.938-3.665-.234-.374A9.818 9.818 0 1 1 12 21.818z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-sans text-sm font-medium">08022507694</p>
                  <p className="font-sans text-[11px] text-gray-600">WhatsApp</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs text-gray-600">
            © {new Date().getFullYear()} RIA~Artistry. All rights reserved.
          </p>
          <p className="font-serif text-xs text-gray-600 italic">
            Enhancing beauty, one look at a time.
          </p>
        </div>
      </div>
    </footer>
  )
}

// ─── Floating WhatsApp + Scroll to Top ──────────────────────────────────────
function FloatingActions() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3">
      {showTop && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-10 h-10 bg-gray-800/80 backdrop-blur text-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-700 transition-all duration-200">
          <ArrowUp size={16} />
        </button>
      )}
      <a href={WA_LINK} target="_blank" rel="noreferrer"
        className="wa-float w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-colors duration-200"
        title="Chat on WhatsApp">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.533 5.851L0 24l6.335-1.521A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.003-1.368l-.36-.214-3.76.904.938-3.665-.234-.374A9.818 9.818 0 1 1 12 21.818z"/>
        </svg>
      </a>
    </div>
  )
}

// ─── App Root ───────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Testimonials />
        <WhyChooseUs />
        <HowToBook />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
