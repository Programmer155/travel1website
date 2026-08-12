import {useMemo,useState} from 'react';
import {
  User,CalendarDays,MapPin,Car,Building2,FileText,Check,ArrowLeft,ArrowRight,
  Phone,Mail,MessageCircle,Plane,BusFront,Users,Hotel,ClipboardCheck
} from 'lucide-react';
import Navbar from '../components/Navbar';
import {destinationDetails} from '../data/destinationDetails';

const steps=[
  ['Personal Info',User],['Trip Details',CalendarDays],['Destination',MapPin],['Travel Mode',Car],
  ['Hotel',Building2],['Vehicle',BusFront],['Requirements',FileText],['Review',Check]
];

const hotels={
  skardu:["Shangrila Resort Skardu","Serena Shigar Fort","Hotel One Skardu"],
  hunza:["Eagle's Nest Hotel","Luxus Hunza Attabad Lake Resort","Serena Altit Fort Residence"],
  'naran-kaghan':["Pine Park Hotel Shogran","Hotel One Naran","Arcadian Riverside"],
  swat:["Pearl Continental Malam Jabba","Rock City Resort","Walnut Heights Kalam"],
  kumrat:["Kumrat Glamping Resort","Jahaz Banda Camps","Kumrat Valley Hotel"],
  'azad-kashmir':["Pearl Continental Muzaffarabad","Keran Resort","Neelum Star River Guest House"],
  murree:["Pearl Continental Bhurban","Lockwood Hotel Murree","Alpine Hotel Nathia Gali"],
  lahore:["Pearl Continental Lahore","Avari Hotel Lahore","Nishat Hotel"],
  islamabad:[
    {group:"luxury Hotels",name:"Islamabad Serena",price:"PKR 30,000 - 55,000/night"},
    {group:"luxury Hotels",name:"Islamabad Marriott",price:"PKR 25,000 - 45,000/night"},
    {group:"standard Hotels",name:"Envoy Continental",price:"PKR 8,000 - 15,000/night"}
  ]
};

const vehicles=[
  ['Sedan (Civic/Corolla)','4 Passengers · Small families, couples'],
  ['SUV (Fortuner/Prado)','5-7 Passengers · Families, mountain destinations'],
  ['Toyota Land Cruiser','5-7 Passengers · Luxury travel, remote destinations'],
  ['Toyota Hiace','10-12 Passengers · Group tours, corporate trips'],
  ['Toyota Coaster','22-28 Passengers · Large groups, corporate events'],
];

function Footer(){return <>
  <section className="tour-banner custom-tour-banner"><div className="tour-banner-shade"/><div><span>Travel With Us</span><strong>DISCOVER THE TRUE BEAUTY OF PAKISTAN 🎈</strong></div></section>
  <footer className="footer tour-footer"><div className="site-shell footer-grid"><div><div className="footer-brand"><span className="brand-mark">LB</span><span><b>Luxury Blue Travel & Tours</b><small>Travel with Trust. Travel with Comfort. Travel with Luxury Blue.</small></span></div><p>Your trusted partner for exploring the breathtaking beauty of Pakistan. With 12+ years of experience.</p></div><div><h4>Quick Links</h4><a href="/">Home</a><a href="/#about">About Us</a><a href="/tour-packages">Tour Packages</a><a href="/#gallery">Gallery</a><a href="/#contact">Contact Us</a></div><div><h4>Top Destinations</h4><a href="/destinations/skardu">Skardu</a><a href="/destinations/hunza">Hunza Valley</a><a href="/destinations/naran-kaghan">Naran Kaghan</a><a href="/destinations/swat">Swat Valley</a><a href="/destinations/kumrat">Kumrat Valley</a><a href="/destinations/azad-kashmir">Azad Kashmir</a></div><div><h4>Contact Us</h4><p><MapPin size={16}/> Islamabad, Pakistan</p><p><Phone size={16}/> +92 318 8833333</p><p><Phone size={16}/> +92 311 4388883</p><p><Mail size={16}/> luxurybluetours@gmail.com</p></div></div><div className="copyright">© 2026 Luxury Blue Travel & Tours. All rights reserved.</div></footer>
</>}

const destinationList=Object.values(destinationDetails).map(d=>({slug:d.slug,name:d.name,image:d.hero}));

export default function CustomTourPage(){
  const [step,setStep]=useState(0);
  const [form,setForm]=useState({
    name:'',phone:'',email:'',startDate:'',endDate:'',adults:'2',children:'0',destinations:[],travelMode:'',hotel:'',vehicle:'',requirements:''
  });

  const chosenDestinations=form.destinations.map(slug=>destinationDetails[slug]).filter(Boolean);
  const primaryDestination=chosenDestinations[0];
  const availableHotels=form.destinations.length===1?(hotels[form.destinations[0]]||[]):[];
  const toggleDestination=(slug)=>setForm(f=>{
    const exists=f.destinations.includes(slug);
    const destinations=exists?f.destinations.filter(x=>x!==slug):[...f.destinations,slug];
    return {...f,destinations,hotel:''};
  });
  const set=(key,value)=>setForm(f=>({...f,[key]:value}));

  const valid=useMemo(()=>{
    if(step===0) return form.name.trim()&&form.phone.trim();
    if(step===1) return form.startDate&&form.endDate&&form.adults;
    if(step===2) return form.destinations.length>0;
    if(step===3) return !!form.travelMode;
    if(step===4) return form.destinations.length>1 ? true : !!form.hotel;
    if(step===5) return !!form.vehicle;
    return true;
  },[step,form]);

  const next=()=>{if(valid)setStep(s=>Math.min(7,s+1));};
  const back=()=>setStep(s=>Math.max(0,s-1));

  const whatsappText=encodeURIComponent(`Custom Tour Request\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email||'-'}\nDates: ${form.startDate} - ${form.endDate}\nTravelers: ${form.adults} Adults, ${form.children} Children\nDestinations: ${chosenDestinations.map(d=>d.name).join(', ')||'-'}\nTravel Mode: ${form.travelMode}\nHotel: ${form.hotel}\nVehicle: ${form.vehicle}\nRequirements: ${form.requirements||'-'}`);

  return <div className="custom-tour-page">
    <Navbar/>
    <section className="custom-tour-hero"><div className="custom-tour-hero-shade"/><div className="site-shell"><h1>Build Your Dream Tour</h1><p>Customize every detail of your perfect Pakistan trip</p></div></section>

    <section className="custom-step-strip"><div className="site-shell custom-stepper">
      {steps.map(([label,Icon],i)=><button key={label} type="button" onClick={()=>i<=step&&setStep(i)} className={`${i===step?'active':''} ${i<step?'done':''}`}><Icon size={16}/><span>{label}</span></button>)}
    </div></section>

    <main className="custom-tour-main"><div className="custom-form-card">
      {step===0&&<section><h2>Step 1: Personal Info</h2><label>Full Name *</label><input value={form.name} onChange={e=>set('name',e.target.value)} placeholder="Your full name"/><label>Phone Number *</label><input value={form.phone} onChange={e=>set('phone',e.target.value)} placeholder="+92 300 0000000"/><label>Email (Optional)</label><input type="email" value={form.email} onChange={e=>set('email',e.target.value)} placeholder="your@email.com"/></section>}

      {step===1&&<section><h2>Step 2: Trip Details</h2><div className="custom-two-col"><div><label>Start Date *</label><input type="date" value={form.startDate} onChange={e=>set('startDate',e.target.value)}/></div><div><label>End Date</label><input type="date" value={form.endDate} onChange={e=>set('endDate',e.target.value)}/></div><div><label>Adults *</label><select value={form.adults} onChange={e=>set('adults',e.target.value)}>{[1,2,3,4,5,6,7,8,9,10].map(n=><option key={n}>{n}</option>)}</select></div><div><label>Children</label><select value={form.children} onChange={e=>set('children',e.target.value)}>{[0,1,2,3,4,5,6].map(n=><option key={n}>{n}</option>)}</select></div></div></section>}

      {step===2&&<section><h2>Step 3: Destination</h2><p className="custom-helper">Select one or multiple destinations for your custom tour.</p><div className="custom-destination-grid">{destinationList.map(d=><button type="button" className={form.destinations.includes(d.slug)?'selected':''} key={d.slug} onClick={()=>toggleDestination(d.slug)}><img src={d.image} alt={d.name}/><span>{d.name}</span>{form.destinations.includes(d.slug)&&<b className="destination-check">✓</b>}</button>)}</div></section>}

      {step===3&&<section><h2>Step 4: Travel Mode</h2><div className="travel-mode-grid"><button type="button" onClick={()=>set('travelMode','By Road')} className={form.travelMode==='By Road'?'selected':''}><BusFront size={48}/><b>By Road</b><span>Scenic drive via KKH and highways</span></button><button type="button" onClick={()=>set('travelMode','By Air')} className={form.travelMode==='By Air'?'selected':''}><Plane size={48}/><b>By Air</b><span>Fly to destination, save time</span></button></div></section>}

      {step===4&&<section><h2>Step 5: Hotel</h2>
        {form.destinations.length>1?<div className="multi-hotel-note"><p>You selected multiple destinations.</p><small>Hotel selection will be finalized separately for each destination.</small></div>:
        form.destinations[0]==='islamabad'?<>
          <p className="custom-helper">Select a hotel in Islamabad:</p>
          <h3 className="hotel-group-title">luxury Hotels</h3>
          <div className="hotel-choice-list">
            {hotels.islamabad.filter(h=>h.group==='luxury Hotels').map(h=><button type="button" key={h.name} onClick={()=>set('hotel',h.name)} className={form.hotel===h.name?'selected':''}><Hotel size={23}/><span><b>{h.name}</b><small>{h.price}</small></span></button>)}
          </div>
          <h3 className="hotel-group-title">standard Hotels</h3>
          <div className="hotel-choice-list">
            {hotels.islamabad.filter(h=>h.group==='standard Hotels').map(h=><button type="button" key={h.name} onClick={()=>set('hotel',h.name)} className={form.hotel===h.name?'selected':''}><Hotel size={23}/><span><b>{h.name}</b><small>{h.price}</small></span></button>)}
          </div>
        </>:<>
          <p className="custom-helper">Choose your preferred stay in {primaryDestination?.name||'your destination'}.</p>
          <div className="hotel-choice-list">{availableHotels.map((h,i)=><button type="button" key={h} onClick={()=>set('hotel',h)} className={form.hotel===h?'selected':''}><Hotel size={23}/><span><b>{h}</b><small>{i===0?'Premium Stay':i===1?'Comfort & Scenic Location':'Recommended Hotel'}</small></span></button>)}</div>
        </>}
      </section>}

      {step===5&&<section><h2>Step 6: Vehicle</h2><div className="vehicle-list">{vehicles.map(([v,sub])=><button type="button" key={v} onClick={()=>set('vehicle',v)} className={form.vehicle===v?'selected':''}><b>{v}</b><span>{sub}</span></button>)}</div></section>}

      {step===6&&<section><h2>Step 7: Requirements</h2><label>Special Requirements or Notes</label><textarea value={form.requirements} onChange={e=>set('requirements',e.target.value)} placeholder="Any dietary requirements, accessibility needs, specific activities, or other preferences..."/></section>}

      {step===7&&<section><h2>Step 8: Review</h2><div className="review-grid"><div><small>Name</small><b>{form.name}</b></div><div><small>Phone</small><b>{form.phone}</b></div><div><small>Dates</small><b>{form.startDate} — {form.endDate}</b></div><div><small>Travelers</small><b>{form.adults} Adults, {form.children} Children</b></div><div><small>Destination</small><b>{chosenDestinations.map(d=>d.name).join(', ')}</b></div><div><small>Travel Mode</small><b>{form.travelMode==='By Road'?'🚙':'✈️'} {form.travelMode}</b></div><div><small>Hotel</small><b>{form.hotel}</b></div><div><small>Vehicle</small><b>{form.vehicle}</b></div>{form.requirements&&<div className="review-wide"><small>Requirements</small><b>{form.requirements}</b></div>}</div></section>}

      <div className="custom-form-actions"><button type="button" onClick={back} disabled={step===0} className="custom-back"><ArrowLeft size={17}/> Back</button>{step<7?<button type="button" onClick={next} disabled={!valid} className="custom-next">Next <ArrowRight size={17}/></button>:<a className="custom-whatsapp" href={`https://wa.me/923188833333?text=${whatsappText}`} target="_blank" rel="noreferrer"><MessageCircle size={17}/> Send via WhatsApp</a>}</div>
    </div></main>
    <Footer/>
  </div>
}
