import { useEffect, useRef } from 'react';
import {
  ArrowRight, BadgeCheck, Eye, ShieldCheck, Heart, Gem, Users, Clock3,
  MapPin, CheckCircle2, Phone, Mail
} from 'lucide-react';
import Navbar from '../components/Navbar';

const values=[
  [ShieldCheck,'Trust & Safety','Your safety is our top priority. We ensure secure transportation, verified accommodations, and experienced guides on every journey.'],
  [Heart,'Family Values','We are committed to halal and family-friendly standards, ensuring comfortable and respectful travel experiences for all.'],
  [Gem,'Premium Quality','From handpicked hotels to comfortable vehicles, we never compromise on quality. Every detail is carefully curated for your comfort.'],
  [Users,'Personalized Service','No two travelers are alike. We customize every tour to match your preferences, pace, and lifestyle.'],
  [Clock3,'24/7 Support','Our team is available around the clock. Whether you need assistance during your trip or have questions before booking, we are here.'],
  [MapPin,'Local Expertise','With 12+ years of experience, we know Pakistan’s hidden gems, the best routes, seasonal secrets, and cultural insights.']
];

const milestones=[
  ['2012','Company Founded','Started operations in Islamabad with a vision to showcase Pakistan’s beauty'],
  ['2015','Northern Expansion','Expanded to cover all major Northern destinations including Hunza and Skardu'],
  ['2018','1000+ Happy Travelers','Milestone of serving over 1000 satisfied customers'],
  ['2020','Premium Services','Launched luxury and honeymoon tour packages'],
  ['2024','Digital Transformation','Enhanced online presence and booking experience']
];

const policies=[
  ['Family-Friendly Environment','All our tours maintain a family-friendly atmosphere suitable for travelers of all ages.'],
  ['Halal Standards','We ensure halal food options and prayer facilities throughout your journey.'],
  ['Couples Policy','In accordance with our family values, we accommodate married couples only. Valid documentation may be required.'],
  ['Respectful Conduct','We expect all travelers to maintain respectful behavior towards fellow travelers, staff, and local communities.'],
  ['Safety First','All our vehicles are regularly maintained, and we follow strict safety protocols on all routes.'],
  ['Transparent Pricing','No hidden charges. All costs are communicated upfront before booking confirmation.']
];

function Footer(){return <>
  <section className="about-pakistan-banner"><div className="about-pakistan-shade"/><div><span>Travel With Us</span><strong>DISCOVER THE TRUE BEAUTY OF PAKISTAN 🎈</strong></div></section>
  <footer className="footer tour-footer"><div className="site-shell footer-grid"><div><div className="footer-brand"><span className="brand-mark">LB</span><span><b>Luxury Blue Travel & Tours</b><small>Travel with Trust. Travel with Comfort. Travel with Luxury Blue.</small></span></div><p>Your trusted partner for exploring the breathtaking beauty of Pakistan. With 12+ years of experience.</p></div><div><h4>Quick Links</h4><a href="/">Home</a><a href="/about">About Us</a><a href="/tour-packages">Tour Packages</a><a href="/#gallery">Gallery</a><a href="/#contact">Contact Us</a></div><div><h4>Top Destinations</h4><a href="/destinations/skardu">Skardu</a><a href="/destinations/hunza">Hunza Valley</a><a href="/destinations/naran-kaghan">Naran Kaghan</a><a href="/destinations/swat">Swat Valley</a><a href="/destinations/kumrat">Kumrat Valley</a><a href="/destinations/azad-kashmir">Azad Kashmir</a></div><div><h4>Contact Us</h4><p><MapPin size={16}/> Islamabad, Pakistan</p><p><Phone size={16}/> +92 318 8833333</p><p><Phone size={16}/> +92 311 4388883</p><p><Mail size={16}/> luxurybluetours@gmail.com</p></div></div><div className="copyright">© 2026 Luxury Blue Travel & Tours. All rights reserved.</div></footer>
</>}

export default function AboutUsPage(){
  const milestonesRef = useRef(null);
  useEffect(() => {
    const root = milestonesRef.current;
    if (!root) return;
    const items = [...root.querySelectorAll('.about-milestone')];
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = items.indexOf(entry.target);
          window.setTimeout(() => {
            entry.target.classList.add('milestone-visible');
          }, Math.max(0, index) * 170);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.22, rootMargin: '0px 0px -8% 0px' });
    items.forEach(item => observer.observe(item));
    return () => observer.disconnect();
  }, []);
return <div className="about-page">
  <section className="about-hero"><div className="about-hero-overlay"/><Navbar/><div className="about-hero-content"><span>OUR STORY</span><h1>About Us</h1><p>12+ years of creating unforgettable travel experiences across Pakistan</p></div></section>

  <section className="about-story"><div className="site-shell about-story-grid">
    <div className="about-story-copy"><span className="about-kicker">WHO WE ARE</span><h2>Your Trusted Travel Partner Since 2012</h2><p><b>Luxury Blue Travel & Tours (Pvt.) Ltd.</b> is an Islamabad-based tourism company with over 12 years of experience in creating exceptional travel experiences across Pakistan’s most breathtaking destinations.</p><p>What started as a small team with a big dream has grown into one of the most trusted names in Pakistani tourism. Our journey began with a simple mission: to showcase the incredible beauty of Pakistan to the world while providing unmatched comfort and service.</p><p>Today, we specialize in premium, customizable travel solutions across the Northern Areas including Skardu, Hunza, Naran Kaghan, Swat, and beyond. Whether you’re seeking adventure, relaxation, or cultural immersion, we craft journeys that exceed expectations.</p><div className="about-stats"><div><b>12+</b><small>Years Experience</small></div><div><b>5000+</b><small>Happy Travelers</small></div><div><b>50+</b><small>Destinations</small></div></div></div>
    <div className="about-story-visual"><img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=88" alt="Travelers enjoying mountain scenery"/><div className="family-badge"><BadgeCheck size={28}/><span>Trusted by<b>5000+ Families</b></span></div></div>
  </div></section>

  <section className="mission-vision"><div className="site-shell mission-grid"><article><div className="mv-icon blue"><BadgeCheck/></div><h3>Our Mission</h3><p>To provide exceptional, personalized travel experiences that showcase Pakistan’s natural beauty and cultural heritage while maintaining the highest standards of comfort, safety, and family values. We strive to make every journey memorable, accessible, and transformative.</p></article><article><div className="mv-icon gold"><Eye/></div><h3>Our Vision</h3><p>To be Pakistan’s most trusted and preferred travel company, recognized for our commitment to excellence, innovation, and sustainable tourism. We envision a future where every Pakistani destination is accessible to travelers seeking authentic, meaningful experiences.</p></article></div></section>

  <section className="about-values"><div className="site-shell"><div className="about-section-title"><span>WHAT DRIVES US</span><h2>Our Core Values</h2><p>These principles guide everything we do, from planning your itinerary to ensuring your comfort throughout the journey.</p></div><div className="values-grid">{values.map(([Icon,title,text])=><article key={title}><div className="value-icon"><Icon/></div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

  <section className="milestones" ref={milestonesRef}><div className="site-shell"><div className="about-section-title"><span>OUR JOURNEY</span><h2>Milestones</h2></div><div className="timeline">{milestones.map(([year,title,text],i)=><div className={`timeline-row about-milestone ${i%2?'right':'left'}`} key={year}><article><b>{year}</b><h3>{title}</h3><p>{text}</p></article><span className="timeline-dot"/></div>)}</div></div></section>

  <section className="service-policies"><div className="site-shell"><div className="about-section-title"><span>OUR STANDARDS</span><h2>Service Policies</h2><p>We maintain strict policies to ensure a safe, comfortable, and respectful travel experience for all our guests.</p></div><div className="policies-grid">{policies.map(([title,text])=><article key={title}><CheckCircle2/><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>

  <section className="about-ready"><div className="site-shell"><h2>Ready to Start Your Journey?</h2><p>Let us help you create memories that last a lifetime. Contact us today to plan your perfect Pakistan adventure.</p><div><a href="/tour-packages" className="btn btn-gold">View Tour Packages <ArrowRight size={17}/></a><a href="/#contact" className="btn about-contact-btn">Contact Us</a></div></div></section>

  <Footer/>
</div>}
