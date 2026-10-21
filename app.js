(function() {
  const WORKER_URL = "https://jastip.bachtiarrhasann.workers.dev";
  if (!WORKER_URL) return;

  let countdownInterval = null;

  function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  }

  function applyStoreStatus() {
    if (sessionStorage.getItem('force_preorder') === 'true') return;

    fetch(WORKER_URL + '/status?t=' + Date.now())
      .then(function(res) { return res.json(); })
      .then(function(data) {
        let overlay = document.getElementById('store-closed-overlay');

        if (data && data.isOpen === false) {
          if (!overlay) {
            overlay = document.createElement('div');
            overlay.id = 'store-closed-overlay';
            
            overlay.style.cssText = `
              position: fixed !important;
              top: 0 !important;
              left: 0 !important;
              width: 100vw !important;
              height: 100vh !important;
              background-color: #f7f7f8 !important;
              z-index: 2147483647 !important;
              display: flex !important;
              flex-direction: column !important;
              align-items: center !important;
              justify-content: center !important;
              padding: 20px !important;
              text-align: center !important;
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
              color: #171717 !important;
              box-sizing: border-box !important;
            `;

            let title = "MAAF, JASTIP SEDANG TUTUP";
            let desc = "Toko kami sedang libur atau tutup sementara. Tapi kamu tetap bisa membuat pesanan Pre-Order untuk nanti!";
            let timerHTML = "";

            if (data.status === "antri" && data.remainingSeconds > 0) {
              title = "SISTEM ANTREAN DIBUKA";
              desc = "Antrian panjang. Mohon tunggu sejenak";
              timerHTML = `<div id="antri-timer" style="font-size:36px; font-weight:900; color:#e11d48; margin:10px 0 20px 0; background:#ffe4e6; padding:10px 24px; border-radius:16px; border:2px dashed #f43f5e;">⏳ ${formatTime(data.remainingSeconds)}</div>`;
            }

            overlay.innerHTML = `
              <div style="font-size:64px; line-height:1; margin-bottom:16px;">🛑</div>
              <h1 style="font-size:24px; font-weight:800; margin:0 0 12px 0; color:#171717; line-height:1.2;">${title}</h1>
              <p style="color:#666; font-size:14px; max-width:380px; line-height:1.5; margin:0 0 18px 0;">${desc}</p>
              ${timerHTML}
              
              <button onclick="bukaPreOrderOverlay()" style="border:none; background:#f97316; color:#fff; text-decoration:none; padding:14px 28px; border-radius:999px; font-weight:800; font-size:15px; margin-bottom:12px; cursor:pointer; box-shadow:0 4px 12px rgba(249,115,22,0.3);">
                🛒 Buat Pesanan Pre-Order Sekarang
              </button>

              <a href="https://chat.whatsapp.com/BmMIhjI3diz8nRRt0znuZQ?s=cl&p=a&mlu=4&ilr=4" target="_blank" style="display:inline-flex; align-items:center; gap:8px; background:#25D366; color:#fff; text-decoration:none; padding:12px 24px; border-radius:999px; font-weight:700; font-size:14px; margin-bottom:12px; box-shadow:0 4px 12px rgba(37,211,102,0.3);">
                💬 Masuk Group untuk Info Lebih Lanjut
              </a>
              <div>
                <button onclick="location.reload()" style="border:none; background:transparent; color:#666; text-decoration:underline; padding:8px 16px; font-weight:600; font-size:13px; cursor:pointer;">🔄 Coba Segarkan Halaman</button>
              </div>
            `;

            document.body.appendChild(overlay);
            document.body.style.overflow = 'hidden';

            if (data.status === "antri" && data.remainingSeconds > 0) {
              let secLeft = data.remainingSeconds;
              if (countdownInterval) clearInterval(countdownInterval);
              
              countdownInterval = setInterval(() => {
                secLeft--;
                const timerElem = document.getElementById('antri-timer');
                if (timerElem) {
                  if (secLeft <= 0) {
                    clearInterval(countdownInterval);
                    location.reload();
                  } else {
                    timerElem.innerText = `⏳ ${formatTime(secLeft)}`;
                  }
                }
              }, 1000);
            }
          }
        } else {
          if (overlay) {
            overlay.remove();
            document.body.style.overflow = '';
          }
          if (countdownInterval) clearInterval(countdownInterval);
        }
      })
      .catch(function(err) {
        console.log("Gagal cek status:", err);
      });
  }

  window.bukaPreOrderOverlay = function() {
    sessionStorage.setItem('force_preorder', 'true');
    let overlay = document.getElementById('store-closed-overlay');
    if (overlay) overlay.remove();
    document.body.style.overflow = '';
    if (countdownInterval) clearInterval(countdownInterval);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyStoreStatus);
  } else {
    applyStoreStatus();
  }

  setInterval(applyStoreStatus, 10000);
})();

const STORE_WA = "6289612490808";

let RESTAURANTS = [], products = [], currentCity = "";
let cart = {}, locationLink = "", plusCode = "";

const rupiah = n => new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0
}).format(n);

function optLabel(p, v) {
  if (!v) return "";
  return p.levels ? ` (Level ${v})` : ` (${v})`;
}

function imageOrEmoji(src, emoji) {
  return src
    ? `<img loading="lazy" decoding="async" src="${src}" alt="" onerror="this.style.display='none';this.parentElement.insertAdjacentHTML('beforeend','<span>${emoji}</span>')">`
    : emoji;
}

function render() {
  const el = document.getElementById("products");

  el.innerHTML = RESTAURANTS.map(r => `
    <section class="restaurantSection">

      <div class="restaurantHeader">
        <div class="restaurantIcon">
          ${imageOrEmoji(r.logo, r.emoji)}
        </div>
        <div>
          <h2>${r.name}</h2>
          <span>${r.products.length} pilihan menu</span>
        </div>
      </div>

      ${r.notice ? `<div class="restoNotice">${r.notice}</div>` : ""}

      ${r.banner ? `
        <img class="restaurantBanner"
             src="${r.banner}"
             alt="${r.name}"
             onerror="this.style.display='none'">
      ` : ""}

      <div class="grid">
        ${r.products.map(p => `
          <div class="card">

            <div class="photo">
              ${imageOrEmoji(p.image, p.emoji)}
            </div>

            <div class="body">
              <h3>${p.name}</h3>
              <div class="desc">${p.desc}</div>
              <div class="price">${rupiah(p.price)}</div>${(p.levels || p.variants) ? `
                <div class="field" style="margin:10px 0">
                  <label style="font-size:13px">${p.levels ? "Pilih Level Pedas" : "Pilih Varian"}</label>
                  <select id="level-${p.id}" style="width:100%;padding:11px;border:1px solid #ddd;border-radius:12px;font:inherit">
                    ${p.levels
                      ? p.levels.map(l => `<option value="${l}">Level ${l}</option>`).join("")
                      : p.variants.map(v => `<option value="${v}">${v}</option>`).join("")}
                  </select>
                </div>
              ` : ""}
              <button class="add" onclick="add('${p.id}'${(p.levels || p.variants) ? `,document.getElementById('level-${p.id}').value` : ""})">
                + Tambah
              </button>
            </div>

          </div>
        `).join("")}
      </div>

    </section>
  `).join("");

  updateCart();
}

function add(id, level = "") {
  const key = level ? `${id}|${level}` : id;
  cart[key] = (cart[key] || 0) + 1;
  updateCart();
  const p = products.find(x => x.id === id);
  showToast(`${p ? p.name : "Menu"}${optLabel(p, level)} ditambahkan ✓`);
}

function showToast(message) {
  const t = document.getElementById("toast");
  t.textContent = message;
  t.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => t.classList.remove("show"), 1800);
}

function changeQty(key, delta) {
  cart[key] = (cart[key] || 0) + delta;
  if (cart[key] <= 0) delete cart[key];
  updateCart();
  openCheckout();
}

function removeItem(key) {
  delete cart[key];
  updateCart();
  if (getCartItems().length) openCheckout();
  else closeCheckout();
}

function updateCart() {
  let count = 0, total = 0;

  Object.entries(cart).forEach(([key, qty]) => {
    if (!qty) return;
    const [id] = key.split("|");
    const p = products.find(x => x.id === id);
    if (p) { count += qty; total += qty * p.price; }
  });

  document.getElementById("count").textContent = count;
  document.getElementById("bottomCount").textContent = count + " item";
  document.getElementById("bottomTotal").textContent = rupiah(total);
}

function getCartItems() {
  return Object.entries(cart).filter(([, qty]) => qty).map(([key, qty]) => {
    const [id, level] = key.split("|");
    const p = products.find(x => x.id === id);
    return { p, level, qty };
  }).filter(x => x.p);
}

function openCheckout() {
  const items = getCartItems();
  if (!items.length) {
    alert("Keranjang masih kosong.");
    return;
  }

  // Tampilkan/Sembunyikan kolom Pre-Order berdasarkan status toko
  const preorderField = document.getElementById("preorderField");
  const isPreorder = sessionStorage.getItem("force_preorder") === "true";
  
  if (preorderField) {
    preorderField.style.display = isPreorder ? "block" : "none";
  }

  const lines = items.map(({ p, level, qty }) => {
    const key = level ? `${p.id}|${level}` : p.id;
    return `
      <div class="orderLine" style="align-items:center">
        <span>${p.name}${optLabel(p, level)}</span>
        <b>${rupiah(p.price * qty)}</b>
      </div>
      <div class="editRow">
        <button class="qtyBtn" onclick="changeQty('${key}',-1)">−</button>
        <b>${qty}</b>
        <button class="qtyBtn" onclick="changeQty('${key}',1)">+</button>
        <button class="removeBtn" onclick="removeItem('${key}')">Hapus</button>
      </div>
    `;
  }).join("");

  const total = items.reduce((s, { p, qty }) => s + qty * p.price, 0);

  document.getElementById("orderBox").innerHTML = `
    <div class="order">
      ${lines}
      <div class="total">Total: ${rupiah(total)}</div>
    </div>
  `;

  document.getElementById("modal").classList.add("show");
}

function closeCheckout() {
  document.getElementById("modal").classList.remove("show");
}

function toPlusCode(lat, lng) {
  const A = "23456789CFGHJMPQRVWX";
  lat = Math.min(Math.max(lat, -90), 90) + 90;
  lng = ((lng + 180) % 360 + 360) % 360;
  if (lat >= 180) lat = 180 - 1 / 16000;
  let la = Math.floor(Math.round(lat * 8000 * 1e6) / 1e6);
  let lo = Math.floor(Math.round(lng * 8000 * 1e6) / 1e6);
  let pairs = [];
  for (let i = 0; i < 5; i++) {
    pairs.unshift(A[la % 20] + A[lo % 20]);
    la = Math.floor(la / 20); lo = Math.floor(lo / 20);
  }
  const c = pairs.join("");
  return c.slice(0, 8) + "+" + c.slice(8);
}

function getLocation() {
  const s = document.getElementById("locStatus");

  if (!navigator.geolocation) {
    s.textContent = "Browser tidak mendukung GPS.";
    return;
  }

  s.textContent = "Meminta izin lokasi...";

  navigator.geolocation.getCurrentPosition(
    pos => {
      const latitude = pos.coords.latitude;
      const longitude = pos.coords.longitude;

      locationLink = `https://www.google.com/maps?q=${latitude},${longitude}`;
      plusCode = toPlusCode(latitude, longitude);

      s.textContent = "✅ Lokasi berhasil diambil. Plus Code: " + plusCode;
    },
    () => {
      s.textContent = "❌ Lokasi tidak bisa diambil. Aktifkan izin lokasi browser.";
    },
    {
      enableHighAccuracy: true,
      timeout: 10000
    }
  );
}

function normPhone(raw){
  let d = (raw || "").replace(/[^\d]/g, "");
  if(d.startsWith("620")) d = "62" + d.slice(3);
  else if(d.startsWith("0")) d = "62" + d.slice(1);
  else if(d.startsWith("8")) d = "62" + d;
  return /^62\d{9,13}$/.test(d) ? d : null;
}
function fmtPhone(n){
  return "+62 " + n.slice(2).replace(/^(\d{3})(\d{4})(\d+)$/, "$1-$2-$3");
}
function phoneHint(){
  const raw = document.getElementById("phone").value.trim();
  const st = document.getElementById("phoneStatus");
  if(!raw){ st.textContent = ""; return; }
  const n = normPhone(raw);
  st.style.color = n ? "#15803d" : "#b91c1c";
  st.textContent = n ? "✅ " + fmtPhone(n) : "❌ Nomor belum valid. Contoh: 0812xxxxxxxx";
}
function cekNomor(){
  const n = normPhone(document.getElementById("phone").value);
  const st = document.getElementById("phoneStatus");
  if(!n){
    st.style.color = "#b91c1c";
    st.textContent = "❌ Nomor belum valid. Contoh: 0812xxxxxxxx";
    return;
  }
  st.style.color = "#15803d";
  st.textContent = "✅ " + fmtPhone(n) + " · WhatsApp dibuka, pastikan chat bisa terbuka (jika muncul peringatan, nomor belum terdaftar)";
  window.open("https://wa.me/" + n, "_blank");
}

function sendWhatsApp(){
  const isPreorder = sessionStorage.getItem("force_preorder") === "true";
  const orderTime = isPreorder ? document.getElementById("orderTime").value : "Langsung Diproses (Toko Buka)";
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const landmark = document.getElementById("landmark").value.trim();

  if(!name || !phone){
    alert("Nama dan nomor WhatsApp wajib diisi.");
    return;
  }

  const phoneN = normPhone(phone);
  if(!phoneN){
    alert("Nomor WhatsApp belum valid. Contoh: 0812xxxxxxxx");
    return;
  }
  if(!confirm("Nomor WhatsApp kamu: " + fmtPhone(phoneN) + "\n\nSudah benar?")) return;

  const items = getCartItems();
  let total = 0;
  let message = "*PESANAN JASTIP " + CITIES[currentCity].name.toUpperCase() + "*\n\n";

  RESTAURANTS.forEach(r => {
    const group = items.filter(({p}) => r.products.includes(p));
    if(!group.length) return;
    let subtotal = 0;
    message += `🍽️ *${r.name.toUpperCase()}*\n`;
    group.forEach(({p, level, qty}) => {
      const sub = p.price * qty;
      subtotal += sub;
      message += `• ${p.name}${optLabel(p, level)} × ${qty} = ${rupiah(sub)}\n`;
    });
    message += `_Subtotal: ${rupiah(subtotal)}_\n\n`;
    total += subtotal;
  });

  message += `*Total:* ${rupiah(total)}\n`;
  
  // Hanya tampilkan baris jadwal kirim jika Pre-Order
  if (isPreorder) {
    message += `⏰ *Jadwal Pre-Order Kirim:* ${orderTime}\n`;
  } else {
    message += `⚡ *Tipe Pesanan:* Kirim Langsung (Toko Buka)\n`;
  }
  
  message += `📢 *AKAN SAYA KABARI JIKA ADA ONGKIR TAMBAHAN*\n\n`;
  message += plusCode ? `📍 *Plus Code Google Maps:* ${plusCode}\n` : `📍 *Plus Code Google Maps:* Lokasi belum dibagikan\n`;
  if(locationLink) message += `🔗 *Link Maps:* ${locationLink}\n`;
  message += `\n👤 *Nama:* ${name}\n` +
    `📞 *WhatsApp:* ${fmtPhone(phoneN)}\n` +
    `🏠 *Ancer-ancer:* ${landmark || "-"}\n\n` +
    `🙏 *Untuk driver:* mohon hubungi saya lewat *chat WhatsApp* di nomor di atas ya saat sudah dekat/sampai atau jika ada kendala. Terima kasih banyak, om 🙏`;

  message = encodeURIComponent(message);

  window.open(
    `https://wa.me/${STORE_WA}?text=${message}`,
    "_blank"
  );
}

function setCity(k, silent){
  if(!CITIES[k]) k = "probolinggo";
  if(!silent && currentCity && currentCity !== k && Object.keys(cart).length){
    if(!confirm("Keranjang akan dikosongkan karena pindah kota. Lanjutkan?")) return false;
  }
  if(currentCity !== k){ cart = {}; }
  currentCity = k;
  RESTAURANTS = CITY_DATA[k];
  products = RESTAURANTS.flatMap(r => r.products);
  const c = CITIES[k], $= id => document.getElementById(id);$("cityName").textContent = c.name;
  $("heroBadge").textContent = c.badge;
  $("heroTitle").innerHTML = c.title;
  $("heroText").textContent = c.text;
  $("heroEmoji").textContent = c.emoji;
  $("cityLink").textContent = "📍 Kota: " + c.name + " · Ganti kota";
  $("listTitle").textContent = c.listTitle;
  $("listSub").textContent = c.listSub;
  document.title = "JASTIP BAHCTIAR - " + c.name;
  document.querySelectorAll("[data-city]").forEach(a => a.classList.toggle("active", a.dataset.city === k));
  const q = $("q"); if(q) q.value = "";
  render();
  updateCart();
  return true;
}

function pilihKota(k){
  if(!setCity(k)) return;
  try{ sessionStorage.setItem("kota", k); }catch(e){}
  document.getElementById("kotaOverlay").classList.remove("show");
  document.body.classList.remove("locked");
  try{ history.replaceState(null, "", "index.html#" + k); }catch(e){}
  window.scrollTo(0, 0);
}

function bukaPilihKota(){
  document.getElementById("kotaOverlay").classList.add("show");
  document.body.classList.add("locked");
}

(function(){
  var ov=document.getElementById('kotaOverlay');
  var qs=new URLSearchParams(location.search), s=null;
  try{s=sessionStorage.getItem('kota')}catch(e){}
  var k=(qs.get('kota')||location.hash.replace('#','')||s||'').toLowerCase();
  if(['probolinggo','malang','jember','surabaya','sidoarjo'].indexOf(k)>-1 && !qs.has('pilih')){
    window.__kota=k; ov.classList.remove('show');
    try{sessionStorage.setItem('kota',k)}catch(e){}
  } else { window.__kota=(['probolinggo','malang','jember','surabaya','sidoarjo'].indexOf(k)>-1?k:'probolinggo'); document.body.classList.add('locked'); }
})();

setCity(window.__kota || "probolinggo", true);

(function(){
  var box=document.getElementById('products'),q=document.getElementById('q'),chips=document.getElementById('chips'),empty=document.getElementById('empty'),busy=false;
  try{document.getElementById('footWa').href='https://wa.me/'+STORE_WA}catch(e){}
  document.getElementById('yr').textContent=new Date().getFullYear();
  function norm(t){return (t||'').toLowerCase()}
  function apply(){
    var k=norm(q.value).trim(),shown=0;
    document.querySelectorAll('.restaurantSection').forEach(function(sec){
      var rn=norm(sec.querySelector('h2')&&sec.querySelector('h2').textContent),hit=0;
      sec.querySelectorAll('.card').forEach(function(c){
        var ok=!k||rn.indexOf(k)>-1||norm(c.textContent).indexOf(k)>-1;
        c.style.display=ok?'':'none'; if(ok)hit++;
      });
      sec.style.display=hit?'':'none'; shown+=hit;
    });
    empty.classList.toggle('show',!shown);
  }
  function build(){
    chips.innerHTML='';
    document.querySelectorAll('.restaurantSection').forEach(function(sec,i){
      sec.id='resto-'+i;
      var b=document.createElement('button');b.className='chip';b.type='button';
      b.textContent=sec.querySelector('h2').textContent.trim();
      b.onclick=function(){q.value='';apply();sec.scrollIntoView({behavior:'smooth'})};
      chips.appendChild(b);
    });
  }
  q.addEventListener('input',apply);
  new MutationObserver(function(){ if(busy)return; busy=true; setTimeout(function(){build();apply();busy=false},0) }).observe(box,{childList:true});
  build();apply();
})();

function toggleCityMenu(e,forceClose){
  var p=document.getElementById('cityPick');
  if(forceClose){ p.classList.remove('open'); if(e) e.preventDefault(); return; }
  e.stopPropagation(); p.classList.toggle('open');
}
document.addEventListener('click',function(e){
  var p=document.getElementById('cityPick');
  if(p && !p.contains(e.target)) p.classList.remove('open');
});
