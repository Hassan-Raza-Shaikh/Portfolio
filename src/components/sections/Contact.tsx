'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { portfolioData } from '@/lib/portfolioData';
import Motif from '@/components/common/Motif';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

  useEffect(() => {
    if (formRef.current) {
      const inputs = formRef.current.querySelectorAll('input, textarea, button');

      gsap.from(inputs, {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
        duration: 0.6,
      });
    }
  }, []);

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
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-dark via-ink to-dark">
      <div className="container-wide">
        <p className="section-kicker mb-4 text-center text-xs md:text-sm">Contact / Collaboration / Availability</p>
        <h2 data-heading-reveal="words" className="section-title text-center text-4xl md:text-6xl mb-8 text-gradient">
          Let's Work Together
        </h2>
        <p className="mx-auto mb-16 max-w-2xl text-center text-paper/70">
          Have a project in mind or just want to chat? Feel free to reach out. I'm always interested in hearing about new opportunities and interesting projects.
        </p>

        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Email */}
          <a
            href={`mailto:${portfolioData.email}`}
            className="luxury-card group rounded-[1.75rem] p-6 text-center transition-all duration-300 hover:-translate-y-1"
          >
            <div className="mx-auto mb-3 h-12 w-12 text-sand/75">
              <Motif variant="crest" className="h-full w-full" />
            </div>
            <h3 className="mb-1 font-display text-2xl text-paper transition-colors group-hover:text-brass">Email</h3>
            <p className="break-all text-sm text-sand/70">{portfolioData.email}</p>
          </a>

          {/* LinkedIn */}
          <a
            href={portfolioData.socials[1]?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="luxury-card group rounded-[1.75rem] p-6 text-center transition-all duration-300 hover:-translate-y-1"
          >
            <div className="mx-auto mb-3 h-12 w-12 text-sand/75">
              <Motif variant="orbit" className="h-full w-full" />
            </div>
            <h3 className="mb-1 font-display text-2xl text-paper transition-colors group-hover:text-brass">LinkedIn</h3>
            <p className="text-sm text-sand/70">Connect with me</p>
          </a>

          {/* GitHub */}
          <a
            href={portfolioData.socials[0]?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="luxury-card group rounded-[1.75rem] p-6 text-center transition-all duration-300 hover:-translate-y-1"
          >
            <div className="mx-auto mb-3 h-12 w-12 text-sand/75">
              <Motif variant="pulse" className="h-full w-full" />
            </div>
            <h3 className="mb-1 font-display text-2xl text-paper transition-colors group-hover:text-brass">GitHub</h3>
            <p className="text-sm text-sand/70">Check my code</p>
          </a>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="luxury-card space-y-6 rounded-[2rem] p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="rounded-xl border border-paper/10 bg-paper/6 px-4 py-3 text-paper placeholder:text-sand/35 focus:outline-none focus:border-brass/45 transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="rounded-xl border border-paper/10 bg-paper/6 px-4 py-3 text-paper placeholder:text-sand/35 focus:outline-none focus:border-brass/45 transition-colors"
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full rounded-xl border border-paper/10 bg-paper/6 px-4 py-3 text-paper placeholder:text-sand/35 focus:outline-none focus:border-brass/45 transition-colors"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={6}
              required
              className="w-full resize-none rounded-xl border border-paper/10 bg-paper/6 px-4 py-3 text-paper placeholder:text-sand/35 focus:outline-none focus:border-brass/45 transition-colors"
            />

            <input type="hidden" name="_subject" value="New Portfolio Contact Submission" />

            {/* Status Message */}
            {submitStatus === 'success' && (
              <div className="rounded-xl border border-jade/40 bg-jade/10 p-4 text-sm text-jade">
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="rounded-xl border border-ember/40 bg-ember/10 p-4 text-sm text-ember">
                ✗ Something went wrong. Please try again.
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="magnetic-button cta-button pressable w-full rounded-full py-3 font-semibold uppercase tracking-[0.18em] transition-all disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
