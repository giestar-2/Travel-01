import type { Metadata } from "next";

import Footer from "@/components/Footer";
import SharedSections from "@/components/SharedSections";
import ContactScripts from "@/components/scripts/ContactScripts";

export const metadata: Metadata = {
  title: "Contact Us - Wanderly",
};

const socials = ["instagram", "twitter", "facebook", "youtube"];

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all text-sm";

export default function ContactPage() {
  return (
    <ContactScripts>
      {/* PAGE HEADER */}
      <header className="pt-32 md:pt-40 pb-12 max-w-7xl mx-auto px-6 md:px-12 text-center">
        <span className="text-xs font-bold tracking-widest uppercase text-brand-orange mb-3 block gs-fade">
          Get in Touch
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-brand-dark tracking-tight mb-4 gs-fade">
          Let's Plan Your Next Adventure
        </h1>
        <p className="text-brand-gray max-w-2xl mx-auto gs-fade">
          Have a question about a destination or want a custom itinerary? Our travel experts are here to help you every
          step of the way.
        </p>
      </header>

      {/* CONTACT GRID */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Info Cards */}
          <div className="lg:col-span-4 space-y-4 gs-fade">
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0">
                <i data-lucide="mail" className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-brand-dark mb-1">Email Us</h3>
                <p className="text-sm text-brand-gray">hello@wanderly.com</p>
                <p className="text-sm text-brand-gray">support@wanderly.com</p>
              </div>
            </div>
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0">
                <i data-lucide="phone" className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-brand-dark mb-1">Call Us</h3>
                <p className="text-sm text-brand-gray">+1 (212) 555-0192</p>
                <p className="text-sm text-brand-gray">Mon–Fri, 9am–6pm EST</p>
              </div>
            </div>
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0">
                <i data-lucide="map-pin" className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-brand-dark mb-1">Visit Us</h3>
                <p className="text-sm text-brand-gray">
                  45 Greenlawn Avenue,
                  <br />
                  New York, NY 10003, USA
                </p>
              </div>
            </div>
            <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-bold mb-3">Follow Our Journey</h3>
              <div className="flex gap-3">
                {socials.map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-orange flex items-center justify-center transition-colors"
                  >
                    <i data-lucide={social} className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-8 gs-fade">
            <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-10 shadow-sm">
              <h2 className="text-2xl font-bold text-brand-dark mb-6">Send Us a Message</h2>
              <form id="contactForm" className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-brand-dark mb-2">Full Name</label>
                    <input type="text" name="name" required placeholder="Jane Doe" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-dark mb-2">Email Address</label>
                    <input type="email" name="email" required placeholder="jane@example.com" className={inputClass} />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-brand-dark mb-2">Destination of Interest</label>
                    <select name="destination" className={`${inputClass} bg-white`}>
                      <option value="">Select a destination</option>
                      <option>Santorini, Greece</option>
                      <option>Swiss Alps, Switzerland</option>
                      <option>Bali, Indonesia</option>
                      <option>Paris, France</option>
                      <option>Other / Not sure yet</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-dark mb-2">Travel Date</label>
                    <input type="date" name="date" className={inputClass} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-dark mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us about your dream trip..."
                    className={`${inputClass} resize-none`}
                  ></textarea>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-brand-orange hover:bg-orange-600 text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-all shadow-lg hover:shadow-orange-500/30 inline-flex items-center justify-center gap-2"
                  >
                    <span>Send Message</span>
                    <i data-lucide="send" className="w-4 h-4" />
                  </button>
                  <p id="formStatus" className="text-sm font-medium text-green-600 hidden">
                    Thanks! We'll get back to you within 24 hours.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="mt-8 rounded-3xl overflow-hidden shadow-sm border border-slate-100 h-72 md:h-96 gs-fade">
          <iframe
            title="Wanderly location map"
            className="w-full h-full"
            loading="lazy"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-74.01%2C40.72%2C-73.98%2C40.74&layer=mapnik"
          ></iframe>
        </div>
      </section>

      {/* SHARED SECTIONS (Features + FAQ) */}
      <SharedSections />

      <Footer variant="site" />
    </ContactScripts>
  );
}
