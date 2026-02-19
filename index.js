import{a as d,S as g,i as l}from"./assets/vendor-DQiTczw4.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const p="28315893-0fd806bb9dd4884845b8c425c",y="https://pixabay.com/api/";function h(s){return d(y,{params:{key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data.hits)}const n=document.querySelector(".gallery"),c=document.querySelector(".loader");let L=new g(".gallery a",{captionsData:"alt"});function b(s){const r=s.map(({webformatURL:a,largeImageURL:i,tags:e,likes:t,views:o,comments:m,downloads:f})=>`<li class="gallery-item">
  
        <a class="gallery-link" href="${i}">
        <img class="gallery-img" src="${a}" alt="${e}"/>
        </a>

       
        <ul class="gallery-socials-list">
            <li class="gallery-social-item"><span>Likes</span> ${t} </li>
            <li class="gallery-social-item"> <span>Views</span> ${o} </li>
            <li class="gallery-social-item"><span>Comments</span> ${m} </li>
            <li class="gallery-social-item"><span>Downloads</span> ${f} </li>
        </ul>

      </li>`).join("");n.innerHTML=r,L.refresh()}function S(){n.innerHTML=""}function w(){c.classList.add("loader")}function u(){c.classList.remove("loader")}const $=document.querySelector(".form");u();$.addEventListener("submit",q);function q(s){s.preventDefault();const r=s.target.elements["search-text"].value.trim();if(!r){l.warning({message:"Пустий рядок",position:"topRight"});return}S(),w(),h(r).then(a=>{a.length>0?b(a):l.show({message:"Sorry, there are no images matching <br> your search query. Please try again!",color:"#ef4040",position:"topRight",messageColor:"#fafafb"})}).catch(a=>{l.error({message:a.message,position:"topRight"})}).finally(()=>{u(),s.target.reset()})}
//# sourceMappingURL=index.js.map
