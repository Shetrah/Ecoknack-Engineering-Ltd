import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import toast from 'react-hot-toast';

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    toast.success('Message sent! We will contact you shortly.');
    setFormData({ name: '', email: '', phone: '', service: '', subject: '', message: '' });
    setLoading(false);
  };

  const contactInfo = [
    { icon: Phone, title: 'Phone', detail: '+254 711 203 376', href: 'tel:+254711203376' },
    { icon: Mail, title: 'Email', detail: 'Ecoknackengineering@gmail.com', href: 'mailto:Ecoknackengineering@gmail.com' },
    { icon: MapPin, title: 'Office', detail: 'Donholm Radhesyam Godowns & Kiambu Road K Mall No 8, Nairobi', href: '#' },
    { icon: Clock, title: 'Hours', detail: 'Mon–Fri: 8am–6pm | Sat: 9am–2pm', href: '#' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.p variants={fadeUp} className="bg-white/20 inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4">Contact Us</motion.p>
            <motion.h1 variants={fadeUp} className="text-5xl font-bold mb-5">Get In Touch</motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-white/85">
              Ready to start your project? Our expert team is here to help. Reach out for a free consultation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((c) => (
              <motion.a key={c.title} href={c.href} variants={fadeUp} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow text-center group">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary transition-colors">
                  <c.icon size={22} className="text-secondary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-primary mb-2">{c.title}</h3>
                <p className="text-gray-500 text-sm">{c.detail}</p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Form + WhatsApp */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-3">
              <h2 className="text-3xl font-bold text-primary mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary transition" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number *</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+254 7XX XXX XXX"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary transition" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="your.email@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary transition" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Service of Interest</label>
                  <select name="service" value={formData.service} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary transition">
                    <option value="">Select a service</option>
                    <option value="solar">Solar Energy Solutions</option>
                    <option value="building">Building Construction</option>
                    <option value="design-build">Design & Build</option>
                    <option value="civil">Civil Engineering</option>
                    <option value="roads">Road Construction</option>
                    <option value="cnc">CNC & Fabrication</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Subject *</label>
                  <input type="text" name="subject" value={formData.subject} onChange={handleChange} required placeholder="What is this about?"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary transition" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message *</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary transition resize-none" />
                </div>
                <button type="submit" disabled={loading}
                  className="w-full bg-primary hover:bg-secondary text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-60">
                  {loading ? <><div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" /> Sending...</> : <><Send size={18} /> Send Message</>}
                </button>
              </form>
            </motion.div>

            {/* Side info */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-2 space-y-6">
              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-7">
                <MessageCircle size={32} className="mb-4" />
                <h3 className="text-xl font-bold mb-3">Quick Response via WhatsApp</h3>
                <p className="text-white/85 text-sm mb-5">Don't want to wait? Connect with us directly on WhatsApp for instant responses from our team.</p>
                <a href="https://wa.me/254711203376" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-green-700 hover:bg-gray-100 font-bold px-6 py-3 rounded-lg transition-colors w-full justify-center">
                  <MessageCircle size={18} /> Chat on WhatsApp
                </a>
              </div>

              <div className="bg-gray-50 rounded-xl p-7">
                <h3 className="font-bold text-primary text-lg mb-4">P.O Box Address</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  P.O Box 7771 – 00200<br />
                  Nairobi City Square<br />
                  Kenya
                </p>
              </div>

              <div className="bg-primary text-white rounded-xl p-7">
                <h3 className="font-bold text-lg mb-3">Call Us Directly</h3>
                <a href="tel:+254711203376" className="text-2xl font-bold text-secondary hover:text-white transition-colors block mb-2">
                  +254 711 203 376
                </a>
                <p className="text-white/70 text-sm">Available Monday to Saturday</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
