import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { Reveal, StaggerContainer, StaggerItem, MagneticButton } from '../components/Motion';

const Contact: React.FC = () => {
  return (
    <div className="pt-10 pb-20">
      <section className="container mx-auto px-6 mb-16 text-center">
        <Reveal>
            <span className="text-brand-accent font-semibold uppercase tracking-wider text-sm">Get In Touch</span>
            <h1 className="text-5xl font-bold mt-4">Strategic Consultation</h1>
        </Reveal>
      </section>

      <section className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
                <Reveal delay={0.2}>
                    <h2 className="text-3xl font-bold mb-6">Discuss your strategic requirements</h2>
                    <p className="text-gray-400 mb-8">
                        Contact us to schedule a briefing on your infrastructure and advisory needs. We operate globally with a focus on confidentiality and execution.
                    </p>
                </Reveal>

                <StaggerContainer className="space-y-6">
                    <StaggerItem className="glass-card p-6 rounded-xl flex items-start gap-4">
                        <div className="w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center text-brand-darker shrink-0">
                            <Mail size={20} />
                        </div>
                        <div>
                            <h3 className="font-bold text-white text-lg">Email Us</h3>
                            <p className="text-gray-400">contact@mar-abi.com</p>
                        </div>
                    </StaggerItem>
                    <StaggerItem className="glass-card p-6 rounded-xl flex items-start gap-4">
                        <div className="w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center text-brand-darker shrink-0">
                            <Phone size={20} />
                        </div>
                        <div>
                            <h3 className="font-bold text-white text-lg">Secure Line</h3>
                            <p className="text-gray-400">(000) 000-0000</p>
                        </div>
                    </StaggerItem>
                    <StaggerItem className="glass-card p-6 rounded-xl flex items-start gap-4">
                        <div className="w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center text-brand-darker shrink-0">
                            <MapPin size={20} />
                        </div>
                        <div>
                            <h3 className="font-bold text-white text-lg">Headquarters</h3>
                            <p className="text-gray-400">2464 Royal Ln. Mesa,<br/>New Jersey 45463</p>
                        </div>
                    </StaggerItem>
                </StaggerContainer>
            </div>

            {/* Form */}
            <Reveal delay={0.4}>
                <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/10 bg-white/5">
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-300">Your Name *</label>
                                <input type="text" placeholder="Ex. John Doe" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-300">Email Address *</label>
                                <input type="email" placeholder="example@gmail.com" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors" />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                             <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-300">Phone Number *</label>
                                <input type="tel" placeholder="(000) 000-0000" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-300">Area of Interest *</label>
                                <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors">
                                    <option className="bg-brand-darker">Select Area</option>
                                    <option className="bg-brand-darker">Strategic Advisory</option>
                                    <option className="bg-brand-darker">Infrastructure Deployment</option>
                                    <option className="bg-brand-darker">Sovereign Systems</option>
                                    <option className="bg-brand-darker">Governance Frameworks</option>
                                    <option className="bg-brand-darker">Other</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-300">Message *</label>
                            <textarea rows={5} placeholder="Briefly describe your strategic requirements..." className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors"></textarea>
                        </div>

                        <MagneticButton>
                            <button type="submit" className="w-full bg-brand-accent text-brand-darker font-bold py-4 rounded-lg hover:bg-white transition-colors flex items-center justify-center gap-2">
                                Request Consultation <Send size={18} />
                            </button>
                        </MagneticButton>
                    </form>
                </div>
            </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Contact;