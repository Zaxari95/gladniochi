/* Gladni O'chi - static site logic (GitHub Pages ready)
   - i18n BG/EN
   - menu rendering from JSON
   - EUR->BGN conversion (rate 1.95583)
   - Viber deep links with prefilled message
   - Reservation & Order forms -> open Viber chat
*/

const RATE = 1.95583;
const PHONE_BG = '+359895213002';
const PHONE_CLEAN = '359895213002';

// --- i18n ---
const I18N = {
  bg: {
    tagline: 'Първо се храниш с очите.',
    nav_home: 'Начало',
    nav_menu: 'Меню',
    nav_drinks: 'Напитки',
    nav_order: 'Поръчки',
    nav_reserve: 'Резервации',
    nav_events: 'Събития',
    nav_contacts: 'Контакти',
    leave_review: 'Остави отзив',
    call_now: 'Позвъни сега',
    order_viber: 'Поръчай във Viber',
    kicker: 'Луксозна атмосфера • Професионално обслужване',
    hero_title: 'Добре дошли в „Гладни О\'чи“',
    hero_lead: 'Ресторант с 110 места вътре и лятна градина с 60 места. Подходящ за обяд, вечеря и събития — фирмени партита, рождени дни, абитуриенски балове.',
    badge_parking: '🚗 Безплатно паркиране',
    badge_industrial: '🎶 Индустриална зона — без съседи',
    badge_drive: '🪟 О\'чи Drive 11:00–15:00',
    reserve_btn: 'Запази маса',
    see_menu: 'Виж меню',
    confirm_note: '✅ След изпращане на резервация/поръчка, наш колега ще се свърже с Вас възможно най-скоро за потвърждение.',
    menu_title: 'Меню (Храна)',
    menu_sub: 'Категории, цена (EUR → BGN) и грамаж. Алергени по европейски стандарт.',
    fx_label: 'Курс:',
    show_allergens: 'Показвай алергени',
    pizza_note: '🍕 Пиците са 30 см, с домашно приготвено тесто на място и висококачествени продукти — италиански вкус.',
    drinks_title: 'Напитки',
    drinks_sub: 'Подкатегории и цени. (Снимките на напитките могат да се добавят поетапно.)',
    order_title: 'Поръчки за вкъщи',
    order_sub: 'Поръчайте бързо — вземане от място, доставка или О\'чи Drive.',
    order_viber_title: '📲 Поръчай във Viber',
    order_viber_desc: 'Натисни бутона и ще се отвори чат с готов шаблон. Можеш да добавиш бележка (без съставка, корекция и т.н.).',
    pickup_title: '🛍️ Вземане от място',
    pickup_desc: 'Понеделник–Събота: 11:00–21:30. Неделя: почивен ден.',
    packaging_free: 'Кутии, торбички и прибори за вкъщи — напълно безплатни (качествени опаковки).',
    delivery_title: '🛵 Доставка',
    delivery_desc: 'Понеделник–Събота: 11:00–20:00 (с наш транспорт). Доставката се заплаща от клиента (работим с таксита). При натовареност/събития е възможно временно да не приемаме доставки.',
    order_form_title: 'Бърза заявка (изпраща във Viber)',
    name_two: 'Две имена *',
    phone: 'Телефон *',
    order_type: 'Начин на получаване *',
    mode_pickup: 'Вземане от място (11:00–21:30)',
    mode_delivery: 'Доставка (11:00–20:00)',
    mode_drive: 'О\'чи Drive (11:00–15:00)',
    address_exact: 'Точен адрес *',
    note_optional: 'Бележка (по желание)',
    time_pick: 'Избери час',
    send_viber: 'Изпрати във Viber',
    reserve_title: 'Резервации',
    reserve_sub: 'Календар + избор на час. Неделя е почивен ден.',
    guests: 'Брой гости *',
    hall_pref: 'Предпочитание за зала',
    hall_bar: 'Зала при бара',
    hall_other: 'Зала (другата част)',
    hall_any: 'Без предпочитание',
    garden: 'Лятна градина (01.06–30.09)',
    occasion: 'Повод (по желание)',
    occasion_regular: 'Обикновена резервация',
    occasion_bday: 'Рожден ден',
    occasion_company: 'Фирмено парти/банкет',
    occasion_baby: 'Погача',
    occasion_prom: 'Абитуриентски бал',
    occasion_other: 'Друго',
    cuvert_question: 'Желаете ли куверт? (при събитие)',
    cuvert_no: 'Не / ще обсъдим',
    cuvert_yes: 'Да',
    cuvert_v1: 'Вариант 1 (Свинско)',
    cuvert_v2: 'Вариант 2 (Пилешко)',
    alcohol_pick: 'Алкохол (по избор)',
    alcohol_rakia: 'Ракия',
    alcohol_whisky: 'Уиски',
    events_title: 'Събития',
    contacts_title: 'Контакти',
    open_hours: 'Работно време',
    closed_sun: 'Неделя: почивен ден'
  },
  en: {
    tagline: 'First, you eat with your eyes.',
    nav_home: 'Home',
    nav_menu: 'Menu',
    nav_drinks: 'Drinks',
    nav_order: 'Order',
    nav_reserve: 'Reservations',
    nav_events: 'Events',
    nav_contacts: 'Contacts',
    leave_review: 'Leave a review',
    call_now: 'Call now',
    order_viber: 'Order on Viber',
    kicker: 'Premium atmosphere • Professional service',
    hero_title: 'Welcome to “Gladni O\'chi”',
    hero_lead: '110 seats indoor and a summer garden with 60 seats. Perfect for lunch, dinner and events—company parties, birthdays, prom dinners.',
    badge_parking: '🚗 Free parking',
    badge_industrial: '🎶 Industrial area — no neighbours',
    badge_drive: '🪟 O\'chi Drive 11:00–15:00',
    reserve_btn: 'Book a table',
    see_menu: 'View menu',
    confirm_note: '✅ After you send a request, our team will contact you as soon as possible to confirm.',
    menu_title: 'Food Menu',
    menu_sub: 'Categories, price (EUR → BGN) and portion. EU allergens icons.',
    fx_label: 'FX rate:',
    show_allergens: 'Show allergens',
    pizza_note: '🍕 Pizzas are 30 cm, with fresh in-house dough and premium ingredients—Italian taste.',
    drinks_title: 'Drinks',
    drinks_sub: 'Subcategories and prices. (Drink photos can be added gradually.)',
    order_title: 'Takeaway orders',
    order_sub: 'Order fast—pickup, delivery or O\'chi Drive.',
    order_viber_title: '📲 Order on Viber',
    order_viber_desc: 'Tap the button to open a chat with a prefilled template. Add notes (no ingredient, adjustments, etc.).',
    pickup_title: '🛍️ Pickup',
    pickup_desc: 'Mon–Sat: 11:00–21:30. Sunday: closed.',
    packaging_free: 'Boxes, bags and cutlery are FREE (premium packaging).',
    delivery_title: '🛵 Delivery',
    delivery_desc: 'Mon–Sat: 11:00–20:00 (our service). Delivery fee is paid by the customer (taxi partners). During high demand/events we may pause deliveries.',
    order_form_title: 'Quick request (sends to Viber)',
    name_two: 'Full name *',
    phone: 'Phone *',
    order_type: 'Service type *',
    mode_pickup: 'Pickup (11:00–21:30)',
    mode_delivery: 'Delivery (11:00–20:00)',
    mode_drive: 'O\'chi Drive (11:00–15:00)',
    address_exact: 'Full address *',
    note_optional: 'Note (optional)',
    time_pick: 'Choose time',
    send_viber: 'Send on Viber',
    reserve_title: 'Reservations',
    reserve_sub: 'Calendar + time picker. Sunday is closed.',
    guests: 'Guests *',
    hall_pref: 'Hall preference',
    hall_bar: 'Hall near the bar',
    hall_other: 'Other hall',
    hall_any: 'No preference',
    garden: 'Summer garden (Jun 1–Sep 30)',
    occasion: 'Occasion (optional)',
    occasion_regular: 'Regular reservation',
    occasion_bday: 'Birthday',
    occasion_company: 'Company party/banquet',
    occasion_baby: 'Baby celebration',
    occasion_prom: 'Prom dinner',
    occasion_other: 'Other',
    cuvert_question: 'Would you like a set menu? (events)',
    cuvert_no: 'No / we will discuss',
    cuvert_yes: 'Yes',
    cuvert_v1: 'Option 1 (Pork)',
    cuvert_v2: 'Option 2 (Chicken)',
    alcohol_pick: 'Alcohol (choice)',
    alcohol_rakia: 'Rakia',
    alcohol_whisky: 'Whisky',
    events_title: 'Events',
    contacts_title: 'Contacts',
    open_hours: 'Opening hours',
    closed_sun: 'Sunday: closed'
  }
};

let lang = 'bg';

function $(sel, root=document){ return root.querySelector(sel); }
function $all(sel, root=document){ return Array.from(root.querySelectorAll(sel)); }

function fmtEur(n){
  const x = typeof n === 'number' ? n : parseFloat(n);
  if (Number.isNaN(x)) return '';
  return x.toFixed(2).replace(/\.00$/, '') + ' €';
}

function eurToBgn(eur){
  const x = typeof eur === 'number' ? eur : parseFloat(eur);
  if (Number.isNaN(x)) return null;
  return Math.round(x * RATE * 100) / 100;
}

function fmtBgn(bgn){
  if (bgn === null || bgn === undefined) return '';
  return bgn.toFixed(2).replace(/\.00$/, '') + ' лв';
}

function applyI18n(){
  $all('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const t = I18N[lang][key];
    if (t) el.textContent = t;
  });
  $('#langPill').textContent = lang.toUpperCase();
  document.documentElement.lang = lang;
}

function setActiveTab(container, id){
  $all('button', container).forEach(b => b.classList.toggle('active', b.dataset.id===id));
}

async function loadJSON(url){
  const res = await fetch(url, {cache:'no-store'});
  if (!res.ok) throw new Error('Failed to load '+url);
  return await res.json();
}

// --- Menu rendering ---
function renderTabs(container, tabs, onPick){
  container.innerHTML = '';
  tabs.forEach((t, idx) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.textContent = lang === 'bg' ? t.name_bg : t.name_en;
    b.dataset.id = t.id;
    if (idx===0) b.classList.add('active');
    b.addEventListener('click', () => {
      setActiveTab(container, t.id);
      onPick(t.id);
    });
    container.appendChild(b);
  });
}

function allergenIcon(code){
  // EU allergen list (common): cereals(gluten), crustaceans, eggs, fish, peanuts, soy, milk, nuts, celery,
  // mustard, sesame, sulfites, lupin, molluscs
  const map = {
    gluten:'🌾', crustaceans:'🦐', eggs:'🥚', fish:'🐟', peanuts:'🥜', soy:'🫘', milk:'🥛', nuts:'🌰', celery:'🥬',
    mustard:'🌶️', sesame:'⚪', sulfites:'🍇', lupin:'🌼', molluscs:'🐚'
  };
  return map[code] || '⚠️';
}

function renderItems(grid, items){
  const showAllergens = $('#showAllergens') ? $('#showAllergens').checked : true;
  grid.innerHTML = '';
  if (!items || items.length===0){
    const empty = document.createElement('div');
    empty.className = 'empty';
    empty.textContent = lang==='bg' ? 'Скоро ще добавим тази категория.' : 'This category will be added soon.';
    grid.appendChild(empty);
    return;
  }
  items.forEach(it => {
    const card = document.createElement('article');
    card.className = 'item';

    const top = document.createElement('div');
    top.className = 'item-top';

    const title = document.createElement('div');
    title.className = 'item-title';
    title.textContent = lang==='bg' ? it.name_bg : (it.name_en || it.name_bg);

    const meta = document.createElement('div');
    meta.className = 'item-meta';
    const grams = it.grams ? `${it.grams} g` : '';
    const ml = it.ml ? `${it.ml} ml` : '';
    meta.textContent = [grams, ml].filter(Boolean).join(' • ');

    top.appendChild(title);
    top.appendChild(meta);

    const desc = document.createElement('div');
    desc.className = 'item-desc';
    const d = lang==='bg' ? (it.desc_bg||'') : (it.desc_en||it.desc_bg||'');
    desc.textContent = d;

    const price = document.createElement('div');
    price.className = 'item-price';
    const bgn = eurToBgn(it.price_eur);
    price.innerHTML = `<span class="eur">${fmtEur(it.price_eur)}</span><span class="bgn">${fmtBgn(bgn)}</span>`;

    const allergens = document.createElement('div');
    allergens.className = 'item-allergens';
    if (showAllergens && it.allergens && it.allergens.length){
      it.allergens.forEach(a => {
        const tag = document.createElement('span');
        tag.className = 'al';
        tag.title = a;
        tag.textContent = allergenIcon(a);
        allergens.appendChild(tag);
      });
    }

    card.appendChild(top);
    if (d) card.appendChild(desc);
    card.appendChild(price);
    if (showAllergens) card.appendChild(allergens);
    grid.appendChild(card);
  });
}

async function initFood(){
  const data = await loadJSON('data/food.json');
  const tabs = data.categories;
  const tabsEl = $('#foodTabs');
  const grid = $('#foodGrid');
  if (!tabsEl || !grid) return;
  const byId = new Map(tabs.map(t => [t.id, t]));
  renderTabs(tabsEl, tabs, (id) => renderItems(grid, byId.get(id).items));
  renderItems(grid, tabs[0].items);
  const toggle = $('#showAllergens');
  if (toggle) toggle.addEventListener('change', () => {
    const active = $('.tabs#foodTabs button.active')?.dataset.id || tabs[0].id;
    renderItems(grid, byId.get(active).items);
  });
}

function flattenDrinkTabs(categories){
  const out = [];
  categories.forEach(cat => {
    (cat.subcategories||[]).forEach(sub => {
      out.push({
        id: `${cat.id}.${sub.id}`,
        name_bg: `${cat.name_bg} • ${sub.name_bg}`,
        name_en: `${cat.name_en} • ${sub.name_en}`,
        items: sub.items
      });
    });
  });
  return out;
}

async function initDrinks(){
  const data = await loadJSON('data/drinks.json');
  const tabs = flattenDrinkTabs(data.categories);
  const tabsEl = $('#drinkTabs');
  const grid = $('#drinkGrid');
  if (!tabsEl || !grid) return;
  const byId = new Map(tabs.map(t => [t.id, t]));
  renderTabs(tabsEl, tabs, (id) => renderItems(grid, byId.get(id).items));
  renderItems(grid, tabs[0].items);
}

// --- Hero slideshow ---
function initHero(){
  const slide = $('#heroSlide');
  const vid = $('#heroVideo');
  if (!slide) return;
  const images = [
    'assets/images/IMG_1370_Original.jpg',
    'assets/images/IMG_1368_Original.jpg',
    'assets/images/IMG_0959_Original.jpg',
    'assets/images/IMG_0946_Original.jpg',
    'assets/images/IMG_0951_Original.jpg'
  ];
  let i = 0;
  slide.style.backgroundImage = `url('${images[0]}')`;
  const tick = () => {
    i = (i+1) % images.length;
    slide.classList.add('fade');
    setTimeout(() => {
      slide.style.backgroundImage = `url('${images[i]}')`;
      slide.classList.remove('fade');
    }, 350);
  };
  setInterval(tick, 7000);

  // Try to load hero video silently
  if (vid) {
    vid.addEventListener('error', () => {});
  }
}

// --- Viber helpers ---
function viberUrl(message){
  const msg = encodeURIComponent(message);
  // Viber deep link (mobile/desktop app)
  return `viber://chat?number=${PHONE_CLEAN}&text=${msg}`;
}

function webFallbackUrl(message){
  // Fallback to tel if Viber not installed
  // Keeping it simple: open tel
  return `tel:${PHONE_BG}`;
}

function openViber(message){
  const deep = viberUrl(message);
  // Attempt deep link, then fallback
  window.location.href = deep;
  setTimeout(() => {
    // if nothing happened, fallback
    // (cannot reliably detect, but it's fine)
    // Only fallback on desktop / when viber isn't handled
    // eslint-disable-next-line no-unused-expressions
    webFallbackUrl(message);
  }, 900);
}

function commonFooter(lang){
  return lang==='bg'
    ? '\n\n✅ Наш колега ще се свърже с Вас възможно най-скоро за потвърждение.'
    : '\n\n✅ Our team will contact you as soon as possible to confirm.';
}

function bindViberButtons(){
  const btns = ['#viberCta','#heroViber','#orderViber'];
  btns.forEach(sel => {
    const el = $(sel);
    if (!el) return;
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const msg = (lang==='bg')
        ? `Здравейте! Искам да направя поръчка.\n\nИме: \nТелефон: \nНачин: (Вземане/Доставка/О'чи Drive)\nЧас: \nАдрес (ако е доставка): \nБележка: ` + commonFooter(lang)
        : `Hello! I would like to place an order.\n\nName: \nPhone: \nService: (Pickup/Delivery/O'chi Drive)\nTime: \nAddress (if delivery): \nNote: ` + commonFooter(lang);
      openViber(msg);
    });
  });
}

// --- Forms ---
function initOrderForm(){
  const form = $('#orderForm');
  const mode = $('#orderMode');
  const addressWrap = $('#addressWrap');
  const address = $('#address');
  if (!form || !mode) return;

  const refresh = () => {
    const isDelivery = mode.value === 'delivery';
    if (addressWrap) addressWrap.hidden = !isDelivery;
    if (address) {
      address.required = isDelivery;
    }
  };
  mode.addEventListener('change', refresh);
  refresh();

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const name = (fd.get('fullName')||'').toString().trim();
    const phone = (fd.get('phone')||'').toString().trim();
    const m = (fd.get('mode')||'').toString();
    const addr = (fd.get('address')||'').toString().trim();
    const note = (fd.get('note')||'').toString().trim();
    const time = (fd.get('time')||'').toString().trim();

    const modeLabel = {
      pickup: lang==='bg' ? 'Вземане от място' : 'Pickup',
      delivery: lang==='bg' ? 'Доставка' : 'Delivery',
      drive: lang==='bg' ? "О'чи Drive" : "O'chi Drive"
    }[m] || m;

    let msg = lang==='bg'
      ? `🛒 НОВА ПОРЪЧКА\nИме: ${name}\nТелефон: ${phone}\nНачин: ${modeLabel}`
      : `🛒 NEW ORDER\nName: ${name}\nPhone: ${phone}\nService: ${modeLabel}`;

    if (time) msg += `\nЧас: ${time}`;
    if (m === 'delivery') msg += `\nАдрес: ${addr}`;
    if (note) msg += `\nБележка: ${note}`;
    msg += commonFooter(lang);
    openViber(msg);
  });
}

function initTimePicker(input){
  // Simple 30-min steps from 11:00 to 21:30 by default
  const times = [];
  const start = 11*60;
  const end = 21*60 + 30;
  for (let t=start; t<=end; t+=30){
    const hh = String(Math.floor(t/60)).padStart(2,'0');
    const mm = String(t%60).padStart(2,'0');
    times.push(`${hh}:${mm}`);
  }
  const wrap = document.createElement('div');
  wrap.className = 'time-popup';
  wrap.hidden = true;
  times.forEach(tm => {
    const b = document.createElement('button');
    b.type='button';
    b.textContent = tm;
    b.addEventListener('click', () => {
      input.value = tm;
      wrap.hidden = true;
    });
    wrap.appendChild(b);
  });
  input.parentElement.appendChild(wrap);
  input.addEventListener('focus', () => { wrap.hidden = false; });
  document.addEventListener('click', (e) => {
    if (!wrap.contains(e.target) && e.target !== input) wrap.hidden = true;
  });
}

function initReserveForm(){
  const form = $('#reserveForm');
  if (!form) return;

  // Disable Sundays in date picker (client-side)
  const dateInput = $('#reserveDate');
  if (dateInput) {
    dateInput.addEventListener('change', () => {
      const d = new Date(dateInput.value+'T12:00:00');
      if (!Number.isNaN(d.getTime()) && d.getDay()===0){
        alert(lang==='bg' ? 'Неделя е почивен ден.' : 'Sunday is closed.');
        dateInput.value = '';
      }
    });
  }

  const timeInput = $('#reserveTime');
  if (timeInput) initTimePicker(timeInput);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const name = (fd.get('fullName')||'').toString().trim();
    const phone = (fd.get('phone')||'').toString().trim();
    const date = (fd.get('date')||'').toString();
    const time = (fd.get('time')||'').toString();
    const guests = (fd.get('guests')||'').toString();
    const hall = (fd.get('hall')||'').toString();
    const garden = (fd.get('garden')||'').toString()==='on';
    const occasion = (fd.get('occasion')||'').toString();
    const otherOcc = (fd.get('occasionOther')||'').toString().trim();
    const cuvert = (fd.get('cuvert')||'').toString();
    const cuvertVar = (fd.get('cuvertVar')||'').toString();
    const alcohol = (fd.get('alcohol')||'').toString();
    const note = (fd.get('note')||'').toString().trim();

    const hallLabel = {
      any: lang==='bg' ? 'Без предпочитание' : 'No preference',
      bar: lang==='bg' ? 'Зала при бара' : 'Hall near the bar',
      other: lang==='bg' ? 'Зала (другата част)' : 'Other hall'
    }[hall] || hall;

    let occLabel = occasion;
    if (occasion==='other' && otherOcc) occLabel = otherOcc;

    let msg = lang==='bg'
      ? `📅 НОВА РЕЗЕРВАЦИЯ\nИме: ${name}\nТелефон: ${phone}\nДата: ${date}\nЧас: ${time}\nГости: ${guests}\nМясто: ${garden ? 'Лятна градина' : 'Вътрешна зала'}\nПредпочитание: ${hallLabel}`
      : `📅 NEW RESERVATION\nName: ${name}\nPhone: ${phone}\nDate: ${date}\nTime: ${time}\nGuests: ${guests}\nArea: ${garden ? 'Summer garden' : 'Indoor'}\nPreference: ${hallLabel}`;

    if (occLabel) msg += `\nПовод: ${occLabel}`;
    if (cuvert) msg += `\nКуверт: ${cuvert==='yes' ? 'Да' : 'Не/ще обсъдим'}`;
    if (cuvert==='yes' && cuvertVar) msg += `\nВариант: ${cuvertVar}`;
    if (cuvert==='yes' && alcohol) msg += `\nАлкохол: ${alcohol}`;
    if (note) msg += `\nБележка: ${note}`;
    msg += commonFooter(lang);
    openViber(msg);
  });
}

// --- Nav / burger ---
function initNav(){
  const burger = $('#burger');
  const mobile = $('#mobileNav');
  if (burger && mobile){
    burger.addEventListener('click', () => mobile.classList.toggle('open'));
    $all('a', mobile).forEach(a => a.addEventListener('click', () => mobile.classList.remove('open')));
  }
}

function initLang(){
  const btn = $('#langToggle');
  if (!btn) return;
  btn.addEventListener('click', async () => {
    lang = lang === 'bg' ? 'en' : 'bg';
    applyI18n();
    // Re-render tab labels
    await initFood();
    await initDrinks();
  });
}

async function boot(){
  applyI18n();
  initNav();
  initLang();
  initHero();
  bindViberButtons();
  initOrderForm();
  initReserveForm();
  await initFood();
  await initDrinks();
}

document.addEventListener('DOMContentLoaded', () => {
  boot().catch(err => console.error(err));
});
