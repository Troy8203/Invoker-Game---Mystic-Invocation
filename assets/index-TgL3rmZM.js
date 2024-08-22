(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function t(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(e){if(e.ep)return;e.ep=!0;const i=t(e);fetch(e.href,i)}})();const l=[{id:0,name:"Cold Snap",image:"https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/invoker_cold_snap.png",combination:"QQQ"},{id:1,name:"Ghost Walk",image:"https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/invoker_ghost_walk.png",combination:"QQW"},{id:2,name:"Ice Wall",image:"https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/invoker_ice_wall.png",combination:"QQE"},{id:3,name:"EMP",image:"https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/invoker_emp.png",combination:"WWW"},{id:4,name:"Tornado",image:"https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/invoker_tornado.png",combination:"QWW"},{id:5,name:"Alacrity",image:"https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/invoker_alacrity.png",combination:"WWE"},{id:6,name:"Sun Strike",image:"https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/invoker_sun_strike.png",combination:"EEE"},{id:7,name:"Forge Spirit",image:"https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/invoker_forge_spirit.png",combination:"QEE"},{id:8,name:"Chaos Meteor",image:"https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/invoker_chaos_meteor.png",combination:"WEE"},{id:9,name:"Deafening Blast",image:"https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/invoker_deafening_blast.png",combination:"QWE"}];document.addEventListener("keydown",function(n){switch(n.key.toLowerCase()){case"q":setBuff("quas");break;case"w":setBuff("wex");break;case"e":setBuff("exort");break;case"r":ultiBuff();break;case"d":castSpell(1);break;case"f":castSpell(2);break}});const m="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/invoker_quas.png",d="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/invoker_wex.png",u="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/invoker_exort.png",s=["","",""],c=["",""];window.playGame=function(){console.log("clicked");const o=document.querySelector(".controller img"),t=document.querySelector(".controller h4"),a=Math.floor(Math.random()*l.length),e=l[a];t.textContent=e.name,o.src=e.image};window.setBuff=function(o){const t=document.querySelector("#buff-item1 img"),a=document.querySelector("#buff-item2 img"),e=document.querySelector("#buff-item3 img");t.src=a.src,a.src=e.src,s.shift(),o==="quas"?(s.push("Q"),e.src=m):o==="wex"?(s.push("W"),e.src=d):o==="exort"&&(s.push("E"),e.src=u)};window.ultiBuff=function(){const o=document.querySelector("#power1 img"),t=document.querySelector("#power2 img"),a=p(s),e=l.find(i=>i.combination===a);o.src!==e.image&&(c.shift(),c.push(e),t.src=o.src,o.src=e.image)};window.castSpell=function(o){const t=document.querySelector(".controller h4"),a=document.querySelector(".score .span-score"),e=c[c.length-o];t.textContent!="Play"&&(e.name==t.textContent?(a.textContent=Number(a.textContent)+25,attempt(!0),playGame()):(a.textContent=Number(a.textContent)-10,attempt(!1)))};function p(n){return n.filter(t=>t==="Q").concat(n.filter(t=>t==="W"),n.filter(t=>t==="E")).join("")}function f(n){return new Promise(o=>setTimeout(o,n))}window.attempt=async function(o){let t=document.createElement("span");o?(t.textContent="+25",t.className="add-point success"):(t.textContent="-25",t.className="add-point fail");const a=document.querySelector(".score");a.appendChild(t),await f(4e3),a.removeChild(t)};
