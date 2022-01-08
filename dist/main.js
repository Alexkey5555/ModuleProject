(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),c=document.getElementById("timer-seconds"),a=document.querySelectorAll("#timer span"),n=document.createElement("span"),l=document.createElement("span");let r;l.textContent=" : ",n.textContent="00",n.id="timer-days",a[0].before(n),a[0].before(l);const s=()=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3;return{timeRemaining:t,days:Math.floor(t/60/60/24),hours:Math.floor(t/60/60%24),minutes:Math.floor(t/60%60),seconds:Math.floor(t%60)}};r=s();const i=()=>{let e=s();e.days<10?n.textContent="0"+e.days:n.textContent=e.days,e.hours<10?t.textContent="0"+e.hours:t.textContent=e.hours,e.minutes<10?o.textContent="0"+e.minutes:o.textContent=e.minutes,e.seconds<10?c.textContent="0"+e.seconds:c.textContent=e.seconds};r.timeRemaining>0&&(i(),setInterval(i,1e3))})("31 december 2021, 24:00"),(()=>{const e=document.querySelector("menu"),t=e.querySelectorAll("ul>li>a");document.addEventListener("click",(o=>{o.target.closest(".menu")||o.target.classList.contains("close-btn")?(o.preventDefault(),e.classList.toggle("active-menu")):o.target.classList.contains("active-menu")||e.classList.remove("active-menu"),o.target.closest('a[href="#service-block"]')&&(o.preventDefault(),document.getElementById("service-block").scrollIntoView({behavior:"smooth"})),t.forEach((t=>{if(o.target===t){o.preventDefault();let t=o.target.attributes.href.value.slice(1);document.getElementById(t).scrollIntoView({behavior:"smooth"}),e.classList.remove("active-menu")}}))}))})(),(()=>{const e=document.querySelector(".popup");let t;document.querySelectorAll(".popup-btn").forEach((o=>{o.addEventListener("click",(()=>{e.style.display="block",e.style.opacity="0";const o=()=>{const c=document.documentElement.scrollWidth;if(t=requestAnimationFrame(o),"1"===e.style.opacity)cancelAnimationFrame(t);else if(c<768)e.style.opacity="1";else{let t=+e.style.opacity;t+=.04,e.style.opacity=t}};o()}))})),e.addEventListener("click",(t=>{t.target.closest(".popup-content")&&!t.target.classList.contains("popup-close")||(e.style.display="none")}))})(),(()=>{const e=document.querySelectorAll(".calc-item"),t=document.querySelectorAll('input[type="text"], input[placeholder="Ваше сообщение"]'),o=document.querySelectorAll('input[type="email"]'),c=document.querySelectorAll('input[type="tel"]'),a=e=>{e.target.value=e.target.value.replace(/\D+/g,"")},n=e=>{e.target.value=e.target.value.replace(/[^а-яА-Я -]/g,"")},l=e=>{e.target.value=e.target.value.replace(/[^\w\@\-!.'*`]+/g,"")},r=e=>{e.target.value=e.target.value.replace(/[^\d\-\(\)]+/g,"")};e.forEach((e=>{e[0]||e.addEventListener("input",a)})),t.forEach((e=>{/calc-item/g.test(e.classList.value)||e.addEventListener("input",n)})),o.forEach((e=>{e.addEventListener("input",l)})),c.forEach((e=>{e.addEventListener("input",r)}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const c=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===c?(e.classList.add("active"),o[t].classList.remove("d-none")):(e.classList.remove("active"),o[t].classList.add("d-none"))}))}}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item");for(let e=0;e<t.length;e++){const t=document.querySelector(".portfolio-dots");let o=document.createElement("li");0==e?(o.classList.add("dot"),o.classList.add("dot-active")):o.classList.add("dot"),t.append(o)}const o=document.querySelectorAll(".dot");let c,a=0;const n=(e,t,o)=>{e[t].classList.remove(o)},l=(e,t,o)=>{e[t].classList.add(o)},r=()=>{n(t,a,"portfolio-item-active"),n(o,a,"dot-active"),a++,a>=t.length&&(a=0),l(t,a,"portfolio-item-active"),l(o,a,"dot-active")},s=()=>{c=setInterval(r,2e3)};e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(n(t,a,"portfolio-item-active"),n(o,a,"dot-active"),e.target.matches("#arrow-right")?a++:e.target.matches("#arrow-left")?a--:e.target.classList.contains("dot")&&o.forEach(((t,o)=>{e.target===t&&(a=o)})),a>=t.length&&(a=0),a<0&&(a=t.length-1),l(t,a,"portfolio-item-active"),l(o,a,"dot-active"))})),e.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(c)}),!0),e.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&s()}),!0),s()})(),((e=100)=>{const t=document.querySelector(".calc-block"),o=document.querySelector(".calc-type"),c=document.querySelector(".calc-square"),a=document.querySelector(".calc-count"),n=document.querySelector(".calc-day"),l=document.getElementById("total");t.addEventListener("input",(t=>{t.target!==o&&t.target!==c&&t.target!==a&&t.target!==n||(()=>{const t=+o.options[o.selectedIndex].value,r=c.value;let s=0,i=1,u=1;a.value>1&&(i+=+a.value/10),n.value&&n.value<5?u=2:n.value&&n.value<10&&(u=1.5),s=o.value&&c.value?e*t*r*i*u:0,l.textContent=s})()}))})(100)})();