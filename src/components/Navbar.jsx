import {useEffect,useState} from 'react';
import {Menu,X,Phone,ChevronDown} from 'lucide-react';

const links=[
  ['Home','/'],
  ['Destinations','/destinations'],
  ['Tour Packages','/tour-packages'],
  ['Custom Tour','/custom-tour'],
  ['About Us','/about'],
  ['Gallery','/gallery'],
  ['Contact','/contact']
];

export default function Navbar(){
  const [open,setOpen]=useState(false);
  const [scrolled,setScrolled]=useState(false);

  useEffect(()=>{
    const handleScroll=()=>setScrolled(window.scrollY>55);
    handleScroll();
    window.addEventListener('scroll',handleScroll,{passive:true});
    return ()=>window.removeEventListener('scroll',handleScroll);
  },[]);

  return <>
    <div className={`topbar global-overlay-topbar ${scrolled?'nav-scrolled':''}`}>
      <div className="site-shell topbar-inner">
        <span>📍 Islamabad, Pakistan</span>
        <div>
          <span>📞 +92 318 8833333</span>
          <span>✉ luxurybluetours@gmail.com</span>
        </div>
      </div>
    </div>

    <header className={`nav global-overlay-nav ${scrolled?'nav-scrolled':''} ${open?'menu-open':''}`}>
      <div className="site-shell nav-inner">
        <a href="/" className="brand">
          <span className="brand-mark">LB</span>
          <span><b>Luxury Blue</b><small>TRAVEL & TOURS</small></span>
        </a>

        <nav className="desktop-nav">
          {links.map(([label,href])=>
            <a key={label} href={href}>
              {label}
              {(label==='Tour Packages'||label==='Destinations')&&<ChevronDown size={13}/>}
            </a>
          )}
          <a className="nav-call" href="tel:+923188833333"><Phone size={16}/> Call Now</a>
        </nav>

        <button className="menu" aria-label="Toggle menu" onClick={()=>setOpen(!open)}>
          {open?<X/>:<Menu/>}
        </button>
      </div>

      {open&&
        <div className="mobile-nav">
          {links.map(([label,href])=>
            <a key={label} onClick={()=>setOpen(false)} href={href}>{label}</a>
          )}
        </div>
      }
    </header>
  </>;
}
