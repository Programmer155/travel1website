import {useState} from 'react';
import {Phone,Mail,MapPin,Clock3,MessageCircle,Send} from 'lucide-react';
import Navbar from '../components/Navbar';

function Footer(){return <>
  <section className="tour-banner contact-travel-banner"><div className="tour-banner-shade"/><div><span>Travel With Us</span><strong>DISCOVER THE TRUE BEAUTY OF PAKISTAN 🎈</strong></div></section>
  <footer className="footer tour-footer"><div className="site-shell footer-grid">
    <div><div className="footer-brand"><span className="brand-mark">LB</span><span><b>Luxury Blue Travel & Tours</b><small>Travel with Trust. Travel with Comfort. Travel with Luxury Blue.</small></span></div><p>Your trusted partner for exploring the breathtaking beauty of Pakistan. With 12+ years of experience.</p></div>
    <div><h4>Quick Links</h4><a href="/">Home</a><a href="/about">About Us</a><a href="/tour-packages">Tour Packages</a><a href="/gallery">Gallery</a><a href="/contact">Contact Us</a></div>
    <div><h4>Top Destinations</h4><a href="/destinations/skardu">Skardu</a><a href="/destinations/hunza">Hunza Valley</a><a href="/destinations/naran-kaghan">Naran Kaghan</a><a href="/destinations/swat">Swat Valley</a><a href="/destinations/kumrat">Kumrat Valley</a><a href="/destinations/azad-kashmir">Azad Kashmir</a></div>
    <div><h4>Contact Us</h4><p><MapPin size={16}/> Islamabad, Pakistan</p><p><Phone size={16}/> +92 318 8833333</p><p><Phone size={16}/> +92 311 4388883</p><p><Mail size={16}/> luxurybluetours@gmail.com</p></div>
  </div><div className="copyright">© 2026 Luxury Blue Travel & Tours. All rights reserved.</div></footer>
</>}

export default function ContactPage(){
  const [form,setForm]=useState({name:'',phone:'',email:'',travelers:'',destination:'',message:''});
  const set=(k,v)=>setForm(f=>({...f,[k]:v}));
  const send=()=>{const text=encodeURIComponent(`Tour Inquiry\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email||'-'}\nTravelers: ${form.travelers||'-'}\nPreferred Destination: ${form.destination||'-'}\n\nMessage:\n${form.message}`);window.open(`https://wa.me/923188833333?text=${text}`,'_blank');};
  return <div className="contact-page">
    <Navbar/>
    <section className="contact-hero"><div className="contact-hero-shade"/><div className="site-shell"><h1>Contact Us</h1><p>Let's plan your perfect Pakistani adventure together</p></div></section>
    <main className="site-shell contact-main">
      <section className="contact-info"><h2>Get in Touch</h2><p className="contact-intro">Have questions about our tours? Want to customize a package? We're here to help you plan your dream vacation.</p>
        <div className="contact-info-row"><span><Phone size={22}/></span><div><b>Phone</b><p>+92 318 8833333</p><p>+92 311 4388883</p></div></div>
        <div className="contact-info-row"><span><MessageCircle size={22}/></span><div><b>WhatsApp</b><a href="https://wa.me/923188833333">Chat with us instantly</a></div></div>
        <div className="contact-info-row"><span><Mail size={22}/></span><div><b>Email</b><p>luxurybluetours@gmail.com</p></div></div>
        <div className="contact-info-row"><span><MapPin size={22}/></span><div><b>Office</b><p>Islamabad, Pakistan</p></div></div>
        <div className="contact-info-row"><span><Clock3 size={22}/></span><div><b>Business Hours</b><p>Monday - Saturday: 9:00 AM - 8:00 PM</p><p>Sunday: 10:00 AM - 6:00 PM</p></div></div>
        <a className="contact-whatsapp-btn" href="https://wa.me/923188833333"><MessageCircle size={18}/> Chat on WhatsApp</a><a className="contact-call-btn" href="tel:+923188833333"><Phone size={18}/> Call Now</a>
      </section>
      <section className="contact-form-card"><h2>Send an Inquiry</h2><p>Fill out the form below and we'll get back to you within 24 hours</p>
        <div className="contact-form-grid">
          <div><label>Full Name *</label><input value={form.name} onChange={e=>set('name',e.target.value)} placeholder="Your full name"/></div>
          <div><label>Phone Number *</label><input value={form.phone} onChange={e=>set('phone',e.target.value)} placeholder="+92 3XX XXXXXXX"/></div>
          <div><label>Email Address</label><input value={form.email} onChange={e=>set('email',e.target.value)} placeholder="your@email.com"/></div>
          <div><label>Number of Travelers</label><input value={form.travelers} onChange={e=>set('travelers',e.target.value)} placeholder="e.g. 4"/></div>
          <div className="contact-full"><label>Preferred Destination</label><input value={form.destination} onChange={e=>set('destination',e.target.value)} placeholder="e.g. Hunza Valley, Skardu, Swat"/></div>
          <div className="contact-full"><label>Your Message *</label><textarea value={form.message} onChange={e=>set('message',e.target.value)} placeholder="Tell us about your travel plans, preferred dates, special requirements..."/></div>
        </div>
        <button onClick={send} className="contact-send-btn"><Send size={17}/> Send via WhatsApp</button><small className="contact-note">By submitting this form, you'll be redirected to WhatsApp to complete your inquiry. This ensures the fastest possible response from our team.</small>
      </section>
    </main>
    <section className="site-shell contact-map-section"><h2>Find Us</h2><div className="contact-map"><iframe title="Islamabad Map" src="https://www.google.com/maps?q=Islamabad%2C%20Pakistan&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div></section>
    <Footer/>
  </div>
}
