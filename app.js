/* =========================
   НОВО МЕНЮ – ГЛАДНИ О'ЧИ
   Само EUR
========================= */

const menuData = {

  "Салати": [
    {
      name: "О’ЧИ ГАРДЪН",
      desc: "Розови домати и краставици, краве сирене, гриловани маслини, червен и пресен лук, босилеково песто и зехтин екстра върджин. • 300 г",
      price: 7.99
    },
    {
      name: "ЦЕЗАР С ХРУПКАВО ПИЛЕ",
      desc: "Свеж букет от листни салати с Цезар дресинг, хрупкаво пиле и фино настъргано Parmigiano Reggiano. • 320 г",
      price: 7.89
    },
    {
      name: "ГРЪЦКА САЛАТА С ТИРО",
      desc: "Хрупкаво пиле, розови домати и свежи краставици, тирокафтери, маслини и пресен пипер, с ароматен риган, магданоз и зехтин екстра върджин. • 380 г",
      price: 6.99
    },
    {
      name: "БАЛКАНСКИ ВКУС",
      desc: "Печен червен пипер и сочни розови домати, допълнени с краве сирене и ароматно магданозено песто за свеж и наситен вкус. • 330 г",
      price: 7.29
    },
    {
      name: "САЛАТА МАРЕ",
      desc: "Микс зелени салати, бяла риба, розови домати, печен пипер, краве сирене, крутони и настъргано яйце, с медено-горчичен дресинг. • 360 г",
      price: 7.89
    }
  ],


  "Стартери": [
    {
      name: "КРЕХКИ ПИЛЕШКИ ПУКАНКИ",
      desc: "Крехки пилешки хапки в златиста панко панировка, с пармезан и домашен млечен сос. • 250 г",
      price: 7.49
    },
    {
      name: "КАРТОФКИ АЛПИНА",
      desc: "Домашни пържени картофки, овкусени с пармезан, чесън и ароматни билки. • 250 г",
      price: 4.49
    },
    {
      name: "СКАРИДИ КРИСПИ",
      desc: "Кралски скариди в златиста панко панировка, поднесени с нежен сос „Хиляда острова“. • 200 г",
      price: 10.99
    },
    {
      name: "ТЕЛЕШКИ ЕЗИК",
      desc: "Бавно сварен телешки език, сотиран в ароматно чесново масло, с фин пармезан и пресен магданоз. • 200 г",
      price: 9.49
    },
    {
      name: "CHEESE & BERRIES",
      desc: "Златисти хапки от топено сирене с нежна текстура, поднесени с ароматно боровинково сладко за перфектен баланс между сладко и солено. • 250 г",
      price: 5.49
    },
    {
      name: "СЪРЦА АЛ ДЖОЙО",
      desc: "Сотирани пилешки сърчица в ароматно чесново масло, завършени с лимон за свеж финал. • 200 г",
      price: 7.99
    },
    {
      name: "ПРЕМИУМ СЕЛЕКЦИЯ",
      desc: "Трио от тарама хайвер, печени чушки с краве сирене и краве сирене с печени орехи и мед, поднесени с топло гръцко хлебче. • 350 г",
      price: 7.99
    },
    {
      name: "ДОМАШНИ БРУСКЕТИ",
      desc: "Хрупкави брускети с „Филаделфия“, в два варианта – с чери домати, домашно песто и бейби моцарела или с фино прошуто крудо. • 200 г",
      price: 6.49
    }
  ],


  "Основни": [
    {
      name: "МЕДАЛЬОНИ АРТЕ",
      desc: "Медальони от свинско бон филе, запечени до златисто, с ароматен сос „Братен джус“ и сотирани картофки с билки. • 380 г",
      price: 10.99
    },
    {
      name: "ПИЛЕШКИ ШНИЦЕЛ МОНТЕ",
      desc: "Златист пилешки шницел върху кадифено картофено пюре, залят с ароматен сметанов гъбен сос. • 400 г",
      price: 9.49
    },
    {
      name: "PORK & CHEDDAR",
      desc: "Бавно печено дърпано свинско с разтопен чедър, кремообразно картофено пюре, домашен колсло и пресен лук. • 400 г",
      price: 9.99
    },
    {
      name: "ПИТА БАЛКАНИКА",
      desc: "Селска питка, пълнена с дърпано свинско, запечени картофи, сотирани гъби, лук и разтопена моцарела, завършена с яйце на очи. • 420 г",
      price: 9.29
    },
    {
      name: "КИНОА ТРЮФЕЛ",
      desc: "Златисти кюфтенца от киноа върху нежно картофено пюре, завършени с ароматна трюфел майонеза. • 320 г",
      price: 8.49
    },
    {
      name: "БЯЛА РИБА КРИСПИ",
      desc: "Филе от бяла риба в златиста хрупкава панировка, с домашен колсло, пържени картофки, лимоново маслен сос и свеж лимон. • 380 г",
      price: 9.49
    }
  ],


  "Паста": [
    {
      name: "СПАГЕТИ КАРБОНАРА",
      desc: "Прясна паста, панчета, жълтък, пармиджано. • 300 г",
      price: 7.49
    },
    {
      name: "СПАГЕТИ БОЛОНЕЗЕ",
      desc: "Прясна паста, лук, моркови, мляно месо, доматен сос и пармиджано. • 350 г",
      price: 7.49
    }
  ],


  "Бургери": [
    {
      name: "ПИЛЕШКИ ЧИЙЗБУРГЕР",
      desc: "Питка бриош, бургер сос, чедър, домат, зелена салата и пържени картофки. • 400 г",
      price: 7.99
    },
    {
      name: "ТЕЛЕШКИ ЧИЙЗБУРГЕР",
      desc: "Питка бриош, BBQ сос, яйце, чътни от краставичка, карамелизиран лук, чедър и домашни пържени картофки. • 380 г",
      price: 8.99
    },
    {
      name: "БУРГЕР С ДЪРПАНО СВИНСКО",
      desc: "Питка бриош, BBQ сос, чедър, карамелизиран лук, зелена салата и домашни пържени картофки. • 400 г",
      price: 8.49
    }
  ],


  "ВВQ/ГРИЛ": [
    {
      name: "ГРИЛ СЕЛЕКЦИЯ",
      desc: "Пилешко филе, свинска вратна пържола, свинско бон филе, 3 кюфтета и 3 кебапчета, печени печурки и пържени картофки, поднесени с домашна лютеница. • 1.500 кг",
      price: 24.99
    },
    {
      name: "БАЛКАНСКО ТРИО",
      desc: "Избор от 3 кюфтета или 3 кебапчета, поднесени с микс зелени салати, домашна лютеница и пържени картофки. • 550 г",
      price: 6.99
    },
    {
      name: "ТЕЛЕШКИ ГРИЛ",
      desc: "Три телешки кюфтенца, залети със сос „Братен джус“, поднесени с хрупкави картофки с ароматни подправки и домашна лютеница. • 550 г",
      price: 9.49
    },
    {
      name: "ПИЛЕШКО ФИЛЕ",
      desc: "• 250 г",
      price: 4.99
    },
    {
      name: "ЛАВРАК НА ГРИЛ",
      desc: "• 350 г",
      price: 7.99
    },
    {
      name: "ЦИПУРА НА ГРИЛ",
      desc: "• 400 г",
      price: 7.49
    },
    {
      name: "СВИНСКА ВРАТНА ПЪРЖОЛА",
      desc: "• 250 г",
      price: 5.99
    }
  ],


  "Домашни хлебчета": [
    {
      name: "СЕЛСКА ПИТКА",
      desc: "• 180 г",
      price: 1.70
    },
    {
      name: "ЧАБАТА С ПОДПРАВКИ",
      desc: "• 150 г",
      price: 1.70
    },
    {
      name: "ЧАБАТА С ЧЕСЪН",
      desc: "• 150 г",
      price: 1.70
    }
  ],


  "Десерти": [
    {
      name: "ТОРТА БИСКОТИНО",
      desc: "• 200 г",
      price: 4.29
    },
    {
      name: "ШОКОЛАДОВО СУФЛЕ",
      desc: "Поднесено с топка ванилов сладолед. • 180 г",
      price: 3.99
    },
    {
      name: "ТОРТА „ЛОТУС“ В ЧАША",
      desc: "• 180 г",
      price: 4.49
    },
    {
      name: "ДРУГ ДЕСЕРТ – ПОПИТАЙ СЕРВИТЬОРА",
      desc: "",
      price: null
    }
  ]

};


/* =========================
   HELPERS
========================= */

function formatPrices(eur) {

  if (eur === null || eur === undefined) {
    return `<span class="price">Цена: по запитване</span>`;
  }

  return `<span class="price">${eur.toFixed(2)} €</span>`;
}


function escapeHtml(s) {

  return (s || "").replace(/[&<>"']/g, c => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[c]));

}


/* =========================
   MENU RENDER
========================= */

function renderMenu(sectionName, contentEl) {

  contentEl.innerHTML = "";

  const items = menuData[sectionName];

  if (!items) return;

  const wrap = document.createElement("div");
  wrap.className = "menu-acc-wrap";

  const details = document.createElement("details");
  details.className = "menu-acc";
  details.open = true;

  const summary = document.createElement("summary");
  summary.className = "menu-acc-head";

  summary.innerHTML = `
    <span class="menu-acc-title">
      ${escapeHtml(sectionName)}
    </span>
    <span class="menu-acc-chevron">▾</span>
  `;

  const body = document.createElement("div");
  body.className = "menu-acc-body";

  items.forEach((item) => {

    const desc = item.desc
      ? `<div class="desc">${escapeHtml(item.desc)}</div>`
      : "";

    body.innerHTML += `
      <div class="menu-item">

        <div class="row">

          <b class="name">
            ${escapeHtml(item.name)}
          </b>

          ${formatPrices(item.price)}

        </div>

        ${desc}

      </div>
    `;

  });

  details.appendChild(summary);
  details.appendChild(body);

  wrap.appendChild(details);
  contentEl.appendChild(wrap);
}


/* =========================
   ACTIVE TAB
========================= */

function setActiveTab(btn) {

  document
    .querySelectorAll("#tabs button")
    .forEach(x => x.classList.remove("active"));

  if (btn) {
    btn.classList.add("active");
  }

}


/* =========================
   INIT MENU
========================= */

function initMenu() {

  const tabs = document.getElementById("tabs");
  const mobile = document.getElementById("mobileCategory");
  const content = document.getElementById("menuContent");

  if (!tabs || !mobile || !content) {

    console.error("Missing menu elements:", {
      tabs,
      mobile,
      content
    });

    return;
  }

  tabs.innerHTML = "";
  mobile.innerHTML = "";

  const sections = Object.keys(menuData);


  /* =========================
     DESKTOP TABS
  ========================= */

  sections.forEach((sectionName, idx) => {

    const button = document.createElement("button");

    button.type = "button";
    button.textContent = sectionName;

    if (idx === 0) {
      button.classList.add("active");
    }

    button.addEventListener("click", () => {

      setActiveTab(button);

      renderMenu(
        sectionName,
        content
      );

      mobile.value = sectionName;

    });

    tabs.appendChild(button);


    /* =========================
       MOBILE SELECT
    ========================= */

    const option = document.createElement("option");

    option.value = sectionName;
    option.textContent = sectionName;

    mobile.appendChild(option);

  });


  /* =========================
     MOBILE CHANGE
  ========================= */

  mobile.addEventListener("change", (e) => {

    const sectionName = e.target.value;

    renderMenu(
      sectionName,
      content
    );

    document
      .querySelectorAll("#tabs button")
      .forEach(button => {

        button.classList.toggle(
          "active",
          button.textContent === sectionName
        );

      });

  });


  /* =========================
     FIRST CATEGORY
  ========================= */

  if (sections.length) {

    mobile.value = sections[0];

    renderMenu(
      sections[0],
      content
    );

  }

}


/* =========================
   MENU SEARCH
========================= */

function initMenuSearch() {

  const input = document.getElementById("menuSearch");
  const content = document.getElementById("menuContent");
  const tabs = document.getElementById("tabs");
  const mobile = document.getElementById("mobileCategory");

  if (!input || !content) return;


  const normalize = (s) => {

    return (s || "")
      .toString()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();

  };


  const allItems = [];

  Object.entries(menuData).forEach(
    ([sectionName, items]) => {

      items.forEach((item) => {

        allItems.push({
          sectionName,
          item
        });

      });

    }
  );


  function renderSearchResults(q) {

    const query = normalize(q);


    if (!query) {

      const currentSection =
        mobile?.value ||
        Object.keys(menuData)[0];

      renderMenu(
        currentSection,
        content
      );

      return;
    }


    const hits = allItems.filter(
      ({ item }) => {

        const hay = normalize(
          item.name + " " + (item.desc || "")
        );

        return hay.includes(query);

      }
    );


    content.innerHTML = "";


    if (!hits.length) {

      content.innerHTML = `
        <div class="menu-item">

          <b class="name">
            Няма резултати за
            „${escapeHtml(q)}“.
          </b>

        </div>
      `;

      return;
    }


    hits.forEach(
      ({ sectionName, item }) => {

        const desc = item.desc
          ? `<div class="desc">${escapeHtml(item.desc)}</div>`
          : "";

        content.innerHTML += `

          <div class="menu-item">

            <div class="row">

              <b class="name">
                ${escapeHtml(item.name)}
              </b>

              ${formatPrices(item.price)}

            </div>

            ${desc}

            <div class="desc">
              Категория: ${escapeHtml(sectionName)}
            </div>

          </div>

        `;

      }
    );

  }


  let t = null;

  input.addEventListener("input", (e) => {

    clearTimeout(t);

    t = setTimeout(() => {

      renderSearchResults(
        e.target.value
      );

    }, 120);

  });


  const resetSearch = () => {

    if (!input.value) return;

    input.value = "";

    const currentSection =
      mobile?.value ||
      Object.keys(menuData)[0];

    renderMenu(
      currentSection,
      content
    );

  };


  if (tabs) {
    tabs.addEventListener(
      "click",
      resetSearch
    );
  }

  if (mobile) {
    mobile.addEventListener(
      "change",
      resetSearch
    );
  }


  console.log("✅ Новото меню е заредено");

}

/* =========================
   YEAR
========================= */
function setYear() {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
}

/* =========================
   RESERVATIONS -> VIBER
========================= */
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

  window.location.href = viberUrl;

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

function bindReservation() {
  const form = document.getElementById("reservationForm");
  const btn = document.getElementById("sendReservationBtn");

  if (form) form.addEventListener("submit", sendReservationToViber);
  if (btn) btn.addEventListener("click", sendReservationToViber);
}

/* =========================
   IG GALLERY (ако го ползваш)
========================= */
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

/* =========================
   GALLERY swipe + buttons + dots
========================= */
(function gallerySwipe(){
  const track = document.getElementById("galleryTrack");
  const dotsWrap = document.getElementById("galleryDots");
  if (!track || !dotsWrap) return;

  const items = Array.from(track.querySelectorAll("img"));
  if (!items.length) return;

  dotsWrap.innerHTML = items.map((_, i) =>
    `<span class="g-dot${i===0?' active':''}" data-i="${i}"></span>`
  ).join("");

  const dots = Array.from(dotsWrap.querySelectorAll(".g-dot"));

  function activeIndex(){
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
    const left = el.offsetLeft - (track.clientWidth - el.clientWidth) / 2;
    track.scrollTo({ left, behavior: "smooth" });
  }

  dotsWrap.addEventListener("click", (e) => {
    const t = e.target.closest(".g-dot");
    if (!t) return;
    scrollToIndex(Number(t.dataset.i));
  });

  const prevBtn = document.querySelector(".g-prev");
  const nextBtn = document.querySelector(".g-next");

  function step(dir){
    const i = activeIndex();
    const next = Math.max(0, Math.min(items.length - 1, i + dir));
    scrollToIndex(next);
  }

  if (prevBtn) prevBtn.addEventListener("click", () => step(-1));
  if (nextBtn) nextBtn.addEventListener("click", () => step(1));

  let ticking = false;
  track.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      activeIndex();
      ticking = false;
    });
  });

  activeIndex();
})();

/* =========================
   REVIEWS carousel
========================= */
(function initReviews() {
  const track = document.getElementById("reviewsTrack");
  const dotsWrap = document.getElementById("reviewsDots");
  if (!track || !dotsWrap) return;

  const cards = Array.from(track.querySelectorAll(".review-card"));
  if (!cards.length) return;

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

  function scrollCardTo(i, smooth = true) {
    const card = cards[i];
    if (!card) return;
    const left = card.offsetLeft - track.offsetLeft;
    track.scrollTo({ left, behavior: smooth ? "smooth" : "auto" });
  }

  function goTo(i, userAction = false) {
    index = (i + cards.length) % cards.length;
    scrollCardTo(index, true);
    setActiveDot(index);
    if (userAction) restartAuto();
  }

  function next() { goTo(index + 1, true); }
  function prev() { goTo(index - 1, true); }

  if (nextBtn) nextBtn.addEventListener("click", next);
  if (prevBtn) prevBtn.addEventListener("click", prev);

  let raf = null;
  track.addEventListener("scroll", () => {
    if (raf) cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      const center = track.scrollLeft + track.clientWidth / 2;

      let best = 0;
      let bestDist = Infinity;

      cards.forEach((c, i) => {
        const cCenter = (c.offsetLeft - track.offsetLeft) + c.clientWidth / 2;
        const dist = Math.abs(cCenter - center);
        if (dist < bestDist) { bestDist = dist; best = i; }
      });

      if (best !== index) {
        index = best;
        setActiveDot(index);
        restartAuto();
      }
    });
  }, { passive: true });

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
  scrollCardTo(0, false);
  startAuto();
})();

/* =========================
   FIX: не позволявай "smooth scroll" да краде tel/viber
========================= */
(function () {
  const stopSteal = (e) => {
    e.stopImmediatePropagation();
  };

  document.querySelectorAll('a[href^="tel:"], a[href^="viber://"]').forEach(a => {
    a.addEventListener('click', stopSteal, true);
  });
})();

/* =========================
   RUN ALL (важното!)
========================= */
(function boot() {
  const run = () => {
    initMenu();
    initMenuSearch(); // 🔍 ТЪРСАЧКА
    setYear();
    bindReservation();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
})();
