
import {useState} from 'react';
import {ArrowLeft,ArrowRight,CalendarDays,Car,Check,ChevronDown,ChevronUp,MapPin,MessageCircle,Phone,X} from 'lucide-react';
import Navbar from '../components/Navbar';
import {packageDetails} from '../data/packageDetails';

function Footer(){return <>
  <section className="tour-banner"><div className="tour-banner-shade"/><div><span>Travel With Us</span><strong>DISCOVER THE TRUE BEAUTY OF PAKISTAN 🎈</strong></div></section>
  <footer className="footer tour-footer"><div className="site-shell footer-grid">
    <div><div className="footer-brand"><span className="brand-mark">LB</span><span><b>Luxury Blue Travel & Tours</b><small>Travel with Trust. Travel with Comfort. Travel with Luxury Blue.</small></span></div><p>Your trusted partner for exploring the breathtaking beauty of Pakistan. With 12+ years of experience.</p></div>
    <div><h4>Quick Links</h4><a href="/">Home</a><a href="/about">About Us</a><a href="/tour-packages">Tour Packages</a><a href="/gallery">Gallery</a><a href="/contact">Contact Us</a></div>
    <div><h4>Top Destinations</h4><a href="/destinations/skardu">Skardu</a><a href="/destinations/hunza">Hunza Valley</a><a href="/destinations/naran-kaghan">Naran Kaghan</a><a href="/destinations/swat">Swat Valley</a><a href="/destinations/kumrat">Kumrat Valley</a><a href="/destinations/azad-kashmir">Azad Kashmir</a></div>
    <div><h4>Contact Us</h4><p><MapPin size={16}/> Islamabad, Pakistan</p><p><Phone size={16}/> +92 318 8833333</p><p><Phone size={16}/> +92 311 4388883</p><p>✉ luxurybluetours@gmail.com</p></div>
  </div><div className="copyright">© 2026 Luxury Blue Travel & Tours. All Rights Reserved.</div></footer>
</>}

export default function PackageDetailPage({slug}){
  const p=packageDetails[slug];
  const [openDay,setOpenDay]=useState(0);
  if(!p) return <div><Navbar/><main className="package-not-found"><h1>Package not found</h1><a href="/tour-packages"><ArrowLeft/> Back to Tour Packages</a></main></div>;

  const whatsapp=encodeURIComponent(`Hi Luxury Blue, I want details/book ${p.title}. Package: ${p.price}, Duration: ${p.days}, Travel Mode: ${p.mode}.`);

  return <div className="package-detail-page">
    <Navbar/>
    <section className="package-detail-hero" style={{backgroundImage:`url("${p.image}")`}}>
      <div className="package-detail-hero-shade"/>
      <div className="site-shell package-detail-hero-content">
        <div className="package-breadcrumb"><a href="/">Home</a><span>/</span><a href="/tour-packages">Tour Packages</a><span>/</span><b>{p.title}</b></div>
        <span className="package-detail-category">{p.category}</span>
        <h1>{p.title}</h1>
        <div className="package-detail-meta">
          <span><MapPin size={17}/>{p.place}</span>
          <span><CalendarDays size={17}/>{p.days}</span>
          <span><Car size={17}/>{p.mode}</span>
        </div>
      </div>
    </section>

    <main className="site-shell package-detail-layout">
      <div className="package-detail-content">
        <section className="detail-panel">
          <span className="detail-eyebrow">ABOUT THIS TOUR</span>
          <h2>Tour Overview</h2>
          <p>{p.overview}</p>
        </section>

        <section className="detail-panel">
          <span className="detail-eyebrow">EXPERIENCE</span>
          <h2>Package Highlights</h2>
          <div className="package-highlights">{p.highlights.map(x=><div key={x}><Check size={18}/><span>{x}</span></div>)}</div>
        </section>

        <section className="detail-panel detail-inclusions">
          <div><span className="detail-eyebrow">PACKAGE</span><h2>What's Included</h2>{p.included.map(x=><p className="included" key={x}><Check size={17}/>{x}</p>)}</div>
          <div><span className="detail-eyebrow">PLEASE NOTE</span><h2>What's Not Included</h2>{p.excluded.map(x=><p className="excluded" key={x}><X size={17}/>{x}</p>)}</div>
        </section>

        <section className="detail-panel itinerary-panel">
          <span className="detail-eyebrow">YOUR JOURNEY</span>
          <h2>Day-by-Day Itinerary</h2>
          <div className="package-itinerary">
            {p.itinerary.map((day,i)=><article className={openDay===i?'open':''} key={`${day}-${i}`}>
              <button onClick={()=>setOpenDay(openDay===i?-1:i)}>
                <span className="day-number">Day {i+1}</span><b>{day}</b>{openDay===i?<ChevronUp size={19}/>:<ChevronDown size={19}/>}
              </button>
              {openDay===i&&<div className="day-content"><p>Enjoy a comfortable and professionally coordinated day focused on {day.toLowerCase()}. Exact timings and stops may be adjusted according to weather, road conditions and your private-tour preferences.</p></div>}
            </article>)}
          </div>
        </section>
      </div>

      <aside className="package-booking-card">
        <span>Starting from</span>
        <strong>{p.price}</strong>
        <div className="booking-facts">
          <p><CalendarDays size={18}/><span><small>Duration</small><b>{p.days}</b></span></p>
          <p><MapPin size={18}/><span><small>Destination</small><b>{p.place}</b></span></p>
          <p><Car size={18}/><span><small>Travel Mode</small><b>{p.mode}</b></span></p>
        </div>
        <a className="package-book-whatsapp" target="_blank" rel="noreferrer" href={`https://wa.me/923188833333?text=${whatsapp}`}><MessageCircle size={19}/> Book on WhatsApp</a>
        <a className="package-book-call" href="tel:+923188833333"><Phone size={18}/> +92 318 8833333</a>
        <small className="booking-note">Need a custom plan? Dates, hotels and route can be adjusted according to your requirements.</small>
      </aside>
    </main>

    <section className="package-detail-cta"><div className="site-shell"><h2>Ready for Your Next Adventure?</h2><p>Talk to our travel team and customize this package for your dates and group.</p><div><a href={`https://wa.me/923188833333?text=${whatsapp}`} className="btn btn-gold">Book This Tour <ArrowRight size={16}/></a><a href="/custom-tour" className="btn btn-outline">Customize Tour</a></div></div></section>
    <Footer/>
  </div>
}
