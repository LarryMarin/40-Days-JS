const tabHeader = document.querySelector('.tab-headers');

tabHeader.addEventListener("click", function (e) {
  const num = e.target.dataset.tab;
  switchToTab(num);
});

function switchToTab(tabNumber) {
  const allTabs = document.querySelectorAll('.tab');
  const allDivs = document.querySelectorAll('.content');
  const tabNum = document.querySelector(`.tab[data-tab="${tabNumber}"]`);
  const contentNum = document.querySelector(`.content[data-tab="${tabNumber}"]`);

  allTabs.forEach((element) => {
    element.classList.remove("active");
  });

  allDivs.forEach((element) => {
    element.classList.remove("active");
  });

  tabNum.classList.add("active");
  contentNum.classList.add("active");

  const tabChange = new CustomEvent("tabChanged", { detail: tabNum.innerText });
  document.dispatchEvent(tabChange);
}

document.addEventListener("keydown", (e) => {
  if (e.key === "1") switchToTab(1);
  if (e.key === "2") switchToTab(2);
  if (e.key === "3") switchToTab(3);
});

document.addEventListener("tabChanged", function (e) {
  console.log(e.detail);
});
