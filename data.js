const CITIES = {
  probolinggo:{name:"Probolinggo",emoji:"🍗",badge:"PROMO HARI INI",title:"Pesan makanan<br>jadi lebih mudah.",text:"Pilih restoran, pilih menu, checkout, lalu langsung WhatsApp.",listTitle:"🍽️ Pilih Restoran",listSub:"Menu dari berbagai resto"},
  malang:{name:"Malang",emoji:"🍜",badge:"JASTIP MALANG",title:"Jajanan Malang<br>Siap Diantar.",text:"Pilih restoran favorit di Malang, pilih menu, checkout, lalu pesan via WhatsApp.",listTitle:"🍽️ Pilih Restoran Malang",listSub:"Daftar Resto Pilihan"},
  jember:{name:"Jember",emoji:"🍜",badge:"JASTIP JEMBER",title:"Jajanan Jember<br>Siap Diantar.",text:"Pilih restoran favorit di Jember, pilih menu, checkout, lalu pesan via WhatsApp.",listTitle:"🍽️ Pilih Restoran Jember",listSub:"Daftar Resto Pilihan"}
};
const CITY_DATA = {};
CITY_DATA.probolinggo = [
  {
    id:"gacoan",
    name:"Resto Gacoan",
    logo:"images/mie-gacoan.jpg",
    banner:"",
    emoji:"🍜",
    products:[
      {id:"gacoan-1",name:"Lumpia Udang",desc:"Renyah di luar, lembut di dalam dengan rasa udang",price:10000,image:"images/lumpia-udang.jpg",emoji:"🥟"},
      {id:"gacoan-2",name:"Siomay",desc:"Perpaduan daging ayam dan udang, disajikan hangat",price:10000,image:"images/siomay.jpg",emoji:"🥟"},
      {id:"gacoan-3",name:"Udang Keju",desc:"Lelehan keju lembut dalam adonan udang dan ayam",price:10000,image:"images/udang-keju.jpg",emoji:"🧀"},
      {id:"gacoan-4",name:"Mie Gacoan",desc:"Mie pedas manis dengan tingkat kepedasan pilihan",price:10000,image:"images/mie-gacoan.jpg",emoji:"🍜",levels:[0,1,2,3,4]},
      {id:"gacoan-5",name:"Mie Hompimpa",desc:"Mie pedas gurih untuk pecinta rasa pedas",price:10000,image:"images/mie-hompimpa.jpg",emoji:"🍜",levels:[1,2,3,4]},
      {id:"gacoan-6",name:"Mie Suit",desc:"Mie gurih dan asin untuk yang tidak suka pedas",price:10000,image:"images/mie-suit.jpg",emoji:"🍜"},
      {id:"gacoan-7",name:"Pangsit Goreng",desc:"Pangsit goreng renyah, cocok dimakan bersama mie",price:10000,image:"images/pangsit-goreng.jpg",emoji:"🥟"},
      {id:"gacoan-8",name:"Es Gobak Sodor",desc:"Nata de coco, jelly, dan irisan strawberry",price:10000,image:"images/es-gobak-sodor.jpg",emoji:"🍹"},
      {id:"gacoan-9",name:"Thai Tea",desc:"Teh Thailand manis dan creamy",price:10000,image:"images/thai-tea.jpg",emoji:"🧋"},
      {id:"gacoan-10",name:"Thai Green Tea",desc:"Teh hijau Thailand manis dan creamy",price:10000,image:"images/thai-green-tea.jpg",emoji:"🍵"}
    ]
  },
  {
    id:"point",
    name:"Point Coffee",
    logo:"images/point-iced-oat-cappucino.jpg",
    banner:"",
    emoji:"☕",
    products:[
      {id:"point-1",name:"Iced Oat Cappucino",desc:"Minuman kopi dengan cita rasa espresso yang dominan, dipadukan dengan oatmilk.",price:15500,image:"images/point-iced-oat-cappucino.jpg",emoji:"☕"},
      {id:"point-2",name:"Iced Oat Aren Latte",desc:"Minuman kopi dingin dengan oat milk dan gula aren khas Point Coffee",price:15500,image:"images/point-iced-oat-aren-latte.jpg",emoji:"☕"},
      {id:"point-3",name:"Kopi Pandan",desc:"Perpaduan antara susu segar, pandan dan satu shot espresso tanpa gula",price:15000,image:"images/point-kopi-pandan.jpg",emoji:"🧋"},
      {id:"point-4",name:"Es Loreng",desc:"Perpaduan antara susu segar dan gula aren dengan topping brown sugar konyaku",price:15000,image:"images/point-es-loreng.jpg",emoji:"🧋"}
    ]
  },
  {
    id:"mixue",
    name:"Resto Mixue",
    logo:"images/blueberry-sundae.jpg",
    banner:"",
    emoji:"🍦",
    products:[
      {id:"mixue-1",name:"Blueberry Sundae",desc:"Es krim lembut dengan saus blueberry",price:11000,image:"images/blueberry-sundae.jpg",emoji:"🍦"},
      {id:"mixue-2",name:"Yellow Peach Sundae",desc:"Es krim lembut dengan topping peach kuning",price:11000,image:"images/yellow-peach-sundae.jpg",emoji:"🍦"},
      {id:"mixue-3",name:"Peach Sundae",desc:"Es krim lembut dengan topping peach",price:11000,image:"images/peach-sundae.jpg",emoji:"🍦"},
      {id:"mixue-4",name:"Kiwi Sundae",desc:"Es krim lembut dengan topping kiwi",price:11000,image:"images/kiwi-sundae.jpg",emoji:"🍦"},
      {id:"mixue-5",name:"Strawberry Lucky Sundae",desc:"Es krim dengan selai strawberry dan topping kejutan",price:11000,image:"images/strawberry-lucky-sundae.jpg",emoji:"🍦"},
      {id:"mixue-6",name:"Strawberry Sundae",desc:"Es krim lembut dengan saus strawberry",price:11000,image:"images/strawberry-sundae.jpg",emoji:"🍦"},
      {id:"mixue-7",name:"Chocolate Cookies Sundae",desc:"Es krim dengan remahan cookies cokelat",price:11000,image:"images/chocolate-cookies-sundae.jpg",emoji:"🍦"},
      {id:"mixue-8",name:"Boba Sundae",desc:"Es krim dengan boba kenyal dan saus cokelat",price:11000,image:"images/boba-sundae.jpg",emoji:"🍦"},
      {id:"mixue-9",name:"Mango Sundae",desc:"Es krim dengan potongan dan sirup mangga",price:11000,image:"images/mango-sundae.jpg",emoji:"🍦"},
      {id:"mixue-10",name:"Creamy Blueberry",desc:"Minuman creamy blueberry yang segar",price:11000,image:"images/creamy-blueberry.jpg",emoji:"🧋"},
      {id:"mixue-11",name:"Milky Fruity Berry",desc:"Campuran strawberry dan susu dengan jelly",price:11000,image:"images/milky-fruity-berry.jpg",emoji:"🧋"},
      {id:"mixue-12",name:"Milky Fruity Kiwi",desc:"Campuran kiwi dan susu dengan jelly peach",price:11000,image:"images/milky-fruity-kiwi.jpg",emoji:"🧋"},
      {id:"mixue-13",name:"Blueberry Jasmine Tea",desc:"Teh melati dengan blueberry segar",price:11000,image:"images/blueberry-jasmine-tea.jpg",emoji:"🍹"},
      {id:"mixue-14",name:"Strawberry Peach Jasmine Tea",desc:"Teh melati dengan strawberry dan peach",price:11000,image:"images/strawberry-peach-jasmine-tea.jpg",emoji:"🍹"},
      {id:"mixue-15",name:"Peach Jasmine Tea",desc:"Teh melati wangi dengan irisan peach",price:11000,image:"images/peach-jasmine-tea.jpg",emoji:"🍹"},
      {id:"mixue-16",name:"Vitamin C Kiwi Tea",desc:"Teh kiwi segar dengan jelly kelapa",price:11000,image:"images/vitamin-c-kiwi-tea.jpg",emoji:"🍹"},
      {id:"mixue-17",name:"Latte",desc:"Espresso halus dengan susu creamy",price:11000,image:"images/latte.jpg",emoji:"☕"}
    ]
  },
  {
    id:"nasi-ayam-rempah-probolinggo",
    name:"Resto Nasi Ayam Rempah Probolinggo",
    logo:"images/nasi-ayam-rempah.jpg",
    banner:"",
    emoji:"🍗",
    products:[
      {id:"nar-1",name:"Nasi Lele Rempah",desc:"Nasi, lele goreng rempah, tempe, terong, lalapan dan sambal",price:14000,image:"images/nasi-lele-rempah.jpg",emoji:"🐟"},
      {id:"nar-2",name:"Nasi Rempelo Ati Rempah",desc:"Nasi, rempelo ati, tempe, terong, lalapan dan sambal",price:14000,image:"images/nasi-rempelo-ati-rempah.jpg",emoji:"🍗"},
      {id:"nar-3",name:"Nasi Usus Rempah",desc:"Nasi, usus goreng, tempe, terong, lalapan dan sambal",price:14000,image:"images/nasi-usus-rempah.jpg",emoji:"🍚"},
      {id:"nar-4",name:"Nasi Ayam Rempah",desc:"Nasi, ayam goreng rempah, tempe, terong, lalapan dan sambal",price:14000,image:"images/nasi-ayam-rempah.jpg",emoji:"🍗"},
      {id:"nar-5",name:"Nasi 4T Rempah",desc:"Nasi, tahu, tempe, telur, terong dan serundeng",price:14000,image:"images/nasi-4t-rempah.jpg",emoji:"🍚"},
      {id:"nar-6",name:"Nasi Kulit Goreng Rempah",desc:"Nasi, kulit goreng/bakar, tahu, terong, lalapan dan sambal",price:14000,image:"images/nasi-kulit-rempah.jpg",emoji:"🍚"}
    ]
  },
  {
    id:"random",
    name:"Resto Random",
    logo:"",
    banner:"",
    emoji:"🎲",
    products:[
      {id:"random-1",name:"Jus Jumbo Semangka 950ml (Jus Buah Fadli)",desc:"Rasakan kesegaran Jus Jumbo Semangka 950ml",price:11500,image:"images/random-jus-semangka.jpg",emoji:"🥤"},
      {id:"random-2",name:"Jus Jumbo Anggur 950ml (Jus Buah Fadli)",desc:"Rasakan kesegaran Jus Jumbo Anggur 950ml",price:11500,image:"images/random-jus-anggur.jpg",emoji:"🥤"},
      {id:"random-3",name:"Jus Jumbo Pear 950ml (Jus Buah Fadli)",desc:"Rasakan kesegaran Jus Jumbo Pear 950ml",price:11500,image:"images/random-jus-pear.jpg",emoji:"🥤"},
      {id:"random-4",name:"Jus Jumbo Sirsak 950ml (Jus Buah Fadli)",desc:"Rasakan kesegaran Jus Jumbo Sirsak 950ml",price:11500,image:"images/random-jus-sirsak.jpg",emoji:"🥤"},
      {id:"random-5",name:"Jus Jumbo Jambu 950ml (Jus Buah Fadli)",desc:"Rasakan kesegaran Jus Jumbo Jambu 950ml",price:11500,image:"images/random-jus-jambu.jpg",emoji:"🥤"},
      {id:"random-6",name:"Jus Jumbo Naga 950ml (Jus Buah Fadli)",desc:"Rasakan kesegaran Jus Jumbo Naga 950ml",price:11500,image:"images/random-jus-naga.jpg",emoji:"🥤"},
      {id:"random-7",name:"Jus Jumbo Jeruk 950ml (Jus Buah Fadli)",desc:"Rasakan kesegaran Jus Jumbo Jeruk 950ml",price:11500,image:"images/random-jus-jeruk.jpg",emoji:"🥤"},
      {id:"random-8",name:"Jus Jumbo Melon 950ml (Jus Buah Fadli)",desc:"Rasakan kesegaran Jus Jumbo Melon 950ml",price:11500,image:"images/random-jus-melon.jpg",emoji:"🥤"},
      {id:"random-9",name:"Nasi Lalapan Ayam Goreng Serundeng (Warung Bunda)",desc:"Nasi pulen, ayam goreng renyah, serundeng gurih, sayuran segar",price:14500,image:"images/random-nasi-lalapan-serundeng.jpg",emoji:"🍚"},
      {id:"random-10",name:"Nasi Lalapan Telor (Warung Bunda)",desc:"Nasi hangat, telur dadar, lalapan segar dan sambal pedas nikmat",price:13000,image:"images/random-nasi-lalapan-telor.jpg",emoji:"🍚"},
      {id:"random-11",name:"Lemon Tea (Saga Coffee)",desc:"Teh segar dengan perpaduan rasa asam lemon yang menyegarkan, pas untuk melepas dahaga",price:9500,image:"images/random-saga-lemon-tea.jpg",emoji:"🍹"},
      {id:"random-12",name:"Peach Tea (Saga Coffee)",desc:"Teh segar dengan sentuhan manis dan aroma buah peach yang ringan, menyegarkan",price:10500,image:"images/random-saga-peach-tea.jpg",emoji:"🍹"},
      {id:"random-13",name:"Lunar Cream (Saga Coffee)",desc:"Perpaduan susu creamy dengan biskuit Oreo crumble yang lezat, manis, dan bikin nagih",price:13500,image:"images/random-saga-lunar-cream.jpg",emoji:"🥛"},
      {id:"random-14",name:"Chocolate (Saga Coffee)",desc:"Creamy, manis, cocok untuk menemani harimu kapan saja",price:13500,image:"images/random-saga-chocolate.jpg",emoji:"🍫"},
      {id:"random-15",name:"Es Kopi Salted Caramel (Saga Coffee)",desc:"Salted caramel yang manis untuk menemani harimu",price:14500,image:"images/random-saga-salted-caramel.jpg",emoji:"☕"},
      {id:"random-16",name:"Es Kopi Susu Saga (Saga Coffee)",desc:"Creamy dan signature Saga",price:14500,image:"images/random-saga-kopi-susu-saga.jpg",emoji:"☕"},
      {id:"random-17",name:"Mojito (Saga Coffee)",desc:"Minuman segar perpaduan mint, lemon, dan soda yang dingin menyegarkan",price:9500,image:"images/random-saga-mojito.jpg",emoji:"🍹"},
      {id:"random-18",name:"Spring (Saga Coffee)",desc:"Perpaduan mangga manis segar dengan yakult yang sedikit asam, creamy, dan menyegarkan",price:11500,image:"images/random-saga-spring.jpg",emoji:"🥭"},
      {id:"random-19",name:"Matcha (Saga Coffee)",desc:"Minuman segar dengan rasa teh hijau khas Jepang, lembut dan menenangkan di setiap tegukan",price:13500,image:"images/random-saga-matcha.jpg",emoji:"🍵"},
      {id:"random-20",name:"Es Americano (Saga Coffee)",desc:"Minuman kopi dengan rasa asam, manis, dan akhiran sedikit bitter",price:10000,image:"images/random-saga-americano.jpg",emoji:"☕"},
      {id:"random-21",name:"Es Cappucino (Saga Coffee)",desc:"Kopi berpadu dengan susu segar",price:14500,image:"images/random-saga-cappucino.jpg",emoji:"☕"},
      {id:"random-22",name:"Es Kopi Susu Vanilla (Saga Coffee)",desc:"Harum, manis, dan siap menemani hari-harimu",price:14500,image:"images/random-saga-kopi-vanilla.jpg",emoji:"☕"},
      {id:"random-23",name:"Es Kopi Susu Butterscotch (Saga Coffee)",desc:"Harum, manis, dan sedikit lebih creamy dengan perpaduan kopi yang masih fresh",price:14500,image:"images/random-saga-kopi-butterscotch.jpg",emoji:"☕"},
      {id:"random-24",name:"Lalapan 4T + Nasi",desc:"Lalapan telur ayam, terong, tahu, tempe dengan sambal enak",price:11500,image:"images/random-lalapan-4t.jpg",emoji:"🍚"},
      {id:"random-25",name:"Gado-gado",desc:"Sayuran segar, tahu, telur, dan kerupuk dengan siraman bumbu kacang",price:11000,image:"images/random-gado-gado.jpg",emoji:"🥗"},
      {id:"random-26",name:"Bubur Ayam Plawangan",desc:"Bubur dicampur baluran ayam enak, lengkap dengan kerupuk dan sambal",price:9000,image:"images/random-bubur-ayam.jpg",emoji:"🥣"},
      {id:"random-27",name:"Pisang Keju Meises",desc:"Pisang goreng dengan keju parut dan meises cokelat",price:11500,image:"images/random-pisang-keju-meises.jpg",emoji:"🍌"},
      {id:"random-28",name:"Pisang Keju Original",desc:"Pisang goreng dengan taburan keju parut",price:10500,image:"images/random-pisang-keju-original.jpg",emoji:"🍌"},
      {id:"random-29",name:"Rujak Tanpa Cingur",desc:"Rujak sayur dan buah dengan bumbu petis, tanpa cingur",price:10000,image:"images/random-rujak.jpg",emoji:"🥗"}
    ]
  }
];

CITY_DATA.malang = [
  {
    id: "dikichi",
    name: "Dikichi",
    logo: "",
    banner: "",
    emoji: "🍱",
    products: [
      { id: "dikichi-1", name: "Crispy Original", desc: "Ayam crispy gurih, renyah di luar & juicy di dalam. Tidak pedas, cocok untuk semua.", price: 13500, image: "gambar-mlg/dikichi-crispy-original.jpg", emoji: "🍗" },
      { id: "dikichi-2", name: "Crispy Hot", desc: "Ayam crispy renyah di luar & juicy di dalam. Cocok untuk pecinta rasa gurih & pedas.", price: 15000, image: "gambar-mlg/dikichi-crispy-hot.jpg", emoji: "🍗" },
      { id: "dikichi-3", name: "Sundae", desc: "Ice cream lembut & creamy, manis & menyegarkan. Tersedia 3 varian: Chocolate, Oreo, Strawberry.", price: 10000, image: "gambar-mlg/dikichi-sundae.jpg", emoji: "🍨", variants: ["Coklat", "Oreo", "Strawberry"] },
      { id: "dikichi-4", name: "Twizzy", desc: "Ice cream lembut & creamy, manis & menyegarkan. Tersedia 3 varian: Hokkaido Matcha, Red Velvet, Silky Ube.", price: 10000, image: "gambar-mlg/dikichi-twizzy.jpg", emoji: "🍦", variants: ["Matcha", "Ube", "Red Velvet"] }
    ]
  },
  {
    id:"point",
    name:"Point Coffee",
    logo:"images/point-iced-oat-cappucino.jpg",
    banner:"",
    emoji:"☕",
    products:[
      {id:"point-1",name:"Iced Oat Cappucino",desc:"Minuman kopi dengan cita rasa espresso yang dominan, dipadukan dengan oatmilk.",price:16500,image:"images/point-iced-oat-cappucino.jpg",emoji:"☕"},
      {id:"point-2",name:"Iced Oat Aren Latte",desc:"Minuman kopi dingin dengan oat milk dan gula aren khas Point Coffee",price:16500,image:"images/point-iced-oat-aren-latte.jpg",emoji:"☕"},
      {id:"point-3",name:"Kopi Pandan",desc:"Perpaduan antara susu segar, pandan dan satu shot espresso tanpa gula",price:16000,image:"images/point-kopi-pandan.jpg",emoji:"🧋"},
      {id:"point-4",name:"Es Loreng",desc:"Perpaduan antara susu segar dan gula aren dengan topping brown sugar konyaku",price:16000,image:"images/point-es-loreng.jpg",emoji:"🧋"}
    ]
  },
  {
    id:"mixue",
    name:"Resto Mixue",
    logo:"images/blueberry-sundae.jpg",
    banner:"",
    emoji:"🍦",
    notice: "⚠️ Peringatan: MIXUE daerah Malang mungkin harga berbeda, nanti akan di konfirmasi lewat Whatsapp.",
    products:[
      {id:"mixue-1",name:"Blueberry Sundae",desc:"Es krim lembut dengan saus blueberry",price:11000,image:"images/blueberry-sundae.jpg",emoji:"🍦"},
      {id:"mixue-2",name:"Yellow Peach Sundae",desc:"Es krim lembut dengan topping peach kuning",price:11000,image:"images/yellow-peach-sundae.jpg",emoji:"🍦"},
      {id:"mixue-3",name:"Peach Sundae",desc:"Es krim lembut dengan topping peach",price:11000,image:"images/peach-sundae.jpg",emoji:"🍦"},
      {id:"mixue-4",name:"Kiwi Sundae",desc:"Es krim lembut dengan topping kiwi",price:11000,image:"images/kiwi-sundae.jpg",emoji:"🍦"},
      {id:"mixue-5",name:"Strawberry Lucky Sundae",desc:"Es krim dengan selai strawberry dan topping kejutan",price:11000,image:"images/strawberry-lucky-sundae.jpg",emoji:"🍦"},
      {id:"mixue-6",name:"Strawberry Sundae",desc:"Es krim lembut dengan saus strawberry",price:11000,image:"images/strawberry-sundae.jpg",emoji:"🍦"},
      {id:"mixue-7",name:"Chocolate Cookies Sundae",desc:"Es krim dengan remahan cookies cokelat",price:11000,image:"images/chocolate-cookies-sundae.jpg",emoji:"🍦"},
      {id:"mixue-8",name:"Boba Sundae",desc:"Es krim dengan boba kenyal dan saus cokelat",price:11000,image:"images/boba-sundae.jpg",emoji:"🍦"},
      {id:"mixue-9",name:"Mango Sundae",desc:"Es krim dengan potongan dan sirup mangga",price:11000,image:"images/mango-sundae.jpg",emoji:"🍦"},
      {id:"mixue-10",name:"Creamy Blueberry",desc:"Minuman creamy blueberry yang segar",price:11000,image:"images/creamy-blueberry.jpg",emoji:"🧋"},
      {id:"mixue-11",name:"Milky Fruity Berry",desc:"Campuran strawberry dan susu dengan jelly",price:11000,image:"images/milky-fruity-berry.jpg",emoji:"🧋"},
      {id:"mixue-12",name:"Milky Fruity Kiwi",desc:"Campuran kiwi dan susu dengan jelly peach",price:11000,image:"images/milky-fruity-kiwi.jpg",emoji:"🧋"},
      {id:"mixue-13",name:"Blueberry Jasmine Tea",desc:"Teh melati dengan blueberry segar",price:11000,image:"images/blueberry-jasmine-tea.jpg",emoji:"🍹"},
      {id:"mixue-14",name:"Strawberry Peach Jasmine Tea",desc:"Teh melati dengan strawberry dan peach",price:11000,image:"images/strawberry-peach-jasmine-tea.jpg",emoji:"🍹"},
      {id:"mixue-15",name:"Peach Jasmine Tea",desc:"Teh melati wangi dengan irisan peach",price:11000,image:"images/peach-jasmine-tea.jpg",emoji:"🍹"},
      {id:"mixue-16",name:"Vitamin C Kiwi Tea",desc:"Teh kiwi segar dengan jelly kelapa",price:11000,image:"images/vitamin-c-kiwi-tea.jpg",emoji:"🍹"},
      {id:"mixue-17",name:"Latte",desc:"Espresso halus dengan susu creamy",price:11000,image:"images/latte.jpg",emoji:"☕"}
    ]
  },
  {
    id:"gacoan",
    name:"Resto Gacoan",
    logo:"images/mie-gacoan.jpg",
    banner:"",
    emoji:"🍜",
    products:[
      {id:"gacoan-1",name:"Lumpia Udang",desc:"Renyah di luar, lembut di dalam dengan rasa udang",price:11000,image:"images/lumpia-udang.jpg",emoji:"🥟"},
      {id:"gacoan-2",name:"Siomay",desc:"Perpaduan daging ayam dan udang, disajikan hangat",price:11000,image:"images/siomay.jpg",emoji:"🥟"},
      {id:"gacoan-3",name:"Udang Keju",desc:"Lelehan keju lembut dalam adonan udang dan ayam",price:11000,image:"images/udang-keju.jpg",emoji:"🧀"},
      {id:"gacoan-4",name:"Mie Gacoan",desc:"Mie pedas manis dengan tingkat kepedasan pilihan",price:11000,image:"images/mie-gacoan.jpg",emoji:"🍜",levels:[0,1,2,3,4]},
      {id:"gacoan-5",name:"Mie Hompimpa",desc:"Mie pedas gurih untuk pecinta rasa pedas",price:11000,image:"images/mie-hompimpa.jpg",emoji:"🍜",levels:[1,2,3,4]},
      {id:"gacoan-6",name:"Mie Suit",desc:"Mie gurih dan asin untuk yang tidak suka pedas",price:11000,image:"images/mie-suit.jpg",emoji:"🍜"},
      {id:"gacoan-7",name:"Pangsit Goreng",desc:"Pangsit goreng renyah, cocok dimakan bersama mie",price:11000,image:"images/pangsit-goreng.jpg",emoji:"🥟"},
      {id:"gacoan-8",name:"Es Gobak Sodor",desc:"Nata de coco, jelly, dan irisan strawberry",price:11000,image:"images/es-gobak-sodor.jpg",emoji:"🍹"},
      {id:"gacoan-9",name:"Thai Tea",desc:"Teh Thailand manis dan creamy",price:11000,image:"images/thai-tea.jpg",emoji:"🧋"},
      {id:"gacoan-10",name:"Thai Green Tea",desc:"Teh hijau Thailand manis dan creamy",price:11000,image:"images/thai-green-tea.jpg",emoji:"🍵"}
    ]
  },
  {
    id: "ayam-geprek-juara-ibu",
    name: "Ayam Geprek Juara Ibu",
    logo: "",
    banner: "",
    emoji: "🍗",
    products: [
      { id: "agji-1", name: "Nasi Ayam Geprek", desc: "Nasi dengan ayam geprek krispi, sambal pedas dan lalapan.", price: 13000, image: "gambar-mlg/agji-nasi-ayam-geprek.jpg", emoji: "🍗" },
      { id: "agji-2", name: "Ayam Geprek", desc: "Ayam krispi digeprek dengan sambal pedas.", price: 10000, image: "", emoji: "🍗" },
      { id: "agji-3", name: "Nasi Mie Ayam Geprek", desc: "Nasi dan mie dengan ayam geprek krispi dan sambal pedas.", price: 17000, image: "", emoji: "🍜" },
      { id: "agji-4", name: "Mie Ayam Geprek", desc: "Mie dengan ayam geprek krispi, sambal pedas dan lalapan.", price: 10000, image: "gambar-mlg/agji-mie-ayam-geprek.jpg", emoji: "🍜" }
    ]
  },
  {
    id: "roti-bakar-latte",
    name: "Roti Bakar Latte",
    logo: "",
    banner: "",
    emoji: "🍞",
    products: [
      { id: "rbl-1", name: "Roti Bakar Coklat (Medium)", desc: "Roti bakar hangat renyah di luar, lembut di mulut, berpadu sempurna dengan isian coklat.", price: 10000, image: "gambar-mlg/roti-bakar-lette-coklat.jpg", emoji: "🍞" },
      { id: "rbl-2", name: "Roti Bakar Keju (Medium)", desc: "Roti bakar hangat renyah di luar, lembut di mulut, berpadu sempurna dengan isian keju.", price: 10000, image: "gambar-mlg/roti-bakar-lette-keju.jpg", emoji: "🍞" },
      { id: "rbl-3", name: "Roti Bakar Tiramisu (Medium)", desc: "Roti bakar hangat renyah di luar, lembut di mulut, berpadu sempurna dengan isian tiramisu.", price: 10000, image: "gambar-mlg/roti-bakar-lette-tiramisu.jpg", emoji: "🍞" },
      { id: "rbl-4", name: "Roti Bakar Greentea (Medium)", desc: "Roti bakar hangat renyah di luar, lembut di mulut, berpadu sempurna dengan isian greentea.", price: 10000, image: "gambar-mlg/roti-bakar-lette-greentea.jpg", emoji: "🍞" },
      { id: "rbl-5", name: "Roti Bakar Strawberry (Medium)", desc: "Roti bakar hangat renyah di luar, lembut di mulut, berpadu sempurna dengan isian strawberry.", price: 10000, image: "gambar-mlg/roti-bakar-lette-strawberry.jpg", emoji: "🍞" },
      { id: "rbl-6", name: "Roti Bakar Taro (Medium)", desc: "Roti bakar hangat renyah di luar, lembut di mulut, berpadu sempurna dengan isian taro.", price: 10000, image: "gambar-mlg/roti-bakar-lette-taro.jpg", emoji: "🍞" },
      { id: "rbl-7", name: "Roti Bakar Red Velvet (Medium)", desc: "Roti bakar hangat renyah di luar, lembut di mulut, berpadu sempurna dengan isian red velvet.", price: 10000, image: "gambar-mlg/roti-bakar-lette-red-velvet.jpg", emoji: "🍞" },
      { id: "rbl-8", name: "Tiramisu Kacang (Medium)", desc: "5 potong roti bakar dengan isian tiramisu mix kacang", price: 12500, image: "gambar-mlg/roti-bakar-lette-tiramisu-kacang.jpg", emoji: "🍞" },
      { id: "rbl-9", name: "Tiramisu Almond (Medium)", desc: "5 potong roti bakar dengan isian tiramisu mix almond", price: 12500, image: "gambar-mlg/roti-bakar-lette-tiramisu-almond.jpg", emoji: "🍞" },
      { id: "rbl-10", name: "Tiramisu Keju (Medium)", desc: "5 potong roti bakar dengan isian tiramisu mix keju", price: 12500, image: "gambar-mlg/roti-bakar-lette-tiramisu-keju.jpg", emoji: "🍞" },
      { id: "rbl-11", name: "Greentea Keju (Medium)", desc: "5 potong roti bakar dengan isian greentea mix keju", price: 12500, image: "gambar-mlg/roti-bakar-lette-greentea-keju.jpg", emoji: "🍞" },
      { id: "rbl-12", name: "Coklat Keju (Medium)", desc: "Lezat coklat lembut dipadukan keju, ukuran sedang 5 potong menggoda selera.", price: 12500, image: "gambar-mlg/roti-bakar-lette-coklat-keju.jpg", emoji: "🍞" },
      { id: "rbl-13", name: "Coklat Keju Terlaris (Medium)", desc: "5 potong roti bakar dengan isian coklat mix keju", price: 19000, image: "gambar-mlg/roti-bakar-lette-coklat-keju.jpg", emoji: "🍞" },
      { id: "rbl-14", name: "Coklat Kacang (Medium)", desc: "5 potong roti bakar dengan isian coklat mix kacang", price: 12500, image: "gambar-mlg/roti-bakar-lette-coklat-kacang.jpg", emoji: "🍞" },
      { id: "rbl-15", name: "Coklat Almond (Medium)", desc: "5 potong roti bakar dengan isian coklat mix almond", price: 12500, image: "gambar-mlg/roti-bakar-lette-coklat-almond.jpg", emoji: "🍞" },
      { id: "rbl-16", name: "Coklat Tiramisu (Medium)", desc: "5 potong roti istimewa dengan isian coklat dan tiramisu", price: 12500, image: "gambar-mlg/roti-bakar-lette-coklat-tiramisu.jpg", emoji: "🍞" },
      { id: "rbl-17", name: "Coklat Greentea (Medium)", desc: "5 potong roti bakar dengan isian coklat mix greentea", price: 12500, image: "gambar-mlg/roti-bakar-lette-coklat-greentea.jpg", emoji: "🍞" },
      { id: "rbl-18", name: "Coklat Strawberry (Medium)", desc: "5 potong roti istimewa dengan isian coklat dan strawberry istimewa", price: 12500, image: "gambar-mlg/roti-bakar-lette-coklat-strawberry.jpg", emoji: "🍞" },
      { id: "rbl-19", name: "Tiramisu Greentea (Medium)", desc: "5 potong roti bakar dengan isian tiramisu mix greentea", price: 12500, image: "gambar-mlg/roti-bakar-lette-tiramisu-greentea.jpg", emoji: "🍞" },
      { id: "rbl-20", name: "Strawberry Red Velvet (Medium)", desc: "5 potong roti bakar dengan isian strawberry mix red velvet", price: 12500, image: "gambar-mlg/roti-bakar-lette-strawberry-red-velvet.jpg", emoji: "🍞" },
      { id: "rbl-21", name: "Tiramisu Strawberry (Medium)", desc: "5 potong roti bakar dengan isian tiramisu mix strawberry", price: 12500, image: "gambar-mlg/roti-bakar-lette-tiramisu-strawberry.jpg", emoji: "🍞" },
      { id: "rbl-22", name: "Taro Red Velvet (Medium)", desc: "5 potong roti bakar dengan isian taro mix red velvet", price: 12500, image: "gambar-mlg/roti-bakar-lette-taro-red-velvet.jpg", emoji: "🍞" },
      { id: "rbl-23", name: "Strawberry Taro (Medium)", desc: "5 potong roti bakar dengan isian strawberry mix taro", price: 12500, image: "gambar-mlg/roti-bakar-lette-strawberry-taro.jpg", emoji: "🍞" },
      { id: "rbl-24", name: "Greentea Red Velvet (Medium)", desc: "5 potong roti bakar dengan isian greentea mix red velvet", price: 12500, image: "gambar-mlg/roti-bakar-lette-greentea-red-velvet.jpg", emoji: "🍞" },
      { id: "rbl-25", name: "Greentea Taro (Medium)", desc: "5 potong roti bakar dengan isian greentea mix taro", price: 12500, image: "gambar-mlg/roti-bakar-lette-greentea-taro.jpg", emoji: "🍞" },
      { id: "rbl-26", name: "Greentea Strawberry (Medium)", desc: "5 potong roti bakar dengan isian greentea mix strawberry", price: 12500, image: "gambar-mlg/roti-bakar-lette-greentea-strawberry.jpg", emoji: "🍞" },
      { id: "rbl-27", name: "Tiramisu Red Velvet (Medium)", desc: "5 potong roti bakar dengan isian tiramisu mix red velvet", price: 12500, image: "gambar-mlg/roti-bakar-lette-tiramisu-red-velvet.jpg", emoji: "🍞" },
      { id: "rbl-28", name: "Tiramisu Taro (Medium)", desc: "5 potong roti bakar dengan isian tiramisu mix taro", price: 12500, image: "gambar-mlg/roti-bakar-lette-tiramisu-taro.jpg", emoji: "🍞" },
      { id: "rbl-29", name: "Coklat Red Velvet (Medium)", desc: "5 potong roti istimewa dengan isian coklat dan red velvet", price: 12500, image: "gambar-mlg/roti-bakar-lette-coklat-red-velvet.jpg", emoji: "🍞" },
      { id: "rbl-30", name: "Coklat Taro (Medium)", desc: "Beberapa potong roti istimewa dengan isian coklat dan taro istimewa", price: 12500, image: "gambar-mlg/roti-bakar-lette-coklat-taro.jpg", emoji: "🍞" },
      { id: "rbl-31", name: "Coklat Keju (Large)", desc: "10 potong roti bakar dengan isian coklat mix keju (Large)", price: 26500, image: "gambar-mlg/roti-bakar-lette-coklat-keju-large.jpg", emoji: "🍞" }
    ]
  },
  {
    id: "pancong-pocong",
    name: "Pancong Pocong",
    logo: "",
    banner: "",
    emoji: "🥞",
    products: [
      { id: "papo-1", name: "Pancong Chocomisu M", desc: "Kue pancong lumer rasa Choco Misu, ukuran M.", price: 12500, image: "gambar-mlg/pancongpocong-chocomisu.jpg", emoji: "🥞" },
      { id: "papo-2", name: "Pancong Meses Susu M", desc: "Kue pancong lumer rasa meses susu, ukuran M.", price: 10000, image: "gambar-mlg/pancongpocong-meses-susu.jpg", emoji: "🥞" },
      { id: "papo-3", name: "Pancong Tiramisu M", desc: "Kue pancong lumer rasa tiramisu, ukuran M.", price: 10000, image: "gambar-mlg/pancongpocong-tiramisu.jpg", emoji: "🥞" },
      { id: "papo-4", name: "Pancong Keju Susu M", desc: "Kue pancong lumer rasa keju susu, ukuran M.", price: 10000, image: "gambar-mlg/pancongpocong-keju-susu.jpg", emoji: "🥞" },
      { id: "papo-5", name: "Pancong Strawberry M", desc: "Kue pancong lumer rasa strawberry, ukuran M.", price: 10000, image: "gambar-mlg/pancongpocong-strawberry.jpg", emoji: "🥞" },
      { id: "papo-6", name: "Pancong Taro M", desc: "Kue pancong lumer rasa taro, ukuran M.", price: 10000, image: "gambar-mlg/pancongpocong-taro.jpg", emoji: "🥞" },
      { id: "papo-7", name: "Pancong Coklat M", desc: "Kue pancong lumer rasa coklat, ukuran M.", price: 12500, image: "gambar-mlg/pancongpocong-coklat.jpg", emoji: "🥞" },
      { id: "papo-8", name: "Pancong Cheese M", desc: "Kue pancong lumer rasa cheese, ukuran M.", price: 10000, image: "gambar-mlg/pancongpocong-cheese.jpg", emoji: "🥞" },
      { id: "papo-9", name: "Pancong Greentea M", desc: "Kue pancong lumer rasa greentea, ukuran M.", price: 12500, image: "gambar-mlg/pancongpocong-greentea.jpg", emoji: "🥞" }
    ]
  },
  {
    id: "bangjo-ayam-geprek",
    name: "Bangjo Ayam Geprek",
    logo: "",
    banner: "",
    emoji: "🍗",
    products: [
      { id: "bangjo-1", name: "Nasi + Ayam Geprek", desc: "Sambal tidak bisa dipisah.", price: 10500, image: "gambar-mlg/bangjo-nasi-ayam-geprek.jpg", emoji: "🍗" },
      { id: "bangjo-2", name: "Nasi Ayam + Tahu Geprek", desc: "Sambal tidak bisa dipisah.", price: 12500, image: "gambar-mlg/bangjo-nasi-ayam-tahu-geprek.jpg", emoji: "🍗" },
      { id: "bangjo-3", name: "Nasi Ayam + Tempe Geprek", desc: "Sambal tidak bisa dipisah.", price: 12500, image: "gambar-mlg/bangjo-nasi-ayam-tempe-geprek.jpg", emoji: "🍗" },
      { id: "bangjo-4", name: "Nasi Ayam + Tahu Tempe Geprek", desc: "Sambal tidak bisa dipisah.", price: 14000, image: "gambar-mlg/bangjo-nasi-ayam-tahu-tempe-geprek.jpg", emoji: "🍗" }
    ]
  },
  {
    id: "jus-jupe-jumbo",
    name: "Jus Jupe Jumbo",
    logo: "",
    banner: "",
    emoji: "🥤",
    products: [
      { id: "jupe-1", name: "Jus Belimbing Jumbo", desc: "Dibuat dari buah-buahan alami segar pilihan.", price: 12000, image: "gambar-mlg/jupe-jus-belimbing-jumbo.jpg", emoji: "⭐" },
      { id: "jupe-2", name: "Jus Jeruk Jumbo", desc: "Dibuat dari buah jeruk pilihan yang segar dan manis alami.", price: 12000, image: "gambar-mlg/jupe-jus-jeruk-jumbo.jpg", emoji: "🍊" },
      { id: "jupe-3", name: "Jus Nanas Jumbo", desc: "Dibuat dari nanas berkualitas pilihan.", price: 12000, image: "gambar-mlg/jupe-jus-nanas-jumbo.jpg", emoji: "🍍" },
      { id: "jupe-4", name: "Jus Pisang Jumbo", desc: "Jus pisang jumbo lembut dengan rasa pisang berkualitas tinggi, segar dan nikmat.", price: 12000, image: "gambar-mlg/jupe-jus-pisang-jumbo.jpg", emoji: "🍌" },
      { id: "jupe-5", name: "Jus Semangka Jumbo", desc: "Jus semangka segar dan menyegarkan, cocok dinikmati di hari panas.", price: 12000, image: "gambar-mlg/jupe-jus-semangka-jumbo.jpg", emoji: "🍉" },
      { id: "jupe-6", name: "Jus Tomat Jumbo", desc: "Dibuat dari buah tomat asli segar pilihan.", price: 12000, image: "gambar-mlg/jupe-jus-tomat-jumbo.jpg", emoji: "🍅" },
      { id: "jupe-7", name: "Jus Wortel Jumbo", desc: "Segar dan alami, jus wortel jumbo yang menyegarkan dan penuh manfaat.", price: 12000, image: "gambar-mlg/jupe-jus-wortel-jumbo.jpg", emoji: "🥕" }
    ]
  },
  {
    id: "rotti-gokki",
    name: "Rotti Gokki",
    logo: "",
    banner: "",
    emoji: "🥖",
    products: [
      { id: "gokki-1", name: "Roti Bun Go Cheese", desc: "Roti bun isi butter dengan topping keju. Dapat 2 item.", price: 10000, image: "gambar-mlg/roti-gokki-roti-bun-go-cheese.jpg", emoji: "🧀" },
      { id: "gokki-2", name: "Roti Bun Go Coffee", desc: "Roti bun isi buttermilk dengan topping krim rasa kopi. Dapat 2 item.", price: 10000, image: "gambar-mlg/roti-gokki-roti-bun-go-coffee.jpg", emoji: "☕" },
      { id: "gokki-3", name: "Roti Bun Go Butter Milk", desc: "Roti Gokki yang lembut dengan isian buttermilk yang creamy. Dapat 2 item.", price: 10000, image: "gambar-mlg/roti-gokki-roti-bun-go-butter-milk.jpg", emoji: "🥛" },
      { id: "gokki-4", name: "Roti Bun Go Choco", desc: "Roti Gokki bun yang lembut dengan isian coklat yang creamy dan topping coklat. Dapat 2 item.", price: 10000, image: "gambar-mlg/roti-gokki-roti-bun-go-choco.jpg", emoji: "🍫" },
      { id: "gokki-5", name: "Gokki Pizza", desc: "Roti Gokki pizza yang lembut dengan topping keju dan sosis yang gurih. Dapat 2 item.", price: 10000, image: "gambar-mlg/roti-gokki-gokki-pizza.jpg", emoji: "🍕" },
      { id: "gokki-6", name: "Gokki Sisir", desc: "Roti Gokki sisir yang lembut dengan isian butter yang creamy. Dapat 2 item.", price: 10000, image: "gambar-mlg/roti-gokki-gokki-sisir.jpg", emoji: "🍞" }
    ]
  },
  {
    id: "sate-madura-cak-hisyam",
    name: "Sate Madura Cak Hisyam",
    logo: "",
    banner: "",
    emoji: "🍢",
    products: [
      { id: "sate-1", name: "Sate Aja 10 Tusuk", desc: "Sate madura 10 tusuk dengan bumbu kacang dan bawang merah.", price: 11500, image: "gambar-mlg/sate-sate-aja-10-tusuk.jpg", emoji: "🍢" }
    ]
  },
  {
    id: "nasi-goreng-angel",
    name: "Nasi Goreng Angel",
    logo: "",
    banner: "",
    emoji: "🍳",
    products: [
      { id: "angel-1", name: "Nasgor Rempah Sapi", desc: "Nasi goreng dimasak dengan bumbu rempah yang khas, topping daging sapi.", price: 12500, image: "gambar-mlg/nasgorangel-nasgor-rempah-sapi.jpg", emoji: "🍳" },
      { id: "angel-2", name: "Nasgor Hongkong", desc: "Nasi goreng putihan dengan telur orak-arik dan topping wortel, kacang polong, bakso.", price: 10000, image: "gambar-mlg/nasgorangel-nasgor-hongkong.jpg", emoji: "🍳" },
      { id: "angel-3", name: "Capcay Kuah", desc: "Aneka sayuran dimasak kuah dengan topping daging ayam, udang, bakso, gurih.", price: 10000, image: "gambar-mlg/nasgorangel-capcay-kuah.jpg", emoji: "🍳" },
      { id: "angel-4", name: "Nasi Goreng Kecap", desc: "Nasi goreng kecap dengan pilihan isian: nasi / ayam / sosis / bakso.", price: 12000, image: "gambar-mlg/nasgorangel-nasi-goreng-kecap.jpg", emoji: "🍳" },
      { id: "angel-5", name: "Bakmie Goreng Jawa", desc: "Bakmie goreng Jawa dengan pilihan isian: sosis / ayam / bakso / sayur.", price: 12000, image: "gambar-mlg/nasgorangel-bakmie-goreng-jawa.jpg", emoji: "🍳" },
      { id: "angel-6", name: "Nasi Goreng Kecap Hot", desc: "Nasi goreng kecap pedas dengan pilihan isian: nasi / ayam / sosis / bakso.", price: 12000, image: "gambar-mlg/nasgorangel-nasi-goreng-kecap-hot.jpg", emoji: "🍳" },
      { id: "angel-7", name: "Nasi Goreng Jawa Hot", desc: "Nasi goreng Jawa pedas.", price: 12000, image: "gambar-mlg/nasgorangel-nasi-goreng-jawa-hot.jpg", emoji: "🍳" },
      { id: "angel-8", name: "Nasi Goreng Merah", desc: "Nasi goreng merah.", price: 12000, image: "gambar-mlg/nasgorangel-nasi-goreng-merah.jpg", emoji: "🍳" },
      { id: "angel-9", name: "Nasi Goreng Jawa", desc: "Nasi goreng khas Jawa.", price: 12000, image: "gambar-mlg/nasgorangel-nasi-goreng-jawa.jpg", emoji: "🍳" }
    ]
  },
  {
    id: "nasgor-samihoki",
    name: "Nasgor Samihoki",
    logo: "",
    banner: "",
    emoji: "🍚",
    products: [
      { id: "hoki-1", name: "Nasgor Seafood", desc: "Nasi goreng putihan dengan telur orak-arik, topping udang, cumi dan oriental seafood.", price: 11500, image: "gambar-mlg/samihoki-nasgor-seafood.jpg", emoji: "🍚" },
      { id: "hoki-2", name: "Nasgor Pattaya (Spicy)", desc: "Nasi goreng pakai saos sedikit pedas dibungkus dengan telur dadar.", price: 11500, image: "gambar-mlg/samihoki-nasgor-pattaya-spicy.jpg", emoji: "🍚" },
      { id: "hoki-3", name: "Nasgor Telur Samihoki", desc: "Nasi goreng merah pakai saos dengan topping telur orak-arik, banyak telurnya.", price: 10000, image: "gambar-mlg/samihoki-nasgor-telur-samihoki.jpg", emoji: "🍚" },
      { id: "hoki-4", name: "Capcay Goreng", desc: "Aneka sayuran dengan topping ayam, bakso, udang, gurih mantul.", price: 11500, image: "gambar-mlg/samihoki-capcay-goreng.jpg", emoji: "🍚" },
      { id: "hoki-5", name: "Nasgor Mawut", desc: "Nasi goreng putihan dengan telur orak-arik dan topping sayuran dan mie.", price: 10000, image: "gambar-mlg/samihoki-nasgor-mawut.jpg", emoji: "🍚" },
      { id: "hoki-6", name: "Nasgor Ikan Asin", desc: "Nasi goreng putihan dengan topping telur orak-arik dan ikan asin jambal.", price: 10000, image: "gambar-mlg/samihoki-nasgor-ikan-asin.jpg", emoji: "🍚" },
      { id: "hoki-7", name: "Nasgor Ikan Teri", desc: "Nasi goreng putihan dengan topping telur orak-arik dan ikan teri krispi.", price: 10000, image: "gambar-mlg/samihoki-nasgor-ikan-teri.jpg", emoji: "🍚" },
      { id: "hoki-8", name: "Nasgor Udang", desc: "Nasi goreng merah dengan telur orak-arik dan topping udang.", price: 12500, image: "gambar-mlg/samihoki-nasgor-udang.jpg", emoji: "🍚" },
      { id: "hoki-9", name: "Me Goreng Samihoki", desc: "Bakmi goreng dengan telur orak-arik dan aneka sayuran, topping ayam, udang, bakso.", price: 10000, image: "gambar-mlg/samihoki-me-goreng-samihoki.jpg", emoji: "🍚" },
      { id: "hoki-10", name: "Kwetiau Goreng The Best", desc: "Kwetiau goreng dimasak telur dengan sayuran dan topping daging ayam, bakso.", price: 13400, image: "gambar-mlg/samihoki-kwetiau-goreng-the-best.jpg", emoji: "🍚" },
      { id: "hoki-11", name: "Nasi Goreng Rempah Ayam", desc: "Nasi goreng dimasak dengan bumbu rempah khas Samihoki, berisi ayam.", price: 12500, image: "gambar-mlg/samihoki-nasi-goreng-rempah-ayam.jpg", emoji: "🍚" }
    ]
  },
  {
    id: "nasgor-geprek-kepo",
    name: "Nasgor Geprek Kepo",
    logo: "",
    banner: "",
    emoji: "🍛",
    products: [
      { id: "kepo-1", name: "Nasi Goreng Ayam", desc: "Nasi goreng dengan topping ayam fillet dan sayur, dimasak ala restoran.", price: 11500, image: "gambar-mlg/nasgorkepo-nasi-goreng-ayam.jpg", emoji: "🍛" },
      { id: "kepo-2", name: "Nasi Goreng Baso Ikan", desc: "Nasi goreng dengan topping baso ikan dan sayur, dimasak ala restoran.", price: 11500, image: "gambar-mlg/nasgorkepo-nasi-goreng-baso-ikan.jpg", emoji: "🍛" },
      { id: "kepo-3", name: "Nasi Goreng Sosis", desc: "Nasi goreng dengan topping sosis dan sayur, dimasak ala restoran.", price: 12500, image: "gambar-mlg/nasgorkepo-nasi-goreng-sosis.jpg", emoji: "🍛" },
      { id: "kepo-4", name: "Nasi Goreng Ikan Asin", desc: "Nasi goreng dengan topping ikan asin jambal, ayam fillet dan sayur.", price: 12500, image: "gambar-mlg/nasgorkepo-nasi-goreng-ikan-asin.jpg", emoji: "🍛" },
      { id: "kepo-5", name: "Nasi Goreng Mawut", desc: "Nasi goreng dengan topping ayam fillet, baso ikan, mie dan sayur.", price: 12500, image: "gambar-mlg/nasgorkepo-nasi-goreng-mawut.jpg", emoji: "🍛" },
      { id: "kepo-6", name: "Nasi Goreng Pete", desc: "Nasi goreng dengan topping pete, baso ikan dan sayur.", price: 12000, image: "gambar-mlg/nasgorkepo-nasi-goreng-pete.jpg", emoji: "🍛" },
      { id: "kepo-7", name: "Nasi Goreng Hongkong", desc: "Nasi goreng putihan dengan topping baso ikan, sosis dan sayur.", price: 11500, image: "gambar-mlg/nasgorkepo-nasi-goreng-hongkong.jpg", emoji: "🍛" },
      { id: "kepo-8", name: "Bakmie Goreng Kepo", desc: "Bakmie goreng dengan topping ayam fillet, sosis, baso ikan dan telur dadar.", price: 0, image: "gambar-mlg/nasgorkepo-bakmie-goreng-kepo.jpg", emoji: "🍛" },
      { id: "kepo-9", name: "Bakmie Goreng Ayam", desc: "Bakmie goreng dengan isi ayam fillet, sayur sawi hijau dan gubis lengkap.", price: 11500, image: "gambar-mlg/nasgorkepo-bakmie-goreng-ayam.jpg", emoji: "🍛" },
      { id: "kepo-10", name: "Bakmie Goreng Baso Ikan", desc: "Bakmie goreng dengan isi baso ikan, sayur sawi hijau dan gubis lengkap.", price: 12000, image: "gambar-mlg/nasgorkepo-bakmie-goreng-baso-ikan.jpg", emoji: "🍛" },
      { id: "kepo-11", name: "Bihun Goreng", desc: "Bihun goreng dengan isi baso ikan, ayam fillet, sosis, sayur sawi hijau dan gubis.", price: 14400, image: "gambar-mlg/nasgorkepo-bihun-goreng.jpg", emoji: "🍛" },
      { id: "kepo-12", name: "Capcay", desc: "Capcay goreng dengan sayuran lengkap dan topping baso ikan, sosis, ayam fillet.", price: 14400, image: "gambar-mlg/nasgorkepo-capcay.jpg", emoji: "🍛" }
    ]
  },
  {
    id: "ayam-goreng-bawang",
    name: "Ayam Goreng Bawang",
    logo: "",
    banner: "",
    emoji: "🍗",
    products: [
      { id: "agb-1", name: "Ayam Gowang", desc: "Ayam Goreng Bawang + Kremes + Nasi + Sambal + Lalapan", price: 13500, image: "gambar-mlg/agb-ayam-gowang.jpg", emoji: "🍗" }
    ]
  }
];

CITY_DATA.jember = [
  {
    id:"gacoan",
    name:"Resto Gacoan",
    logo:"images/mie-gacoan.jpg",
    banner:"",
    emoji:"🍜",
    products:[
      {id:"gacoan-1",name:"Lumpia Udang",desc:"Renyah di luar, lembut di dalam dengan rasa udang",price:10000,image:"images/lumpia-udang.jpg",emoji:"🥟"},
      {id:"gacoan-2",name:"Siomay",desc:"Perpaduan daging ayam dan udang, disajikan hangat",price:10000,image:"images/siomay.jpg",emoji:"🥟"},
      {id:"gacoan-3",name:"Udang Keju",desc:"Lelehan keju lembut dalam adonan udang dan ayam",price:10000,image:"images/udang-keju.jpg",emoji:"🧀"},
      {id:"gacoan-4",name:"Mie Gacoan",desc:"Mie pedas manis dengan tingkat kepedasan pilihan",price:10000,image:"images/mie-gacoan.jpg",emoji:"🍜",levels:[0,1,2,3,4]},
      {id:"gacoan-5",name:"Mie Hompimpa",desc:"Mie pedas gurih untuk pecinta rasa pedas",price:10000,image:"images/mie-hompimpa.jpg",emoji:"🍜",levels:[1,2,3,4]},
      {id:"gacoan-6",name:"Mie Suit",desc:"Mie gurih dan asin untuk yang tidak suka pedas",price:10000,image:"images/mie-suit.jpg",emoji:"🍜"},
      {id:"gacoan-7",name:"Pangsit Goreng",desc:"Pangsit goreng renyah, cocok dimakan bersama mie",price:10000,image:"images/pangsit-goreng.jpg",emoji:"🥟"},
      {id:"gacoan-8",name:"Es Gobak Sodor",desc:"Nata de coco, jelly, dan irisan strawberry",price:10000,image:"images/es-gobak-sodor.jpg",emoji:"🍹"},
      {id:"gacoan-9",name:"Thai Tea",desc:"Teh Thailand manis dan creamy",price:10000,image:"images/thai-tea.jpg",emoji:"🧋"},
      {id:"gacoan-10",name:"Thai Green Tea",desc:"Teh hijau Thailand manis dan creamy",price:10000,image:"images/thai-green-tea.jpg",emoji:"🍵"}
    ]
  },
  {
    id:"point",
    name:"Point Coffee",
    logo:"images/point-iced-oat-cappucino.jpg",
    banner:"",
    emoji:"☕",
    products:[
      {id:"point-1",name:"Iced Oat Cappucino",desc:"Minuman kopi dengan cita rasa espresso yang dominan, dipadukan dengan oatmilk.",price:16500,image:"images/point-iced-oat-cappucino.jpg",emoji:"☕"},
      {id:"point-2",name:"Iced Oat Aren Latte",desc:"Minuman kopi dingin dengan oat milk dan gula aren khas Point Coffee",price:16500,image:"images/point-iced-oat-aren-latte.jpg",emoji:"☕"},
      {id:"point-3",name:"Kopi Pandan",desc:"Perpaduan antara susu segar, pandan dan satu shot espresso tanpa gula",price:16000,image:"images/point-kopi-pandan.jpg",emoji:"🧋"},
      {id:"point-4",name:"Es Loreng",desc:"Perpaduan antara susu segar dan gula aren dengan topping brown sugar konyaku",price:16000,image:"images/point-es-loreng.jpg",emoji:"🧋"}
    ]
  },
  {
    id: "dikichi",
    name: "Dikichi",
    logo: "",
    banner: "",
    emoji: "🍱",
    notice: "⚠️ Peringatan: Dikichi di Jember tidak bisa mengantar ke semua daerah. Pastikan alamat kamu masuk jangkauan — kami akan konfirmasi via WhatsApp sebelum pesanan diproses.",
    products: [
      { id: "dikichi-1", name: "Crispy Original", desc: "Ayam crispy gurih, renyah di luar & juicy di dalam. Tidak pedas, cocok untuk semua.", price: 12000, image: "gambar-mlg/dikichi-crispy-original.jpg", emoji: "🍗" },
      { id: "dikichi-2", name: "Crispy Hot", desc: "Ayam crispy renyah di luar & juicy di dalam. Cocok untuk pecinta rasa gurih & pedas.", price: 13000, image: "gambar-mlg/dikichi-crispy-hot.jpg", emoji: "🍗" },
      { id: "dikichi-3", name: "Sundae", desc: "Ice cream lembut & creamy, manis & menyegarkan. Tersedia 3 varian: Chocolate, Oreo, Strawberry.", price: 10000, image: "gambar-mlg/dikichi-sundae.jpg", emoji: "🍨", variants: ["Coklat", "Oreo", "Strawberry"] },
      { id: "dikichi-4", name: "Twizzy", desc: "Ice cream lembut & creamy, manis & menyegarkan. Tersedia 3 varian: Hokkaido Matcha, Red Velvet, Silky Ube.", price: 10000, image: "gambar-mlg/dikichi-twizzy.jpg", emoji: "🍦", variants: ["Matcha", "Ube", "Red Velvet"] }
    ]
  },
  {
    id:"mixue",
    name:"Resto Mixue",
    logo:"images/blueberry-sundae.jpg",
    banner:"",
    emoji:"🍦",
    notice: "⚠️ Peringatan: MIXUE daerah Jember mungkin harga berbeda, nanti akan di konfirmasi lewat Whatsapp.",
    products:[
      {id:"mixue-1",name:"Blueberry Sundae",desc:"Es krim lembut dengan saus blueberry",price:11000,image:"images/blueberry-sundae.jpg",emoji:"🍦"},
      {id:"mixue-2",name:"Yellow Peach Sundae",desc:"Es krim lembut dengan topping peach kuning",price:11000,image:"images/yellow-peach-sundae.jpg",emoji:"🍦"},
      {id:"mixue-3",name:"Peach Sundae",desc:"Es krim lembut dengan topping peach",price:11000,image:"images/peach-sundae.jpg",emoji:"🍦"},
      {id:"mixue-4",name:"Kiwi Sundae",desc:"Es krim lembut dengan topping kiwi",price:11000,image:"images/kiwi-sundae.jpg",emoji:"🍦"},
      {id:"mixue-5",name:"Strawberry Lucky Sundae",desc:"Es krim dengan selai strawberry dan topping kejutan",price:11000,image:"images/strawberry-lucky-sundae.jpg",emoji:"🍦"},
      {id:"mixue-6",name:"Strawberry Sundae",desc:"Es krim lembut dengan saus strawberry",price:11000,image:"images/strawberry-sundae.jpg",emoji:"🍦"},
      {id:"mixue-7",name:"Chocolate Cookies Sundae",desc:"Es krim dengan remahan cookies cokelat",price:11000,image:"images/chocolate-cookies-sundae.jpg",emoji:"🍦"},
      {id:"mixue-8",name:"Boba Sundae",desc:"Es krim dengan boba kenyal dan saus cokelat",price:11000,image:"images/boba-sundae.jpg",emoji:"🍦"},
      {id:"mixue-9",name:"Mango Sundae",desc:"Es krim dengan potongan dan sirup mangga",price:11000,image:"images/mango-sundae.jpg",emoji:"🍦"},
      {id:"mixue-10",name:"Creamy Blueberry",desc:"Minuman creamy blueberry yang segar",price:11000,image:"images/creamy-blueberry.jpg",emoji:"🧋"},
      {id:"mixue-11",name:"Milky Fruity Berry",desc:"Campuran strawberry dan susu dengan jelly",price:11000,image:"images/milky-fruity-berry.jpg",emoji:"🧋"},
      {id:"mixue-12",name:"Milky Fruity Kiwi",desc:"Campuran kiwi dan susu dengan jelly peach",price:11000,image:"images/milky-fruity-kiwi.jpg",emoji:"🧋"},
      {id:"mixue-13",name:"Blueberry Jasmine Tea",desc:"Teh melati dengan blueberry segar",price:11000,image:"images/blueberry-jasmine-tea.jpg",emoji:"🍹"},
      {id:"mixue-14",name:"Strawberry Peach Jasmine Tea",desc:"Teh melati dengan strawberry dan peach",price:11000,image:"images/strawberry-peach-jasmine-tea.jpg",emoji:"🍹"},
      {id:"mixue-15",name:"Peach Jasmine Tea",desc:"Teh melati wangi dengan irisan peach",price:11000,image:"images/peach-jasmine-tea.jpg",emoji:"🍹"},
      {id:"mixue-16",name:"Vitamin C Kiwi Tea",desc:"Teh kiwi segar dengan jelly kelapa",price:11000,image:"images/vitamin-c-kiwi-tea.jpg",emoji:"🍹"},
      {id:"mixue-17",name:"Latte",desc:"Espresso halus dengan susu creamy",price:11000,image:"images/latte.jpg",emoji:"☕"}
    ]
  }
];

const clone = o => JSON.parse(JSON.stringify(o));
const getResto = (city, id) => CITY_DATA[city].find(r => r.id === id);

CITIES.surabaya = {name:"Surabaya",emoji:"🍜",badge:"JASTIP SURABAYA",title:"Jajanan Surabaya<br>Siap Diantar.",text:"Pilih restoran favorit di Surabaya, pilih menu, checkout, lalu pesan via WhatsApp.",listTitle:"🍽️ Pilih Restoran Surabaya",listSub:"Daftar Resto Pilihan"};
CITIES.sidoarjo = {name:"Sidoarjo",emoji:"🍜",badge:"JASTIP SIDOARJO",title:"Jajanan Sidoarjo<br>Siap Diantar.",text:"Pilih restoran favorit di Sidoarjo, pilih menu, checkout, lalu pesan via WhatsApp.",listTitle:"🍽️ Pilih Restoran Sidoarjo",listSub:"Daftar Resto Pilihan"};

const SBY_GACOAN_PRICE = 13500;
const SBY_DIKICHI_DISKON = 1500;
const SBY_MIXUE_PRICE = 12000;

function buildSurabayaSidoarjo(){
  const gacoan = clone(getResto("malang","gacoan"));
  gacoan.products.forEach(p => p.price = SBY_GACOAN_PRICE);
  delete gacoan.notice;

  const dikichi = clone(getResto("malang","dikichi"));
  dikichi.products.forEach(p => p.price -= SBY_DIKICHI_DISKON);
  delete dikichi.notice;

  const mixue = clone(getResto("malang","mixue"));
  mixue.products.forEach(p => p.price = SBY_MIXUE_PRICE);
  delete mixue.notice;

  return [gacoan, dikichi, mixue];
}
CITY_DATA.surabaya = buildSurabayaSidoarjo();
CITY_DATA.sidoarjo = buildSurabayaSidoarjo();

const UDANG_RAMBUTAN_IMG = "https://huawei-food-cms.grab.com/compressed_avif/items/url-cc4355f4/photo/c3d192e5d1ccbdc9.avif";
Object.keys(CITY_DATA).forEach(city => {
  const g = getResto(city,"gacoan");
  if(!g) return;
  const item = {
    id:"gacoan-udang-rambutan",
    name:"Udang Rambutan",
    desc:"Udang berbalut adonan renyah, gurih dan cocok jadi pendamping mie",
    price:g.products[0].price,
    image:UDANG_RAMBUTAN_IMG,
    emoji:"🍤"
  };
  const i = g.products.findIndex(p => p.name === "Udang Keju");
  g.products.splice(i > -1 ? i + 1 : g.products.length, 0, item);
});

const MPR_DISKON = 7000;
const MPR_TAMBAHAN = {probolinggo:0, jember:0, malang:2000, surabaya:2000, sidoarjo:2000};
const MPR_MENU = [
 ["MPR Tipker Coklat", 8000, "Martabak tipis kering, renyah dan gurih", "images/mpr-tipker-coklat.webp"],
 ["MPR Tipker Coklat Kacang", 8000, "1 Pcs Martabak Tipis Kering Coklat Kacang", "images/mpr-tipker-coklat-kacang.webp"],
 ["MPR Tipker Kacang", 8000, "1 Pcs Martabak Tipis Kering Kacang", "images/mpr-tipker-kacang.webp"],
 ["Martabak Tipker Sultan Cokelat Kacang Wijen", 8000, "Martabak tipis kering, renyah dan gurih", ""],
 ["MPR Tipker Cokelat Keju Kacang", 9000, "Martabak tipis kering, renyah dan gurih", "images/mpr-tipker-cokelat-keju-kacang.webp"],
 ["Martabak Tipker Sultan Keju", 10000, "Martabak tipis kering, renyah dan gurih", ""],
 ["Tipker CKW (Double Toping)", 10000, "Martabak tipis kering, renyah dan gurih", ""],
 ["MPR Tipker Keju", 11000, "1 Pcs Martabak Tipis Kering Keju", "images/mpr-tipker-keju.webp"],
 ["MPR Tipker Peanut Butter", 11000, "1 Pcs Martabak Tipis Skippy", "images/mpr-tipker-peanut-butter.webp"],
 ["MPR Tipker Peanut Butter Kacang", 11000, "1 Pcs Martabak Tipis Skippy Kacang", "images/mpr-tipker-peanut-butter-kacang.webp"],
 ["MPR Tipker Cokelat Keju", 12000, "1 Pcs Martabak Tipis Coklat Keju", "images/mpr-tipker-cokelat-keju.webp"],
 ["Martabak Pandan Cokelat", 12000, "Martabak manis mini, empuk dan legit", ""],
 ["MPR Tipker Keju Kacang", 13000, "1 Pcs Martabak Tipis Keju Kacang", "images/mpr-tipker-keju-kacang.webp"],
 ["MPR Tipker Peanut Butter Keju Coklat", 13000, "1 Pcs Martabak Tipis Skippy Keju Coklat", "images/mpr-tipker-peanut-butter-keju-coklat.webp"],
 ["Martabak Pandan Keju", 13000, "Martabak manis mini, empuk dan legit", ""],
 ["MPR Manis Coklat Kacang Susu", 14000, "1 Pcs Martabak Manis Mini Coklat Kacang Susu", "images/mpr-manis-coklat-kacang-susu.webp"],
 ["MPR Manis Coklat Susu", 14000, "1 Pcs Martabak Manis Mini Coklat Susu", "images/mpr-manis-coklat-susu.webp"],
 ["MPR Manis Kacang Susu", 14000, "1 Pcs Martabak Manis Mini Kacang Susu", "images/mpr-manis-kacang-susu.webp"],
 ["Martabak Mini Sultan Cokelat Kacang Wijen", 15000, "Martabak mini sultan, tebal dan mengenyangkan", ""],
 ["MPR Manis Keju Susu", 15500, "1 Pcs Martabak Manis Mini Keju Susu", "images/mpr-manis-keju-susu.webp"],
 ["Martabak Mini Sultan Pandan Coklat Kacang Wijen", 16000, "Martabak mini sultan, tebal dan mengenyangkan", ""],
 ["MPR Manis Coklat Keju Susu", 17000, "1 Pcs Martabak Manis Mini Coklat Keju Susu", "images/mpr-manis-coklat-keju-susu.webp"],
 ["MPR Manis Peanut Butter", 17000, "1 Pcs Martabak Manis Mini Skippy", "images/mpr-manis-peanut-butter.webp"],
 ["Martabak Mini Sultan Keju", 17000, "Martabak mini sultan, tebal dan mengenyangkan", ""],
 ["MPR Manis Choco Crunchy", 18000, "1 Pcs Martabak Manis Mini Choco Crunchy", "images/mpr-manis-choco-crunchy.webp"],
 ["MPR Manis Peanut Butter Coklat", 18000, "1 Pcs Martabak Manis Mini Skippy Coklat", "images/mpr-manis-peanut-butter-coklat.webp"],
 ["MPR Manis Peanut Butter Coklat Keju", 18000, "1 Pcs Martabak Manis Mini Skippy Coklat Keju", "images/mpr-manis-peanut-butter-coklat-keju.webp"],
 ["MPR Manis Peanut Butter Keju", 18000, "1 Pcs Martabak Manis Mini Skippy Keju", "images/mpr-manis-peanut-butter-keju.webp"],
 ["Martabak Mini Sultan Pandan Keju", 18000, "Martabak mini sultan, tebal dan mengenyangkan", ""],
 ["MPR Manis Choco Crunchy Keju", 19500, "1 Pcs Martabak Manis Mini Choco Crunchy Keju", "images/mpr-manis-choco-crunchy-keju.webp"]
];

Object.keys(CITY_DATA).forEach(city => {
  const extra = MPR_TAMBAHAN[city] || 0;
  CITY_DATA[city].push({
    id:"mpr",
    name:"Martabak MPR",
    logo:"images/mpr-manis-coklat-keju-susu.webp",
    banner:"",
    emoji:"🥞",
    products: MPR_MENU.map((m,i) => {
      let finalPrice;
      if (m[0].toLowerCase().includes("tipker")) {
        finalPrice = 7000 + extra;
      } else {
        finalPrice = m[1] - MPR_DISKON + extra;
      }
      return {
        id:"mpr-"+(i+1), name:m[0], desc:m[2],
        price: finalPrice,
        image:m[3], emoji:"🥞"
      };
    })
  });
});
