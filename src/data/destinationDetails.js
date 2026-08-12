const u=(id)=>`https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=86`;

const img={
  mountain:u('photo-1626621341517-bbf3d9990a23'),
  hunza:u('photo-1605640840605-14ac1855827b'),
  valley:u('photo-1584732200355-486a95263014'),
  snow:u('photo-1519681393784-d120267933ba'),
  forest:u('photo-1500530855697-b586d89ba3ee'),
  peaks:u('photo-1464822759023-fed622ff2c3b'),
  city:u('photo-1587474260584-136574528ed5'),
};

const pkg=(title,price,image,days='3 Days',mode='By Road',place='Pakistan')=>({title,price,image,days,mode,place});

export const destinationDetails={
  skardu:{
    slug:'skardu',name:'Skardu',tagline:'GATEWAY TO THE GIANTS',season:'May - October',duration:'4 Places to Explore',packagesCount:'7 Available',hero:img.mountain,
    about:'Skardu sits at 2,228 meters in the heart of Gilgit-Baltistan and is the gateway to the Karakoram Range. It is the perfect base for alpine lakes, dramatic deserts, historic forts and some of Pakistan’s most spectacular mountain scenery.',
    why:['Majestic Peaks','Crystal Lakes','Ancient Heritage','Epic Adventure'],attractions:['Shangrila Resort','Upper Kachura Lake','Deosai National Park','Cold Desert'],faq:['What is the best time to visit Skardu?','How can I reach Skardu?','Can I book a private tour to Skardu?','What should I pack for a Skardu trip?','Is Skardu safe for tourists?','What is the average cost of a Skardu trip?'],
    packages:[
      pkg('12 Days Blossom 🌸 Tour - Skardu & Hunza','Rs. 490,000',img.mountain,'12 Days','By Road','Skardu & Hunza'),
      pkg('14 Days Blossom 🌸 Tour - Skardu & Hunza','Rs. 395,000',img.hunza,'14 Days','By Road','Skardu & Hunza'),
      pkg('Skardu Luxury Tour (By Air)','Rs. 299,000',img.peaks,'5 Days','By Air','Skardu'),
      pkg('Skardu Full Tour (By Air)','Rs. 390,000',img.mountain,'8 Days','By Air','Skardu'),
      pkg('Skardu Luxury Road Tour','Price on Request',img.hunza,'7 Days','By Road','Skardu'),
      pkg('Skardu Grand Luxury Road Tour','Price on Request',img.snow,'10 Days','By Road','Skardu'),
      pkg('Skardu Honeymoon Luxury (By Air)','Rs. 350,000',img.forest,'6 Days','By Air','Skardu'),
    ]
  },
  hunza:{
    slug:'hunza',name:'Hunza Valley',tagline:'LAND OF ETERNAL BEAUTY',season:'April - October',duration:'4 Places to Explore',packagesCount:'4 Available',hero:img.hunza,
    about:'Hunza Valley is a place where nature and culture merge into something truly magical. Framed by towering Karakoram peaks, turquoise lakes and centuries-old forts, Hunza has become one of Pakistan’s most unforgettable northern destinations.',
    why:['Legendary Scenery','Cherry Blossom Season','Ancient Heritage','Photography Paradise'],attractions:['Attabad Lake','Baltit Fort','Eagle’s Nest Viewpoint','Passu Cones'],faq:['What is the best time to visit Hunza?','How do I get to Hunza Valley?','Is the Karakoram Highway safe?','What food should I try in Hunza?','Can I visit Khunjerab Pass?'],
    packages:[
      pkg('12 Days Blossom 🌸 Tour - Skardu & Hunza','Rs. 490,000',img.mountain,'12 Days','By Road','Skardu & Hunza'),
      pkg('14 Days Blossom 🌸 Tour - Skardu & Hunza','Rs. 395,000',img.hunza,'14 Days','By Road','Skardu & Hunza'),
      pkg('6 Days Hunza Valley Tour','Rs. 350,000',img.valley,'6 Days','By Road','Hunza Valley'),
      pkg('7 Days Hunza Valley Tour','Rs. 225,000',img.forest,'7 Days','By Road','Hunza Valley'),
    ]
  },
  'naran-kaghan':{
    slug:'naran-kaghan',name:'Naran Kaghan',tagline:'VALLEY OF DREAMS',season:'June - September',duration:'4 Places to Explore',packagesCount:'3 Available',hero:img.valley,
    about:'The Kaghan Valley stretches through the heart of Khyber Pakhtunkhwa, climbing from subtropical foothills to high alpine meadows. Naran is the lively gateway to legendary lakes, passes and mountain scenery.',
    why:['Legendary Lakes','Wildflower Meadows','Jeep Adventures','Perfect Summer Escape'],attractions:['Saif-ul-Malook Lake','Lulusar Lake','Babusar Pass','Shogran'],faq:['When is the best time to visit Naran Kaghan?','How far is Naran from Islamabad?','Can I drive to Lake Saif-ul-Malook?','Is Babusar Pass open year round?','What should I pack for Naran?'],
    packages:[
      pkg('Naran Kaghan Classic Tour','Rs. 35,000',img.valley,'3 Days','By Road','Naran Kaghan'),
      pkg('Naran Kaghan Premium Tour','Rs. 65,000',img.hunza,'5 Days','By Road','Naran Kaghan'),
      pkg('Naran Magical Honeymoon','Rs. 68,000',img.forest,'5 Days','By Road','Naran Kaghan'),
    ]
  },
  swat:{
    slug:'swat',name:'Swat Valley',tagline:'SWITZERLAND OF THE EAST',season:'March - October',duration:'3 Places to Explore',packagesCount:'3 Available',hero:img.snow,
    about:'Known as the “Switzerland of the East,” Swat Valley combines emerald rivers, pine forests, alpine meadows, cultural heritage and mountain towns into one of Pakistan’s most loved escapes.',
    why:['Buddhist Heritage','Malam Jabba Resort','Kalam Valley','Family Friendly'],attractions:['Malam Jabba Ski Resort','Mahodand Lake','Kalam Valley','Ushu Forest'],faq:['Is Swat Valley safe for tourists?','What is the best time to visit Swat?','How far is Swat from Islamabad?','Can I ski at Malam Jabba?','What are the must see places in Swat?'],
    packages:[
      pkg('Swat Valley Classic Tour','Rs. 30,000',img.forest,'3 Days','By Road','Swat Valley'),
      pkg('Swat Valley Premium Tour','Rs. 55,000',img.snow,'5 Days','By Road','Swat Valley'),
      pkg('Swat Valley Retreat','Rs. 72,000',img.valley,'6 Days','By Road','Swat Valley'),
    ]
  },
  kumrat:{
    slug:'kumrat',name:'Kumrat Valley',tagline:'HIDDEN PARADISE',season:'May - September',duration:'2 Places to Explore',packagesCount:'2 Available',hero:img.forest,
    about:'Kumrat Valley is one of Pakistan’s last truly unspoiled natural paradises. Hidden away in Upper Dir, the valley is known for dense forests, alpine streams, dramatic peaks and quiet camping locations.',
    why:['Untouched Wilderness','Camping Paradise','Alpine Lakes','Raw Natural Beauty'],attractions:['Jahaz Banda','Katora Lake'],faq:['How do I reach Kumrat Valley?','Is there accommodation in Kumrat?','Do I need a 4x4 for Kumrat?','What is Jahaz Banda?','Is there mobile network in Kumrat?'],
    packages:[
      pkg('Kumrat Valley Adventure','Rs. 32,000',img.forest,'3 Days','By Road','Kumrat Valley'),
      pkg('Kumrat Extended Explorer','Rs. 48,000',img.peaks,'5 Days','By Road','Kumrat Valley'),
    ]
  },
  'azad-kashmir':{
    slug:'azad-kashmir',name:'Azad Kashmir',tagline:'PARADISE ON EARTH',season:'April - October',duration:'3 Places to Explore',packagesCount:'3 Available',hero:img.peaks,
    about:'Azad Kashmir is where the Western Himalayas meet lush river valleys. From Neelum Valley and alpine lakes to forested hill towns, the region offers memorable scenery and peaceful mountain escapes.',
    why:['Neelum Valley','Alpine Lakes','Ancient University','Perfect Climate'],attractions:['Neelum Valley','Ratti Gali Lake','Keran','Muzaffarabad'],faq:['Do I need a permit for Azad Kashmir?','How do I reach Neelum Valley?','What is the best season for Ratti Gali Lake?','Is Azad Kashmir different from Indian administered Kashmir?','What should I expect for accommodation?'],
    packages:[
      pkg('Kashmir (Neelum Valley) Tour','Rs. 40,000',img.peaks,'5 Days','By Road','Azad Kashmir'),
      pkg('Kashmir Grand Tour','Rs. 65,000',img.hunza,'7 Days','By Road','Azad Kashmir'),
      pkg('Kashmir Paradise Escape','Rs. 85,000',img.snow,'8 Days','By Road','Azad Kashmir'),
    ]
  },
  murree:{
    slug:'murree',name:'Murree & Nathia Gali',tagline:'QUEEN OF THE HILLS',season:'Year Round',duration:'2 Places to Explore',packagesCount:'3 Available',hero:img.forest,
    about:'Murree and Nathia Gali have been Pakistan’s favorite hill stations for generations. Just a short drive from Islamabad, they offer pine forests, cool mountain air, scenic viewpoints and classic weekend escapes.',
    why:['Easy Access','Scenic Trails','Pleasant Weather','Colonial Heritage'],attractions:['Mall Road Murree','Ayubia National Park'],faq:['How far is Murree from Islamabad?','Does it snow in Murree?','What’s the difference between Murree and Nathia Gali?','Is Murree good for families?','What hiking trails are available?'],
    packages:[
      pkg('Murree Weekend Getaway','Rs. 18,000',img.snow,'2 Days','By Road','Murree'),
      pkg('Murree & Nathia Gali Tour','Rs. 30,000',img.peaks,'4 Days','By Road','Murree & Nathia Gali'),
      pkg('Murree Corporate Retreat','Rs. 25,000',img.forest,'3 Days','By Road','Murree'),
    ]
  },
  lahore:{
    slug:'lahore',name:'Lahore',tagline:'HEART OF PAKISTAN',season:'October - March',duration:'2 Places to Explore',packagesCount:'2 Available',hero:img.city,
    about:'Lahore is the cultural and culinary heart of Pakistan — a city where 2,000 years of history pulse through Mughal architecture, bustling bazaars, food streets and modern neighborhoods.',
    why:['Mughal Splendor','Food Capital','Living Culture','Bazaar Heritage'],attractions:['Badshahi Mosque','Lahore Fort'],faq:['What is the best time to visit Lahore?','What food must I try in Lahore?','Is the Walled City worth visiting?','How do I get around Lahore?','What souvenirs should I buy?'],
    packages:[
      pkg('Lahore Cultural Experience','Rs. 20,000',img.city,'2 Days','By Road','Lahore'),
      pkg('Lahore Food & Heritage Tour','Rs. 32,000',img.peaks,'3 Days','By Road','Lahore'),
    ]
  },
  islamabad:{
    slug:'islamabad',name:'Islamabad',tagline:'THE BEAUTIFUL CAPITAL',season:'Year Round',duration:'2 Places to Explore',packagesCount:'2 Available',hero:'/destinations/islamabad-card.jpg',
    about:'Islamabad is one of the greenest and most beautiful capital cities in the world. Set against the Margalla Hills, the city blends modern planning with scenic viewpoints, hiking trails and cultural landmarks.',
    why:['Modern Capital','Nature at Your Doorstep','Iconic Architecture','Epic Adventure'],attractions:['Faisal Mosque','Margalla Hills & Daman-e-Koh'],faq:['What are the best hiking trails in Islamabad?','Is Islamabad worth visiting as a tourist?','How do I get from Islamabad to the northern areas?','What is the weather like in Islamabad?','What are good day trips from Islamabad?'],
    packages:[
      pkg('Islamabad City Explorer','Rs. 22,000','/destinations/islamabad-card.jpg','2 Days','By Road','Islamabad'),
      pkg('Islamabad Heritage & Hills Tour','Rs. 35,000',img.city,'3 Days','By Road','Islamabad'),
    ]
  }
};

export const detailImages=[img.mountain,img.hunza,img.valley,img.snow,img.forest,img.peaks,img.city];
