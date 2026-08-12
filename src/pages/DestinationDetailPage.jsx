import {ArrowRight,CalendarDays,MapPin,Phone,ChevronDown,Clock,Users,CheckCircle2,Mountain,Camera,Landmark,Trees} from 'lucide-react';
import Navbar from '../components/Navbar';
import {destinationDetails,detailImages} from '../data/destinationDetails';
import {destinations} from '../data/siteData';

const resolveDetailPackageSlug=(title)=>{
  if(title.startsWith('12 Days Blossom')) return 'skardu-hunza-blossom-air';
  return title.toLowerCase().replace(/🌸/g,'').replace(/&/g,'and').replace(/\([^)]*\)/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
};


const WhyIcons=[Mountain,Trees,Landmark,Camera];
const colorClasses=['blue','green','orange','purple'];

function Footer(){return <><section className="pakistan-banner"><div><span>Travel With Us</span><strong>DISCOVER THE TRUE BEAUTY OF PAKISTAN</strong></div></section><footer className="detail-footer"><div className="site-shell footer-grid"><div><div className="footer-brand"><span className="brand-mark">LB</span><span><b>Luxury Blue Travel & Tours</b><small>Travel with Trust. Travel with Comfort. Travel with Luxury Blue.</small></span></div><p>Your trusted partner for exploring the breathtaking beauty of Pakistan. With 12+ years of experience.</p></div><div><h4>Quick Links</h4><a href="/">Home</a><a href="/#about">About Us</a><a href="/#packages">Tour Packages</a><a href="/destinations">Destinations</a><a href="/#contact">Contact Us</a></div><div><h4>Top Destinations</h4><a href="/destinations/skardu">Skardu</a><a href="/destinations/hunza">Hunza Valley</a><a href="/destinations/naran-kaghan">Naran Kaghan</a><a href="/destinations/swat">Swat Valley</a><a href="/destinations/kumrat">Kumrat Valley</a><a href="/destinations/azad-kashmir">Azad Kashmir</a></div><div><h4>Contact Us</h4><p>📍 Islamabad, Pakistan</p><p>📞 +92 318 8833333</p><p>📞 +92 311 4388883</p><p>✉ luxurybluetours@gmail.com</p></div></div><div className="copyright">© 2026 Luxury Blue Travel & Tours. All Rights Reserved.</div></footer></>}

export default function DestinationDetailPage({slug}){
 const d=destinationDetails[slug]; if(!d) return <div className="missing-page"><Navbar/><h1>Destination not found</h1><a href="/destinations">Back to Destinations</a></div>;
 const shown=d.packages || [];
 const others=destinations.filter(x=>!x.name.toLowerCase().startsWith(d.name.split(' ')[0].toLowerCase())).slice(0,4);
 return <div className="destination-detail-page">
   <div className="detail-hero" style={{backgroundImage:`url(${d.hero})`}}><div className="detail-hero-overlay"/><Navbar/><div className="detail-hero-content"><span>{d.tagline}</span><h1>{d.name}</h1><a href="#about"><CalendarDays size={14}/> Best Time to Visit: {d.season}</a></div><div className="scroll-down">⌄</div></div>

   <section id="about" className="detail-about"><div className="site-shell detail-about-grid"><div><span className="detail-eyebrow">ABOUT</span><h2>About {d.name}</h2><p>{d.about}</p></div><div className="about-facts"><div><CalendarDays/><span><small>Best Time to Visit</small><b>{d.season}</b></span></div><div><MapPin/><span><small>Places to Explore</small><b>{d.duration}</b></span></div><div><Users/><span><small>Tour Packages</small><b>{d.packagesCount}</b></span></div></div></div></section>

   <section className="detail-packages"><div className="site-shell"><div className="mini-head"><span>PACKAGES</span><h2>Tour Packages for {d.name}</h2><div className="filter-pills"><button className="active">All</button><button>By Road</button><button>By Air</button></div></div><div className="detail-package-grid">{shown.map((p,i)=><a className="detail-package-card-link" href={`/packages/${resolveDetailPackageSlug(p.title)}`} key={p.title}><article><div className="dp-image"><img src={p.image} alt={p.title}/><span className="road-tag">{p.mode}</span><span className="days-tag">⏱ {p.days}</span></div><div className="dp-body"><h3>{p.title}</h3><small>{p.place}</small><div><b>{p.price}</b><ArrowRight size={18}/></div></div></article></a>)}</div></div></section>

   <section className="why-love"><div className="site-shell"><div className="mini-head"><span>WHY VISIT</span><h2>Why You'll Love {d.name}</h2></div><div className="why-love-grid">{d.why.map((x,i)=>{const I=WhyIcons[i];return <article className={colorClasses[i]} key={x}><div className="ghost-num">0{i+1}</div><I/><h3>{x}</h3><p>{['Breathtaking landscapes and unforgettable views.','A refreshing escape with something for every traveler.','Culture, history and local character around every corner.','Perfect for families, couples and photography lovers.'][i]}</p></article>})}</div></div></section>

   <section className="detail-gallery"><div className="site-shell"><div className="gallery-title"><span>GALLERY</span><h2>Discover {d.name} in Pictures</h2></div><div className="mosaic">{[d.hero,...detailImages].slice(0,8).map((im,i)=><img key={i} className={`mosaic-${i}`} src={im}/>)}</div></div></section>

   <section className="attractions-section"><div className="site-shell"><div className="mini-head"><span>MUST SEE</span><h2>Top Attractions in {d.name}</h2></div><div className="attractions-grid">{d.attractions.map((a,i)=><article key={a}><img src={detailImages[(i+2)%detailImages.length]}/><div><b>{a}</b><small>Explore →</small></div></article>)}</div></div></section>

   <section className="faq-section"><div className="site-shell faq-inner"><div className="mini-head"><span>FAQS</span><h2>Frequently Asked Questions</h2><p>Everything you need to know before planning your trip to {d.name}.</p></div><div className="faq-list">{d.faq.map(q=><details key={q}><summary>{q}<ChevronDown size={14}/></summary><p>Our team can guide you with timing, transport, hotels and a customized itinerary based on your travel dates.</p></details>)}</div></div></section>

   <section className="ready-cta"><div className="site-shell"><h2>Ready to Explore {d.name}?</h2><p>Let us craft the perfect journey for you. Contact us today and start planning your dream trip.</p><div><a className="whatsapp" href="https://wa.me/923188833333">💬 Chat on WhatsApp</a><a className="call" href="tel:+923188833333"><Phone size={15}/> Call Us Now</a><a className="custom" href="/#contact">Build Custom Tour <ArrowRight size={14}/></a></div></div></section>

   <section className="more-destinations"><div className="site-shell"><div className="mini-head"><span>DISCOVER</span><h2>Explore More Destinations</h2></div><div className="more-grid">{others.map(x=><a href={`/destinations/${x.name==='Hunza Valley'?'hunza':x.name==='Naran Kaghan'?'naran-kaghan':x.name==='Swat Valley'?'swat':x.name==='Kumrat Valley'?'kumrat':x.name==='Azad Kashmir'?'azad-kashmir':x.name.toLowerCase()}`} key={x.name}><img src={x.image}/><div><b>{x.name}</b><small>{x.subtitle}</small></div></a>)}</div></div></section>
   <Footer/>
 </div>
}