// MoneyMotion – Premium Hindi/Hinglish Single-Page Website

const PAYMENT_LINK = "https://rzp.io/rzp/3K5TUJLX";
const WHATSAPP_LINK = "https://wa.me/919410089998";
const INSTAGRAM_LINK = "https://instagram.com/moneymotion958";

function WhatsAppIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function InstagramIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function CheckCircle() {
  return (
    <span
      className="inline-flex items-center justify-center w-6 h-6 rounded-full flex-shrink-0"
      style={{ background: "#1F8A3A" }}
      aria-hidden="true"
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M2.5 7l3 3 6-6"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function StarRating() {
  return (
    <span className="text-yellow-400 text-lg" aria-label="5 star rating">
      ★★★★★
    </span>
  );
}

export default function App() {
  return (
    <div className="font-hind min-h-screen bg-white text-brand-dark">
      {/* ── HEADER ─────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-xs border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Brand */}
          <div className="flex flex-col leading-tight">
            <span className="text-2xl font-bold" style={{ color: "#F07A1A" }}>
              MoneyMotion
            </span>
            <span className="text-xs font-medium" style={{ color: "#5A5A5A" }}>
              Digital Services
            </span>
          </div>
          {/* Instagram */}
          <a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold hover:opacity-80 transition-opacity"
            style={{ color: "#1F8A3A" }}
            data-ocid="header.link"
          >
            <InstagramIcon size={20} />
            <span className="hidden sm:inline">
              Instagram Par Follow Karein
            </span>
          </a>
        </div>
      </header>

      {/* ── HERO SECTION ───────────────────────────────── */}
      <section
        className="gradient-hero py-16 md:py-24 px-4 text-white relative overflow-hidden"
        data-ocid="hero.section"
      >
        {/* decorative circles */}
        <div
          className="absolute -top-16 -right-16 w-64 h-64 rounded-full opacity-20"
          style={{ background: "rgba(255,255,255,0.3)" }}
        />
        <div
          className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full opacity-15"
          style={{ background: "rgba(255,255,255,0.25)" }}
        />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 drop-shadow">
            DM karne ki zarurat nahi
            <br />
            <span className="text-yellow-300">Direct Order karein 🚀</span>
          </h1>
          <p className="text-lg md:text-xl font-medium mb-8 opacity-90">
            Website, Poster, Instagram Growth, CSC Support —{" "}
            <span className="font-bold text-yellow-200">Sirf ₹999 me!</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
            {/* Primary CTA */}
            <a
              href={PAYMENT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-lg text-white shadow-btn transition-transform hover:scale-105 active:scale-95"
              style={{ background: "#F07A1A", minWidth: "260px" }}
              data-ocid="hero.primary_button"
            >
              ₹999 me Direct Order Karein 💰
            </a>
            {/* WhatsApp CTA */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-lg border-2 border-white text-white hover:bg-white transition-colors hover:text-brand-green"
              style={{ minWidth: "220px" }}
              data-ocid="hero.secondary_button"
            >
              <WhatsAppIcon size={22} />
              WhatsApp Chat Karein
            </a>
          </div>

          <p className="text-sm opacity-80 font-medium">
            Payment ke turant baad kaam start hoga 🚀
          </p>
        </div>
      </section>

      {/* ── OFFER SECTION ──────────────────────────────── */}
      <section className="py-16 px-4 bg-white" data-ocid="offer.section">
        <div className="max-w-2xl mx-auto">
          <div
            className="rounded-3xl p-8 md:p-12 shadow-card"
            style={{ background: "#F2EFE3" }}
          >
            <h2
              className="text-2xl md:text-3xl font-bold text-center mb-8"
              style={{ color: "#1A1A1A" }}
            >
              Sirf <span style={{ color: "#F07A1A" }}>₹999 me</span> aapko
              milega:
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              {[
                "Website Setup",
                "Poster + Caption",
                "Instagram Growth Guidance",
                "CSC + Online Earning Support",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle />
                  <span
                    className="text-base md:text-lg font-semibold"
                    style={{ color: "#1A1A1A" }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
            <div className="text-center">
              <a
                href={PAYMENT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-4 rounded-full font-bold text-lg text-white shadow-btn transition-transform hover:scale-105 active:scale-95"
                style={{ background: "#F07A1A" }}
                data-ocid="offer.primary_button"
              >
                ₹999 me Direct Order Karein 💰
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST SECTION ──────────────────────────────── */}
      <section
        className="py-16 px-4"
        style={{ background: "#EAF4EA" }}
        data-ocid="trust.section"
      >
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-2xl md:text-3xl font-bold text-center mb-10"
            style={{ color: "#1A1A1A" }}
          >
            Log hum par{" "}
            <span style={{ color: "#1F8A3A" }}>bharosa kyun karte hain?</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {[
              { icon: "✅", text: "100% Genuine Service" },
              { icon: "⚡", text: "Fast Delivery (24–48 hours)" },
              { icon: "💬", text: "Direct WhatsApp Support" },
              { icon: "💰", text: "Affordable ₹999 me Complete Setup" },
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-4 bg-white rounded-2xl px-6 py-5 shadow-card"
              >
                <span className="text-3xl">{item.icon}</span>
                <span
                  className="text-base md:text-lg font-semibold"
                  style={{ color: "#1A1A1A" }}
                >
                  {item.text}
                </span>
              </div>
            ))}
          </div>
          <p
            className="text-center text-base md:text-lg font-bold"
            style={{ color: "#1F8A3A" }}
          >
            Payment ke baad turant kaam shuru hota hai 🚀
          </p>
        </div>
      </section>

      {/* ── TESTIMONIALS SECTION ───────────────────────── */}
      <section className="py-16 px-4 bg-white" data-ocid="testimonials.section">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-2xl md:text-3xl font-bold text-center mb-10"
            style={{ color: "#1A1A1A" }}
          >
            Customers <span style={{ color: "#F07A1A" }}>Kya Kehte Hain?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                text: "Maine ₹999 me website banwayi, kaafi accha response mila",
                name: "Ravi Kumar",
                avatar: "RK",
              },
              {
                text: "Poster aur caption service mast hai, kaam fast hua",
                name: "Neha Sharma",
                avatar: "NS",
              },
              {
                text: "WhatsApp support best hai, turant reply milta hai",
                name: "Aman Verma",
                avatar: "AV",
              },
            ].map((review, i) => (
              <div
                key={review.name}
                className="bg-white rounded-2xl p-6 shadow-card border border-gray-100 flex flex-col gap-4"
                data-ocid={`testimonials.item.${i + 1}`}
              >
                <StarRating />
                <p
                  className="text-base font-medium italic leading-relaxed"
                  style={{ color: "#1A1A1A" }}
                >
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    style={{ background: "#F07A1A" }}
                  >
                    {review.avatar}
                  </div>
                  <span className="font-bold" style={{ color: "#1A1A1A" }}>
                    — {review.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES SECTION ───────────────────────────── */}
      <section
        className="py-16 px-4"
        style={{ background: "#FFF4EC" }}
        data-ocid="services.section"
      >
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-2xl md:text-3xl font-bold text-center mb-10"
            style={{ color: "#1A1A1A" }}
          >
            Hamare <span style={{ color: "#F07A1A" }}>Services</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            {[
              {
                icon: "🌐",
                title: "Website Setup",
                desc: "Aapka professional website banayenge — fast, mobile-friendly aur attractive design ke saath.",
              },
              {
                icon: "🎨",
                title: "Poster + Caption",
                desc: "Social media ke liye eye-catching posters aur engaging captions tayaar karenge.",
              },
              {
                icon: "📈",
                title: "Instagram Growth Guidance",
                desc: "Instagram followers badhane ke proven tips, strategies aur guidance milegi.",
              },
              {
                icon: "💻",
                title: "CSC + Online Earning Support",
                desc: "CSC registration se lekar online earning ke best tarike — har step mein help.",
              },
            ].map((service, i) => (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-6 shadow-card flex gap-4"
                data-ocid={`services.item.${i + 1}`}
              >
                <span className="text-4xl flex-shrink-0">{service.icon}</span>
                <div>
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ color: "#F07A1A" }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#5A5A5A" }}
                  >
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-lg text-white shadow-btn-green transition-transform hover:scale-105 active:scale-95"
              style={{ background: "#1F8A3A" }}
              data-ocid="services.secondary_button"
            >
              <WhatsAppIcon size={22} />
              WhatsApp Chat Karein
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTACT SECTION ────────────────────────────── */}
      <section className="py-16 px-4 bg-white" data-ocid="contact.section">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-2xl md:text-3xl font-bold mb-4"
            style={{ color: "#1A1A1A" }}
          >
            Humse <span style={{ color: "#1F8A3A" }}>Sampark Karein</span>
          </h2>
          <p className="text-base mb-8" style={{ color: "#5A5A5A" }}>
            Hamare kaam aur earning ideas ke liye follow karein 📱
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-lg text-white shadow-btn-green transition-transform hover:scale-105 active:scale-95"
              style={{ background: "#25D366" }}
              data-ocid="contact.primary_button"
            >
              <WhatsAppIcon size={22} />
              WhatsApp Chat Karein
            </a>
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-lg text-white transition-transform hover:scale-105 active:scale-95"
              style={{
                background:
                  "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)",
              }}
              data-ocid="contact.secondary_button"
            >
              <InstagramIcon size={22} />
              Instagram Par Follow Karein
            </a>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA SECTION ──────────────────────────── */}
      <section
        className="gradient-cta py-16 md:py-20 px-4 text-white relative overflow-hidden"
        data-ocid="finalcta.section"
      >
        <div
          className="absolute -top-10 -right-10 w-56 h-56 rounded-full opacity-15"
          style={{ background: "rgba(255,255,255,0.3)" }}
        />
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow">
            Aaj hi start karein apni online earning 🚀
          </h2>
          <p className="text-lg md:text-xl font-medium mb-8 opacity-90">
            Sirf ₹999 me complete setup paayein aur earning shuru karein
          </p>
          <a
            href={PAYMENT_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-5 rounded-full font-bold text-xl text-brand-orange bg-white shadow-lg transition-transform hover:scale-105 active:scale-95 mb-6"
            data-ocid="finalcta.primary_button"
          >
            ₹999 me Order Karein 💰
          </a>
          <p
            className="text-base font-bold animate-pulse"
            style={{ color: "#FFE066" }}
          >
            ⚡ Limited slots available – jaldi karein
          </p>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────── */}
      <footer
        className="py-10 px-4 text-center"
        style={{ background: "#1A1A1A" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-1">
            <span className="text-2xl font-bold" style={{ color: "#F07A1A" }}>
              MoneyMotion
            </span>
          </div>
          <p className="text-sm mb-4" style={{ color: "#888" }}>
            Digital Services at Your Doorstep
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold hover:opacity-80 transition-opacity"
              style={{ color: "#cc3e9a" }}
              data-ocid="footer.link"
            >
              <InstagramIcon size={18} />
              Instagram
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold hover:opacity-80 transition-opacity"
              style={{ color: "#25D366" }}
              data-ocid="footer.secondary_button"
            >
              <WhatsAppIcon size={18} />
              WhatsApp
            </a>
          </div>
          <p className="text-xs" style={{ color: "#666" }}>
            © {new Date().getFullYear()} MoneyMotion. All rights reserved.{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              style={{ color: "#888" }}
            >
              Built with love using caffeine.ai
            </a>
          </p>
        </div>
      </footer>

      {/* ── STICKY WHATSAPP BUTTON ──────────────────────── */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-1">
        <span
          className="bg-white text-xs font-bold px-2 py-1 rounded-full shadow mb-1"
          style={{ color: "#1F8A3A" }}
        >
          Chat Karein
        </span>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-16 h-16 rounded-full text-white shadow-whatsapp animate-pulse-ring transition-transform hover:scale-110 active:scale-95"
          style={{ background: "#25D366" }}
          aria-label="WhatsApp Chat Karein"
          data-ocid="whatsapp.button"
        >
          <WhatsAppIcon size={32} />
        </a>
      </div>
    </div>
  );
}
