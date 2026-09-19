import TravelImage from "@/components/TravelImage";

const features = [
  {
    icon: "shield-check",
    title: "Trusted & Secure",
    desc: "Licensed operators, secure payments, and verified reviews on every booking.",
  },
  {
    icon: "compass",
    title: "Expert Local Guides",
    desc: "Hand-picked guides who know every hidden gem at each destination.",
  },
  {
    icon: "wallet",
    title: "Best Price Promise",
    desc: "Transparent, all-inclusive pricing with no hidden fees—guaranteed.",
  },
  {
    icon: "headphones",
    title: "24/7 Support",
    desc: "A real human is ready to help you before, during, and after your trip.",
  },
  {
    icon: "calendar-check",
    title: "Flexible Booking",
    desc: "Free cancellation up to 7 days before departure on most packages.",
  },
  {
    icon: "globe-2",
    title: "120+ Destinations",
    desc: "From alpine treks to island escapes across more than 120 countries.",
  },
];

const faqs = [
  {
    q: "How do I find the best deals on Wanderly?",
    a: "We compare tour packages from hundreds of trusted operators in real-time to help you find the best deals for your ideal trip, whether it's a guided expedition or a relaxed island getaway.",
  },
  {
    q: "Is it safe to book through Wanderly?",
    a: "Yes! We use enterprise-grade encryption and partner strictly with licensed, verified tour operators and travel providers worldwide.",
  },
  {
    q: "Can I cancel or change my trip?",
    a: "Most tours offer free cancellation up to 7 days before departure. Check the specific package policy during checkout.",
  },
  {
    q: "What's included in a tour package price?",
    a: "Each package clearly lists what's covered—typically accommodation, guided activities, and transfers. We display all-inclusive price transparency upfront, so what you see is exactly what you pay.",
  },
];

export default function SharedSections() {
  return (
    <div id="shared-sections">
      {/* WHY WANDERLY (FEATURES / SERVICES) */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12 gs-fade">
          <span className="text-xs font-bold tracking-widest uppercase text-brand-orange mb-2 block">Why Wanderly</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark">Everything you need for the perfect trip</h2>
          <p className="text-brand-gray text-sm md:text-base mt-4">
            From planning to your journey home, we take care of the details so you can focus on the adventure.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="gs-fade bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center mb-4">
                <i data-lucide={feature.icon} className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-brand-dark mb-2">{feature.title}</h3>
              <p className="text-sm text-brand-gray leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-4 gs-fade">
            <span className="text-xs font-bold uppercase text-brand-gray tracking-wider">FAQs</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-8">
              Got Questions? <br />
              We&apos;re Here to Help.
            </h2>
            {faqs.map((faq) => (
              <details key={faq.q} name="travel-faq" className="group border-b border-slate-200 pb-4 accordion-item">
                <summary className="flex cursor-pointer list-none justify-between items-center py-3 font-bold text-brand-dark gap-4">
                  <span>{faq.q}</span>
                  <i
                    data-lucide="chevron-down"
                    className="w-5 h-5 shrink-0 text-brand-gray transition-transform duration-300 group-open:rotate-180 accordion-icon"
                  />
                </summary>
                <p className="text-sm text-brand-gray mt-2 accordion-content leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
          <div className="lg:col-span-5 gs-fade">
            <div className="rounded-3xl overflow-hidden shadow-xl h-[450px] relative">
              <TravelImage sizes="(min-width: 1280px) 480px, (min-width: 1024px) 42vw, 100vw"
                src="https://images.unsplash.com/photo-1561501900-3701fa6a0864?q=80&w=800&auto=format&fit=crop"
                alt="Traveler enjoying the view"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-bold text-lg">Need instant support?</p>
                <p className="text-xs text-white/80">Our 24/7 concierge is ready to assist you.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
