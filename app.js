const RATE = 1.95583;

const menuData = {
  "Салати": [
    { name: "Шопска салата", price: 4.99 },
    { name: "Гръцка салата", price: 5.99 },
    { name: "Салата Гладни О'чи", price: 9.49 }
  ],
  "Стартери": [
    { name: "Домашни пържени картофи", price: 2.99 },
    { name: "Панко пилешки филенца", price: 6.99 }
  ],
  "Основни ястия": [
    { name: "Сочни свински скалопини", price: 9.49 },
    { name: "Специалитет Гладни О'чи", price: 12.49 }
  ]
};

const tabs = document.getElementById("tabs");
const mobile = document.getElementById("mobileCategory");
const content = document.getElementById("menuContent");

function render(cat) {
  content.innerHTML = "";
  menuData[cat].forEach(i => {
    const lv = (i.price * RATE).toFixed(2);
    content.innerHTML += `
      <div class="menu-item">
        <b>${i.name}</b>
        <div class="price">${i.price.toFixed(2)} € / ${lv} лв</div>
      </div>
    `;
  });
}

Object.keys(menuData).forEach((c, i) => {
  const b = document.createElement("button");
  b.textContent = c;
  if (i === 0) b.classList.add("active");
  b.onclick = () => {
    document.querySelectorAll("#tabs button").forEach(x => x.classList.remove("active"));
    b.classList.add("active");
    render(c);
    mobile.value = c;
  };
  tabs.appendChild(b);

  const o = document.createElement("option");
  o.value = c;
  o.textContent = c;
  mobile.appendChild(o);
});

mobile.onchange = e => render(e.target.value);

render(Object.keys(menuData)[0]);
