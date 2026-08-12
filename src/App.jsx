import DestinationsPage from './pages/DestinationsPage';
import DestinationDetailPage from './pages/DestinationDetailPage';
import TourPackagesPage from './pages/TourPackagesPage';
import PackageDetailPage from './pages/PackageDetailPage';
import CustomTourPage from './pages/CustomTourPage';
import AboutUsPage from './pages/AboutUsPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import {ArrowRight,Phone,ShieldCheck,Heart,Utensils,Headphones,SlidersHorizontal,BadgeDollarSign,MapPin,Mail,Star,Clock,Users} from 'lucide-react';
import Navbar from './components/Navbar';
import {destinations,benefits,packages,testimonials} from './data/siteData';
const BenefitIcons=[ShieldCheck,Heart,Utensils,Headphones,SlidersHorizontal,BadgeDollarSign];

const resolvePackageSlug=(title)=>{
  const clean=title.toLowerCase().replace(/🌸/g,'').replace(/&/g,'and').replace(/\([^)]*\)/g,'').replace(/[^a-z0-9]+/g,' ').trim().replace(/\s+/g,'-');
  if(title.startsWith('12 Days Blossom')) return 'skardu-hunza-blossom-air';
  return clean;
};

function HomePage(){return <div>
<Navbar/>
<section id="home" className="hero"><img src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=2200&q=90"/><div className="hero-shade"/><div className="site-shell hero-content"><div className="hero-copy"><div className="hero-pill">✨ 12++ Years of Excellence</div><h1>Discover the Majestic<br/><em>Beauty of Pakistan</em></h1><p>Travel with Trust. Travel with Comfort. Travel with Luxury Blue.</p><div className="hero-actions"><a href="/tour-packages" className="btn btn-gold">Explore Tours <ArrowRight size={18}/></a><a href="tel:+923188833333" className="btn btn-outline"><Phone size={18}/> Call Now</a></div></div></div><div className="stats"><div><b>12+</b><span>Years Experience</span></div><div><b>50+</b><span>Destinations</span></div><div><b>10,000+</b><span>Happy Travelers</span></div><div><b>500+</b><span>Tours Completed</span></div></div></section>
<section id="destinations" className="section"><div className="site-shell"><div className="section-head"><span>EXPLORE PAKISTAN</span><h2>Featured Destinations</h2><p>From the snow-capped peaks of the north to the historic cities, discover the incredible diversity of Pakistan.</p></div><div className="destination-grid">{destinations.map(d=><article className="destination" key={d.name}><img src={d.image}/><div className="destination-shade"/><div className="destination-info"><small>{d.season}</small><h3>{d.name}</h3><p>{d.subtitle}</p><a href={`/destinations/${d.slug}`}>Explore <ArrowRight size={15}/></a></div></article>)}</div><div className="center"><a href="/destinations" className="btn btn-dark">View All Destinations <ArrowRight size={17}/></a></div></div></section>
<section id="about" className="why"><div className="site-shell"><div className="section-head light"><span>WHY CHOOSE US</span><h2>Travel with Confidence</h2></div><div className="benefit-grid">{benefits.map(([title,text],i)=>{const I=BenefitIcons[i];return <article key={title}><div className="benefit-number">0{i+1}</div><div className="benefit-icon"><I/></div><h3>{title}</h3><p>{text}</p></article>})}</div></div></section>
<section id="packages" className="section packages-section"><div className="site-shell"><div className="section-head"><span>OUR PACKAGES</span><h2>Popular Tour Packages</h2><p>Choose from our carefully curated packages designed to give you the best travel experience.</p></div><div className="package-grid">{packages.map(([title,type,place,days,price,image])=><article className="package" key={title}><div className="package-image"><img src={image}/><span>{type}</span></div><div className="package-body"><div className="meta"><span><MapPin size={14}/>{place}</span><span><Clock size={14}/>{days}</span></div><h3>{title}</h3><div className="price-row"><div><small>Starting from</small><b>{price}</b></div><a className="home-package-view" href={`/packages/${resolvePackageSlug(title)}`}>View <ArrowRight size={16}/></a></div></div></article>)}</div><div className="center"><a href="/tour-packages" className="btn btn-dark">View All Packages <ArrowRight size={17}/></a></div></div></section>
<section className="testimonials"><div className="site-shell"><div className="section-head"><span>TESTIMONIALS</span><h2>What Our Travelers Say</h2></div><div className="testimonial-grid">{testimonials.slice(0,3).map(([name,tour,text])=><article key={name}><div className="stars">★★★★★</div><p>“{text}”</p><div className="traveler"><div>{name[0]}</div><span><b>{name}</b><small>{tour}</small></span></div></article>)}</div></div></section>
<section id="contact" className="cta"><div className="cta-shade"/><div className="site-shell cta-inner"><span>PLAN YOUR DREAM TRIP</span><h2>Ready to Start Your Adventure?</h2><p>Let us help you plan the perfect trip. Contact us today and our travel experts will create a personalized itinerary just for you.</p><div><a className="btn btn-gold" href="https://wa.me/923188833333">WhatsApp Us</a><a className="btn btn-outline" href="tel:+923188833333"><Phone size={18}/> Call Now</a></div></div></section>
<footer className="footer"><div className="site-shell footer-grid"><div><div className="footer-brand"><span className="brand-mark">LB</span><span><b>Luxury Blue Travel & Tours</b><small>Travel with Trust. Travel with Comfort. Travel with Luxury Blue.</small></span></div><p>Your trusted partner for exploring the breathtaking beauty of Pakistan. With 12+ years of experience.</p></div><div><h4>Quick Links</h4><a>Home</a><a>About Us</a><a>Tour Packages</a><a>Gallery</a><a>Contact Us</a></div><div><h4>Top Destinations</h4><a>Skardu</a><a>Hunza Valley</a><a>Naran Kaghan</a><a>Swat Valley</a><a>Kumrat Valley</a><a>Azad Kashmir</a></div><div><h4>Contact Us</h4><p><MapPin size={16}/> Islamabad, Pakistan</p><p><Phone size={16}/> +92 318 8833333</p><p><Phone size={16}/> +92 311 4388883</p><p><Mail size={16}/> luxurybluetours@gmail.com</p></div></div><div className="copyright">© 2026 Luxury Blue Travel & Tours. All Rights Reserved.</div></footer>
</div>}

export default function App(){
 const path=window.location.pathname.replace(/\/$/,'');
 if(path==='/tour-packages') return <TourPackagesPage/>;
 if(path.startsWith('/packages/')) return <PackageDetailPage slug={path.split('/')[2]}/>;
 if(path==='/custom-tour') return <CustomTourPage/>;
 if(path==='/about') return <AboutUsPage/>;
 if(path==='/gallery') return <GalleryPage/>;
 if(path==='/contact') return <ContactPage/>;
 if(path==='/destinations') return <DestinationsPage/>;
 if(path.startsWith('/destinations/')) return <DestinationDetailPage slug={path.split('/')[2]}/>;
 return <HomePage/>;
}
