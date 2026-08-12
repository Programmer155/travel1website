import { ArrowRight, CalendarDays, MapPin, Mountain, Sparkles, Phone } from 'lucide-react';
import Navbar from '../components/Navbar';
import { destinations } from '../data/siteData';

const extra = {
  'Skardu': { region: 'Gilgit-Baltistan', highlights: 'Shangrila • Deosai • Shigar Fort', tone: 'High-altitude lakes, dramatic peaks and unforgettable road journeys.' },
  'Hunza Valley': { region: 'Gilgit-Baltistan', highlights: 'Attabad Lake • Passu • Altit Fort', tone: 'Ancient culture, turquoise water and sweeping Karakoram views.' },
  'Naran Kaghan': { region: 'Khyber Pakhtunkhwa', highlights: 'Saif-ul-Malook • Babusar Top • Lulusar', tone: 'Green valleys, alpine lakes and one of Pakistan’s most iconic summer routes.' },
  'Swat Valley': { region: 'Khyber Pakhtunkhwa', highlights: 'Malam Jabba • Kalam • Mahodand', tone: 'Rivers, pine forests, mountain villages and year-round scenic escapes.' },
  'Kumrat Valley': { region: 'Khyber Pakhtunkhwa', highlights: 'Jahaz Banda • Panjkora River • Forests', tone: 'A quieter northern escape filled with dense forest and raw natural beauty.' },
  'Azad Kashmir': { region: 'Azad Jammu & Kashmir', highlights: 'Neelum Valley • Arang Kel • Ratti Gali', tone: 'Emerald valleys, flowing rivers and postcard-perfect mountain scenery.' },
  'Murree & Nathia Gali': { region: 'Punjab / Khyber Pakhtunkhwa', highlights: 'Mall Road • Pindi Point • Nathia Gali Trails', tone: 'Classic hill station charm, cool mountain air and peaceful pine forests close to Islamabad.' },
  'Lahore': { region: 'Punjab', highlights: 'Badshahi Mosque • Lahore Fort • Shalimar Gardens', tone: 'The cultural capital of Pakistan with Mughal architecture, food streets and vibrant urban energy.' },
  'Islamabad': { region: 'Islamabad Capital Territory', highlights: 'Faisal Mosque • Margalla Trails • Daman-e-Koh', tone: 'A green, modern capital framed by the Margalla Hills and iconic landmarks.' },
};

export default function DestinationsPage(){
  return <div className="dest-page">
    <Navbar/>

    <section className="dest-hero">
      <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2200&q=90" alt="Northern Pakistan"/>
      <div className="dest-hero-shade"/>
      <div className="site-shell dest-hero-inner">
        <span className="dest-kicker"><Sparkles size={15}/> EXPLORE PAKISTAN</span>
        <h1>Destinations that feel<br/><em>larger than life.</em></h1>
        <p>Explore Pakistan’s most breathtaking valleys, mountain towns and hidden escapes—carefully selected for unforgettable private journeys.</p>
        <div className="dest-hero-actions">
          <a href="#all-destinations" className="btn btn-gold">Explore Destinations <ArrowRight size={18}/></a>
          <a href="/#packages" className="btn btn-outline">View Tour Packages</a>
        </div>
      </div>
      <div className="dest-floating-card">
        <div><Mountain size={23}/><span><b>9+</b><small>Signature regions</small></span></div>
        <div><CalendarDays size={23}/><span><b>All Year</b><small>Seasonal escapes</small></span></div>
        <div><MapPin size={23}/><span><b>Pakistan</b><small>Local expertise</small></span></div>
      </div>
    </section>

    <section className="dest-intro section-tight">
      <div className="site-shell split-intro">
        <div>
          <span className="eyebrow">CHOOSE YOUR ESCAPE</span>
          <h2>Every journey begins with a place.</h2>
        </div>
        <p>Whether you want dramatic mountain scenery, peaceful lakes, family-friendly road trips or remote valleys, we’ll help you choose the right destination and the best season to experience it.</p>
      </div>
    </section>

    <section id="all-destinations" className="dest-listing">
      <div className="site-shell">
        <div className="destinations-page-grid">
          {destinations.map((d,i)=>{
            const x=extra[d.name] || {};
            return <article className={`dest-page-card ${i===0||i===8?'wide':''}`} key={d.name}>
              <div className="dest-card-media">
                <img src={d.image} alt={d.name}/>
                <div className="dest-card-overlay"/>
                <span className="dest-index">0{i+1}</span>
                <span className="dest-season"><CalendarDays size={13}/>{d.season}</span>
              </div>
              <div className="dest-card-content">
                <small>{x.region}</small>
                <h3>{d.name}</h3>
                <p>{x.tone || d.subtitle}</p>
                <div className="dest-highlights">{x.highlights}</div>
                <a href={`/destinations/${d.slug}`}>Explore {d.name} <ArrowRight size={16}/></a>
              </div>
            </article>
          })}
        </div>
      </div>
    </section>

    <section className="dest-experience">
      <div className="site-shell dest-experience-grid">
        <div className="experience-photo">
          <img src="https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=1400&q=88" alt="Pakistan valley"/>
          <div className="experience-badge"><b>12+</b><span>Years exploring<br/>Pakistan</span></div>
        </div>
        <div className="experience-copy">
          <span className="eyebrow">TRAVEL YOUR WAY</span>
          <h2>Not sure where to go?</h2>
          <p>Tell us the month you’re travelling, your group size and the kind of experience you want. We’ll suggest the destination that fits your pace, comfort level and interests.</p>
          <div className="experience-points">
            <div><b>01</b><span><strong>Best season advice</strong><small>We match destinations to your travel dates.</small></span></div>
            <div><b>02</b><span><strong>Private itineraries</strong><small>Flexible routes built around your family or group.</small></span></div>
            <div><b>03</b><span><strong>Local support</strong><small>Experienced team before and throughout your trip.</small></span></div>
          </div>
          <a href="/#contact" className="btn btn-dark">Plan My Trip <ArrowRight size={17}/></a>
        </div>
      </div>
    </section>

    <section className="dest-cta">
      <div className="dest-cta-shade"/>
      <div className="site-shell dest-cta-inner">
        <span>YOUR NEXT DESTINATION IS WAITING</span>
        <h2>Let’s make your Pakistan journey unforgettable.</h2>
        <p>Speak with our travel team and get a personalized route built around your dates and preferences.</p>
        <div>
          <a href="https://wa.me/923188833333" className="btn btn-gold">WhatsApp Us <ArrowRight size={17}/></a>
          <a href="tel:+923188833333" className="btn btn-outline"><Phone size={17}/> Call Now</a>
        </div>
      </div>
    </section>

    <footer className="footer"><div className="site-shell footer-grid"><div><div className="footer-brand"><span className="brand-mark">LB</span><span><b>Luxury Blue Travel & Tours</b><small>Travel with Trust. Travel with Comfort. Travel with Luxury Blue.</small></span></div><p>Your trusted partner for exploring the breathtaking beauty of Pakistan. With 12+ years of experience.</p></div><div><h4>Quick Links</h4><a href="/">Home</a><a href="/#about">About Us</a><a href="/#packages">Tour Packages</a><a href="/destinations">Destinations</a><a href="/#contact">Contact Us</a></div><div><h4>Top Destinations</h4><a>Skardu</a><a>Hunza Valley</a><a>Naran Kaghan</a><a>Swat Valley</a><a>Kumrat Valley</a><a>Azad Kashmir</a></div><div><h4>Contact Us</h4><p>📍 Islamabad, Pakistan</p><p>📞 +92 318 8833333</p><p>📞 +92 311 4388883</p><p>✉ luxurybluetours@gmail.com</p></div></div><div className="copyright">© 2026 Luxury Blue Travel & Tours. All Rights Reserved.</div></footer>
  </div>
}
