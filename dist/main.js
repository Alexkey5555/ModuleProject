(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds"),s=document.querySelectorAll("#timer span"),c=document.createElement("span"),l=document.createElement("span");let r;l.textContent=" : ",c.textContent="00",c.id="timer-days",s[0].before(c),s[0].before(l);const i=()=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3;return{timeRemaining:t,days:Math.floor(t/60/60/24),hours:Math.floor(t/60/60%24),minutes:Math.floor(t/60%60),seconds:Math.floor(t%60)}};r=i();const a=()=>{let e=i();e.days<10?c.textContent="0"+e.days:c.textContent=e.days,e.hours<10?t.textContent="0"+e.hours:t.textContent=e.hours,e.minutes<10?n.textContent="0"+e.minutes:n.textContent=e.minutes,e.seconds<10?o.textContent="0"+e.seconds:o.textContent=e.seconds};r.timeRemaining>0&&(a(),setInterval(a,1e3))})("31 december 2021"),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=t.querySelector(".close-btn"),o=t.querySelectorAll("ul>li>a"),s=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",s),n.addEventListener("click",s),o.forEach((e=>e.addEventListener("click",s)))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),n=e.querySelector(".popup-close"),o=document.documentElement.scrollWidth;e.style.opacity="0",t.forEach((t=>{t.addEventListener("click",(()=>{e.style.display="block";let t=setInterval((()=>{if("1"===e.style.opacity)clearInterval(t);else if(o<768)e.style.opacity="1";else{let t=+e.style.opacity;t+=.1,e.style.opacity=t}}),80)})),n.addEventListener("click",(()=>{e.style.display="none",e.style.opacity="0"}))}))})()})();