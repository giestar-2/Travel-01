import type { Metadata } from "next";

import Footer from "@/components/Footer";
import SharedSections from "@/components/SharedSections";
import TravelImage from "@/components/TravelImage";
import ContactScripts from "@/components/scripts/ContactScripts";

export const metadata: Metadata = {
  title: "Contact Us - Wanderly",
  description: "Tell us about your next trip. Our travel specialists will help you plan the details.",
};

const inputClass =
  "w-full rounded-lg border border-slate-200 bg-white px-4 py-3.5 text-sm text-brand-dark placeholder:text-slate-400 transition-colors focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/15";

export default function ContactPage() {
  return (
    <ContactScripts>
      <header className="relative max-w-7xl mx-auto px-6 md:px-12 pt-32 md:pt-40 pb-12 md:pb-16">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-8 gs-fade">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-brand-orange mb-5">Your trip starts here</p>
            <h1 className="max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-brand-dark tracking-[-0.055em] leading-[1.02] text-balance">
              Tell us where you&apos;d love to go.
            </h1>
          </div>
          <p className="lg:col-span-4 max-w-md text-base md:text-lg leading-relaxed text-brand-gray pb-1 gs-fade">
            Share a little about your plans. A Wanderly travel specialist will help shape the details around you.
          </p>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-20 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <aside className="lg:col-span-4 lg:sticky lg:top-28 gs-fade">
            <div className="relative overflow-hidden rounded-[1.75rem] bg-slate-900 aspect-[4/3]">
              <TravelImage
                src="https://images.unsplash.com/photo-1561501900-3701fa6a0864?q=80&w=800&auto=format&fit=crop"
                sizes="(min-width: 1280px) 380px, (min-width: 1024px) 33vw, 100vw"
                alt="A traveler taking in a mountain view"
                className="absolute inset-0 h-full w-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-7 text-white">
                <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-white/85">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" /> HERE WHEN YOU NEED US
                </span>
                <p className="max-w-xs text-xl md:text-2xl font-semibold leading-snug">Good journeys start with a conversation.</p>
              </div>
            </div>

            <div className="mt-7 divide-y divide-slate-200 border-y border-slate-200">
              <a href="mailto:hello@wanderly.com" className="group flex items-center justify-between gap-4 py-5 focus-visible:outline-offset-4">
                <span>
                  <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-brand-gray">Write to us</span>
                  <span className="font-semibold text-brand-dark transition-colors group-hover:text-brand-orange">hello@wanderly.com</span>
                </span>
                <i data-lucide="arrow-up-right" aria-hidden="true" className="h-5 w-5 shrink-0 text-brand-orange" />
              </a>
              <a href="tel:+12125550192" className="group flex items-center justify-between gap-4 py-5 focus-visible:outline-offset-4">
                <span>
                  <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-brand-gray">Give us a call</span>
                  <span className="font-semibold text-brand-dark transition-colors group-hover:text-brand-orange">+1 (212) 555-0192</span>
                  <span className="mt-1 block text-xs text-brand-gray">Mon–Fri, 9am–6pm EST</span>
                </span>
                <i data-lucide="arrow-up-right" aria-hidden="true" className="h-5 w-5 shrink-0 text-brand-orange" />
              </a>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-brand-gray">Prefer email? We usually reply within one business day.</p>
          </aside>

          <div className="lg:col-span-8 gs-fade">
            <div className="rounded-[1.75rem] bg-white p-6 shadow-[0_20px_70px_-35px_rgba(15,23,42,0.24)] ring-1 ring-slate-200/70 sm:p-8 md:p-10 lg:p-12">
              <div className="mb-9 flex flex-wrap items-end justify-between gap-4 border-b border-slate-200 pb-7">
                <div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-brand-orange">Let&apos;s make a plan</p>
                  <h2 className="text-2xl font-bold tracking-tight text-brand-dark md:text-3xl">Tell us about your trip</h2>
                </div>
                <p className="text-xs text-brand-gray">Fields marked <span className="text-brand-orange">*</span> are required</p>
              </div>

              <form id="contactForm" className="space-y-6" noValidate>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className="mb-2 block text-sm font-semibold text-brand-dark">Your name <span className="text-brand-orange">*</span></label>
                    <input type="text" id="contact-name" name="name" required autoComplete="name" placeholder="Alex Morgan" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="mb-2 block text-sm font-semibold text-brand-dark">Email address <span className="text-brand-orange">*</span></label>
                    <input type="email" id="contact-email" name="email" required autoComplete="email" placeholder="alex@example.com" className={inputClass} />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-destination" className="mb-2 block text-sm font-semibold text-brand-dark">Where would you like to go?</label>
                    <select id="contact-destination" name="destination" defaultValue="" className={`${inputClass} appearance-none`}>
                      <option value="">Choose a destination</option>
                      <option>Santorini, Greece</option>
                      <option>Swiss Alps, Switzerland</option>
                      <option>Bali, Indonesia</option>
                      <option>Paris, France</option>
                      <option>Somewhere else</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="contact-date" className="mb-2 block text-sm font-semibold text-brand-dark">When are you thinking of going?</label>
                    <input type="date" id="contact-date" name="date" className={inputClass} />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="mb-2 block text-sm font-semibold text-brand-dark">Anything else we should know? <span className="text-brand-orange">*</span></label>
                  <textarea id="contact-message" name="message" rows={5} required placeholder="Tell us what you have in mind: the places, pace, or moments you’re hoping for." className={`${inputClass} min-h-36 resize-y leading-relaxed`} />
                </div>

                <div className="flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center">
                  <button type="submit" className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-brand-orange px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-orange-800 focus-visible:outline-offset-4 active:translate-y-0 sm:w-auto">
                    Send your enquiry
                    <i data-lucide="arrow-right" aria-hidden="true" className="h-4 w-4" />
                  </button>
                  <p id="formStatus" role="status" aria-live="polite" className="hidden text-sm font-medium text-emerald-700">
                    Thanks for getting in touch. We&apos;ll reply within one business day.
                  </p>
                  <p className="text-xs leading-relaxed text-brand-gray sm:ml-auto sm:max-w-56">No commitment. Just thoughtful help planning your trip.</p>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-100 md:mt-16">
          <div className="flex flex-col gap-2 px-6 py-5 sm:flex-row sm:items-end sm:justify-between sm:px-8">
            <div>
              <p className="mb-1 text-xs font-bold uppercase tracking-[0.16em] text-brand-orange">A little closer</p>
              <h2 className="text-xl font-bold text-brand-dark">Find us in New York</h2>
            </div>
            <p className="text-sm text-brand-gray">45 Greenlawn Avenue · New York, NY 10003</p>
          </div>
          <iframe
            title="Map showing Wanderly&apos;s New York office"
            className="h-64 w-full border-0 md:h-80"
            loading="lazy"
            referrerPolicy="no-referrer"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-74.01%2C40.72%2C-73.98%2C40.74&layer=mapnik"
          />
        </div>
      </section>

      <SharedSections />
      <Footer variant="site" />
    </ContactScripts>
  );
}
