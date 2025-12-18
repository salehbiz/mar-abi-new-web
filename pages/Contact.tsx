import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-10 pb-20">
      <section className="container mx-auto px-6 mb-16 text-center">
        <span className="text-brand-accent font-semibold uppercase tracking-wider text-sm">Get In Touch</span>
        <h1 className="text-5xl font-bold mt-4">Contact Us</h1>
      </section>

      <section className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
                <h2 className="text-3xl font-bold mb-6">Let's discuss your project</h2>
                <p className="text-gray-400 mb-8">
                    We'd love to hear from you. Fill out the form, and our team will get back to you within 24 hours to schedule a consultation.
                </p>

                <div className="space-y-6">
                    <div className="glass-card p-6 rounded-xl flex items-start gap-4">
                        <div className="w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center text-brand-darker shrink-0">
                            <Mail size={20} />
                        </div>
                        <div>
                            <h3 className="font-bold text-white text-lg">Email Us</h3>
                            <p className="text-gray-400">example@gmail.com</p>
                        </div>
                    </div>
                    <div className="glass-card p-6 rounded-xl flex items-start gap-4">
                        <div className="w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center text-brand-darker shrink-0">
                            <Phone size={20} />
                        </div>
                        <div>
                            <h3 className="font-bold text-white text-lg">Call Us</h3>
                            <p className="text-gray-400">(000) 000-0000</p>
                        </div>
                    </div>
                    <div className="glass-card p-6 rounded-xl flex items-start gap-4">
                        <div className="w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center text-brand-darker shrink-0">
                            <MapPin size={20} />
                        </div>
                        <div>
                            <h3 className="font-bold text-white text-lg">Visit Us</h3>
                            <p className="text-gray-400">2464 Royal Ln. Mesa,<br/>New Jersey 45463</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form */}
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
                            <label className="text-sm font-semibold text-gray-300">Service Interested In *</label>
                            <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors">
                                <option className="bg-brand-darker">Select Service</option>
                                <option className="bg-brand-darker">Social Media Marketing</option>
                                <option className="bg-brand-darker">SEO</option>
                                <option className="bg-brand-darker">Content Marketing</option>
                                <option className="bg-brand-darker">Web Design</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-300">Your Message *</label>
                        <textarea rows={5} placeholder="Tell us about your project..." className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors"></textarea>
                    </div>

                    <button type="submit" className="w-full bg-brand-accent text-brand-darker font-bold py-4 rounded-lg hover:bg-white transition-colors flex items-center justify-center gap-2">
                        Send Message <Send size={18} />
                    </button>
                </form>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;