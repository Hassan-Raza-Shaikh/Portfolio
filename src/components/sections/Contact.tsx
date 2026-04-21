'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { portfolioData } from '@/lib/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');

      if (formRef.current) {
        formRef.current.reset();
      }

      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-dark/50 to-dark">
      <div className="container-wide">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient text-center">
          Let's Work Together
        </h2>
        <p className="text-gray-400 text-center max-w-xl mx-auto mb-16">
          Have a project in mind or just want to chat? Feel free to reach out. I'm always interested in hearing about new opportunities and interesting projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Email */}
          <a
            href={`mailto:${portfolioData.email}`}
            className="p-6 bg-white/5 rounded-lg border border-white/10 hover:border-accent/50 transition-all hover:bg-white/10 group text-center"
          >
            <div className="text-4xl mb-3">📧</div>
            <h3 className="font-semibold mb-1 group-hover:text-accent transition-colors">Email</h3>
            <p className="text-sm text-gray-400 break-all">{portfolioData.email}</p>
          </a>

          {/* LinkedIn */}
          <a
            href={portfolioData.socials[1]?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-white/5 rounded-lg border border-white/10 hover:border-accent/50 transition-all hover:bg-white/10 group text-center"
          >
            <div className="text-4xl mb-3">💼</div>
            <h3 className="font-semibold mb-1 group-hover:text-accent transition-colors">LinkedIn</h3>
            <p className="text-sm text-gray-400">Connect with me</p>
          </a>

          {/* GitHub */}
          <a
            href={portfolioData.socials[0]?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-white/5 rounded-lg border border-white/10 hover:border-accent/50 transition-all hover:bg-white/10 group text-center"
          >
            <div className="text-4xl mb-3">💻</div>
            <h3 className="font-semibold mb-1 group-hover:text-accent transition-colors">GitHub</h3>
            <p className="text-sm text-gray-400">Check my code</p>
          </a>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6 p-8 bg-white/5 rounded-lg border border-white/10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
            />

            <textarea
              placeholder="Your Message"
              rows={6}
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors resize-none"
            />

            {/* Status Message */}
            {submitStatus === 'success' && (
              <div className="p-4 bg-green-500/10 border border-green-500/50 rounded-lg text-green-400 text-sm">
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-sm">
                ✗ Something went wrong. Please try again.
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-accent text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
