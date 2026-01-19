const RATE = 1.95583;

const menuData = {
  "Салати": [
    { name: "Шопска салата", price: 4.99 },
    { name: "Гръцка салата", price: 5.99 },
    { name: "Салата Гладни О'чи", price: 9.49 }
  ],
  "Брускети": [
    { name: "Брускети с чери домати и моцарела", price: 6.49 }
  ],
  "Основни ястия": [
    { name: "Сочни свински скалопини", price: 9.49 },
    { name: "Специалитет Гладни О'чи", price: 12.49 }
  ]
};

const tabs = document.getElementById("tabs");
const mobileSelect = document.getElementById("mobileCategory");
const menuContent = document.getElementById("menuContent");

function render(category) {
  menuContent.innerHTML = "";
  menuData[category].forEach(item => {
    const lv = (item.price * RATE).toFixed(2);
    menuContent.innerHTML += `
      <div class="menu-item">
        <h4>${item.name}</h4>
        <div class="price">${item.price.toFixed(2)} € / ${lv} лв</div>
      </div>
    `;
  });
}

Object.keys(menuData).forEach((cat, i) => {
  const btn = document.createElement("button");
  btn.textContent = cat;
  btn.onclick = () => {
    document.querySelectorAll(".tabs button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    render(cat);
    mobileSelect.value = cat;
  };
  if (i === 0) btn.classList.add("active");
  tabs.appendChild(btn);

  const opt = document.createElement("option");
  opt.value = cat;
  opt.textContent = cat;
  mobileSelect.appendChild(opt);
});

mobileSelect.onchange = e => render(e.target.value);

render(Object.keys(menuData)[0]);
