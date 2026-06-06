'use client';

export default function Footer() {
  return (
    <div className="w-full bg-white">
      {/* CTA Card Section (Overlapping the footer) */}
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-20 relative z-20">
        <div className="bg-white border text-black rounded-[2.5rem] py-16 px-8 md:py-20 md:px-16 text-center relative overflow-hidden shadow-2xl border border-gray-100/50">
          
          {/* Left Decorative Donut Graphic */}
          <div className="absolute -bottom-24 -left-24 w-64 h-64 md:w-[400px] md:h-[400px] pointer-events-none select-none opacity-90">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <defs>
                <radialGradient id="pinkGrad" cx="35%" cy="35%" r="65%" fx="35%" fy="35%">
                  <stop offset="0%" stopColor="#f472b6" />   {/* Light Pink */}
                  <stop offset="45%" stopColor="#db2777" />  {/* Deep Pink */}
                  <stop offset="85%" stopColor="#9333ea" />  {/* Purple */}
                  <stop offset="100%" stopColor="#4c1d95" /> {/* Dark Purple */}
                </radialGradient>
                <mask id="donutMaskLeft">
                  <rect width="200" height="200" fill="white" />
                  <circle cx="100" cy="100" r="45" fill="black" />
                </mask>
              </defs>
              <circle cx="100" cy="100" r="90" fill="url(#pinkGrad)" mask="url(#donutMaskLeft)" />
            </svg>
          </div>

          {/* Right Decorative Donut Graphic */}
          <div className="absolute -bottom-24 -right-24 w-64 h-64 md:w-[400px] md:h-[400px] pointer-events-none select-none opacity-90">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <defs>
                <radialGradient id="orangeGrad" cx="65%" cy="35%" r="65%" fx="65%" fy="35%">
                  <stop offset="0%" stopColor="#fecdd3" />   {/* Light Rose */}
                  <stop offset="45%" stopColor="#fb7185" />  {/* Rose */}
                  <stop offset="80%" stopColor="#ea580c" />  {/* Orange */}
                  <stop offset="100%" stopColor="#dc2626" /> {/* Red */}
                </radialGradient>
                <mask id="donutMaskRight">
                  <rect width="200" height="200" fill="white" />
                  <circle cx="100" cy="100" r="45" fill="black" />
                </mask>
              </defs>
              <circle cx="100" cy="100" r="90" fill="url(#orangeGrad)" mask="url(#donutMaskRight)" />
            </svg>
          </div>

          {/* CTA Content */}
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-neutral-900 leading-tight">
              Make customer service your competitive edge
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-500 max-w-xl leading-relaxed">
              Use Falco AI to deliver exceptional AI customer support experiences that set you apart from the competition.
            </p>
            
            {/* Glowing Gradient Button */}
            <div className="mt-8 relative group inline-block">
              {/* Glowing Blur Backdrop */}
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 rounded-xl blur opacity-45 group-hover:opacity-75 transition duration-300"></div>
              {/* Crisp Gradient Border container */}
              <div className="relative p-[1px] bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 rounded-xl">
                <button className="relative px-8 py-3.5 bg-black hover:bg-neutral-900 text-white font-bold rounded-[11px] text-sm transition duration-200">
                  Build your agent for free
                </button>
              </div>
            </div>

            {/* Subtext with Shield/Badge icon */}
            <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-neutral-400">
              <svg className="w-3.5 h-3.5 text-neutral-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <span>No credit card required</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Dark Footer */}
      <footer className="relative bg-[#030303] text-white pt-32 pb-16 px-6 sm:px-10 lg:px-20 overflow-hidden -mt-16">
        
        {/* Giant Watermark Background Text */}
        <div 
          className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 z-0 font-black tracking-widest leading-none select-none pointer-events-none text-[15vw] uppercase text-center opacity-85 whitespace-nowrap"
          style={{ 
            WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.04)', 
            color: 'transparent' 
          }}
        >
          FALCO AI
        </div>

        <div className="mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Brand, Actions, Badges */}
            <div className="md:col-span-5 lg:col-span-4 flex flex-col gap-6 items-start">
              
              {/* Logo & Copyright */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded bg-white text-black font-black text-sm">
                    F
                  </div>
                  <span className="text-lg font-bold text-white tracking-tight">Falco AI</span>
                </div>
                <a href="#" className="text-xs text-neutral-500 hover:text-white transition duration-200">
                  © 2026 Falco AI, Inc.
                </a>
              </div>

              {/* Row: Contact Button & Social Icons */}
              <div className="flex flex-wrap items-center gap-3">
                <button className="bg-white hover:bg-neutral-200 text-black text-xs font-bold px-4 py-2.5 rounded-lg transition duration-200">
                  Contact
                </button>

                {/* Social Icons inside Dark Square Boxes */}
                {[
                  {
                    name: 'LinkedIn',
                    url: '#',
                    path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'
                  },
                  {
                    name: 'Instagram',
                    url: '#',
                    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z'
                  },
                  {
                    name: 'Twitter',
                    url: '#',
                    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'
                  },
                  {
                    name: 'YouTube',
                    url: '#',
                    path: 'M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z'
                  }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900/40 text-neutral-400 hover:text-white hover:border-neutral-700 transition duration-200"
                    aria-label={social.name}
                  >
                    <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.path} />
                    </svg>
                  </a>
                ))}
              </div>

              {/* Security Badges */}
              <div className="flex items-center gap-4 mt-2">
                {/* SOC 2 Badge */}
                <div className="text-neutral-500 hover:text-neutral-400 transition duration-200 pointer-events-none select-none">
                  <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor">
                    <circle cx="24" cy="24" r="23" strokeWidth="1.2" />
                    <circle cx="24" cy="24" r="19" strokeWidth="1" strokeDasharray="3 2" />
                    <text x="50%" y="41%" dominantBaseline="middle" textAnchor="middle" fill="currentColor" fontSize="6.5" fontWeight="bold">AICPA</text>
                    <text x="50%" y="60%" dominantBaseline="middle" textAnchor="middle" fill="currentColor" fontSize="7.5" fontWeight="black">SOC 2</text>
                    <text x="50%" y="76%" dominantBaseline="middle" textAnchor="middle" fill="currentColor" fontSize="4.5" fontWeight="bold" letterSpacing="0.2">COMPLIANT</text>
                  </svg>
                </div>

                {/* GDPR Lock Badge */}
                <div className="text-neutral-500 hover:text-neutral-400 transition duration-200 pointer-events-none select-none">
                  <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor">
                    <circle cx="24" cy="24" r="23" strokeWidth="1.2" />
                    <rect x="18" y="22" width="12" height="10" rx="1.5" strokeWidth="1.5" />
                    <path d="M21 22v-3.5a3 3 0 0 1 6 0V22" strokeWidth="1.5" />
                    <circle cx="24" cy="27" r="1.5" fill="currentColor" />
                    {/* Ring of 12 Dots */}
                    <circle cx="24" cy="11" r="0.9" fill="currentColor" />
                    <circle cx="30.5" cy="12.7" r="0.9" fill="currentColor" />
                    <circle cx="35.3" cy="17.5" r="0.9" fill="currentColor" />
                    <circle cx="37" cy="24" r="0.9" fill="currentColor" />
                    <circle cx="35.3" cy="30.5" r="0.9" fill="currentColor" />
                    <circle cx="30.5" cy="35.3" r="0.9" fill="currentColor" />
                    <circle cx="24" cy="37" r="0.9" fill="currentColor" />
                    <circle cx="17.5" cy="35.3" r="0.9" fill="currentColor" />
                    <circle cx="12.7" cy="30.5" r="0.9" fill="currentColor" />
                    <circle cx="11" cy="24" r="0.9" fill="currentColor" />
                    <circle cx="12.7" cy="17.5" r="0.9" fill="currentColor" />
                    <circle cx="17.5" cy="12.7" r="0.9" fill="currentColor" />
                  </svg>
                </div>
              </div>

            </div>

            {/* Right Columns: PRODUCT, RESOURCES, COMPANY */}
            <div className="md:col-span-7 lg:col-span-8 grid grid-cols-3 gap-8">
              
              {/* Product Column */}
              <div className="flex flex-col gap-4">
                <span className="text-xs font-black tracking-wider uppercase text-neutral-400">Product</span>
                <ul className="flex flex-col gap-3">
                  {[
                    'Customer Service',
                    'Pricing',
                    'Security',
                    'Falco AI Experts',
                    'Hire an Expert',
                    'Affiliates'
                  ].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-sm font-semibold text-neutral-400 hover:text-white transition duration-200">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources Column (Cyan/Blue text to match screenshot) */}
              <div className="flex flex-col gap-4">
                <span className="text-xs font-black tracking-wider uppercase text-neutral-400">Resources</span>
                <ul className="flex flex-col gap-3">
                  {[
                    'Contact us',
                    'Customers',
                    'API',
                    'Guide',
                    'Blog',
                    'Changelog'
                  ].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-sm font-semibold text-[#4ba3e3] hover:text-[#5cb4f4] transition duration-200">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company Column */}
              <div className="flex flex-col gap-4">
                <span className="text-xs font-black tracking-wider uppercase text-neutral-400">Company</span>
                <ul className="flex flex-col gap-3">
                  {[
                    'Careers',
                    'Privacy policy',
                    'Terms of service',
                    'DPA',
                    'Cookie policy',
                    'Trust center',
                    'Cookie preferences'
                  ].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-sm font-semibold text-neutral-400 hover:text-white transition duration-200">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
