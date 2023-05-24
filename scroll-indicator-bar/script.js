window.addEventListener("scroll", () => {
  const indicatorBar = document.querySelector(".scroll-indicator-bar");
  
  const pageScroll = document.body.scrollTop || document.documentElement.scrollTop;

  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  const scrollValue = (pageScroll / height) * 100;
  indicatorBar.style.width = scrollValue + "%";
});


const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
  navigation.classList.add("active");

});

closeBtn.addEventListener("click", () => {
  navigation.classList.remove("active");

});
