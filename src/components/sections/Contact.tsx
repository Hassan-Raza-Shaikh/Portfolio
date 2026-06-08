'use client';

import { useRef, useState } from 'react';
import { portfolioData } from '@/lib/portfolioData';
import Motif from '@/components/common/Motif';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);

    try {
      if (!formspreeEndpoint) {
        throw new Error('Missing NEXT_PUBLIC_FORMSPREE_ENDPOINT');
      }

      const formData = new FormData(formRef.current);
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      setSubmitStatus('success');
      formRef.current.reset();
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="py-12 bg-transparent">
      <div className="container-wide">
        <div className="mb-12 text-center reveal-on-scroll">
          <p className="section-kicker mb-4 text-xs md:text-sm">Contact / Collaboration / Availability</p>
          <h2 className="section-title text-4xl md:text-6xl mb-6 text-gradient">
            Let's Work Together
          </h2>
          <p className="mx-auto max-w-2xl text-paper/70">
            Have a question about my work, want to collaborate on AI or IoT projects, or just want to connect? Drop a message below and I'll get back to you.
          </p>
        </div>

        {/* Social Links Cards */}
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3 reveal-on-scroll">
          {/* Email */}
          <a
            href={`mailto:${portfolioData.email}`}
            className="luxury-card group rounded-[2rem] p-6 text-center transition-all duration-300"
          >
            <div className="mx-auto mb-4 h-12 w-12 text-accent/70 group-hover:scale-105 transition-transform">
              <Motif variant="crest" className="h-full w-full animate-pulse" />
            </div>
            <h3 className="mb-2 font-display text-2xl text-paper group-hover:text-accent transition-colors font-bold">Email</h3>
            <p className="break-all text-xs text-sand/65 font-mono">{portfolioData.email}</p>
          </a>

          {/* LinkedIn */}
          <a
            href={portfolioData.socials[1]?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="luxury-card luxury-card-green group rounded-[2rem] p-6 text-center transition-all duration-300"
          >
            <div className="mx-auto mb-4 h-12 w-12 text-ember/70 group-hover:scale-105 transition-transform">
              <Motif variant="orbit" className="h-full w-full animate-pulse" />
            </div>
            <h3 className="mb-2 font-display text-2xl text-paper group-hover:text-ember transition-colors font-bold">LinkedIn</h3>
            <p className="text-xs text-sand/65">Connect with me</p>
          </a>

          {/* GitHub */}
          <a
            href={portfolioData.socials[0]?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="luxury-card luxury-card-blue group rounded-[2rem] p-6 text-center transition-all duration-300"
          >
            <div className="mx-auto mb-4 h-12 w-12 text-jade/70 group-hover:scale-105 transition-transform">
              <Motif variant="pulse" className="h-full w-full animate-pulse" />
            </div>
            <h3 className="mb-2 font-display text-2xl text-paper group-hover:text-jade transition-colors font-bold">GitHub</h3>
            <p className="text-xs text-sand/65">Check my code</p>
          </a>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto reveal-on-scroll">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="luxury-card space-y-6 rounded-[2rem] p-6 md:p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-paper placeholder:text-sand/30 focus:outline-none focus:border-accent/40 transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-paper placeholder:text-sand/30 focus:outline-none focus:border-accent/40 transition-colors"
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-paper placeholder:text-sand/30 focus:outline-none focus:border-accent/40 transition-colors"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-paper placeholder:text-sand/30 focus:outline-none focus:border-accent/40 transition-colors"
            />

            <input type="hidden" name="_subject" value="New Portfolio Contact Submission" />

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="rounded-xl border border-ember/40 bg-ember/10 p-4 text-xs text-ember font-medium animate-fade-in">
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="rounded-xl border border-accent/40 bg-accent/10 p-4 text-xs text-accent font-medium animate-fade-in">
                ✗ Something went wrong. Please try again.
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="magnetic-button cta-button pressable w-full rounded-full py-3 text-xs font-bold uppercase tracking-[0.2em] transition-all disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
