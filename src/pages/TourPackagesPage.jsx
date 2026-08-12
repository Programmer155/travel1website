import {useMemo,useState} from 'react';
import {ArrowRight,Heart,Share2,Clock,MapPin,Phone,Sparkles} from 'lucide-react';
import Navbar from '../components/Navbar';
import {destinationDetails} from '../data/destinationDetails';


const scenicImages={
  skardu:[
    'https://images.pexels.com/photos/35302567/pexels-photo-35302567/free-photo-of-scenic-view-of-shangrila-resort-in-skardu-pakistan.jpeg?auto=compress&cs=tinysrgb&w=1400',
    'https://images.pexels.com/photos/19442078/pexels-photo-19442078.jpeg?auto=compress&cs=tinysrgb&w=1400',
    'https://images.pexels.com/photos/33784883/pexels-photo-33784883.jpeg?auto=compress&cs=tinysrgb&w=1400',
    'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1400&q=88',
    'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1400&q=88',
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=88',
    'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1400&q=88'
  ],
  hunza:[
    'https://images.pexels.com/photos/13462643/pexels-photo-13462643.jpeg?auto=compress&cs=tinysrgb&w=1400',
    'https://images.pexels.com/photos/4055789/pexels-photo-4055789.jpeg?auto=compress&cs=tinysrgb&w=1400',
    'https://images.pexels.com/photos/28903985/pexels-photo-28903985.jpeg?auto=compress&cs=tinysrgb&w=1400',
    'https://images.pexels.com/photos/29543395/pexels-photo-29543395.png?auto=compress&cs=tinysrgb&w=1400',
    'https://images.pexels.com/photos/9642599/pexels-photo-9642599.jpeg?auto=compress&cs=tinysrgb&w=1400',
    'https://images.pexels.com/photos/15556463/pexels-photo-15556463.jpeg?auto=compress&cs=tinysrgb&w=1400',
    'https://images.pexels.com/photos/8476663/pexels-photo-8476663.jpeg?auto=compress&cs=tinysrgb&w=1400'
  ],
  north:[
    'https://images.pexels.com/photos/14340524/pexels-photo-14340524.jpeg?auto=compress&cs=tinysrgb&w=1400',
    'https://images.pexels.com/photos/12800322/pexels-photo-12800322.jpeg?auto=compress&cs=tinysrgb&w=1400',
    'https://images.pexels.com/photos/14220901/pexels-photo-14220901.jpeg?auto=compress&cs=tinysrgb&w=1400',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=88',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=88',
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=88',
    'https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1400&q=88',
    'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1400&q=88'
  ],
  lahore:[
    'https://images.pexels.com/photos/11690994/pexels-photo-11690994.jpeg?auto=compress&cs=tinysrgb&w=1400',
    'https://images.pexels.com/photos/14437892/pexels-photo-14437892.jpeg?auto=compress&cs=tinysrgb&w=1400',
    'https://images.pexels.com/photos/36147087/pexels-photo-36147087.jpeg?auto=compress&cs=tinysrgb&w=1400'
  ],
  islamabad:[
    'https://images.pexels.com/photos/30665958/pexels-photo-30665958/free-photo-of-scenic-view-of-faisal-mosque-in-islamabad-pakistan.jpeg?auto=compress&cs=tinysrgb&w=1400',
    'https://images.pexels.com/photos/20673922/pexels-photo-20673922.jpeg?auto=compress&cs=tinysrgb&w=1400',
    'https://images.pexels.com/photos/20673923/pexels-photo-20673923.jpeg?auto=compress&cs=tinysrgb&w=1400',
    'https://images.pexels.com/photos/15817294/pexels-photo-15817294.jpeg?auto=compress&cs=tinysrgb&w=1400'
  ]
};

function packageImage(p,i){
  const t=`${p.title} ${p.place}`.toLowerCase();
  let pool=scenicImages.north;
  if(t.includes('lahore')) pool=scenicImages.lahore;
  else if(t.includes('islamabad')) pool=scenicImages.islamabad;
  else if(t.includes('hunza')) pool=scenicImages.hunza;
  else if(t.includes('skardu')) pool=scenicImages.skardu;
  return pool[i%pool.length];
}

const extraPackages=[
  {title:'10-Day Northern Explorer',price:'Rs. 180,000',image:'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=88',days:'10 Days',mode:'By Road',place:'Northern Pakistan',category:'Couples Tours',tags:['Hunza Valley','Skardu','Naran']},
  {title:'Custom Adventure Package',price:'Rs. 50,000',image:'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=88',days:'Flexible',mode:'Custom',place:'Personalized Journey',category:'Couples Tours',tags:['Private Itinerary','Hotels','Guide']},
];

const categoryByPlace=(place,title)=>{
  const s=(place+' '+title).toLowerCase();
  if(s.includes('honeymoon')||s.includes('blossom')) return 'Honeymoon Tours';
  if(s.includes('corporate')) return 'Corporate Tours';
  if(s.includes('custom')||s.includes('explorer')) return 'Couples Tours';
  return 'Family Tours';
};

const allDestinationPackages=Object.values(destinationDetails).flatMap(d=>d.packages.map((p)=>({
  ...p,
  category:categoryByPlace(p.place,p.title),
  tags:[p.place,p.mode,p.days],
})));

const packages=[...allDestinationPackages,...extraPackages];
const filters=['All Packages','Family Tours','Honeymoon Tours','Corporate Tours','Couples Tours'];
const modes=['All Modes','By Road','By Air'];

const packageSlug=(title)=>{
  if(title.startsWith('12 Days Blossom')) return 'skardu-hunza-blossom-air';
  return title.toLowerCase().replace(/🌸/g,'').replace(/&/g,'and').replace(/\([^)]*\)/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
};


function Footer(){return <>
<section className="tour-banner"><div className="tour-banner-shade"/><div><span>Travel With Us</span><strong>DISCOVER THE TRUE BEAUTY OF PAKISTAN 🎈</strong></div></section>
<footer className="footer tour-footer"><div className="site-shell footer-grid"><div><div className="footer-brand"><span className="brand-mark">LB</span><span><b>Luxury Blue Travel & Tours</b><small>Travel with Trust. Travel with Comfort. Travel with Luxury Blue.</small></span></div><p>Your trusted partner for exploring the breathtaking beauty of Pakistan. With 12+ years of experience.</p></div><div><h4>Quick Links</h4><a href="/">Home</a><a href="/#about">About Us</a><a href="/tour-packages">Tour Packages</a><a href="/#gallery">Gallery</a><a href="/#contact">Contact Us</a></div><div><h4>Top Destinations</h4><a href="/destinations/skardu">Skardu</a><a href="/destinations/hunza">Hunza Valley</a><a href="/destinations/naran-kaghan">Naran Kaghan</a><a href="/destinations/swat">Swat Valley</a><a href="/destinations/kumrat">Kumrat Valley</a><a href="/destinations/azad-kashmir">Azad Kashmir</a></div><div><h4>Contact Us</h4><p><MapPin size={16}/> Islamabad, Pakistan</p><p><Phone size={16}/> +92 318 8833333</p><p><Phone size={16}/> +92 311 4388883</p><p>✉ luxurybluetours@gmail.com</p></div></div><div className="copyright">© 2026 Luxury Blue Travel & Tours. All Rights Reserved.</div></footer>
</>}

export default function TourPackagesPage(){
  const [active,setActive]=useState('All Packages');
  const [mode,setMode]=useState('All Modes');
  const visible=useMemo(()=>packages.filter(p=>(active==='All Packages'||p.category===active)&&(mode==='All Modes'||p.mode===mode)),[active,mode]);
  return <div className="tour-packages-page">
    <Navbar/>
    <section className="tour-packages-hero"><div className="tour-packages-hero-shade"/><div className="site-shell"><span>CURATED EXPERIENCES</span><h1>Tour Packages</h1><p>Choose from our carefully crafted tour packages</p></div></section>

    <main className="tour-packages-main"><div className="site-shell">
      <div className="tour-filter-row">
        <div className="filter-group">{filters.map(f=><button key={f} onClick={()=>setActive(f)} className={active===f?'active':''}>{f}</button>)}</div>
        <div className="filter-group secondary">{modes.map(f=><button key={f} onClick={()=>setMode(f)} className={mode===f?'active':''}>{f}</button>)}</div>
      </div>

      <div className="tour-package-grid">
        {visible.map((p,i)=><article className="tour-package-card" key={`${p.title}-${i}`}>
          <div className="tour-card-image"><img src={packageImage(p,i)} alt={p.title}/><span className={`tour-ribbon ribbon-${i%3}`}>{p.category}</span><div className="tour-card-icons"><button><Share2 size={14}/></button><button><Heart size={14}/></button></div><span className="tour-days"><Clock size={12}/>{p.days}</span><span className="tour-mode">{p.mode}</span><span className="tour-price"><small>From</small><b>{p.price}</b></span></div>
          <div className="tour-card-body"><h3>{p.title}</h3><div className="tour-place"><MapPin size={13}/>{p.place}</div><div className="tour-tags">{(p.tags||[]).slice(0,3).map(t=><span key={t}>{t}</span>)}</div><div className="tour-card-bottom"><small>{p.days}</small><a href={`/packages/${packageSlug(p.title)}`}>View Details <ArrowRight size={14}/></a></div></div>
        </article>)}
      </div>
    </div></main>

    <section className="cant-find"><div className="site-shell"><Sparkles/><h2>Can't Find What You're Looking For?</h2><p>Build your perfect custom tour with our easy tour builder!</p><a className="btn btn-gold" href="/custom-tour">Build Custom Tour <ArrowRight size={15}/></a></div></section>
    <Footer/>
  </div>
}
