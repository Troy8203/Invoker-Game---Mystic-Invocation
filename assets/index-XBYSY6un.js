(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();window.openInstruction=function(){document.querySelector(".modal-instructions").classList.add("modal-active")};window.openSettings=function(){console.log("clicked settings"),document.querySelector(".modal-settings").classList.add("modal-active")};window.closeModal=function(){document.querySelector(".modal-active").classList.remove("modal-active")};console.log("events.js loaded");const c=[{id:0,name:"Cold Snap",image:"https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/invoker_cold_snap.png",combination:"QQQ"},{id:1,name:"Ghost Walk",image:"https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/invoker_ghost_walk.png",combination:"QQW"},{id:2,name:"Ice Wall",image:"https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/invoker_ice_wall.png",combination:"QQE"},{id:3,name:"EMP",image:"https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/invoker_emp.png",combination:"WWW"},{id:4,name:"Tornado",image:"https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/invoker_tornado.png",combination:"QWW"},{id:5,name:"Alacrity",image:"https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/invoker_alacrity.png",combination:"WWE"},{id:6,name:"Sun Strike",image:"https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/invoker_sun_strike.png",combination:"EEE"},{id:7,name:"Forge Spirit",image:"https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/invoker_forge_spirit.png",combination:"QEE"},{id:8,name:"Chaos Meteor",image:"https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/invoker_chaos_meteor.png",combination:"WEE"},{id:9,name:"Deafening Blast",image:"https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/invoker_deafening_blast.png",combination:"QWE"}];function d(){const n=document.querySelector(".modal-container-spells");c.forEach(t=>{let o=document.createElement("div");o.classList.add("modal-spell");let a=document.createElement("img");a.src=t.image,a.alt=t.name,a.classList.add("modal-spell-img");let e=document.createElement("p");e.textContent=t.name,e.classList.add("modal-spell-name");let s=document.createElement("p");s.textContent=t.combination,s.classList.add("modal-spell-combination"),o.appendChild(a),o.appendChild(e),o.appendChild(s),n.appendChild(o)})}d();document.addEventListener("keydown",function(n){switch(n.key.toLowerCase()){case"q":setBuff("quas");break;case"w":setBuff("wex");break;case"e":setBuff("exort");break;case"r":ultiBuff();break;case"d":castSpell(1);break;case"f":castSpell(2);break}});const m="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/invoker_quas.png",p="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/invoker_wex.png",u="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/invoker_exort.png",i=["","",""],r=["",""];window.playGame=function(){console.log("clicked");const t=document.querySelector(".controller img"),o=document.querySelector(".controller h4"),a=Math.floor(Math.random()*c.length),e=c[a];o.textContent=e.name,t.src=e.image};window.setBuff=function(t){const o=document.querySelector("#buff-item1 img"),a=document.querySelector("#buff-item2 img"),e=document.querySelector("#buff-item3 img");o.src=a.src,a.src=e.src,i.shift(),t==="quas"?(i.push("Q"),e.src=m):t==="wex"?(i.push("W"),e.src=p):t==="exort"&&(i.push("E"),e.src=u)};window.ultiBuff=function(){const t=document.querySelector("#power1 img"),o=document.querySelector("#power2 img"),a=f(i),e=c.find(s=>s.combination===a);t.src!==e.image&&(r.shift(),r.push(e),o.src=t.src,t.src=e.image)};window.castSpell=function(t){const o=document.querySelector(".controller h4"),a=document.querySelector(".score .span-score"),e=r[r.length-t];o.textContent!="Play"&&(e.name==o.textContent?(a.textContent=Number(a.textContent)+25,attempt(!0),playGame()):(a.textContent=Number(a.textContent)-10,attempt(!1)))};function f(n){return n.filter(o=>o==="Q").concat(n.filter(o=>o==="W"),n.filter(o=>o==="E")).join("")}function g(n){return new Promise(t=>setTimeout(t,n))}window.attempt=async function(t){let o=document.createElement("span");t?(o.textContent="+25",o.className="add-point success"):(o.textContent="-25",o.className="add-point fail");const a=document.querySelector(".score");a.appendChild(o),await g(4e3),a.removeChild(o)};
