import { motion } from "framer-motion";
import { useInView } from "./useInView";
import { Mail, MessageCircle, MapPin } from "lucide-react";

const EMAIL = "folawiyotolani247@gmail.com";
const WHATSAPP_NUMBER = "+2347017216397";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi Rifda! I found your portfolio and I'd love to work with you.",
);

export default function Contact() {
  const [ref, inView] = useInView();

  return (
    <section
      id="contact"
      className="py-28 bg-charcoal relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent/5 rounded-full blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(#C8A96E 1px, transparent 1px), linear-gradient(90deg, #C8A96E 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div
        ref={ref}
        className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24 text-center relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label block mb-6">Contact</span>

          <h2 className="font-display text-5xl md:text-7xl font-semibold text-cream leading-[1.05] mb-6">
            Let's build something{" "}
            <span className="italic text-accent">great</span>
            <br />
            together.
          </h2>

          <p className="font-body text-muted text-lg leading-relaxed max-w-xl mx-auto mb-14">
            Whether you have a project in mind, need reliable support, or just
            want to say hello. my inbox is always open. I respond within 24
            hours.
          </p>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="grid md:grid-cols-3 gap-4 mb-14"
        >
          {/* Email */}
          <a
            href={`mailto:${EMAIL}`}
            className="group flex flex-col items-center gap-3 p-6 bg-surface-2 border border-white/5 hover:border-accent/30 transition-all duration-400 rounded-sm card-hover"
          >
            <div className="w-10 h-10 bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
              <Mail
                size={16}
                className="text-accent group-hover:text-charcoal transition-colors duration-300"
              />
            </div>
            <div>
              <p className="font-mono text-xs text-muted mb-1">Email</p>
              <p className="font-body text-sm text-cream">{EMAIL}</p>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 p-6 bg-surface-2 border border-white/5 hover:border-accent/30 transition-all duration-400 rounded-sm card-hover"
          >
            <div className="w-10 h-10 bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
              <MessageCircle
                size={16}
                className="text-accent group-hover:text-charcoal transition-colors duration-300"
              />
            </div>
            <div>
              <p className="font-mono text-xs text-muted mb-1">WhatsApp</p>
              <p className="font-body text-sm text-cream">Chat directly</p>
            </div>
          </a>

          {/* Location */}
          <div className="flex flex-col items-center gap-3 p-6 bg-surface-2 border border-white/5 rounded-sm">
            <div className="w-10 h-10 bg-accent/10 border border-accent/20 flex items-center justify-center">
              <MapPin size={16} className="text-accent" />
            </div>
            <div>
              <p className="font-mono text-xs text-muted mb-1">Location</p>
              <p className="font-body text-sm text-cream">
                Nigeria · Remote Worldwide
              </p>
            </div>
          </div>
        </motion.div>

        {/* Main CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={`mailto:${EMAIL}`}
            className="px-8 py-4 bg-accent text-charcoal font-body font-semibold text-sm tracking-wide hover:bg-accent-light transition-colors duration-300"
          >
            Send Me an Email
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-white/15 text-cream font-body text-sm tracking-wide hover:border-accent hover:text-accent transition-all duration-300 flex items-center gap-2"
          >
            <MessageCircle size={14} />
            WhatsApp Me
          </a>
        </motion.div>

        {/* Closing message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-16 font-display italic text-muted text-lg"
        >
          "Every great website starts with one conversation."
        </motion.p>
      </div>
    </section>
  );
}
