const RATE = 1.95583;

const menuData = {
  "Основно меню": {
    "Салати": [
      { name: "Шопска салата", desc: "домати, краставици, пресен лук, чушка, маслини, сирене", price: 4.99 },
      { name: "Гръцка салата", desc: "домати, краставици, грилована маслина, червен лук, зелена чушка, сирене, зехтин, риган", price: 5.99 },
      { name: "Цезар с хрупкави скариди", desc: "букет от листни салати, Цезар дресинг, хрупкави скариди, чери домати, крутони и пармезан", price: 8.49 },
      { name: "Салата Капрезе", desc: "зрял домат, биволска моцарела и песто Дженовезе", price: 7.99 },
      { name: "Селска салата", desc: "зрели домати с печена чушка, мус от катък и магданоз", price: 7.49 },
      { name: "Салата Гладни О'чи", desc: "букет от листни салати, овкусени с медено горчичен дресинг, малинов винегрет, чери домати, бейби моцарела, Прошуто Крудо, синьо сирене, зелена ябълка и орех", price: 9.49 },
      { name: "Салата Спанак с киноа", desc: "Шарена киноа, спанак, домати, печен пипер, яйце, сирене и горчичен дресинг", price: 7.49 }
    ],

    "Брускети": [
      { name: "Брускети с чери домати,моцарела и домашно песто", desc: "", price: 6.49 },
      { name: "Брускети с Филаделфия и Прошуто Крудо", desc: "", price: 6.49 }
    ],

    "Стартери": [
      { name: "Домашни пържени картофи", desc: "", price: 2.99 },
      { name: "Домашен картофен чипс с трюфелова майонеза", desc: "", price: 3.99 },
      { name: "Панирани възглавнички от топено сирене с боровинково сладко", desc: "", price: 5.49 },
      { name: "Панко пилешки филенца с млечен сос", desc: "", price: 6.99 },
      { name: "Кентъки пилешки крилца с азиатско чили", desc: "", price: 6.99 },
      { name: "Телешки език в билково масло и чесън", desc: "", price: 8.99 },
      { name: "Кралски скариди в масло и бяло вино с лимонова коричка и чеснова паста", desc: "", price: 10.99 },
      { name: "Домашни Трио Разядки", desc: "Тирокафтери, Катък и Кьопоолу с домашно хлебче", price: 7.99 },
      { name: "Пилешки сърчица в масло", desc: "", price: 7.49 },
      { name: "Пилешки дробчета по селски", desc: "", price: 6.99 }
    ],

    "Класическа Италианска паста": [
      { name: "Спагети Карбонара", desc: "прясна паста, панчета, жълтък, пармиджано", price: 7.49 },
      { name: "Спагети Болонезе", desc: "лук, моркови, мляно месо, доматен сос, пармиджано", price: 6.90 },
      { name: "Талиатели със скариди и чери домати", desc: "скариди, сметана, чери домати, доматен сос, пармиджано", price: 8.49 },
      { name: "Пене с пилешко филе и четири сирена", desc: "пилешко филе, сметана, чедър, ементал, синьо сирене и пармиджано", price: 8.49 }
    ],

    "Ризото": [
      { name: "Ризото с манатарки и трюфел", desc: "ориз \"Карнароли\", манатарки, черен трюфел, вино, лук, магданоз, пармиджано, масло", price: 8.49 },
      { name: "Ризото с кралски скариди", desc: "ориз \"Карнароли\",кралски скариди, доматен сос, пармиджано, масло, лук, чесън", price: 8.99 }
    ],

    "Основни ястия": [
      { name: "Сочни свински скалопини", desc: "скалопини от свинско бон филе с манатарки, картофено пюре, сос братен джус и чипс от пармиджано", price: 9.49 },
      { name: "Телешки Чийзбургер", desc: "питка бриош, BBQ сос, яйце, чътни от краставичка, карамелизиран лук, чедър, пържени картофки", price: 8.99 },
      { name: "Пилешки Чийзбургер", desc: "питка бриош, бургер сос, чедър, домат, зелена салата, пържени картофки", price: 7.99 },
      { name: "Бургер с дърпано свинско и чедър", desc: "питка бриош, BBQ сос, чедър, карамелизиран лук, зелена салата, пържени картофки", price: 8.49 },
      { name: "Хрупкав Пилешки шницел", desc: "микс свежи салати с цитрусов винегрет,чери домати, пържени картофи", price: 7.99 },
      { name: "Свинско Джоланче (Су вид)", desc: "сотирани картофки, BBQ сос, хрупкав лук", price: 13.49 },
      { name: "Пилешко Филе с броколи и сос Четири сирена", desc: "пилешко филе, броколи, чедър, ементал, пармиджано, синьо сирене, сметана", price: 8.49 },
      { name: "Специалитет Гладни О'чи", desc: "Датски котлет на грил, печени картофи със зелен лук и BBQ сос", price: 12.49 },
      { name: "Хайдушки Калпак", desc: "свинско месо, гъби, лук,зелена люта чушка, кашкавал, свежи подправки", price: 8.49 },
      { name: "Дърпано свинско месце", desc: "върху канапе от пухкаво картофено пюре и сос Братенджус", price: 8.49 },
      { name: "Сьомга Чимичури", desc: "сьомга филе със сос чимичури върху канапе от бейби спанак", price: 10.49 },
      { name: "Вегетариански кюфтенца", desc: "кюфтенца от киноа, рукола, чери домати, млечен сос", price: 7.49 },
      { name: "Пиле терияки", desc: "пилешки късчета върху канапе от ориз, сос терияки и сусам", price: 7.99 },
      { name: "Пиле Капрезе с домашно песто", desc: "пилешко роле, сушен домат, моцарела, гриловани зеленчуци", price: 8.99 },
      { name: "Пъстърва от грила", desc: "", price: 6.99 },
      { name: "Лаврак от грила", desc: "", price: 7.99 }
    ],

    "Грил/BBQ": [
      { name: "Порция кюфтета/кебапчета 3бр.", desc: "микс зелени салати, лютеница, пържени картофи", price: 6.10 },
      { name: "Пилешко филе", desc: "", price: 5.00 },
      { name: "Свинска вратна пържола", desc: "", price: 6.00 },
      { name: "Болярска дъска с меса", desc: "пил.филе, св.вратна пържола, 3бр. кюфтета, 3бр. кебапчета, св.бон филенца, печурки, дом.лютеница, жарени картофи", price: 24.99 }
    ],

    "Добавки": [
      { name: "Микс свежи салати с чери домати", desc: "", price: 1.80 },
      { name: "Домати и краставици", desc: "", price: 1.80 },
      { name: "Сотирани картофки", desc: "", price: 1.80 },
      { name: "Домашна Лютеница", desc: "", price: 1.10 }
    ],

    "Домашни хлебчета": [
      { name: "Селска питка", desc: "", price: 1.60 },
      { name: "Домашно хлебче", desc: "чесново или с подправки", price: 1.70 },
      { name: "Домашна фокача", desc: "", price: 2.60 }
    ],

    "Десерти": [
      { name: "Шоколадов мус с маскарпоне", desc: "", price: 3.32 },
      { name: "Торта Рафаело", desc: "", price: 4.35 },
      { name: "Шоколадово Суфле с топка сладолед", desc: "", price: 3.84 },
      { name: "Торта Бискотино", desc: "", price: 3.58 }
    ]
  },

  "Напитки": {
    "☕ Топли напитки": [
      { name: "Кафе Kimbo", desc: "60 мл", price: 1.00 },
      { name: "Капучино", desc: "180 мл", price: 1.60 },
      { name: "Лате", desc: "180 мл", price: 1.60 },
      { name: "Топъл шоколад", desc: "180 мл", price: 1.60 },
      { name: "Чай", desc: "200 мл", price: 0.80 }
    ],

    "🧃 Безалкохолни напитки": [
      { name: "Кока Кола", desc: "250 мл", price: 1.60 },
      { name: "Фанта", desc: "250 мл", price: 1.60 },
      { name: "Спрайт", desc: "250 мл", price: 1.60 },
      { name: "Тоник", desc: "250 мл", price: 1.60 },
      { name: "Тоник розов", desc: "250 мл", price: 1.60 },
      { name: "Сода", desc: "250 мл", price: 1.40 },
      { name: "Минерална вода", desc: "330 мл", price: 1.20 },
      { name: "Минерална вода", desc: "750 мл", price: 2.10 },
      { name: "Натурален сок BBB", desc: "250 мл", price: 1.60 },
      { name: "Студен чай", desc: "250 мл", price: 1.60 },
      { name: "Фрапе", desc: "400 мл", price: 2.10 },
      { name: "Фрапе с вкус", desc: "400 мл", price: 2.50 }
    ],

    "🥃 Уиски – Шотландско": [
      { name: "Гленфидих 12 г.", desc: "50 мл", price: 7.20 },
      { name: "Макалън 12 г.", desc: "50 мл", price: 9.50 },
      { name: "Джони Уокър Блек", desc: "50 мл", price: 3.70 },
      { name: "Джони Уокър Ред", desc: "50 мл", price: 2.70 },
      { name: "Чивас", desc: "50 мл", price: 4.20 },
      { name: "Джи Би", desc: "50 мл", price: 2.80 }
    ],

    "🥃 Уиски – Ирландско": [
      { name: "Блек Буш", desc: "50 мл", price: 4.30 },
      { name: "Джеймисън", desc: "50 мл", price: 3.20 },
      { name: "Бушмилс", desc: "50 мл", price: 3.00 },
      { name: "Тюламор Дю", desc: "50 мл", price: 3.20 }
    ],

    "🥃 Уиски – Тенеси": [
      { name: "Джак Даниелс", desc: "50 мл", price: 3.50 },
      { name: "Джентълмен Джак", desc: "50 мл", price: 4.50 }
    ],

    "🥃 Бърбън": [
      { name: "Джим Бийм", desc: "50 мл", price: 2.80 }
    ],

    "🍸 Водка": [
      { name: "Белуга", desc: "50 мл", price: 7.30 },
      { name: "Грей Гус", desc: "50 мл", price: 7.30 },
      { name: "Абсолют", desc: "50 мл", price: 2.40 },
      { name: "Савой Клуб", desc: "50 мл", price: 2.00 },
      { name: "Руски Стандарт", desc: "50 мл", price: 3.00 }
    ],

    "🍸 Джин": [
      { name: "Бифитър Пинк", desc: "50 мл", price: 2.40 },
      { name: "Бифитър Класик", desc: "50 мл", price: 2.40 },
      { name: "Гордънс Класик", desc: "50 мл", price: 2.40 },
      { name: "Гордънс Пинк", desc: "50 мл", price: 2.40 }
    ],

    "🍇 Ракия": [
      { name: "Бургас 63", desc: "50 мл", price: 2.40 },
      { name: "Бургас Барел 63", desc: "50 мл", price: 2.90 },
      { name: "Бургаска Мускатова", desc: "50 мл", price: 2.50 },
      { name: "Троянска Сливова 3г.", desc: "50 мл", price: 2.20 },
      { name: "Лозова Тиквеш Жълта", desc: "50 мл", price: 2.20 },
      { name: "Сръбска Дюлева", desc: "50 мл", price: 2.60 },
      { name: "Жестока Земунска", desc: "50 мл", price: 2.60 },
      { name: "Братя Минкови", desc: "50 мл", price: 2.40 }
    ],

    "🍶 Узо": [
      { name: "Пломари Узо", desc: "50 мл", price: 2.10 },
      { name: "Пломари Узо", desc: "200 мл", price: 6.80 },
      { name: "Барбаяни Зелен Етикет", desc: "200 мл", price: 7.80 },
      { name: "Номер 12", desc: "50 мл", price: 2.10 },
      { name: "Матарали", desc: "50 мл", price: 2.60 },
      { name: "Матарали", desc: "200 мл", price: 8.80 }
    ],

    "🌵 Текила": [
      { name: "Хосе Куерво Златна", desc: "25 мл", price: 2.60 },
      { name: "Хосе Куерво Силвър", desc: "25 мл", price: 2.60 }
    ],

    "🍹 Ликьор": [
      { name: "Бейлис Ликьор", desc: "50 мл", price: 2.40 },
      { name: "Лимончело Капри", desc: "50 мл", price: 1.80 },
      { name: "Аперол Шприц", desc: "300 мл", price: 5.20 }
    ],

    "🍾 Ром": [
      { name: "Бакарди Бял", desc: "50 мл", price: 2.10 }
    ]
  }
};

const tabs = document.getElementById("tabs");
const mobile = document.getElementById("mobileCategory");
const content = document.getElementById("menuContent");

function formatPrices(eur) {
  if (eur === null || eur === undefined) return `<span class="price">Цена: по запитване</span>`;
  const lv = (eur * RATE).toFixed(2);
  return `<span class="price">${eur.toFixed(2)} € / ${lv} лв</span>`;
}

function escapeHtml(s) {
  return (s || "").replace(/[&<>"']/g, c => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
  }[c]));
}

// Рендер на цял раздел (Основно меню / Напитки) с вътрешни категории
function render(sectionName) {
  content.innerHTML = "";

  const section = menuData[sectionName];
  if (!section) return;

  const cats = Object.keys(section);

  cats.forEach(catName => {
    // Заглавие на категория
    content.innerHTML += `<h3 class="menu-cat-title">${escapeHtml(catName)}</h3>`;

    (section[catName] || []).forEach(i => {
      const desc = i.desc ? `<div class="desc">${escapeHtml(i.desc)}</div>` : "";
      content.innerHTML += `
        <div class="menu-item">
          <div class="row">
            <b class="name">${escapeHtml(i.name)}</b>
            ${formatPrices(i.price)}
          </div>
          ${desc}
        </div>
      `;
    });
  });
}

function setActive(btn) {
  document.querySelectorAll("#tabs button").forEach(x => x.classList.remove("active"));
  btn.classList.add("active");
}

function init() {
  tabs.innerHTML = "";
  mobile.innerHTML = "";

  const sections = Object.keys(menuData);

  sections.forEach((sec, idx) => {
    // Desktop tabs (2 бутона)
    const b = document.createElement("button");
    b.textContent = sec;
    if (idx === 0) b.classList.add("active");
    b.onclick = () => {
      setActive(b);
      render(sec);
      mobile.value = sec;
    };
    tabs.appendChild(b);

    // Mobile dropdown (2 опции)
    const o = document.createElement("option");
    o.value = sec;
    o.textContent = sec;
    mobile.appendChild(o);
  });

  mobile.onchange = e => render(e.target.value);

  if (sections.length) {
    mobile.value = sections[0];
    render(sections[0]);
  }
}

init();

// ===== Footer year (ако ползваш <span id="year"></span>) =====
(function setYear() {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();

// ===== Reservations -> Viber (prefilled message) =====
function sendReservationToViber(e) {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }

  const get = (id) => (document.getElementById(id)?.value || "").trim();

  const name = get("rName");
  const phone = get("rPhone");
  const date = get("rDate");
  const time = get("rTime");
  const people = get("rPeople");
  const occasion = get("rOccasion");
  const note = get("rNote");

  if (!name || !phone || !date || !time || !people) {
    alert("Моля, попълни: Име, Телефон, Дата, Час и Брой хора.");
    return false;
  }

  const msg =
`РЕЗЕРВАЦИЯ – Ресторант Гладни О'чи
Име: ${name}
Телефон: ${phone}
Дата: ${date}
Час: ${time}
Брой хора: ${people}`
  + (occasion ? `\nПовод: ${occasion}` : "")
  + (note ? `\nБележка: ${note}` : "")
  + `\n\nАдрес: гр. Дупница, ул. Никола Малашевски 9`;

  const viberNumber = "+359895213002";
  const viberUrl = `viber://chat?number=${encodeURIComponent(viberNumber)}&text=${encodeURIComponent(msg)}`;

  // Опит 1: отвори Viber
  window.location.href = viberUrl;

  // Fallback: ако Viber не се отвори – копирай текста
  setTimeout(async () => {
    if (!document.hidden) {
      try {
        await navigator.clipboard.writeText(msg);
        alert("Viber не се отвори автоматично. Текстът е копиран ✅\nОтвори Viber и го постави в чата към ресторанта.");
      } catch {
        alert("Viber не се отвори автоматично. Копирай текста ръчно:\n\n" + msg);
      }
    }
  }, 900);

  return false;
}

// ===== Bind reservation form (works on iPhone/Android/Desktop) =====
// Слагаш това НАЙ-ДОЛУ в app.js (след функцията), за да е сигурно, че DOM е зареден.
(function bindReservation() {
  const bind = () => {
    const form = document.getElementById("reservationForm");
    const btn = document.getElementById("sendReservationBtn");

    if (form) form.addEventListener("submit", sendReservationToViber);
    if (btn) btn.addEventListener("click", sendReservationToViber);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bind);
  } else {
    bind();
  }
})();

// ===== IG swipe gallery dots =====
(function igGallery(){
  const slider = document.getElementById("igSlider");
  const dotsWrap = document.getElementById("igDots");
  if (!slider || !dotsWrap) return;

  const items = Array.from(slider.querySelectorAll(".ig-item"));
  dotsWrap.innerHTML = "";

  const dots = items.map((_, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "ig-dot" + (i === 0 ? " active" : "");
    b.setAttribute("aria-label", `Снимка ${i+1}`);
    b.addEventListener("click", () => {
      items[i].scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    });
    dotsWrap.appendChild(b);
    return b;
  });

  const setActive = (idx) => dots.forEach((d, i) => d.classList.toggle("active", i === idx));

  const getClosestIndex = () => {
    const sliderRect = slider.getBoundingClientRect();
    const center = sliderRect.left + sliderRect.width / 2;
    let best = 0;
    let bestDist = Infinity;

    items.forEach((it, i) => {
      const r = it.getBoundingClientRect();
      const c = r.left + r.width / 2;
      const dist = Math.abs(center - c);
      if (dist < bestDist) { bestDist = dist; best = i; }
    });

    return best;
  };

  let t = null;
  slider.addEventListener("scroll", () => {
    clearTimeout(t);
    t = setTimeout(() => setActive(getClosestIndex()), 80);
  }, { passive: true });
})();

// ===== Gallery swipe + buttons + dots =====
(function gallerySwipe(){
  const track = document.getElementById("galleryTrack");
  const dotsWrap = document.getElementById("galleryDots");
  if (!track || !dotsWrap) return;

  const items = Array.from(track.querySelectorAll("img"));
  if (!items.length) return;

  // Dots
  dotsWrap.innerHTML = items.map((_, i) =>
    `<span class="g-dot${i===0?' active':''}" data-i="${i}"></span>`
  ).join("");

  const dots = Array.from(dotsWrap.querySelectorAll(".g-dot"));

  function activeIndex(){
    // намираме най-близката картинка до центъра
    const rect = track.getBoundingClientRect();
    const center = rect.left + rect.width / 2;

    let best = 0;
    let bestDist = Infinity;

    items.forEach((img, i) => {
      const r = img.getBoundingClientRect();
      const imgCenter = r.left + r.width / 2;
      const d = Math.abs(imgCenter - center);
      if (d < bestDist) { bestDist = d; best = i; }
    });

    dots.forEach(d => d.classList.remove("active"));
    if (dots[best]) dots[best].classList.add("active");
    return best;
  }

  function scrollToIndex(i){
    const el = items[i];
    if (!el) return;
    // центрираме елемента
    const left = el.offsetLeft - (track.clientWidth - el.clientWidth) / 2;
    track.scrollTo({ left, behavior: "smooth" });
  }

  // Click on dots
  dotsWrap.addEventListener("click", (e) => {
    const t = e.target.closest(".g-dot");
    if (!t) return;
    scrollToIndex(Number(t.dataset.i));
  });

  // Desktop arrows
  const prevBtn = document.querySelector(".g-prev");
  const nextBtn = document.querySelector(".g-next");

  function step(dir){
    const i = activeIndex();
    const next = Math.max(0, Math.min(items.length - 1, i + dir));
    scrollToIndex(next);
  }

  if (prevBtn) prevBtn.addEventListener("click", () => step(-1));
  if (nextBtn) nextBtn.addEventListener("click", () => step(1));

  // Update active dot on scroll (throttled)
  let ticking = false;
  track.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      activeIndex();
      ticking = false;
    });
  });

  // Init
  activeIndex();
})();

// ===== Reviews carousel (swipe + arrows + dots) =====
(function initReviews() {
  const track = document.getElementById("reviewsTrack");
  const dotsWrap = document.getElementById("reviewsDots");
  if (!track || !dotsWrap) return;

  const cards = Array.from(track.querySelectorAll(".review-card"));
  if (cards.length < 2) {
    // ако е само 1 карта – скриваме dots
    dotsWrap.style.display = "none";
  }

  // Dots
  dotsWrap.innerHTML = "";
  const dots = cards.map((_, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.setAttribute("aria-label", `Отзив ${i + 1}`);
    b.addEventListener("click", () => goTo(i, true));
    dotsWrap.appendChild(b);
    return b;
  });

  const prevBtn = document.querySelector(".reviews-arrow.prev");
  const nextBtn = document.querySelector(".reviews-arrow.next");

  let index = 0;
  let timer = null;

  function setActiveDot(i) {
    dots.forEach((d, k) => d.classList.toggle("active", k === i));
  }

  function goTo(i, userAction=false) {
    if (!cards.length) return;
    index = (i + cards.length) % cards.length;
    cards[index].scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    setActiveDot(index);
    if (userAction) restartAuto();
  }

  function next() { goTo(index + 1, true); }
  function prev() { goTo(index - 1, true); }

  if (nextBtn) nextBtn.addEventListener("click", next);
  if (prevBtn) prevBtn.addEventListener("click", prev);

  // Update index on swipe scroll (iPhone friendly)
  let st = null;
  track.addEventListener("scroll", () => {
    clearTimeout(st);
    st = setTimeout(() => {
      const rects = cards.map(c => Math.abs(c.getBoundingClientRect().left - track.getBoundingClientRect().left));
      const i = rects.indexOf(Math.min(...rects));
      if (i >= 0) {
        index = i;
        setActiveDot(index);
        restartAuto();
      }
    }, 80);
  }, { passive: true });

  // Mobile "Read more"
  track.querySelectorAll(".review-more").forEach(btn => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".review-card");
      if (!card) return;
      const expanded = card.classList.toggle("expanded");
      btn.textContent = expanded ? "Скрий" : "Прочети още";
    });
  });

  function startAuto() {
    if (cards.length < 2) return;
    stopAuto();
    timer = setInterval(() => goTo(index + 1, false), 4500);
  }
  function stopAuto() {
    if (timer) clearInterval(timer);
    timer = null;
  }
  function restartAuto() { stopAuto(); startAuto(); }

  setActiveDot(0);
  startAuto();
})();
