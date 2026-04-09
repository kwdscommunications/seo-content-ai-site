document.addEventListener("DOMContentLoaded",()=>{
  const btn=document.querySelector("[data-nav-toggle]");
  const nav=document.querySelector("[data-site-nav]");
  if(btn&&nav){btn.addEventListener("click",()=>{const open=nav.classList.toggle("open");btn.setAttribute("aria-expanded",open?"true":"false");});}
  document.querySelectorAll("[data-year]").forEach(n=>n.textContent=String(new Date().getFullYear()));
});
